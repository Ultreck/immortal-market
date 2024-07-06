import { AnimatePresence, motion } from 'framer-motion';
import Bold from '@/components/core/templates/create/tools/Bold.jsx';
import Italic from '@/components/core/templates/create/tools/Italic.jsx';
import PropTypes from 'prop-types';
import Underline from '@/components/core/templates/create/tools/Underline.jsx';
import FontSize from '@/components/core/templates/create/tools/FontSize.jsx';
import TextColor from '@/components/core/templates/create/tools/TextColor.jsx';
import BackgroundColor from './tools/BackgroundColor';
import ChartPicker from './tools/ChartPicker.jsx';

const Tools = ({ element, onChange }) => {
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
            if (tool === 'bold') return <Bold key={tool} element={element} onChange={onChange} />;
            if (tool === 'italic') return <Italic key={tool} element={element} onChange={onChange} />;
            if (tool === 'underline') return <Underline key={tool} element={element} onChange={onChange} />;
            if (tool === 'font-size') return <FontSize key={tool} element={element} onChange={onChange} />;
            if (tool === 'text-color') return <TextColor key={tool} element={element} onChange={onChange} />;
            if (tool === 'background-color') {
              return <BackgroundColor key={tool} element={element} onChange={onChange} />;
            }
            if (tool === 'chart-picker') {
              return <ChartPicker key={tool} element={element} onChange={onChange} />;
            }
            return <></>;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Tools.propTypes = {
  element: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default Tools;
