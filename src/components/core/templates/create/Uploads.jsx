import { useCreateUploadMutation, useGetUploads } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Image, Input, Skeleton } from '@nextui-org/react';
import { getImageLink } from '@/lib/utils.js';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { useGetFreepikImages } from '@/api/misc.js';
import { useDebounce } from 'react-use';

const Uploads = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { id } = useBusiness();
  const [files, setFiles] = useState([]);
  const { data: { uploads = [] } = {}, isLoading: isUploadsLoading } = useGetUploads(id);
  const { mutateAsync: upload, isPending: isCreateUploadLoading } = useCreateUploadMutation(id);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [fetchedImagesElement, setFetchedImagesElement] = useState([]);

  useDebounce(
    () => {
      setDebouncedSearchValue(searchValue);
    },
    2000,
    [searchValue]
  );

  const { data, isLoading } = useGetFreepikImages(debouncedSearchValue);

  useEffect(() => {
    const transformedArray = data?.data.map((imageData) => ({
      id: `${imageData.id}`,
      type: 'image',
      name: 'Image',
      icon: icons['image'],
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
          src: imageData.image.source.url,
        },
      },
    }));
    setFetchedImagesElement(transformedArray);
  }, [data]);

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

      <Input
        className="mb-5"
        label="Search for an Image"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {isUploadsLoading || isLoading ? (
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
              {fetchedImagesElement?.length &&
                fetchedImagesElement.map((element) => (
                  <DraggableElement
                    key={element.id}
                    element={element}
                    className="overflow-hidden"
                    content={
                      <Image
                        src={element.data.config.src}
                        alt={element.data.text}
                        className="w-full h-full object-cover rounded-2xl cursor-grab aspect-square"
                      />
                    }
                    dragging={
                      <Image
                        src={element.data.config.src}
                        alt={element.data.text}
                        className="w-full h-full object-cover rounded-2xl aspect-square"
                      />
                    }
                  />
                ))}
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
