import useTemplateStore from '@/store/template.js';
import { cn } from '@/lib/utils.js';
import { useCallback, useEffect, useState } from 'react';
import { useGetDesign, useUpdateDesign } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useQueryClient } from '@tanstack/react-query';
import { Chip, Spinner } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';

const DesignTitle = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { design } = {} } = useGetDesign(business, id);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);
  const [value, setValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setValue(design.title);
  }, [design.title]);

  const handleSave = useCallback(async () => {
    if (value === design.title) return setIsEditing(false);
    try {
      await update({ title: value });
      toast.success('Title updated');
      qc.invalidateQueries({ queryKey: ['business', business, 'designs'] });
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
    setIsEditing(false);
  }, [value, design.title, update, toast, qc, business]);

  return (
    <div className="flex items-center space-x-4">
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
              className="text-lg font-medium leading-tight border border-transparent hover:border-default-200 py-2 px-3 rounded-2xl"
            >
              {design.title}
            </motion.p>
          )}
        </AnimatePresence>
        {isUpdateLoading && <Spinner size="sm" />}
      </div>
      {design.type === 'template' && (
        <div className="flex items-center space-x-2">
          <Chip size="sm" color="warning" className="text-sm">
            Template
          </Chip>
          <Chip
            size="sm"
            color={{ draft: 'default', published: 'success' }[design.status]}
            className="text-sm capitalize"
          >
            {design.status}
          </Chip>
        </div>
      )}
    </div>
  );
};

export default DesignTitle;
