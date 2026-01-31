'use client';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    
    const handleScroll = () => {
      setVisible(window.scrollY < window.innerHeight * 0.8);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      className={`
        absolute bottom-8 left-1/2 -translate-x-1/2 z-20
        transition-opacity duration-500
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center text-parchment/90 animate-bounce">
        <span className="text-sm font-lato mb-2">Discover More</span>
        <ChevronDownIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
