import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 30, 
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const onCompleteRef = useRef<(() => void) | undefined>(onComplete);

  // keep the latest onComplete in a ref so the main typing effect
  // doesn't restart when the parent re-creates the callback reference
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // prevent restarting the typing animation if we're already typing the same text
  const typingRef = useRef(false);
  const lastTextRef = useRef<string | null>(null);

  useEffect(() => {
    if (!text) {
      return;
    }

    // If we're already typing the exact same text, don't restart
    if (typingRef.current && lastTextRef.current === text) {
      return;
    }

    typingRef.current = true;
    lastTextRef.current = text;
    setIsTyping(true);
    setDisplayText('');
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        const newText = text.substring(0, i + 1);
        setDisplayText(newText);
        i++;
      } else {
        setIsTyping(false);
        typingRef.current = false;
        clearInterval(typeInterval);
        // call the latest onComplete from ref (does not trigger effect re-run)
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    }, speed);

    return () => {
      clearInterval(typeInterval);
      typingRef.current = false;
    };
  }, [text, speed]);

  return (
    <div id="story-text" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
      {displayText}
      {isTyping && <span className="typing-cursor"></span>}
    </div>
  );
};