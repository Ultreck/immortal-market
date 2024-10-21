import { AnimatePresence, motion } from 'framer-motion';
import CommentsList from './CommentsList.jsx';
import CommentReplies from './CommentReplies.jsx';
import useTemplateStore from '@/store/template';

const CommentsModal = () => {
  const isCommentOpen = useTemplateStore((state) => state.template.isCommentsOpen);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const activeComment = useTemplateStore((state) => state.template.activeComment);

  const handleClose = () => {
    updateTemplate({ isCommentsOpen: false });
  };

  return (
    <AnimatePresence>
      {isCommentOpen && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed right-8 top-5 bg-white dark:bg-default-50 border border-default-200 dark:border-default-100 w-full max-w-[400px] max-h-[500px] rounded-2xl z-50 overflow-y-auto shadow"
        >
          {activeComment ? (
            <CommentReplies onBack={() => updateTemplate({ activeComment: null })} />
          ) : (
            <CommentsList onClose={handleClose} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommentsModal;
