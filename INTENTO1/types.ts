
export enum AppView {
  HOME = 'inicio',
  SERVICES = 'servicios',
  BOOKING = 'agendar',
  CONTACT = 'contacto',
  PROFILE = 'perfil'
}

export enum Language {
  ES = 'es',
  EN = 'en'
}

export interface Specialty {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  icon: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
