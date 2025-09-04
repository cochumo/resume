'use client';

import React, { useState, useEffect } from 'react';

interface OpeningAnimationProps {
  onAnimationComplete: () => void;
}

export default function OpeningAnimation({ onAnimationComplete }: OpeningAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Initial black screen with text appearing
    const phase1Timer = setTimeout(() => {
      setAnimationPhase(1);
    }, 500);

    // Phase 1: Text fully visible
    const phase2Timer = setTimeout(() => {
      setAnimationPhase(2);
    }, 2000);

    // Phase 2: Fade out
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onAnimationComplete();
      }, 800);
    }, 2800);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
      clearTimeout(fadeTimer);
    };
  }, [onAnimationComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 bg-black transition-opacity duration-700 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="relative">
        <svg
          width="300"
          height="100"
          viewBox="0 0 300 100"
          className={`transition-all duration-1000 ${
            animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Letter 'i' */}
          <g className={`transition-all duration-500 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <rect x="20" y="60" width="4" height="25" fill="white" />
            <circle cx="22" cy="52" r="3" fill="white" />
          </g>
          
          {/* Letter 'g' */}
          <g className={`transition-all duration-500 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <path
              d="M 40 70 Q 35 60 45 60 Q 55 60 55 70 Q 55 80 45 80 Q 40 80 40 75 L 40 95 Q 40 100 35 100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
          
          {/* Letter 'a' */}
          <g className={`transition-all duration-500 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <path
              d="M 70 80 Q 65 60 75 60 Q 85 60 85 70 Q 85 80 75 80 Q 70 80 70 75 L 70 85"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line x1="70" y1="75" x2="85" y2="75" stroke="white" strokeWidth="2" />
          </g>
          
          {/* Letter 'm' */}
          <g className={`transition-all duration-500 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            <line x1="100" y1="85" x2="100" y2="60" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path
              d="M 100 65 Q 105 60 110 65 L 110 85"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 110 65 Q 115 60 120 65 L 120 85"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
          
          {/* Letter 'o' */}
          <g className={`transition-all duration-500 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
            <circle cx="140" r="12" cy="72" fill="none" stroke="white" strokeWidth="4" />
          </g>
          
          {/* Letter 't' */}
          <g className={`transition-all duration-500 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
            <line x1="160" y1="85" x2="160" y2="55" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="155" y1="65" x2="165" y2="65" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </g>
          
          {/* Letter 'o' */}
          <g className={`transition-all duration-500 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
            <circle cx="180" r="12" cy="72" fill="none" stroke="white" strokeWidth="4" />
          </g>
          
          {/* Underline */}
          <g className={`transition-all duration-1000 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1600ms' }}>
            <line
              x1="20"
              y1="95"
              x2="190"
              y2="95"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
        
        {/* Pulsing effect during phase 2 (before fade out) */}
        {animationPhase === 2 && (
          <div className="absolute inset-0 bg-white opacity-5 animate-pulse rounded-lg"></div>
        )}
      </div>
    </div>
  );
}