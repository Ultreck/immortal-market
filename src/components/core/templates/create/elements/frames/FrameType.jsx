import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { cn } from '@/lib/utils.js';
import { useEffect, useState } from 'react';

const FrameType = ({ element, active, highlighted, width, onClick, onChange }) => {
  const words = element.config.texts;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const word = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText((prev) => word.substring(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setLetterIndex(0);
        }
      } else {
        setCurrentText((prev) => word.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150; // Faster when deleting, slower when typing
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout); // Clear timeout on unmount
  }, [currentText, letterIndex, isDeleting, currentWordIndex, words]);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={(args) => {
        if (args.width !== element.width || args.height !== element.height) {
          args.children = args.children.map((el) => {
            const w = args.width - element.width;
            const h = args.height - element.height;
            return { ...el, width: el.width + w, height: el.height + h };
          });
        }
        onChange(args);
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
      // className="flex flex-col"
    >
      {({ isEditing }) => (
        <div className={cn(`relative flex h-full `, !isEditing ? 'overflow-x-hidden ' : '')}>
          <span style={element.style}>{currentText}</span>
        </div>
      )}
    </ElementWrapper>
  );
};

FrameType.propTypes = ElementPropTypes;

export default FrameType;

