import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};
