import { useGetDesign } from '@/api/business.js';
import { useParams } from 'react-router-dom';
import useBusiness from '@/hooks/use-business.js';
import { Button, Slider, Spinner } from '@nextui-org/react';
import CanvasPresent from '@/components/core/templates/create/CanvasPresent.jsx';
import { useState } from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

const PresentDesignPage = () => {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const { id } = useParams();
  const { id: businessId } = useBusiness();
  const { data: { design } = {}, isLoading: isTemplatesLoading } = useGetDesign(businessId, id);

  const pages = design?.data?.pages || [];
  const page = pages[index];

  return (
    <>
      {isTemplatesLoading ? (
        <div className="h-screen w-full flex flex-col justify-center items-center text-center">
          <Spinner size="lg" />
          <p className="mt-6">Loading design..</p>
        </div>
      ) : (
        <div className="bg-gray-950 w-full min-h-screen flex flex-col py-12">
          <div className="w-max mx-auto">{!!page && <CanvasPresent key={page} page={page} />}</div>
        </div>
      )}
      {!!pages.length && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-8 py-3 bg-white/10 dark text-white flex items-center justify-between space-x-4 max-w-[600px] w-full">
          <h1 className="text-base">{page.title}</h1>
          <div className="flex items-center space-x-2">
            <Button
              isIconOnly
              radius="full"
              variant="flat"
              onClick={() => setIndex((v) => Math.max(v - 1, 0))}
              isDisabled={index === 0}
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
              onClick={() => setIndex((v) => Math.min(v + 1, pages.length - 1))}
              isDisabled={index === pages.length - 1}
            >
              <TbChevronRight size="20" />
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <Slider
              aria-label="zoom"
              color="foreground"
              className="w-40"
              value={scale * 100}
              onChange={(v) => setScale(v / 100)}
              maxValue={300}
              minValue={20}
              showOutline
              classNames={{
                thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
                track: 'border-s-default-300',
                filler: 'bg-gradient-to-r from-default-300 to-default-400',
              }}
              size="sm"
            />
            <p>{Math.ceil(scale * 100)}%</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PresentDesignPage;
