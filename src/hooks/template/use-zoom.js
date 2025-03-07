import { useEffect } from 'react';
import { useKey, useMount } from 'react-use';
import useDesignStore from '@/store/design.js';

const useZoom = (node) => {
  const pages = useDesignStore((state) => state.pages);
  const updateStore = useDesignStore((state) => state.updateStore);
  const scale = useDesignStore((state) => state.scale);

  useKey(
    (e) => e.key === '0' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      updateStore({ scale: 1 });
    }
  );

  useMount(() => {
    const editorWidth = node.current.clientWidth;
    const maxPageWidth = Math.max(...pages.map((p) => p.size.width));
    if (editorWidth < maxPageWidth) {
      const scale = Math.max(editorWidth / maxPageWidth - 0.12, 0.2);
      updateStore({ scale });
    }
  });

  useEffect(() => {
    const el = node.current;
    if (el) {
      const handleWheel = (event) => {
        if (event.ctrlKey) {
          event.preventDefault();
          const _scale = Math.min(3, Math.max(0.2, scale + (event.deltaY > 0 ? -0.05 : 0.05)));
          updateStore({ scale: _scale });
        }
      };
      el.addEventListener('mousewheel', handleWheel, { passive: false });
      return () => {
        el.removeEventListener('mousewheel', handleWheel, { passive: false });
      };
    }
  }, [node, scale, updateStore]);
};

export default useZoom;
