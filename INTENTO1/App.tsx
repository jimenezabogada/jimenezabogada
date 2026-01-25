
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { SpecialtiesGrid } from './components/SpecialtiesGrid';
import { ProfileCTA } from './components/ProfileCTA';
import { BottomNav } from './components/BottomNav';
import { AIChat } from './components/AIChat';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AppView, Language } from './types';
import { UI_STRINGS, LAWYER_DATA, SPECIALTIES, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [language, setLanguage] = useState<Language>(Language.ES);
  const mainContentRef = useRef<HTMLElement>(null);

  // Smooth scroll to top and manage focus when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Focus the main content for screen readers when the view changes
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case AppView.HOME:
        return (
          <>
            <Hero language={language} />
            <TrustBadges language={language} />
            <SpecialtiesGrid language={language} />
            <ProfileCTA language={language} onViewChange={setCurrentView} />
          </>
        );
      case AppView.SERVICES:
        return (
          <div className="p-4 sm:p-8 animate-fade-in max-w-5xl mx-auto pb-48">
            <div className="text-center mb-12">
              <span className="material-symbols-outlined text-6xl text-accent mb-4" aria-hidden="true">balance</span>
              <h2 className="text-4xl font-extrabold text-primary dark:text-white mb-4">{UI_STRINGS[language].navServices}</h2>
              <p className="text-primary/60 dark:text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                {language === Language.ES 
                  ? "Asesoramiento jurídico riguroso avalado por más de 25 años de experiencia técnica."
                  : "Rigorous legal advice backed by more than 25 years of technical experience."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-10">
              {SPECIALTIES.map((spec, idx) => (
                <section key={spec.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center bg-white dark:bg-white/5 p-8 rounded-3xl border border-primary/5 shadow-xl hover:shadow-2xl transition-all`} aria-labelledby={`spec-title-${spec.id}`}>
                  <div className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-2xl shadow-lg relative group">
                    <img src={spec.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="size-14 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent text-3xl" aria-hidden="true">{spec.icon}</span>
                      </div>
                      <h3 id={`spec-title-${spec.id}`} className="text-3xl font-bold text-primary dark:text-white">{spec.title[language]}</h3>
                    </div>
                    <p className="text-primary/70 dark:text-white/70 text-xl leading-relaxed font-light">
                      {spec.description[language]}
                    </p>
                    <button 
                      onClick={() => {
                        const subject = language === Language.ES ? `Consulta: ${spec.title.es}` : `Inquiry: ${spec.title.en}`;
                        window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}`;
                      }}
                      className="self-start mt-4 px-8 py-3 bg-primary dark:bg-accent text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all shadow-lg focus:ring-2 focus:ring-accent outline-none"
                    >
                      {language === Language.ES ? "Consultar ahora" : "Consult now"}
                    </button>
                  </div>
                </section>
              ))}
            </div>
          </div>
        );
      case AppView.BOOKING:
        return (
          <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in pb-48">
            <span className="material-symbols-outlined text-6xl text-accent mb-4" aria-hidden="true">calendar_month</span>
            <h2 className="text-3xl font-bold mb-2">{UI_STRINGS[language].navBooking}</h2>
            <p className="text-primary/60 dark:text-white/60 max-w-md">
              {language === Language.ES 
                ? "Agenda una cita privada en nuestro despacho de Benalmádena."
                : "Schedule a private appointment at our Benalmádena office."}
            </p>
            <button 
              onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}
              className="mt-8 px-8 h-14 bg-primary dark:bg-accent text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg focus:ring-2 focus:ring-accent outline-none"
            >
              {language === Language.ES ? "Solicitar Fecha" : "Request Date"}
            </button>
          </div>
        );
      case AppView.CONTACT:
        return (
          <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in max-w-3xl mx-auto pb-48">
            <span className="material-symbols-outlined text-6xl text-accent mb-4" aria-hidden="true">alternate_email</span>
            <h2 className="text-3xl font-bold mb-2">{UI_STRINGS[language].navContact}</h2>
            <div className="flex flex-col gap-8 mt-8 w-full">
              <div className="flex flex-col gap-2">
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-2xl text-primary dark:text-white font-semibold hover:text-accent transition-colors underline underline-offset-8 decoration-accent/30 focus:outline-accent">{CONTACT_INFO.email}</a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl text-primary/60 dark:text-white/60 focus:outline-accent">{CONTACT_INFO.phone}</a>
              </div>
              
              <address className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-primary/10 shadow-sm text-center flex flex-col items-center gap-4 not-italic">
                <div className="size-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent" aria-hidden="true">pin_drop</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-primary/40 dark:text-white/40 text-xs uppercase tracking-widest font-bold">Dirección del Despacho</p>
                  <p className="text-lg font-medium leading-relaxed">{CONTACT_INFO.fullAddress}</p>
                </div>
                <button 
                  onClick={() => window.open(CONTACT_INFO.mapsUrl, '_blank')}
                  className="mt-2 flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs hover:underline focus:outline-accent"
                  aria-label={language === Language.ES ? "Abrir ubicación en Google Maps" : "Open location in Google Maps"}
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">map</span>
                  {language === Language.ES ? "Ver en Google Maps" : "View on Google Maps"}
                </button>
              </address>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}
                  className="bg-[#25D366] text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:brightness-110 transition-all focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 outline-none"
                >
                  Contactar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        );
      case AppView.PROFILE:
        return (
          <article className="p-6 sm:p-12 animate-fade-in max-w-4xl mx-auto pb-48">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 relative group">
                  <img src={LAWYER_DATA.image} alt={LAWYER_DATA.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary/60 dark:text-white/60">
                    <span className="material-symbols-outlined text-accent" aria-hidden="true">verified_user</span>
                    <span className="text-sm font-bold uppercase tracking-tight">{CONTACT_INFO.colegiada}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary/60 dark:text-white/60">
                    <span className="material-symbols-outlined text-accent" aria-hidden="true">location_on</span>
                    <span className="text-sm font-bold uppercase tracking-tight">{CONTACT_INFO.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <h2 className="text-4xl font-extrabold text-primary dark:text-white mb-2">{LAWYER_DATA.name}</h2>
                  <p className="text-accent text-lg font-bold uppercase tracking-widest">{LAWYER_DATA[language].role}</p>
                </div>
                <div className="h-1 w-20 bg-accent rounded-full" aria-hidden="true"></div>
                <div className="flex flex-col gap-6">
                  <div className="space-y-4">
                    <p className="text-primary/80 dark:text-white/80 text-lg leading-relaxed font-medium italic">
                      {LAWYER_DATA[language].bio}
                    </p>
                    <p className="text-primary/70 dark:text-white/70 text-base leading-relaxed">
                      {LAWYER_DATA[language].education}
                    </p>
                    <div className="flex flex-col gap-1">
                      <p className="text-accent font-bold">
                        {LAWYER_DATA[language].locationInfo}
                      </p>
                      <p className="text-primary/50 text-sm">{CONTACT_INFO.fullAddress}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
                    <p className="text-accent font-bold text-2xl">1997</p>
                    <p className="text-[10px] uppercase font-bold tracking-tighter opacity-50">Año de Colegiación</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
                    <p className="text-accent font-bold text-2xl">25+</p>
                    <p className="text-[10px] uppercase font-bold tracking-tighter opacity-50">Años de Experiencia</p>
                  </div>
                </div>
                
                {/* Sección de Trayectoria ajustada con mb-12 para garantizar visibilidad total */}
                <section className="mt-4 mb-12 p-6 bg-accent/5 rounded-2xl border border-accent/10">
                  <h3 className="text-xs font-bold uppercase text-accent tracking-widest mb-2">Trayectoria</h3>
                  <p className="text-sm leading-relaxed text-primary/70 dark:text-white/70">
                    {language === Language.ES 
                      ? "Inicios profesionales con Kurt Tofterup S.L. Consolidada como abogada independiente desde 2020."
                      : "Professional beginnings with Kurt Tofterup S.L. Established as an independent lawyer since 2020."}
                  </p>
                </section>
                
                {/* Espaciador final para evitar solapamiento con la BottomNav en móviles */}
                <div className="h-20 w-full" aria-hidden="true"></div>
              </div>
            </div>
          </article>
        );
      default:
        return <Hero language={language} />;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark transition-colors duration-500">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main 
        id="main-content" 
        ref={mainContentRef} 
        tabIndex={-1} 
        className="flex-1 max-w-7xl mx-auto w-full outline-none"
      >
        {renderContent()}
      </main>
      
      <WhatsAppButton language={language} />
      <AIChat language={language} />

      <BottomNav currentView={currentView} onViewChange={setCurrentView} language={language} />
    </div>
  );
};

export default App;
