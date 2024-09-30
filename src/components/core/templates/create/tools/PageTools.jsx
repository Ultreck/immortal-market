import { AnimatePresence, motion } from 'framer-motion';
import PageDimensions from '@/components/core/templates/create/tools/page/PageDimensions.jsx';
import PageBackground from '@/components/core/templates/create/tools/page/PageBackground.jsx';
import useTemplateStore from '@/store/template.js';

const PageTools = () => {
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === template.selectedPage));
  const updatePage = useTemplateStore((state) => state.updatePage);

  const handleUpdatePage = (data) => {
    updatePage(data, page.id, true);
  };

  return (
    <AnimatePresence>
      {!!page && (
        <div className="fixed top-1/2 -translate-y-1/2 right-6">
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="rounded-full bg-white shadow dark:bg-default-100 flex flex-col items-center py-6 space-y-2 px-4"
          >
            <PageBackground page={page} onChange={handleUpdatePage} />
            <PageDimensions page={page} onChange={handleUpdatePage} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PageTools;
