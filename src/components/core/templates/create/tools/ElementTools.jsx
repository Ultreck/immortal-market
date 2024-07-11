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
import { useMemo } from 'react';

const ElementTools = () => {
  const elements = useTemplateStore((state) => state.template.elements);
  const selection = useTemplateStore((state) => state.template.selection);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const _elements = selection.map((id) => elements.find((el) => el.id === id));

  const tools = useMemo(() => {
    if (!selection.length) return [];
    let _tools = _elements.map((el) => el.tools || []);
    _tools = _tools.reduce((acc, tools) => acc.filter((tool) => tools.includes(tool)), _tools[0]);
    if (_tools.includes('chart-picker') && selection.length > 1) {
      return _tools.filter((tool) => tool !== 'chart-picker');
    }
    return _tools;
  }, [_elements, selection.length]);

  const handleUpdateElements = (elements) => {
    updateElements(elements);
  };

  return (
    <AnimatePresence>
      {tools.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 4 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-1/3 right-4 rounded-2xl bg-default-200/60 dark:bg-default-100 flex flex-col items-center py-4 space-y-2 px-4"
        >
          {tools.map((tool) => {
            if (tool === 'bold') {
              return <Bold key={tool} elements={_elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'italic') {
              return <Italic key={tool} elements={_elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'underline') {
              return <Underline key={tool} elements={_elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'font-size') {
              return <FontSize key={tool} elements={_elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'text-color') {
              return <TextColor key={tool} elements={_elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'background-color') {
              return <BackgroundColor key={tool} elements={_elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'text-align') {
              return <TextAlign key={tool} elements={_elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'chart-picker' && selection.length === 1) {
              return <ChartPicker key={tool} element={_elements[0]} onChange={(el) => handleUpdateElements([el])} />;
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
