import { useState } from 'react';
import { useDebounce } from 'react-use';
import { Button, Image, Input, Skeleton } from '@heroui/react';
import { TbSearch, TbX } from 'react-icons/tb';
import { useGetImagesFromUnsplash } from '@/api/misc.js';
import PropTypes from 'prop-types';

const ExternalImages = ({ onClick }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const {
    data: { pages = [] } = {},
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetImagesFromUnsplash(debouncedQuery);
  const images = pages.flat();

  useDebounce(() => setDebouncedQuery(query), 2000, [query]);

  return (
    <>
      <Input
        type="text"
        name="query"
        id="query"
        classNames={{
          input: 'text-base',
          base: 'transition-all duration-300 w-full mb-6',
          inputWrapper: 'h-10 bg-white/[.1] group-hover:bg-white/15 focus-within:!bg-white/15',
        }}
        startContent={<TbSearch size="24" className="mx-1 opacity-30" />}
        endContent={
          query.length > 0 && (
            <Button onPress={() => setQuery('')} variant="light" radius="full" isIconOnly size="sm">
              <TbX size="24" className="mx-1 opacity-30" onClick={() => setQuery('')} />
            </Button>
          )
        }
        size="sm"
        placeholder="Search.."
        radius="full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-6">
        {!!images.length && (
          <>
            <div className="grid grid-cols-2 gap-4">
              {images.map((i) => (
                <Image
                  key={i.id}
                  onClick={() => onClick(i.urls.regular)}
                  src={i.urls.thumb}
                  alt={i.slug}
                  className="w-full h-full object-cover rounded-2xl cursor-pointer hover:brightness-125 aspect-square"
                />
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
  );
};

ExternalImages.propTypes = {
  onClick: PropTypes.func,
};

export default ExternalImages;
