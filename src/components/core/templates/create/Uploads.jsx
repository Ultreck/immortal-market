import { useCreateUploadMutation, useGetUploads } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Image, Skeleton } from '@nextui-org/react';
import { getImageLink } from '@/lib/utils.js';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';

const Uploads = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { id } = useBusiness();
  const [files, setFiles] = useState([]);
  const { data: { uploads = [] } = {}, isLoading: isUploadsLoading } = useGetUploads(id);
  const { mutateAsync: upload, isPending: isCreateUploadLoading } = useCreateUploadMutation(id);

  const query = qc.getQueryState(['business', id, 'uploads']);
  const isFetching = query.isInvalidated && query.fetchStatus === 'fetching';

  const handleChange = async (files) => {
    setFiles(files);
    try {
      await upload(files);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  const elements = uploads.map((upload) => ({
    id: upload._id,
    type: 'image',
    name: 'Image',
    data: {
      type: 'image',
      text: 'Image',
      width: 400,
      height: 300,
      style: {
        borderWidth: 0,
        borderColor: '#000',
        opacity: 1,
        borderRadius: 0,
      },
      config: {
        src: getImageLink(upload.file),
      },
    },
    preview: (
      <Image
        src={getImageLink(upload.file)}
        alt="Image"
        className="w-full h-full object-cover rounded-2xl cursor-grab aspect-square"
      />
    ),
  }));

  return (
    <div>
      <DndFileInput label="Drop images or click to select" onChange={handleChange} className="mb-8" />
      {isUploadsLoading ? (
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
        </div>
      ) : (
        <>
          {elements.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {(isCreateUploadLoading || isFetching) && files.length > 0 && (
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
          ) : (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-center text-sm opacity-80 max-w-[200px] mx-auto">
                  No uploads. Add some uploads to the canvas
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Uploads;
