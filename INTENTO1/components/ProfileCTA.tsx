
import React from 'react';
import { AppView, Language } from '../types';
import { UI_STRINGS, LAWYER_DATA } from '../constants';

interface ProfileCTAProps {
  language: Language;
  onViewChange: (view: AppView) => void;
}

export const ProfileCTA: React.FC<ProfileCTAProps> = ({ language, onViewChange }) => {
  const strings = UI_STRINGS[language];
  return (
    <div className="p-4 mt-6 mb-24">
      <div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl border-l-8 border-accent bg-primary dark:bg-primary/20 p-8 relative overflow-visible shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        
        <div className="relative shrink-0 group">
          <div className="absolute inset-0 bg-accent rounded-full scale-105 opacity-20 blur-lg group-hover:scale-110 transition-transform"></div>
          <div className="relative size-32 sm:size-40 overflow-hidden rounded-full border-2 border-accent">
            <img 
              src={LAWYER_DATA.image} 
              alt={LAWYER_DATA.name} 
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 relative z-10 text-center md:text-left">
          <p className="text-accent text-sm font-bold uppercase tracking-widest">{LAWYER_DATA[language].role}</p>
          <p className="text-white text-2xl font-bold leading-tight">{strings.ctaTitle}</p>
          <p className="text-white/70 text-base font-light leading-relaxed max-w-md">
            {strings.ctaDesc}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <button 
              onClick={() => onViewChange(AppView.PROFILE)}
              className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary text-sm font-bold uppercase tracking-widest transition-all hover:bg-accent hover:text-white active:scale-95 shadow-lg"
            >
              <span>{strings.ctaButton}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
