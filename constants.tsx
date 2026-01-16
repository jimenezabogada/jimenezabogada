
import { Specialty, Language } from './types';

export const CONTACT_INFO = {
  email: "info@jimenezabogada.com",
  whatsapp: "34600000000",
  phone: "+34 952 000 000",
  location: "Benalmádena, Málaga",
  fullAddress: "Avda. Juan Luis Peralta núm. 11, 29631 Benalmádena (Málaga)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avda.+Juan+Luis+Peralta+11+Benalmádena+Málaga",
  colegiada: "Málaga (No. 4421)",
  messageES: "Hola Maria José, me gustaría solicitar una consulta legal.",
  messageEN: "Hello Maria José, I would like to request a legal consultation."
};

export const LAWYER_DATA = {
  name: "Maria José Jimenez",
  image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=800",
  es: {
    role: "Abogada Colegiada No. 4421",
    bio: "Profesional con más de 25 años en el ejercicio jurídico. Ejerciente desde 1997 y de manera independiente desde 2020. Inició su trayectoria con la prestigiosa firma danesa Kurt Tofterup S.L., consolidando una sólida experiencia en asesoramiento nacional e internacional.",
    education: "Colegiada en el Ilustre Colegio de Abogados de Málaga. Especialista en Derecho de Familia, Herencias, Gestión Patrimonial y Litigación Civil.",
    locationInfo: "Ubicada en Benalmádena, ofreciendo servicios en toda la Costa del Sol."
  },
  en: {
    role: "Registered Lawyer No. 4421",
    bio: "Legal professional with over 25 years of practice. Practicing since 1997 and independently since 2020. She began her career with the prestigious Danish firm Kurt Tofterup S.L., building solid experience in national and international legal advice.",
    education: "Member of the Malaga Bar Association. Specialist in Family Law, Inheritances, Wealth Management, and Civil Litigation.",
    locationInfo: "Located in Benalmádena, serving the entire Costa del Sol."
  }
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'familia',
    title: { es: 'Derecho de Familia', en: 'Family Law' },
    description: { 
      es: 'Divorcios, custodias, pensiones alimenticias y mediación familiar. Gestión empática y profesional de situaciones complejas.',
      en: 'Divorce, custody, alimony, and family mediation. Empathetic and professional management of complex situations.' 
    },
    icon: 'diversity_1',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'herencias',
    title: { es: 'Herencias y Sucesiones', en: 'Inheritances' },
    description: { 
      es: 'Tramitación completa de herencias, testamentos, particiones y asesoramiento fiscal sucesorio para residentes y no residentes.',
      en: 'Complete processing of inheritances, wills, partitions, and inheritance tax advice for residents and non-residents.' 
    },
    icon: 'account_balance_wallet',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'compraventas',
    title: { es: 'Compraventas', en: 'Conveyancing' },
    description: { 
      es: 'Asesoramiento integral en transacciones inmobiliarias. Verificación registral, contratos y gestión documental completa.',
      en: 'Comprehensive advice on real estate transactions. Registry verification, contracts, and complete document management.' 
    },
    icon: 'home_work',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'deshaucios',
    title: { es: 'Desahucios', en: 'Evictions' },
    description: { 
      es: 'Especialista en procesos de recuperación de posesión, impagos de rentas y defensa de los derechos de propiedad.',
      en: 'Specialist in possession recovery processes, non-payment of rent, and defense of property rights.' 
    },
    icon: 'gavel',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800'
  }
];

export const TRUST_BADGES = {
  es: [
    { icon: 'verified', label: 'Desde 1997 en Ejercicio' },
    { icon: 'location_on', label: 'Sede en Benalmádena' }
  ],
  en: [
    { icon: 'verified', label: 'Practicing since 1997' },
    { icon: 'location_on', label: 'Based in Benalmádena' }
  ]
};

export const UI_STRINGS = {
  es: {
    heroTitle: 'Más de 25 años de Excelencia Jurídica',
    heroDesc: 'Maria José Jimenez, abogada ejerciente desde 1997. Especialista en Derecho de Familia y transacciones patrimoniales en la Costa del Sol.',
    heroCTA: 'Solicitar Consulta',
    specialtiesTitle: 'Servicios Especializados',
    ctaTitle: 'Compromiso e Independencia',
    ctaDesc: 'Desde 2020, Maria José Jimenez lidera su propio despacho ofreciendo un trato directo y personalizado.',
    ctaButton: 'Conocer Trayectoria',
    navHome: 'Inicio',
    navServices: 'Servicios',
    navBooking: 'Agendar',
    navContact: 'Contacto',
    navProfile: 'Maria José',
    chatWelcome: 'Hola, soy el asistente virtual de Maria José Jimenez. ¿En qué puedo orientarle hoy sobre su caso?',
    chatInput: 'Escriba su consulta...',
    chatStatus: 'En línea',
    chatAgent: 'Asistente Maria José'
  },
  en: {
    heroTitle: 'Over 25 Years of Legal Excellence',
    heroDesc: 'Maria José Jimenez, practicing lawyer since 1997. Specialist in Family Law and wealth transactions in Costa del Sol.',
    heroCTA: 'Request Consultation',
    specialtiesTitle: 'Specialized Services',
    ctaTitle: 'Commitment & Independence',
    ctaDesc: 'Since 2020, Maria José Jimenez has led her own firm offering direct and personalized attention.',
    ctaButton: 'Professional Background',
    navHome: 'Home',
    navServices: 'Services',
    navBooking: 'Booking',
    navContact: 'Contact',
    navProfile: 'Maria José',
    chatWelcome: 'Hello, I am the virtual assistant for Maria José Jimenez. How can I guide you today regarding your case?',
    chatInput: 'Type your inquiry...',
    chatStatus: 'Online',
    chatAgent: 'Assistant Maria José'
  }
};
