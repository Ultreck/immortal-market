import { useCallback, useEffect, useRef, useState } from 'react';
import { toBlob } from 'html-to-image';
import { useKey } from 'react-use';
import useTemplateStore from '@/store/template.js';
import { useGetDesign, useUpdateDesign } from '@/api/business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useQueryClient } from '@tanstack/react-query';
import { BsCloudArrowDown, BsCloudCheck } from 'react-icons/bs';
import { Button, Tooltip } from '@nextui-org/react';
import equal from 'fast-deep-equal/es6/react';

const SaveButton = () => {
  const qc = useQueryClient();
  const toast = useToast();
  const { id: business } = useBusiness();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const id = useTemplateStore((state) => state.template.id);
  const pages = useTemplateStore((state) => state.template.pages);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);
  const { data: { design } = {} } = useGetDesign(business, id);
  const timeout = useRef(null);

  const handleSave = useCallback(async () => {
    try {
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
  }, [pages, update, toast, business, qc]);

  useKey(
    (e) => e.key.toLowerCase() === 's' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      await handleSave();
      handleClearTimeout();
    },
    [handleSave]
  );

  const handleClearTimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
      window.onbeforeunload = null;
    }
  };

  useEffect(() => {
    const _equal = equal(design.data.pages, pages);
    if (!_equal) {
      if (timeout.current) clearTimeout(timeout.current);
      window.onbeforeunload = () => true;
      timeout.current = setTimeout(async () => {
        await handleSave();
        handleClearTimeout();
      }, 60000);
      return () => {
        handleClearTimeout();
      };
    }
  }, [handleSave, pages, design.data.pages]);

  return (
    <>
      {isUpdateLoading || isThumbnailLoading ? (
        <Button variant="light" isIconOnly onClick={handleSave} size="sm" radius="full" isLoading>
          <BsCloudArrowDown size="20" />
        </Button>
      ) : (
        <>
          {timeout.current ? (
            <Tooltip content="Save">
              <Button variant="light" isIconOnly onClick={handleSave} size="sm" radius="full">
                <BsCloudArrowDown size="20" />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip content="Saved" delay={500}>
              <div>
                <Button variant="light" isIconOnly size="sm" radius="full" isDisabled>
                  <BsCloudCheck size="20" strokeWidth={0.2} />
                </Button>
              </div>
            </Tooltip>
          )}
        </>
      )}
    </>
  );
};

export default SaveButton;
