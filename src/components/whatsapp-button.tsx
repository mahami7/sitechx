'use client'

import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/icons/whatsapp';
import { Locale, getDictionary } from '@/lib/i18n';
import { useEffect, useState } from 'react';

interface WhatsappButtonProps extends ButtonProps {
  lang: Locale;
}

export default function WhatsappButton({ lang, ...props }: WhatsappButtonProps) {
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(lang);
      setDictionary(dict.whatsappButton);
    };
    fetchDictionary();
  }, [lang]);
  
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
