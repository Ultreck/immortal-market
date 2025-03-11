import { useState } from 'react';
import { addToast, Button, Image, Skeleton } from '@heroui/react';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useQueryClient } from '@tanstack/react-query';
import { getImageLink } from '@/lib/utils.js';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { useAddInfographics, useGetInfographics } from '@/api/business.js';
import { getElementDefaultStyle } from '@/lib/elements.js';
import { TbChevronLeft } from 'react-icons/tb';
import PropTypes from 'prop-types';

const Svgs = ({ mini = false, onBack }) => {
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
      addToast({
        title: 'Error',
        description: e?.response?.data?.message || e.message,
        color: 'danger',
      });
    }
  };

  const elements = infographics.map((infographic) => ({
    id: infographic.Key,
    data: {
      type: 'svg',
      text: 'Svg',
      size: {
        width: 400,
        height: 300,
      },
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
    <>
      {mini ? (
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {elements.slice(0, 8).map((element) => (
              <DraggableElementWrapper key={element.id} element={element} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
            <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-base font-semibold">Svgs</h2>
          </div>
          <DndFileInput
            label="Drop SVG file here"
            error="Only SVG files are allowed"
            onChange={handleChange}
            className="mb-8"
            accept={{ 'image/svg+xml': ['.svg'] }}
          />

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
          {!!hasNextPage && (
            <Button
              onPress={fetchNextPage}
              variant="bordered"
              className="text-base w-full mt-8"
              radius="full"
              isLoading={isFetchingNextPage}
            >
              Load more
            </Button>
          )}
        </div>
      )}
      {isInfographicsLoading && (
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
        </div>
      )}
    </>
  );
};

Svgs.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default Svgs;
