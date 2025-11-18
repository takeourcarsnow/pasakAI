import React, { useState, useEffect } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    document.body.classList.add(`${savedTheme}-theme`);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove(`${theme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="theme-switch">
      <button onClick={toggleTheme} aria-label="Toggle theme">
        <span className="day-icon" aria-hidden="true"><RiSunLine size={24} /></span>
        <span className="night-icon" aria-hidden="true"><RiMoonLine size={24} /></span>
      </button>
    </div>
  );
};