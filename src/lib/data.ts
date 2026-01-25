import {
  Smartphone,
  ShieldCheck,
  Network,
  Cpu,
  AirVent,
  Flame,
  Sun,
} from 'lucide-react';
import en from '@/dictionaries/en.json';
import type { Service } from './definitions';

export const servicesData = [
  {
    key: 'smartControl',
    icon: Smartphone,
  },
  {
    key: 'smartSecurity',
    icon: ShieldCheck,
  },
  {
    key: 'networks',
    icon: Network,
  },
  {
    key: 'digitalSolutions',
    icon: Cpu,
  },
  {
    key: 'hvac',
    icon: AirVent,
  },
  {
    key: 'fireProtection',
    icon: Flame,
  },
  {
    key: 'solarPower',
    icon: Sun,
  },
];

const enServices: Record<string, { title: string; description: string }> = en.services;

export const services: Service[] = servicesData.map(service => ({
  title: enServices[service.key].title,
  description: enServices[service.key].description,
  icon: service.icon,
  key: service.key,
}));
