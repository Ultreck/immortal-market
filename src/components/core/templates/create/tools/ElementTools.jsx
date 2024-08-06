import { AnimatePresence, motion } from 'framer-motion';
import Bold from '@/components/core/templates/create/tools/elements/Bold.jsx';
import Italic from '@/components/core/templates/create/tools/elements/Italic.jsx';
import Underline from '@/components/core/templates/create/tools/elements/Underline.jsx';
import TextColor from '@/components/core/templates/create/tools/elements/TextColor.jsx';
import BackgroundColor from './elements/BackgroundColor.jsx';
import ChartConfig from './elements/ChartConfig.jsx';
import useTemplateStore from '@/store/template.js';
import TextAlign from './elements/TextAlign.jsx';
import { useMemo } from 'react';
import Border from './elements/Border.jsx';
import Opacity from './elements/Opacity.jsx';
import BorderRadius from './elements/BorderRadius.jsx';
import TableConfig from '@/components/core/templates/create/tools/elements/TableConfig.jsx';
import KeyValueConfig from '@/components/core/templates/create/tools/elements/KeyValueConfig.jsx';
import Line from './elements/Line.jsx';
import Font from './elements/Font.jsx';
import IconConfig from './elements/IconConfig.jsx';
import { getElementTools } from '@/lib/elements.js';
import Animation from './elements/Animation.jsx';
import AdvancedChartConfig from './elements/AdvancedChartConfig.jsx';

const ElementTools = () => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const page = useTemplateStore(({ template }) => {
    return template.pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
  });
  const elements = selectedElements.map((id) => page?.elements.find((el) => el.id === id));

  const tools = useMemo(() => {
    if (!page) return [];
    let _tools = elements.map((el) => getElementTools(el.type) || []);
    _tools = _tools.reduce((acc, tools) => acc.filter((tool) => tools.includes(tool)), _tools[0]);
    const singles = ['chart', 'table', 'key-value', 'icon'];
    if (_tools.some((tool) => singles.includes(tool)) && selectedElements.length > 1) {
      return _tools.filter((tool) => !singles.includes(tool));
    }
    return _tools;
  }, [elements, page, selectedElements.length]);

  const handleUpdateElements = (elements) => {
    updateElements(elements, page.id, true);
  };

  return (
    <AnimatePresence>
      {tools.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-1/3 right-8 rounded-2xl bg-default-200/60 dark:bg-default-100 flex flex-col items-center py-4 space-y-2 px-4"
        >
          {tools.map((tool) => {
            if (tool === 'bold') {
              return <Bold key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'italic') {
              return <Italic key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'underline') {
              return <Underline key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'font') {
              return <Font key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'text-color') {
              return <TextColor key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'background-color') {
              return <BackgroundColor key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'text-align') {
              return <TextAlign key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'chart' && selectedElements.length === 1) {
              return <ChartConfig key={tool} element={elements[0]} onChange={(el) => handleUpdateElements([el])} />;
            }
            if (tool === 'icon' && selectedElements.length === 1) {
              return <IconConfig key={tool} element={elements[0]} onChange={(el) => handleUpdateElements([el])} />;
            }
            if (tool === 'table' && selectedElements.length === 1) {
              return <TableConfig key={tool} element={elements[0]} onChange={(el) => handleUpdateElements([el])} />;
            }
            if (tool === 'key-value' && selectedElements.length === 1) {
              return <KeyValueConfig key={tool} element={elements[0]} onChange={(el) => handleUpdateElements([el])} />;
            }
            if (tool === 'border') {
              return <Border key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'opacity') {
              return <Opacity key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'border-radius') {
              return <BorderRadius key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'line') {
              return <Line key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'animation') {
              return <Animation key={tool} elements={elements} onChange={handleUpdateElements} />;
            }
            if (tool === 'advanced-chart') {
              return (
                <AdvancedChartConfig key={tool} element={elements[0]} onChange={(el) => handleUpdateElements([el])} />
              );
            }
            throw new Error(`Unknown tool ${tool}`);
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ElementTools;
