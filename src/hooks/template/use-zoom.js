import { useEffect } from 'react';
import useTemplateStore from '@/store/template.js';
import { useKey } from 'react-use';

const useZoom = (node) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const scale = useTemplateStore((state) => state.template.scale);

  useKey(
    (e) => e.key === '0' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      updateTemplate({ scale: 1 });
    }
  );

  useEffect(() => {
    const el = node.current;
    if (el) {
      const handleWheel = (event) => {
        if (event.ctrlKey) {
          event.preventDefault();
          const _scale = Math.min(3, Math.max(0.2, scale + (event.deltaY > 0 ? -0.05 : 0.05)));
          updateTemplate({ scale: _scale });
        }
      };
      el.addEventListener('mousewheel', handleWheel, { passive: false });
      return () => {
        el.removeEventListener('mousewheel', handleWheel, { passive: false });
      };
    }
  }, [node, scale, updateTemplate]);
};

export default useZoom;
