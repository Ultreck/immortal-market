import { AnimatePresence, motion } from 'framer-motion';
import PageDimensions from '@/components/core/templates/create/tools/page/PageDimensions.jsx';
import PageBackground from '@/components/core/templates/create/tools/page/PageBackground.jsx';
import useTemplateStore from '@/store/template.js';

const PageTools = () => {
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === template.selectedPage));
  const updatePage = useTemplateStore((state) => state.updatePage);

  const handleUpdatePage = (data) => {
    updatePage(data, page.id);
  };

  return (
    <AnimatePresence>
      {!!page && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
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

export default PageTools;
