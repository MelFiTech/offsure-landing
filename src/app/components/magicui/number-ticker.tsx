"use client";

import React, { useEffect, useRef, useState } from 'react';

interface NumberTickerProps {
  value: number;
  duration?: number;
}

const NumberTicker: React.FC<NumberTickerProps> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef<number>();
  const startValueRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
    startValueRef.current = displayValue;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - (startTimeRef.current || 0);
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.round(
        startValueRef.current + (value - startValueRef.current) * easeOutQuart
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        counterRef.current = setTimeout(updateCounter, 16); // ~60fps
      }
    };

    updateCounter();

    return () => {
      if (counterRef.current) {
        clearTimeout(counterRef.current);
      }
    };
  }, [value, duration]);

  return <span>{displayValue}</span>;
};

export default NumberTicker;
