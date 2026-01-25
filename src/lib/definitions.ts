import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  key: string;
};

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};
