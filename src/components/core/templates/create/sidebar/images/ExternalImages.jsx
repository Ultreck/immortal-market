import { Button, Image, Input, Skeleton } from '@nextui-org/react';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { useGetImagesFromUnsplash, useSearchImagesFromUnsplash } from '@/api/misc.js';
import { TbSearch, TbX } from 'react-icons/tb';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import PropTypes from 'prop-types';
import { getElementDefaultStyle } from '@/lib/elements.js';

const ExternalImages = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

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
          inputWrapper: 'h-12 bg-white/[.1] group-hover:bg-white/15 focus-within:!bg-white/15',
        }}
        startContent={<TbSearch size="24" className="mx-1 opacity-30" />}
        endContent={
          query.length > 0 && (
            <Button onClick={() => setQuery('')} variant="light" radius="full" isIconOnly size="sm">
              <TbX size="24" className="mx-1 opacity-30" onClick={() => setQuery('')} />
            </Button>
          )
        }
        placeholder="Search.."
        radius="full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length > 0 ? <Search query={debouncedQuery} /> : <List />}
    </>
  );
};

const List = () => {
  const { data: { pages = [] } = {}, fetchNextPage, isLoading, isFetchingNextPage } = useGetImagesFromUnsplash();
  const images = pages.flat();

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
  );
};

const Search = ({ query }) => {
  const {
    data: { pages = [] } = {},
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  } = useSearchImagesFromUnsplash(query);
  const images = pages.map((i) => i.results).flat();

  const elements = images.map((i) => {
    return {
      id: `${i.id}`,
      type: 'image',
      name: 'Image',
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
  );
};

Search.propTypes = {
  query: PropTypes.string,
};

export default ExternalImages;
