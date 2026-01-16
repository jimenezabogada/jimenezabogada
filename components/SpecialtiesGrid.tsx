
import React from 'react';
import { SPECIALTIES, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface SpecialtiesGridProps {
  language: Language;
}

export const SpecialtiesGrid: React.FC<SpecialtiesGridProps> = ({ language }) => {
  const strings = UI_STRINGS[language];

  return (
    <section className="py-4">
      <div className="px-4 pb-6">
        <h3 className="text-primary dark:text-white text-2xl font-bold leading-tight tracking-tight">{strings.specialtiesTitle}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {SPECIALTIES.map((spec) => {
          return (
            <div key={spec.id} className="group flex flex-col gap-5 bg-white dark:bg-background-dark p-4 rounded-2xl border border-[#e0e1e1] dark:border-white/10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-xl overflow-hidden relative">
                <img 
                  src={spec.image} 
                  alt={spec.title[language]} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-accent text-[22px]">{spec.icon}</span>
                  <p className="text-primary dark:text-white text-lg font-bold">{spec.title[language]}</p>
                </div>
                <p className="text-primary/60 dark:text-white/60 text-sm leading-relaxed font-light">
                  {spec.description[language]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
