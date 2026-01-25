
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS, CONTACT_INFO } from '../constants';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  
  const handleEmailClick = () => {
    const subject = language === Language.ES ? "Consulta Legal" : "Legal Inquiry";
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="@container p-0 sm:p-4">
      <div 
        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 sm:rounded-2xl items-start justify-end px-6 pb-12 @[480px]:px-12 relative overflow-hidden transition-all duration-700 hover:brightness-105 shadow-2xl" 
        style={{
          backgroundImage: `linear-gradient(rgba(26, 37, 51, 0.5) 0%, rgba(15, 20, 25, 0.95) 100%), url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000")`
        }}
      >
        <div className="flex flex-col gap-3 text-left max-w-2xl relative z-10">
          <div className="h-1.5 w-16 bg-accent rounded-full mb-2"></div>
          <h2 className="text-white text-4xl font-extrabold leading-tight tracking-tight @[480px]:text-6xl animate-fade-in-up">
            {strings.heroTitle}
          </h2>
          <p className="text-white/80 text-base font-light leading-relaxed @[480px]:text-lg max-w-md animate-fade-in-up [animation-delay:0.2s]">
            {strings.heroDesc}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full @[480px]:w-auto relative z-10 mt-4 animate-fade-in-up [animation-delay:0.4s]">
          <button 
            onClick={handleEmailClick}
            className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-accent text-white text-base font-bold transition-all hover:bg-accent/90 active:scale-95 shadow-lg shadow-accent/20"
          >
            <span>{strings.heroCTA}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
