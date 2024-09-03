import useTemplateStore from '@/store/template.js';
import Present from '@/components/core/templates/create/Present.jsx';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';

const FullscreenPreview = ({ isOpen, onClose }) => {
  const root = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const template = useTemplateStore((state) => state.template);

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

  return <div ref={root}>{isOpen && <Present pages={template.pages} />}</div>;
};

FullscreenPreview.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FullscreenPreview;
