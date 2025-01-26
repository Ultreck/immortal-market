import useTemplateStore from '@/store/template.js';
import Present from '@/components/core/templates/create/Present.jsx';
import { useEffect, useRef } from 'react';
import { Button, useDisclosure } from '@heroui/react';
import { RiExpandDiagonalLine } from 'react-icons/ri';
import { createPortal } from 'react-dom';

const FullscreenPreview = () => {
  const root = useRef(null);
  const template = useTemplateStore((state) => state.template);
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();

  useEffect(() => {
    if (isOpen && root.current.requestFullscreen && !document.fullscreenElement) {
      root.current.requestFullscreen();
    }
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) onClose();
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <Button variant="light" color="default" radius="full" size="sm" onPress={onOpen} isIconOnly>
        <RiExpandDiagonalLine size="18" />
      </Button>
      {createPortal(<div ref={root}>{isOpen && <Present pages={template.pages} />}</div>, document.body)}
    </>
  );
};

export default FullscreenPreview;
