import { Button, Image, Input, Skeleton } from '@heroui/react';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { useGetImagesFromFreepik } from '@/api/misc.js';
import { TbChevronLeft, TbSearch, TbX } from 'react-icons/tb';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { getElementDefaultStyle } from '@/lib/elements.js';
import BasicCarousel from '@/components/ui/BasicCarousel';
import PropTypes from 'prop-types';

const ExternalImages = ({ mini = false, onBack }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const {
    data: { pages = [] } = {},
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetImagesFromFreepik({ query: debouncedQuery });

  const images = pages.flat();

  useDebounce(() => setDebouncedQuery(query), 2000, [query]);

  const elements = images.map((i) => {
    return {
      id: `${i.id}`,
      data: {
        type: 'image',
        text: 'Image',
        size: {
          width: 400,
          height: 300,
        },
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
      {mini ? (
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
      ) : (
        <>
          <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
            <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-base font-semibold">Images</h2>
          </div>
          <Input
            type="text"
            name="query"
            id="query"
            classNames={{
              input: 'text-base',
              base: 'transition-all duration-300 w-full mb-6',
              inputWrapper: 'h-12 bg-white/[.1] group-hover:bg-white/15 focus-within:!bg-white/15',
            }}
            startContent={<TbSearch size="24" className="mx-1 opacity-30" />}
            endContent={
              query.length > 0 && (
                <Button onPress={() => setQuery('')} variant="light" radius="full" isIconOnly size="sm">
                  <TbX size="24" className="mx-1 opacity-30" onClick={() => setQuery('')} />
                </Button>
              )
            }
            placeholder="Search.."
            radius="full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="space-y-6">
            {!!elements.length && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  {elements.map((element) => (
                    <DraggableElementWrapper key={element.id} element={element} />
                  ))}
                </div>
                {!isFetchingNextPage && (
                  <button
                    onClick={fetchNextPage}
                    className="w-full px-6 py-3 rounded-2xl flex justify-center items-center border border-white/20 hover:bg-white/10 mt-8"
                  >
                    Load more
                  </button>
                )}
              </>
            )}
            {(isLoading || isFetchingNextPage) && (
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="aspect-square w-full rounded-2xl" />
                <Skeleton className="aspect-square w-full rounded-2xl" />
                <Skeleton className="aspect-square w-full rounded-2xl" />
                <Skeleton className="aspect-square w-full rounded-2xl" />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

ExternalImages.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default ExternalImages;
