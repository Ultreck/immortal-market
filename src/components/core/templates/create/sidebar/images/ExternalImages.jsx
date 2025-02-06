import { Button, Image, Input, Skeleton, Tab, Tabs } from '@heroui/react';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { useGetImagesFromUnsplash } from '@/api/misc.js';
import { TbChevronLeft, TbSearch, TbX } from 'react-icons/tb';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { getElementDefaultStyle } from '@/lib/elements.js';
import BasicCarousel from '@/components/ui/BasicCarousel';
import UploadedImages from '@/components/core/templates/create/sidebar/images/UploadedImages.jsx';

const ExternalImages = ({ mini = false, onBack }) => {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('uploads');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const {
    data: { pages = [] } = {},
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetImagesFromUnsplash(debouncedQuery);
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
          src: i.urls.regular,
        },
      },
      preview: (
        <Image
          src={i.urls.thumb}
          alt={i.slug}
          className="w-full h-full object-cover rounded-2xl cursor-grab aspect-square"
        />
      ),
    };
  });

  return (
    <>
      {mini ? (
        <div className="relative">
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
          <div className="flex justify-center ">
            <Tabs
              variant="bordered"
              aria-label="Options"
              color="primary"
              radius="full"
              classNames={{
                base: 'mb-6',
                tab: 'text-base px-4',
              }}
              selectedKey={tab}
              onSelectionChange={setTab}
            >
              <Tab key="uploads" title="Uploads" className="text-base" />
              <Tab key="search" title="Search" className="text-base" />
            </Tabs>
          </div>

          {tab === 'uploads' && <UploadedImages />}
          {tab === 'search' && (
            <>
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
      )}
    </>
  );
};

export default ExternalImages;
