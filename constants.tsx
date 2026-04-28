import React from 'react';
import { 
  Database, 
  Layout, 
  Server, 
  Code, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { Project, Experience, SkillCategory, SocialLink } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6 text-accent-400" />,
    skills: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    title: 'API Integration',
    icon: <Terminal className="w-6 h-6 text-accent-400" />,
    skills: ['RESTful APIs', 'GraphQL', 'OAuth 2.0', 'Webhooks', 'Stripe Integration', 'Celery']
  },
  {
    title: 'Product Design',
    icon: <Layout className="w-6 h-6 text-accent-400" />,
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Accessibility']
  },
  {
    title: 'Frontend Development',
    icon: <Code className="w-6 h-6 text-accent-400" />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion', 'Responsive Design']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'FinTrack Dashboard',
    description: 'A financial analytics dashboard for small businesses. Features real-time data visualization using D3.js and a robust Flask backend for secure transaction processing.',
    tags: ['Flask', 'React', 'D3.js', 'PostgreSQL', 'Figma'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    githubUrl: 'https://github.com/tysonmwangi',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'TaskFlow API',
    description: 'A high-performance REST API for a project management tool. Implemented complex permission systems, websocket notifications, and comprehensive documentation.',
    tags: ['Python', 'Flask', 'WebSockets', 'Redis', 'Docker'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    githubUrl: 'https://github.com/tysonmwangi',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'EcoMarketplace Design',
    description: 'Complete UX/UI design for a sustainable e-commerce platform. Created a modular design system and interactive prototypes focusing on accessibility.',
    tags: ['Product Design', 'Figma', 'Design Systems', 'Prototyping'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    githubUrl: 'https://github.com/tysonmwangi',
    liveUrl: '#'
  },
  {
    id: 4,
    title: 'HealthSync Mobile',
    description: 'Cross-platform mobile app architecture for patient monitoring. Designed the interface and built the secure API endpoints for health data synchronization.',
    tags: ['Mobile Design', 'API Architecture', 'Python', 'Security'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    githubUrl: 'https://github.com/tysonmwangi',
    liveUrl: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: 'Lead Product Engineer',
    company: 'InnovateTech',
    period: '2022 - Present',
    description: 'Spearheading the development of core products and bridging the gap between design and engineering.',
    highlights: [
      'Led the migration of a monolithic legacy system to a microservices architecture using Flask and Docker.',
      'Developed and maintained a company-wide Design System, improving UI consistency and reducing dev time by 30%.',
      'Mentored a team of 5 developers in Python best practices and API design patterns.'
    ]
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'DataSphere Solutions',
    period: '2020 - 2022',
    description: 'Focused on building scalable web applications and data visualization tools.',
    highlights: [
      'Built and deployed 15+ custom APIs for enterprise clients using Python and Flask.',
      'Collaborated with data scientists to visualize complex datasets using React and D3.js.',
      'Implemented CI/CD pipelines reducing deployment time by 50%.'
    ]
  },
  {
    id: 3,
    role: 'UI/UX Designer',
    company: 'Creative Pulse',
    period: '2018 - 2020',
    description: 'Designed intuitive user interfaces for web and mobile applications.',
    highlights: [
      'Conducted user research and usability testing to inform design decisions.',
      'Created high-fidelity wireframes and prototypes using Figma and Adobe XD.',
      'Worked closely with developers to ensure accurate implementation of designs.'
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/tysonmwangi', icon: <Github className="w-5 h-5" /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tysonmwangi', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Email', url: 'mailto:tjmwa94@gmail.com', icon: <Mail className="w-5 h-5" /> },
];

export const TECH_MARQUEE = [
  'Python', 'Flask', 'API Design', 'Figma', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'UI/UX', 'System Architecture', 'Redis', 'Tailwind'
];