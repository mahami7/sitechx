'use client';

import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp';

interface WhatsappButtonProps extends ButtonProps {
  dictionary?: {
    chat: string;
    message: string;
  };
}

const defaultDictionary = {
  chat: "Chat on WhatsApp",
  message: "Hello! I'm interested in your services and would like to learn more."
};


export default function WhatsappButton({ dictionary, ...props }: WhatsappButtonProps) {
  const t = dictionary || defaultDictionary;
  const whatsappNumber = '25377871225';
  const message = encodeURIComponent(t.message);
  
  return (
    <Button asChild {...props}>
      <Link href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon className="mr-2 h-5 w-5" />
        {t.chat}
      </Link>
    </Button>
  );
}
