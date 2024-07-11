import { AnimatePresence, motion } from 'framer-motion';
import Bold from '@/components/core/templates/create/tools/elements/Bold.jsx';
import Italic from '@/components/core/templates/create/tools/elements/Italic.jsx';
import Underline from '@/components/core/templates/create/tools/elements/Underline.jsx';
import FontSize from '@/components/core/templates/create/tools/elements/FontSize.jsx';
import TextColor from '@/components/core/templates/create/tools/elements/TextColor.jsx';
import BackgroundColor from './elements/BackgroundColor.jsx';
import ChartPicker from './elements/ChartPicker.jsx';
import useTemplateStore from '@/store/template.js';
import TextAlign from './elements/TextAlign.jsx';

const ElementTools = () => {
  const updateElement = useTemplateStore((state) => state.updateElement);
  const element = useTemplateStore(({ template }) => template.elements.find((el) => el.id === template.selection[0]));

  const handleUpdateElement = (element) => {
    updateElement(element);
  };

  return (
    <AnimatePresence>
      {!!element && element.tools?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 4 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-1/3 right-4 rounded-2xl bg-default-200/60 dark:bg-default-100 flex flex-col items-center py-4 space-y-2 px-4"
        >
          {element.tools.map((tool) => {
            if (tool === 'bold') {
              return <Bold key={`${element.id}-${tool}`} element={element} onChange={handleUpdateElement} />;
            }
            if (tool === 'italic') {
              return <Italic key={`${element.id}-${tool}`} element={element} onChange={handleUpdateElement} />;
            }
            if (tool === 'underline') {
              return <Underline key={`${element.id}-${tool}`} element={element} onChange={handleUpdateElement} />;
            }
            if (tool === 'font-size') {
              return <FontSize key={`${element.id}-${tool}`} element={element} onChange={handleUpdateElement} />;
            }
            if (tool === 'text-color') {
              return <TextColor key={`${element.id}-${tool}`} element={element} onChange={handleUpdateElement} />;
            }
            if (tool === 'background-color') {
              return <BackgroundColor key={`${element.id}-${tool}`} element={element} onChange={handleUpdateElement} />;
            }
            if (tool === 'chart-picker') {
              return <ChartPicker key={`${element.id}-${tool}`} element={element} onChange={handleUpdateElement} />;
            }
            if (tool === 'text-align') {
              return <TextAlign key={`${element.id}-${tool}`} element={element} onChange={handleUpdateElement} />;
            }
            return <></>;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ElementTools.propTypes = {};

export default ElementTools;
