import { ElementPropTypes } from '@/lib/prop-types.js';
import { cn } from '@/lib/utils.js';
import { useEffect, useState } from 'react';

const FrameType = ({ element, active }) => {
  const words = element.config.texts;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const word = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(word.substring(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setLetterIndex(0);
        }
      } else {
        setCurrentText(word.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, letterIndex, isDeleting, currentWordIndex, words]);

  return (
    <div className={cn(`relative flex h-full `, !active ? 'overflow-x-hidden ' : '')}>
      <span style={element.style}>{currentText}</span>
    </div>
  );
};

FrameType.propTypes = ElementPropTypes;

export default FrameType;
