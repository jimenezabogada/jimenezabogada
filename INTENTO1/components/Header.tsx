
import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white/95 dark:bg-background-dark/95 backdrop-blur-md p-4 justify-between border-b border-[#e0e1e1] dark:border-white/10">
      <div className="flex items-center gap-3">
        <div className="text-primary dark:text-accent flex size-10 shrink-0 items-center justify-center bg-primary/5 dark:bg-accent/10 rounded-lg">
          <span className="material-symbols-outlined text-[28px]" aria-hidden="true">gavel</span>
        </div>
        <h1 className="text-primary dark:text-white text-lg font-extrabold leading-tight tracking-widest uppercase">
          Jimenez <span className="text-accent">Abogada</span>
        </h1>
      </div>
      <nav className="flex items-center gap-4" aria-label="Selección de idioma">
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest">
          <button 
            type="button"
            onClick={() => onLanguageChange(Language.ES)}
            className={`${language === Language.ES ? 'text-accent border-b-2 border-accent' : 'text-primary/50 dark:text-white/50'} cursor-pointer transition-all px-1 focus:outline-accent`}
            aria-current={language === Language.ES ? 'true' : 'false'}
            aria-label="Seleccionar idioma español"
          >
            ES
          </button>
          <span className="text-primary/30 dark:text-white/30" aria-hidden="true">|</span>
          <button 
            type="button"
            onClick={() => onLanguageChange(Language.EN)}
            className={`${language === Language.EN ? 'text-accent border-b-2 border-accent' : 'text-primary/50 dark:text-white/50'} cursor-pointer transition-all px-1 focus:outline-accent`}
            aria-current={language === Language.EN ? 'true' : 'false'}
            aria-label="Select English language"
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
};
