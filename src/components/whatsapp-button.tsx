'use client';

import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp';

interface WhatsappButtonProps extends ButtonProps {
  dictionary: {
    chat: string;
    message: string;
  };
}

export default function WhatsappButton({ dictionary, ...props }: WhatsappButtonProps) {
  // The old pages might not pass a dictionary. This prevents a crash.
  if (!dictionary) {
    return (
      <Button {...props} disabled>
        <WhatsappIcon className="mr-2 h-5 w-5" />
      </Button>
    );
  }

  const whatsappNumber = '25377871225';
  const message = encodeURIComponent(dictionary.message);
  
  return (
    <Button asChild {...props}>
      <Link href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon className="mr-2 h-5 w-5" />
        {dictionary.chat}
      </Link>
    </Button>
  );
}
