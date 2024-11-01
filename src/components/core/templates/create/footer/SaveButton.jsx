import { useCallback, useEffect, useRef, useState } from 'react';
import { toBlob } from 'html-to-image';
import { useKey } from 'react-use';
import useTemplateStore from '@/store/template.js';
import { useGetDesign, useUpdateDesign } from '@/api/business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useQueryClient } from '@tanstack/react-query';
import { BsCloudArrowUp } from 'react-icons/bs';
import { TbCloudCheck } from 'react-icons/tb';
import { Spinner, Tooltip } from '@nextui-org/react';
import equal from 'fast-deep-equal/es6/react';

const SaveButton = () => {
  const qc = useQueryClient();
  const toast = useToast();
  const { id: business } = useBusiness();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const id = useTemplateStore((state) => state.template.id);
  const pages = useTemplateStore((state) => state.template.pages);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);
  const { data: { design } = {} } = useGetDesign(business, id);
  const timeout = useRef(null);

  const handleSave = useCallback(async () => {
    try {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
      selectElements([]);
      setIsThumbnailLoading(true);
      const blob = await toBlob(document.getElementById(`canvas-${pages[0].id}`), {
        cacheBust: true,
        skipFonts: true,
      });
      const thumbnail = new File([blob], 'thumbnail.png', { type: 'image/png' });
      setIsThumbnailLoading(false);
      await update({ data: { pages }, thumbnail });
      await qc.invalidateQueries({ queryKey: ['business', business, 'designs'] });
    } catch (error) {
      setIsThumbnailLoading(false);
      toast.error(error?.response?.data?.message || error.message);
    }
  }, [selectElements, pages, update, toast, business, qc]);

  useKey(
    (e) => e.key.toLowerCase() === 's' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      await handleSave();
    }
  );

  useEffect(() => {
    const _equal = equal(design.data.pages, pages);
    if (!_equal) {
      if (timeout.current) clearTimeout(timeout.current);
      window.onbeforeunload = () => true;
      timeout.current = setTimeout(async () => {
        await handleSave();
        timeout.current = null;
        window.onbeforeunload = null;
      }, 1000);
      return () => {
        clearTimeout(timeout.current);
        timeout.current = null;
      };
    }
  }, [handleSave, pages, design.data.pages]);

  return (
    <Tooltip content="Autosaves">
      {isUpdateLoading || isThumbnailLoading ? (
        <Spinner size="sm" color="warning" />
      ) : (
        <>{timeout.current ? <BsCloudArrowUp size="20" /> : <TbCloudCheck size="20" />}</>
      )}
    </Tooltip>
  );
};

export default SaveButton;
