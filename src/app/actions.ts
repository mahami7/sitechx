'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function submitContactForm(prevState: State, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to send message.',
      success: false,
    };
  }
  
  const { name, email, phone, message } = validatedFields.data;

  try {
    // 1. Save message to Firestore (initialize on demand)
    const { db } = await import('@/lib/firebase');
    const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');

    await addDoc(collection(db, 'messages'), {
      name,
      email,
      phone,
      message,
      createdAt: serverTimestamp(),
    });

    // 2. Send email notification via Resend (initialize on demand)
    if (!process.env.RESEND_API_KEY || !process.env.RECIPIENT_EMAIL) {
      console.error('Resend environment variables are not set.');
      throw new Error('Server is not configured to send emails.');
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This is a default for testing, you'll need a verified domain for production
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      reply_to: email,
      html: `
        <h1>New message from your Sitechx contact form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { message: 'Thank you for your message! We will get back to you soon.', success: true, errors: {} };
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    const errorMessage = error instanceof Error ? error.message : 'An internal error occurred.';
    return { message: `${errorMessage} Failed to send message.`, success: false, errors: {} };
  }
}
