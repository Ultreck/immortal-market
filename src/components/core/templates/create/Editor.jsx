import useTemplateStore from '@/store/template.js';
import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import PageTools from '@/components/core/templates/create/tools/PageTools.jsx';
import useClipboardEvents from '@/hooks/template/use-clipboard-events.js';
import useDelete from '@/hooks/template/use-delete.js';
import { useRef } from 'react';
import useZoom from '@/hooks/template/use-zoom.js';
import useHistory from '@/hooks/template/use-history.js';
import ScrollMode from '@/components/core/templates/create/ScrollMode.jsx';
import TabMode from '@/components/core/templates/create/TabMode.jsx';

const Editor = () => {
  const root = useRef(null);
  const mode = useTemplateStore((state) => state.template.mode);
  useClipboardEvents();
  useZoom(root);
  useDelete();
  useHistory();

  return (
    <div className="h-screen w-full overflow-hidden" ref={root}>
      {mode === 'scroll' && <ScrollMode />}
      {mode === 'tab' && <TabMode />}
      <ElementTools />
      <PageTools />
    </div>
  );
};

export default Editor;
