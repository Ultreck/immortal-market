import { useState } from 'react';
import { Button, Image, Skeleton } from '@nextui-org/react';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useQueryClient } from '@tanstack/react-query';
import { getImageLink } from '@/lib/utils.js';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { useAddInfographics, useGetInfographics } from '@/api/business.js';
import { getElementDefaultStyle } from '@/lib/elements.js';

const Svgs = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { id: business } = useBusiness();
  const [files, setFiles] = useState([]);
  const {
    data: { infographics = [] } = {},
    isLoading: isInfographicsLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfographics(business);
  const { mutateAsync: add, isPending: isAddLoading } = useAddInfographics(business);

  const q = qc.getQueryState(['businesses', business, 'designs', 'infographics']);
  const isFetching = q.isInvalidated && q.fetchStatus === 'fetching';

  const handleChange = async (files) => {
    setFiles(files);
    try {
      if (!files || files.length === 0) return;
      await add(files);
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  const elements = infographics.map((infographic) => ({
    id: infographic.Key,
    data: {
      type: 'svg',
      text: 'Svg',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'svg' }),
      config: {
        src: getImageLink(infographic.Key),
      },
    },
    preview: (
      <Image
        src={getImageLink(infographic.Key)}
        alt="Svg"
        className="w-full h-full object-contain rounded-2xl cursor-grab aspect-square"
      />
    ),
  }));

  return (
    <div>
      <DndFileInput
        label="Drop SVG file here"
        error="Only SVG files are allowed"
        onChange={handleChange}
        className="mb-8"
        accept={{ 'image/svg+xml': ['.svg'] }}
      />
      {isInfographicsLoading ? (
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
        </div>
      ) : (
        <>
          {infographics.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {(isAddLoading || isFetching) && files.length > 0 && (
                <>
                  {files.map((_, i) => (
                    <Skeleton key={i} className="aspect-square w-full rounded-2xl" />
                  ))}
                </>
              )}
              {elements.map((element) => (
                <DraggableElementWrapper key={element.id} element={element} />
              ))}
            </div>
          )}
        </>
      )}
      {!!hasNextPage && (
        <Button
          onClick={fetchNextPage}
          variant="bordered"
          className="text-base w-full mt-8"
          radius="full"
          isLoading={isFetchingNextPage}
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default Svgs;
