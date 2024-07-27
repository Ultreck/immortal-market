import useTemplateStore from '@/store/template.js';
import { Button } from '@nextui-org/react';
import { useUpdateTemplateMutation } from '@/api/business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useCallback } from 'react';

const Header = () => {
  const toast = useToast();
  const { id } = useBusiness();
  const name = useTemplateStore((state) => state.template.name);
  const template = useTemplateStore((state) => state.template);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateTemplateMutation(id, template.id);

  const handleSave = useCallback(async () => {
    try {
      const { name, pages } = template;
      await update({ name, data: { pages } });
      toast.success('Saved successfully');
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  }, [template, update, toast]);

  return (
    <div className="h-[60px] w-full dark:bg-default-50/50 border-b border-default-200 dark:border-default-100 flex items-center justify-between px-12">
      <h2 className="text-lg font-medium leading-tight">{name || 'Untitled Template'}</h2>
      <Button
        variant="solid"
        color="success"
        className="text-base"
        radius="full"
        isLoading={isUpdateLoading}
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
};

export default Header;
