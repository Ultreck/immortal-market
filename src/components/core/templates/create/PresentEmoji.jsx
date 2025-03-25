import { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { useCreateDesignActivity } from '@/api/business';
import PropTypes from 'prop-types';

const EMOJIS = [
  { emoji: '👍', name: 'Thumb Up' },
  { emoji: '👎', name: 'Thumb Down' },
  { emoji: '😄', name: 'Happy' },
  { emoji: '🎉', name: 'Celebrate' },
  { emoji: '😕', name: 'Confused' },
  { emoji: '❤️', name: 'Heart' },
  { emoji: '🔥', name: 'Fire' },
];

const ReactionEmoji = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { mutateAsync: createActivity } = useCreateDesignActivity(business, id);

  const handleEmojiSelect = (emoji) => {
    const value = EMOJIS[emoji];
    setSelectedEmojis((prev) => [...prev, value]);
    createActivity({ type: 'reaction', value: value.name, page });
  };

  const removeEmoji = (index) => {
    setSelectedEmojis((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4">
        <AnimatePresence>
          {selectedEmojis.map((emoji, index) => (
            <motion.div
              key={index}
              initial={{ y: 0, opacity: 1, scale: 1 }}
              animate={{ y: -400, opacity: 0 }}
              transition={{ duration: 6, ease: 'easeOut' }}
              onAnimationComplete={() => removeEmoji(index)}
              className="absolute"
            >
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-2xl">
                {emoji.emoji}
                <span className="text-xs text-gray-800">{emoji.name}</span>
              </motion.span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Popover placement="top" isOpen={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <Button isIconOnly variant="light" className="text-xl">
            👍
          </Button>
        </PopoverTrigger>
        <PopoverContent className="px-3 py-2 bg-default-100 rounded-full">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="grid grid-cols-7 ">
            {EMOJIS.map((item, index) => (
              <motion.button
                key={item.emoji}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center hover:bg-default-200 transition-colors rounded-full px-1"
                onClick={() => handleEmojiSelect(index)}
              >
                <span className="text-xl mb-1">{item.emoji}</span>
              </motion.button>
            ))}
          </motion.div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

ReactionEmoji.propTypes = {
  page: PropTypes.string.isRequired,
};
export default ReactionEmoji;
