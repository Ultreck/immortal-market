import useBusiness from '@/hooks/use-business.js';
import { useGetUploads } from '@/api/business.js';
import { getImageLink } from '@/lib/utils.js';
import { Image, Skeleton } from '@heroui/react';
import PropTypes from 'prop-types';

const UploadedImages = ({ onClick }) => {
  const { id } = useBusiness();
  const { data: { uploads = [] } = {}, isLoading: isUploadsLoading } = useGetUploads(id);

  return (
    <div className="w-full">
      {isUploadsLoading ? (
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
        </div>
      ) : (
        <>
          {uploads.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {uploads.map((upload) => (
                <Image
                  key={upload.file}
                  onClick={() => onClick(getImageLink(upload.file))}
                  src={getImageLink(upload.file)}
                  alt="Image"
                  className="w-full h-full object-cover rounded-2xl cursor-pointer hover:brightness-125 aspect-square"
                />
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

UploadedImages.propTypes = {
  onClick: PropTypes.func,
};

export default UploadedImages;
