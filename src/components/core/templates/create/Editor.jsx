import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import PageTools from '@/components/core/templates/create/tools/PageTools.jsx';
import useClipboardEvents from '@/hooks/template/use-clipboard-events.js';
import useDelete from '@/hooks/template/use-delete.js';
import { useRef } from 'react';
import useZoom from '@/hooks/template/use-zoom.js';
import ScrollMode from '@/components/core/templates/create/ScrollMode.jsx';
import CollaboratorsList from '@/components/core/templates/create/CollaboratorsList.jsx';

const Editor = () => {
  const root = useRef(null);
  useClipboardEvents();
  useZoom(root);
  useDelete();

  return (
    <div className="h-screen w-full overflow-hidden" ref={root}>
      <CollaboratorsList />
      <ScrollMode />
      <ElementTools />
      <PageTools />
    </div>
  );
};

export default Editor;
