import React, { useState, useRef } from 'react';
import { LOADING_TRANSLATIONS } from '@/lib/constants';

interface LoadingAnimationProps {
  visible: boolean;
  language: string;
}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ visible, language }) => {
  const loadingData = LOADING_TRANSLATIONS[language as keyof typeof LOADING_TRANSLATIONS] || LOADING_TRANSLATIONS.en;
  const [currentMessage, setCurrentMessage] = useState(loadingData.loadingMessages[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    setCurrentMessage(loadingData.loadingMessages[0]);
  }, [language, loadingData.loadingMessages]);

  React.useEffect(() => {
    if (visible) {
      let messageIndex = 0;
      
      // Create sparkles
      const sparklesContainer = document.querySelector('.loading-sparkles');
      if (sparklesContainer) {
        sparklesContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
          const sparkle = document.createElement('div');
          sparkle.className = 'sparkle';
          sparkle.innerHTML = '✨';
          sparkle.style.setProperty('--tx', `${Math.random() * 200 - 100}px`);
          sparkle.style.setProperty('--ty', `${Math.random() * 200 - 100}px`);
          sparklesContainer.appendChild(sparkle);
        }
      }

      intervalRef.current = setInterval(() => {
        setCurrentMessage(loadingData.loadingMessages[messageIndex]);
        messageIndex = (messageIndex + 1) % loadingData.loadingMessages.length;
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      const sparklesContainer = document.querySelector('.loading-sparkles');
      if (sparklesContainer) {
        sparklesContainer.innerHTML = '';
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [visible, language]);

  return (
    <div className={`loading-animation ${visible ? 'visible' : ''}`}>
      <div className="loading-text">{loadingData.creatingStory}</div>
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      <div className="loading-messages">{currentMessage}</div>
      <div className="loading-sparkles"></div>
    </div>
  );
};