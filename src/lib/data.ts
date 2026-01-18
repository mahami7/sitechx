import type { Service } from './definitions';
import {
  Smartphone,
  ShieldCheck,
  Network,
  Cpu,
  AirVent,
  Flame,
  Sun,
} from 'lucide-react';

export const services: Service[] = [
  {
    title: 'Smart Control & Automation',
    description: 'Centralized control of lighting, climate, and appliances with remote access and personalized automation scenarios.',
    icon: Smartphone,
  },
  {
    title: 'Smart Security & Surveillance',
    description: 'Integrated security systems with 4K cameras, remote monitoring, and instant alerts for total peace of mind.',
    icon: ShieldCheck,
  },
  {
    title: 'Networks & IP Telephony',
    description: 'Reliable, high-speed connectivity with structured cabling, professional server solutions, and modern IP telephony.',
    icon: Network,
  },
  {
    title: 'Digital Solutions & Technology Services',
    description: 'Custom digital platforms, e-commerce solutions, app development, and UI/UX design to elevate your business.',
    icon: Cpu,
  },
  {
    title: 'HVAC',
    description: 'Precision heating, ventilation, and air conditioning solutions for optimal comfort and energy efficiency.',
    icon: AirVent,
  },
  {
    title: 'Precision Fire Protection',
    description: 'Advanced fire detection and suppression systems that protect critical assets without causing damage or downtime.',
    icon: Flame,
  },
  {
    title: 'Solar Power Systems & Energy Optimization',
    description: 'Sustainable solar energy solutions and optimization strategies to reduce costs and environmental impact.',
    icon: Sun,
  },
];
