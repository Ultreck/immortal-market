import useTemplateStore from '@/store/template.js';
import { cn } from '@/lib/utils.js';
import { useCallback, useEffect, useState } from 'react';
import { useUpdateDesign } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useQueryClient } from '@tanstack/react-query';
import { Spinner } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PageTitle = ({ id }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const { id: business } = useBusiness();
  const pages = useTemplateStore(({ template }) => template.pages);
  const title = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id).title);
  const templateId = useTemplateStore((state) => state.template.id);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, templateId);
  const [value, setValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setValue(title);
  }, [title]);

  const handleSave = useCallback(async () => {
    if (value === title) return setIsEditing(false);
    try {
      await update({
        data: {
          pages: pages.map((page) => {
            return page.id === id ? { ...page, title: value } : page;
          }),
        },
      });
      toast.success('Page Title updated');
      await qc.invalidateQueries({ queryKey: ['business', business, 'designs'] });
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
    setIsEditing(false);
  }, [value, title, update, toast, qc, business, id, pages]);

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
            disabled={isUpdateLoading}
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
      {isUpdateLoading && <Spinner size="sm" />}
    </div>
  );
};

PageTitle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PageTitle;
