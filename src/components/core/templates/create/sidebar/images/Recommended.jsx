import {  Image , Skeleton,  } from '@heroui/react';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { useGetImagesFromFreepik } from '@/api/misc.js';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { getElementDefaultStyle } from '@/lib/elements.js';
import BasicCarousel from '@/components/ui/BasicCarousel';

const Recommended = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const {
    data: { pages = [] } = {},
    isLoading,
  } = useGetImagesFromFreepik(debouncedQuery);
  const images = pages.flat();

  useDebounce(() => setDebouncedQuery(query), 2000, [query]);

  const elements = images.map((i) => {
    return {
      id: `${i.id}`,
      data: {
        type: 'image',
        text: 'Image',
        width: 400,
        height: 300,
        style: getElementDefaultStyle({ type: 'image' }),
        config: {
          src: i.source.url,
        },
      },
      preview: (
        <Image
          src={i.source.url}
          alt={i.source.url}
          className="w-full h-full object-cover rounded-2xl cursor-grab aspect-square"
        />
      ),
    };
  });

  return (
    <>
        <div className="relative">
          {isLoading && (
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="aspect-square w-full rounded-2xl" />
              <Skeleton className="aspect-square w-full rounded-2xl" />
              <Skeleton className="aspect-square w-full rounded-2xl" />
              <Skeleton className="aspect-square w-full rounded-2xl" />
            </div>
          )}
          <BasicCarousel
            classNames={{ next: 'right-0', prev: 'left-0', base: 'overflow-hidden' }}
            slides={Array(2)
              .fill(null)
              .map((_, index) => {
                return {
                  id: index,
                  content: (
                    <div className="grid grid-cols-2 gap-4">
                      {elements.slice(index * 4, index * 4 + 4).map((element) => (
                        <DraggableElementWrapper key={element.id} element={element} />
                      ))}
                    </div>
                  ),
                };
              })}
          />
        </div>

    </>
  );
};

export default Recommended;