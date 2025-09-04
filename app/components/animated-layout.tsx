'use client';

import React, { useState, useEffect } from 'react';
import OpeningAnimation from './opening-animation';

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if animation has been shown before in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenOpeningAnimation');
    
    if (hasSeenAnimation) {
      setShowAnimation(false);
      setShowContent(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem('hasSeenOpeningAnimation', 'true');
    setShowAnimation(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <>
      {showAnimation && (
        <OpeningAnimation onAnimationComplete={handleAnimationComplete} />
      )}
      <div 
        className={`transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </>
  );
}