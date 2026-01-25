'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useActionState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Send } from 'lucide-react';

function SubmitButton({ dictionary }: { dictionary: any }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {dictionary.submitButtonSending}
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          {dictionary.submitButton}
        </>
      )}
    </Button>
  );
}

const defaultDictionary = {
  nameLabel: "Full Name",
  namePlaceholder: "John Doe",
  emailLabel: "Email Address",
  emailPlaceholder: "john.doe@example.com",
  phoneLabel: "Phone Number (Optional)",
  phonePlaceholder: "(123) 456-7890",
  messageLabel: "Message",
  messagePlaceholder: "How can we help you today?",
  submitButton: "Send Message",
  submitButtonSending: "Sending..."
};

export default function ContactForm({ dictionary }: { dictionary?: any }) {
  const t = dictionary || defaultDictionary;
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Message Sent!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{t.nameLabel}</Label>
        <Input id="name" name="name" placeholder={t.namePlaceholder} required />
        {state.errors?.name && (
          <p className="text-sm font-medium text-destructive">{state.errors.name}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t.emailLabel}</Label>
        <Input id="email" name="email" type="email" placeholder={t.emailPlaceholder} required />
         {state.errors?.email && (
          <p className="text-sm font-medium text-destructive">{state.errors.email}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">{t.phoneLabel}</Label>
        <Input id="phone" name="phone" type="tel" placeholder={t.phonePlaceholder} />
         {state.errors?.phone && (
          <p className="text-sm font-medium text-destructive">{state.errors.phone}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t.messageLabel}</Label>
        <Textarea id="message" name="message" placeholder={t.messagePlaceholder} required minLength={10} />
        {state.errors?.message && (
          <p className="text-sm font-medium text-destructive">{state.errors.message}</p>
        )}
      </div>
      <SubmitButton dictionary={t} />
    </form>
  );
}
