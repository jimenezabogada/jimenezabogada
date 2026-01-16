
import React from 'react';
import { AppView, Language } from '../types';
import { UI_STRINGS } from '../constants';

interface BottomNavProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  language: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onViewChange, language }) => {
  const strings = UI_STRINGS[language];
  const items = [
    { view: AppView.SERVICES, icon: 'balance', label: strings.navServices },
    { view: AppView.BOOKING, icon: 'calendar_month', label: strings.navBooking },
    { view: AppView.HOME, icon: 'gavel', label: strings.navHome, isFAB: true },
    { view: AppView.CONTACT, icon: 'forum', label: strings.navContact },
    { view: AppView.PROFILE, icon: 'person', label: strings.navProfile },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-24 items-center justify-around bg-white/95 dark:bg-background-dark/95 border-t border-[#e0e1e1] dark:border-white/10 px-4 pb-4 backdrop-blur-xl" aria-label="Navegación principal">
      {items.map((item) => {
        const isActive = currentView === item.view;
        
        if (item.isFAB) {
          return (
            <button
              key={item.view}
              type="button"
              onClick={() => onViewChange(item.view)}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-1 -mt-10 rounded-full p-4 shadow-xl ring-4 ring-white dark:ring-background-dark transition-all hover:scale-110 active:scale-95 focus:outline-accent focus:ring-offset-2 ${
                isActive 
                ? 'bg-accent text-white shadow-accent/40 scale-105' 
                : 'bg-primary dark:bg-primary/80 text-white shadow-primary/30'
              }`}
            >
              <span className="material-symbols-outlined text-[32px]" aria-hidden="true">{item.icon}</span>
            </button>
          );
        }

        return (
          <button
            key={item.view}
            type="button"
            onClick={() => onViewChange(item.view)}
            aria-current={isActive ? 'page' : undefined}
            className={`flex flex-col items-center justify-center gap-1.5 transition-all duration-300 min-w-[64px] focus:outline-accent rounded-lg p-1 ${
              isActive ? 'text-accent' : 'text-primary/40 dark:text-white/30'
            }`}
          >
            <span className={`material-symbols-outlined text-[26px] ${isActive ? 'scale-110' : ''}`} aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
