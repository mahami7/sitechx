'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

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
  
  try {
    const { name, email, phone, message } = validatedFields.data;
    await addDoc(collection(db, 'messages'), {
      name,
      email,
      phone,
      message,
      createdAt: serverTimestamp(),
    });
    return { message: 'Thank you for your message! We will get back to you soon.', success: true, errors: {} };
  } catch (e) {
    console.error('Error adding document: ', e);
    return { message: 'Database Error: Failed to send message.', success: false, errors: {} };
  }
}
