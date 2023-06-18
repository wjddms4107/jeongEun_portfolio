import { useState, useEffect } from "react";

export const useTypingAnimation = (texts: string[], speed: number) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      const currentWord = texts[currentTextIndex];
      const currentIndex = isDeleting ? currentText.length - 1 : currentText.length + 1;
      const newWord = currentWord.substring(0, currentIndex);

      setCurrentText(newWord);

      if (isDeleting) {
        if (newWord.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        if (newWord.length === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, speed);

    return () => clearTimeout(typingTimer);
  }, [currentText, currentTextIndex, isDeleting, speed, texts]);

  return currentText;
};
