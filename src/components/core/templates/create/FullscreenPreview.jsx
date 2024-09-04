import useTemplateStore from '@/store/template.js';
import Present from '@/components/core/templates/create/Present.jsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, useDisclosure } from '@nextui-org/react';
import { RiExpandDiagonalLine } from 'react-icons/ri';
import { createPortal } from 'react-dom';

const FullscreenPreview = () => {
  const root = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const template = useTemplateStore((state) => state.template);
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();

  const enableFullscreen = () => {
    if (root.current.requestFullscreen) {
      root.current.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  const disableFullscreen = useCallback(() => {
    if (isFullscreen && document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, [isFullscreen]);

  useEffect(() => {
    if (isOpen && !isFullscreen) enableFullscreen();
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        disableFullscreen();
        onClose();
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [disableFullscreen, isFullscreen, isOpen, onClose]);

  return (
    <>
      <Button variant="light" color="default" radius="full" size="sm" className="text-base" onClick={onOpen} isIconOnly>
        <RiExpandDiagonalLine size="18" />
      </Button>
      {createPortal(<div ref={root}>{isOpen && <Present pages={template.pages} />}</div>, document.body)}
    </>
  );
};

export default FullscreenPreview;
