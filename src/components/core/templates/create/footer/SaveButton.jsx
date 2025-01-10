import { useCallback, useEffect, useState } from 'react';
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
import { objectToFormData } from '@/lib/utils.js';

const SaveButton = () => {
  const qc = useQueryClient();
  const toast = useToast();
  const { id: business } = useBusiness();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const id = useTemplateStore((state) => state.template.id);
  const pages = useTemplateStore((state) => state.template.pages);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);
  const { data: { design = {} } = {} } = useGetDesign(business, id);
  const [cache, setCache] = useState(0);

  const handleSave = useCallback(async () => {
    try {
      setIsThumbnailLoading(true);
      const blobPromises = pages.map((page) =>
        toBlob(document.getElementById(`canvas-${page.id}`), {
          cacheBust: true,
          skipFonts: true,
        })
      );
      const blobs = await Promise.all(blobPromises);
      const thumbnails = blobs.map((blob, index) => new File([blob], `${pages[index].id}.png`, { type: 'image/png' }));
      setIsThumbnailLoading(false);
      const fd = objectToFormData({ data: { pages } });
      thumbnails.forEach((file) => fd.append('thumbnails', file));
      await update(fd);
      await qc.invalidateQueries({ queryKey: ['businesses', business, 'designs'] });
    } catch (error) {
      setIsThumbnailLoading(false);
      toast.error(error?.response?.data?.message || error.message);
    }
  }, [pages, update, business, qc]);

  useKey(
    (e) => e.key.toLowerCase() === 's' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      await handleSave();
      handleClearTimeout(cache);
    },
    [handleSave, cache]
  );

  const handleClearTimeout = useCallback((t) => {
    clearTimeout(t);
    setCache(0);
    window.onbeforeunload = null;
  }, []);

  useEffect(() => {
    const _equal = equal(design.data?.pages || {}, pages);
    if (!_equal) {
      window.onbeforeunload = () => true;
      const t = setTimeout(async () => {
        await handleSave();
        handleClearTimeout(t);
      }, 60000);
      setCache(t);
      return () => handleClearTimeout(t);
    }
  }, [handleSave, pages, design?.data?.pages, handleClearTimeout]);

  return (
    <>
      {isUpdateLoading || isThumbnailLoading ? (
        <Button variant="light" isIconOnly onClick={handleSave} size="sm" radius="full" isLoading>
          <BsCloudArrowDown size="20" />
        </Button>
      ) : (
        <>
          {cache ? (
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
