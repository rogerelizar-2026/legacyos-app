'use client';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95
        classic:border-stone-300 classic:bg-stone-100 classic:text-amber-700
        neon:border-cyan-500/30 neon:bg-white/5 neon:text-cyan-400 neon:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
    >
      {theme === 'classic' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}