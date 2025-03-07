import useDesignStore from '@/store/design.js';
import { cn } from '@/lib/utils.js';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import PropTypes from 'prop-types';

const PageTitle = ({ id, title }) => {
  const updatePage = useDesignStore((state) => state.updatePage);
  const [value, setValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setValue(title);
  }, [title]);

  const handleSave = useCallback(async () => {
    if (value === title) return setIsEditing(false);
    await updatePage(id, { title: value });
    setIsEditing(false);
  }, [value, title, updatePage, id]);

  return (
    <div className="relative flex items-center space-x-2">
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            required
            className={cn(
              'border border-default-200 bg-transparent text-lg leading-tight w-[200px] py-2 px-3 rounded-2xl'
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => handleSave()}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
            }}
            autoFocus
          />
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className="font-semibold capitalize leading-tight border border-transparent hover:border-default-200 py-2 px-3 -ml-3 rounded-2xl"
          >
            {title}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

PageTitle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PageTitle;
