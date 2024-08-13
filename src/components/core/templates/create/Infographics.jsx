import { useState } from 'react';
import { Image, Skeleton } from '@nextui-org/react';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useQueryClient } from '@tanstack/react-query';
import { getImageLink } from '@/lib/utils.js';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { useAddInfographics, useGetInfographics } from '@/api/business.js';

const Infographics = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { id } = useBusiness();
  const [files, setFiles] = useState([]);
  const { data: { infographics = [] } = {}, isLoading: isInfographicsLoading } = useGetInfographics(id);
  const { mutateAsync: add, isPending: isAddLoading } = useAddInfographics(id);

  const q = qc.getQueryState(['infographics']);
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
    type: 'infographic',
    name: 'Infographic',
    data: {
      type: 'infographic',
      text: 'Infographic',
      width: 400,
      height: 300,
      style: {
        opacity: 1,
      },
      config: {
        src: getImageLink(infographic.Key),
      },
    },
    preview: (
      <Image
        src={getImageLink(infographic.Key)}
        alt="Infographic"
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
    </div>
  );
};

export default Infographics;
