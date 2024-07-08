import { AnimatePresence, motion } from 'framer-motion';
import CanvasDimensions from '@/components/core/templates/create/tools/canvas/CanvasDimensions.jsx';
import useTemplateStore from '@/store/template.js';
import CanvasBackground from '@/components/core/templates/create/tools/canvas/CanvasBackground.jsx';

const CanvasTools = () => {
  const isCanvasSelected = useTemplateStore((state) => state.template.isCanvasSelected);
  return (
    <AnimatePresence>
      {isCanvasSelected && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 4 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-1/3 right-4 rounded-2xl bg-default-200/60 dark:bg-default-100 flex flex-col items-center py-4 space-y-2 px-4"
        >
          <CanvasDimensions />
          <CanvasBackground />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

CanvasTools.propTypes = {};

export default CanvasTools;
