
import React from 'react';
import { Language } from '../types';
import { TRUST_BADGES } from '../constants';

interface TrustBadgesProps {
  language: Language;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ language }) => {
  const badges = TRUST_BADGES[language];
  return (
    <div className="px-4 py-8">
      <div className="flex items-center justify-between gap-6 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
        {badges.map((badge, idx) => (
          <div key={idx} className={`flex items-center gap-3 shrink-0 ${idx > 0 ? 'border-l border-[#e0e1e1] pl-6 dark:border-white/10' : ''}`}>
            <span className="material-symbols-outlined text-accent text-xl">{badge.icon}</span>
            <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary/70 dark:text-white/50">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
