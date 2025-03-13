import { AnimatePresence, motion } from 'motion/react';
import PageDimensions from '@/components/core/templates/create/tools/page/PageDimensions.jsx';
import PageBackground from '@/components/core/templates/create/tools/page/PageBackground.jsx';
import PageForm from '@/components/core/templates/create/tools/page/form/PageForm.jsx';
import PagePoll from '@/components/core/templates/create/tools/page/PagePoll.jsx';
import useDesignStore from '@/store/design.js';

const PageTools = () => {
  const page = useDesignStore((state) => state.pages.find((page) => page.id === state.selectedPage));
  const updatePage = useDesignStore((state) => state.updatePage);

  const handleUpdatePage = (data) => {
    updatePage(page.id, data);
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
            <PageForm page={page.id} />
            <PagePoll page={page} onChange={handleUpdatePage} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PageTools;
