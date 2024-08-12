import PageIndicator from '@/components/core/templates/create/PageIndicator.jsx';
import ZoomSlider from '@/components/core/templates/create/ZoomSlider.jsx';
import { Button } from '@nextui-org/react';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useUpdateTemplateMutation } from '@/api/business.js';
import { useCallback } from 'react';
import { useKey } from 'react-use';

const StatusBar = () => {
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

  useKey(
    (e) => e.key.toLowerCase() === 's' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      await handleSave();
    }
  );

  return (
    <div className="h-[50px] w-full dark:bg-default-50/50 border-t border-default-200 dark:border-default-100 flex items-center justify-between px-12">
      <h2 className="text-lg font-medium leading-tight">{name || 'Untitled Template'}</h2>
      <div className="flex items-center space-x-8 ml-auto">
        <PageIndicator />
        <ZoomSlider />
        <Button
          variant="solid"
          color="success"
          className="text-base px-4"
          radius="full"
          size="sm"
          isLoading={isUpdateLoading}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default StatusBar;
