import { AnimatePresence, motion } from 'framer-motion';
import CommentsList from './CommentsList.jsx';
import CommentReplies from './CommentReplies.jsx';
import useTemplateStore from '@/store/template';
import TargetComments from '@/components/core/templates/create/comment/TargetComments.jsx';

const CommentsModal = () => {
  const isCommentOpen = useTemplateStore((state) => state.template.isCommentsOpen);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const activeComment = useTemplateStore((state) => state.template.activeComment);
  const commentsTargetId = useTemplateStore((state) => state.template.commentsTargetId);

  const handleClose = () => {
    updateTemplate({ isCommentsOpen: false, activeComment: null, commentsTargetId: null });
  };

  return (
    <AnimatePresence>
      {isCommentOpen && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed right-8 top-5 w-full max-w-[400px] z-50"
        >
          <div className="bg-white dark:bg-default-50 border border-default-200 dark:border-default-100 w-full max-h-[500px] rounded-2xl overflow-y-auto shadow">
            {activeComment ? (
              <CommentReplies onBack={() => updateTemplate({ activeComment: null })} onClose={handleClose} />
            ) : (
              <>
                {commentsTargetId ? (
                  <TargetComments onBack={() => updateTemplate({ commentsTargetId: null })} onClose={handleClose} />
                ) : (
                  <CommentsList onClose={handleClose} />
                )}
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommentsModal;
