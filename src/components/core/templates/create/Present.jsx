import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '@heroui/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PageModal from '@/components/core/templates/create/PageModal.jsx';
import PagePresent from '@/components/core/templates/create/PagePresent.jsx';
import useDesignStore from '@/store/design';

const Present = () => {
  const [index, setIndex] = useState(0);
  const pages = useDesignStore((state) => state.pages);
  const _pages = pages.filter((p) => p.type !== 'modal');
  const page = _pages[index];

  return (
    <>
      <div className="relative inset-0 w-full h-screen overflow-hidden z-[1]">
        <div className="bg-gray-950 w-full h-screen overflow-y-auto flex flex-col">
          <PagePresent key={page} page={page} />
        </div>
        {!!pages.length && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full px-8 py-2.5 bg-default-100 dark text-white flex items-center justify-between space-x-4 max-w-[400px] w-full">
            <h1 className="text-base">{page.title}</h1>
            <div className="flex items-center space-x-2">
              <Button
                isIconOnly
                radius="full"
                variant="flat"
                onPress={() => setIndex((v) => Math.max(v - 1, 0))}
                isDisabled={index === 0}
                size="sm"
              >
                <TbChevronLeft size="20" />
              </Button>
              <p className="px-3">
                {index + 1} / {pages.length}
              </p>
              <Button
                isIconOnly
                radius="full"
                variant="flat"
                onPress={() => setIndex((v) => Math.min(v + 1, pages.length - 1))}
                isDisabled={index === pages.length - 1}
                size="sm"
              >
                <TbChevronRight size="20" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <PageModal pages={pages} />
    </>
  );
};

Present.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default Present;
