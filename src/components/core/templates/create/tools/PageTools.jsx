import { AnimatePresence, motion } from 'framer-motion';
import PageDimensions from '@/components/core/templates/create/tools/page/PageDimensions.jsx';
import PageBackground from '@/components/core/templates/create/tools/page/PageBackground.jsx';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';

const PageTools = ({ isOpen }) => {
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === template.page));
  const updatePage = useTemplateStore((state) => state.updatePage);

  const handleUpdatePage = (data) => {
    updatePage(data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 4 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-1/3 right-4 rounded-2xl bg-default-200/60 dark:bg-default-100 flex flex-col items-center py-4 space-y-2 px-4"
        >
          <PageDimensions page={page} onChange={handleUpdatePage} />
          <PageBackground page={page} onChange={handleUpdatePage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

PageTools.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default PageTools;
