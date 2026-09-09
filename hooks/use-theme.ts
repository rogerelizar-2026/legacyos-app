'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'classic' | 'neon'>('classic');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('legacyos-theme') as 'classic' | 'neon';
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.remove('classic', 'neon');
      document.documentElement.classList.add(saved);
    } else {
      document.documentElement.classList.add('classic');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'classic' ? 'neon' : 'classic';
    setTheme(newTheme);
    localStorage.setItem('legacyos-theme', newTheme);
    
    document.documentElement.classList.remove('classic', 'neon');
    document.documentElement.classList.add(newTheme);
  };

  return { theme, toggleTheme, mounted };
}