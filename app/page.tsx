'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Flag, Heart, Users, Home as HomeIcon, CheckCircle, Circle } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

// DADOS FIXOS (Substituindo o Banco de Dados para simplificar)
const QUOTES = [
  { text: "A coisa mais importante que você faz com sua vida é a vida que vive dentro de você.", author: "Stephen Covey" },
  { text: "Comece com o fim em mente.", author: "Stephen Covey" },
  { text: "Primeiro o mais importante.", author: "Stephen Covey" },
  { text: "Procure primeiro compreender, depois ser compreendido.", author: "Stephen Covey" },
  { text: "Crie sinergia.", author: "Stephen Covey" },
];

const HABITS = [
  { id: 1, name: "Exercício Físico", dimension: "Física", done: false },
  { id: 2, name: "Leitura Diária", dimension: "Mental", done: false },
  { id: 3, name: "Meditação/Oração", dimension: "Espiritual", done: false },
  { id: 4, name: "Tempo em Família", dimension: "Social", done: false },
];

const TASKS = [
  { id: 1, title: "Planejar a semana com a família", isBigRock: true },
  { id: 2, title: "Estudar para a prova de matemática", isBigRock: true },
  { id: 3, title: "Ler capítulo do livro", isBigRock: false },
];

const RELATIONSHIPS = [
  { id: 1, name: "Filho(a)", balance: 100 },
  { id: 2, name: "Esposa/Marido", balance: 95 },
  { id: 3, name: "Eu mesmo", balance: 80 },
];

export default function Home() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [activeTab, setActiveTab] = useState('home');
  const [habits, setHabits] = useState(HABITS);
  const [quote, setQuote] = useState(QUOTES[0]);

  // Escolhe uma citação aleatória ao carregar
  useEffect(() => {
    if (mounted) {
      setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    }
  }, [mounted]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h));
  };

  if (!mounted) return null;

  return (
    <div className={`min-h-screen pb-24 ${theme === 'classic' ? 'bg-[#FDFBF7] text-[#292524]' : 'bg-[#09090B] text-[#FAFAFA]'}`}>
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b p-4 flex justify-between items-center transition-colors duration-300
        classic:bg-[#FDFBF7]/80 classic:border-stone-200 
        neon:bg-[#09090B]/80 neon:border-white/10">
        <h1 className={`text-xl font-bold tracking-tight ${theme === 'classic' ? 'font-serif text-stone-800' : 'font-display text-cyan-400'}`}>
          LegacyOS
        </h1>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${theme === 'classic' ? 'bg-stone-200 text-stone-700' : 'bg-white/10 text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]'}`}
        >
          {theme === 'classic' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="p-4 max-w-md mx-auto space-y-6">
        
        {/* CITAÇÃO DO DIA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border shadow-sm transition-all duration-300
            classic:bg-white classic:border-stone-200 classic:shadow-md
            neon:bg-white/5 neon:border-white/10 neon:backdrop-blur-md`}
        >
          <p className={`italic mb-4 ${theme === 'classic' ? 'font-serif text-lg text-stone-700' : 'font-mono text-cyan-300'}`}>
            "{quote.text}"
          </p>
          <p className={`text-sm font-bold ${theme === 'classic' ? 'text-stone-500' : 'text-fuchsia-400 uppercase tracking-widest'}`}>
            — {quote.author}
          </p>
        </motion.div>

        {/* TAB: HOME / PEDRAS GRANDES */}
        {activeTab === 'home' && (
          <section>
            <h2 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme === 'classic' ? 'font-serif text-stone-800' : 'font-display text-white'}`}>
              <Flag size={20} className={theme === 'classic' ? 'text-amber-600' : 'text-cyan-400'} />
              Pedras Grandes de Hoje
            </h2>
            <div className="space-y-3">
              {TASKS.map(task => (
                <div key={task.id} className={`p-4 rounded-lg border flex items-center justify-between transition-all
                  classic:bg-white classic:border-stone-200
                  neon:bg-white/5 neon:border-white/10 ${task.isBigRock ? (theme === 'classic' ? 'border-l-4 border-l-amber-600' : 'border-l-4 border-l-cyan-400') : ''}`}>
                  <div className="flex items-center gap-3">
                    {task.isBigRock ? (
                      <CheckCircle size={20} className={theme === 'classic' ? 'text-amber-600' : 'text-cyan-400'} />
                    ) : (
                      <Circle size={20} className="text-gray-400" />
                    )}
                    <span className={theme === 'classic' ? 'text-stone-700' : 'text-gray-200'}>{task.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB: HÁBITOS */}
        {activeTab === 'habits' && (
          <section>
            <h2 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme === 'classic' ? 'font-serif text-stone-800' : 'font-display text-white'}`}>
              <Heart size={20} className={theme === 'classic' ? 'text-green-700' : 'text-fuchsia-400'} />
              Tracker de Renovação
            </h2>
            <div className="space-y-3">
              {habits.map(habit => (
                <button
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-full p-4 rounded-lg border flex items-center justify-between transition-all active:scale-95
                    classic:bg-white classic:border-stone-200
                    neon:bg-white/5 neon:border-white/10 ${habit.done ? (theme === 'classic' ? 'bg-green-50 border-green-200' : 'bg-green-900/20 border-green-500/50') : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                      ${habit.done 
                        ? (theme === 'classic' ? 'bg-green-600 border-green-600' : 'bg-green-500 border-green-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]') 
                        : (theme === 'classic' ? 'border-stone-300' : 'border-white/20')}`}
                    >
                      {habit.done && <CheckCircle size={14} className="text-white" />}
                    </div>
                    <div className="text-left">
                      <p className={`font-medium ${theme === 'classic' ? 'text-stone-800' : 'text-white'}`}>{habit.name}</p>
                      <p className={`text-xs ${theme === 'classic' ? 'text-stone-500' : 'text-gray-400'}`}>{habit.dimension}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* TAB: CONTAS */}
        {activeTab === 'people' && (
          <section>
            <h2 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme === 'classic' ? 'font-serif text-stone-800' : 'font-display text-white'}`}>
              <Users size={20} className={theme === 'classic' ? 'text-blue-800' : 'text-magenta-400'} />
              Conta Bancária Emocional
            </h2>
            <div className="space-y-3">
              {RELATIONSHIPS.map(rel => (
                <div key={rel.id} className={`p-4 rounded-lg border flex items-center justify-between
                  classic:bg-white classic:border-stone-200
                  neon:bg-white/5 neon:border-white/10`}>
                  <span className={`font-medium ${theme === 'classic' ? 'text-stone-800' : 'text-white'}`}>{rel.name}</span>
                  <span className={`text-sm font-mono px-3 py-1 rounded-full ${theme === 'classic' ? 'bg-stone-100 text-stone-600' : 'bg-white/10 text-cyan-300'}`}>
                    Saldo: {rel.balance}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* NAVEGAÇÃO MOBILE (BOTTOM BAR) - CORRIGIDA */}
      <nav className="fixed bottom-0 left-0 right-0 h-[80px] pb-4 z-50 flex justify-around items-center border-t backdrop-blur-xl shadow-lg transition-colors duration-300
        classic:bg-[#FDFBF7]/95 classic:border-stone-200
        neon:bg-[#09090B]/90 neon:border-white/10">
        
        {[
          { id: 'home', icon: HomeIcon, label: 'Início' },
          { id: 'habits', icon: Heart, label: 'Hábitos' },
          { id: 'people', icon: Users, label: 'Contas' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex flex-col items-center justify-center w-full h-full gap-1 active:scale-90 transition-transform"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-dot"
                  className={`absolute top-1 w-1 h-1 rounded-full shadow-sm ${theme === 'classic' ? 'bg-amber-600' : 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]'}`}
                />
              )}
              <tab.icon 
                size={26} 
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-all duration-300 ${
                  isActive 
                    ? (theme === 'classic' ? 'text-amber-700 scale-110' : 'text-cyan-400 scale-110 drop-shadow-md') 
                    : (theme === 'classic' ? 'text-stone-400' : 'text-gray-500')
                }`} 
              />
              <span className={`text-[11px] font-medium tracking-wide ${
                isActive 
                  ? (theme === 'classic' ? 'text-amber-800' : 'text-cyan-100') 
                  : (theme === 'classic' ? 'text-stone-500' : 'text-gray-500')
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}