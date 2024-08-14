import { useCallback, useState } from 'react';
import { toBlob } from 'html-to-image';
import { useKey } from 'react-use';
import useTemplateStore from '@/store/template.js';
import { useUpdateDesign } from '@/api/business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import { Button } from '@nextui-org/react';

const SaveButton = () => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const id = useTemplateStore((state) => state.template.id);
  const pages = useTemplateStore((state) => state.template.pages);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);

  const handleSave = useCallback(async () => {
    try {
      selectElements([]);
      setIsThumbnailLoading(true);
      const blob = await toBlob(document.getElementById(`canvas-${pages[0].id}`), { skipFonts: true });
      const thumbnail = new File([blob], 'thumbnail.png', { type: 'image/png' });
      setIsThumbnailLoading(false);
      await update({ data: { pages }, thumbnail });
      toast.success('Saved successfully');
    } catch (error) {
      setIsThumbnailLoading(false);
      toast.error(error?.response?.data?.message || error.message);
    }
  }, [selectElements, pages, update, toast]);

  useKey(
    (e) => e.key.toLowerCase() === 's' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      await handleSave();
    }
  );

  return (
    <Button
      variant="solid"
      color="success"
      className="text-base px-4"
      radius="full"
      size="sm"
      isLoading={isUpdateLoading || isThumbnailLoading}
      onClick={handleSave}
    >
      Save
    </Button>
  );
};

export default SaveButton;
