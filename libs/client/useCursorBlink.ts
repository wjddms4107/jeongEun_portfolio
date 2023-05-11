import { useState, useEffect } from 'react';

export const useCursorBlink = (speed: number) => {
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, speed);

    return () => clearInterval(blinkTimer);
  }, [speed]);

  return isCursorVisible;
};