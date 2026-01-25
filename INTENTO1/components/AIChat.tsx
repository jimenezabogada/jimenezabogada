
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../geminiService';
import { Message, Language } from '../types';
import { UI_STRINGS } from '../constants';

interface AIChatProps {
  language: Language;
}

export const AIChat: React.FC<AIChatProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: strings.chatWelcome,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset chat welcome message when language changes if no conversation has started
  useEffect(() => {
    if (messages.length === 1) {
      setMessages([{
        role: 'assistant',
        content: strings.chatWelcome,
        timestamp: new Date()
      }]);
    }
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    // Auto-focus input when chat opens
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const responseText = await getGeminiResponse(input, language);
    
    const assistantMessage: Message = {
      role: 'assistant',
      content: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  if (!isOpen) {
    return (
      <button 
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={language === Language.ES ? "Abrir asistente virtual" : "Open virtual assistant"}
        className="fixed right-6 bottom-32 z-[60] size-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all ring-2 ring-white focus:outline-accent focus:ring-offset-2"
      >
        <span className="material-symbols-outlined text-3xl" aria-hidden="true">smart_toy</span>
      </button>
    );
  }

  return (
    <div 
      className="fixed inset-0 sm:inset-auto sm:right-6 sm:bottom-28 sm:w-[400px] sm:h-[600px] bg-white dark:bg-background-dark sm:rounded-2xl shadow-2xl z-[70] flex flex-col border border-primary/10 overflow-hidden animate-fade-in"
      role="dialog"
      aria-labelledby="chat-header-title"
    >
      <div className="p-4 bg-primary text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-accent rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-lg" aria-hidden="true">smart_toy</span>
          </div>
          <div>
            <p id="chat-header-title" className="font-bold text-sm">{strings.chatAgent}</p>
            <p className="text-[10px] text-accent font-medium">{strings.chatStatus}</p>
          </div>
        </div>
        <button 
          type="button"
          onClick={() => setIsOpen(false)} 
          className="text-white/60 hover:text-white p-1 focus:outline-accent"
          aria-label={language === Language.ES ? "Cerrar chat" : "Close chat"}
        >
          <span className="material-symbols-outlined" aria-hidden="true">close</span>
        </button>
      </div>

      <div 
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide" 
        ref={scrollRef}
        aria-live="polite"
        role="log"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div 
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-accent text-white rounded-tr-none' 
                  : 'bg-primary/5 dark:bg-white/5 text-primary dark:text-white rounded-tl-none'
              }`}
            >
              <span className="sr-only">{m.role === 'user' ? (language === Language.ES ? 'Tú: ' : 'You: ') : (language === Language.ES ? 'Asistente: ' : 'Assistant: ')}</span>
              {m.content}
            </div>
            <time className="text-[9px] mt-1 text-primary/30 dark:text-white/30 uppercase font-bold tracking-tighter" dateTime={m.timestamp.toISOString()}>
              {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </time>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-1 items-center p-2 text-accent" aria-label={language === Language.ES ? "El asistente está escribiendo" : "Assistant is typing"}>
            <span className="size-1 bg-accent rounded-full animate-bounce"></span>
            <span className="size-1 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="size-1 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-primary/10 flex gap-2">
        <label htmlFor="chat-input-field" className="sr-only">{strings.chatInput}</label>
        <input 
          id="chat-input-field"
          ref={inputRef}
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={strings.chatInput}
          className="flex-1 bg-primary/5 dark:bg-white/5 border-none rounded-xl text-sm px-4 focus:ring-2 focus:ring-accent outline-none"
        />
        <button 
          type="button"
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
          className="size-10 bg-primary dark:bg-accent text-white rounded-xl flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-50 focus:ring-2 focus:ring-accent outline-none"
          aria-label={language === Language.ES ? "Enviar mensaje" : "Send message"}
        >
          <span className="material-symbols-outlined" aria-hidden="true">send</span>
        </button>
      </div>
    </div>
  );
};
