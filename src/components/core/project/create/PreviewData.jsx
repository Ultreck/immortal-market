import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { cn } from '@/lib/utils.js';
import { AnimatePresence } from 'motion/react';
import TableDetails from '@/components/core/project/create/TableDetails.jsx';
import { useEffect, useState } from 'react';
import { addToast, Button, Popover, PopoverContent, PopoverTrigger, Spinner, useDisclosure } from '@heroui/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useGenerateCombinations } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useDesignStore from '@/store/design';
import NoData from '@/components/ui/NoData.jsx';
import { RiAlertLine } from 'react-icons/ri';

const PreviewData = ({ onNext }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { source, isSourceLoading } = useCurrentDesign();
  const [current, setCurrent] = useState(source?.tables?.[0]?.name);
  const table = source?.tables?.find((t) => t.name === current);
  const { mutateAsync: generate, isPending: isGenerateLoading } = useGenerateCombinations(business, id);
  const { isOpen: isContinuePopover, onOpenChange: onContinuePopoverOpenChange } = useDisclosure();

  useEffect(() => {
    if (source?.tables?.length && !current) setCurrent(source?.tables?.[0]?.name);
  }, [current, source?.tables]);

  const handleSubmit = async () => {
    try {
      if (isContinuePopover) onContinuePopoverOpenChange();
      await generate(null);
      onNext();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  return (
    <>
      {isSourceLoading ? (
        <div className="flex h-full flex-col items-center justify-center">
          <Spinner />
          <p className="mt-6">Loading data..</p>
        </div>
      ) : (
        <>
          {source?.tables ? (
            <>
              <div className="flex-1 overflow-y-auto h-full">
                <div className="grid grid-cols-[260px_1fr] h-full">
                  <div className="py-6 px-8 border-r border-default-200 overflow-y-auto">
                    <h3 className="font-semibold mb-4 text-lg">Tables</h3>
                    <div className="flex flex-col space-y-3">
                      {source?.tables?.map((t) => {
                        return (
                          <div
                            key={t.name}
                            className={cn(
                              'py-3 cursor-pointer transition-all duration-100 px-5 border border-default-200 rounded-2xl',
                              { 'bg-default-200/50': current === t.name }
                            )}
                            onClick={() => setCurrent(t.name)}
                            tabIndex={0}
                          >
                            <h3 className="text-base leading-tight">{t.name}</h3>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="h-full overflow-y-auto px-10 py-6">
                    <AnimatePresence mode="wait">{!!table && <TableDetails table={table} />}</AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="px-12 py-4 border-t border-default-200 flex items-center space-x-3">
                {source?.tables?.length && !source?.relationships?.length ? (
                  <Popover placement="top-start" isOpen={isContinuePopover} onOpenChange={onContinuePopoverOpenChange}>
                    <PopoverTrigger>
                      <Button
                        isLoading={isGenerateLoading}
                        color="primary"
                        radius="full"
                        className="text-base px-6"
                        endContent={<TbChevronRight size="20" />}
                      >
                        Continue
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="shadow border border-default-200 rounded-2xl w-[360px] px-6 py-12 flex flex-col items-center justify-center text-center">
                      <RiAlertLine size="52" className="opacity-50 mb-6" />
                      <div className="text-lg font-semibold">No relationship configured</div>
                      <div className="mt-2 text-base max-w-xs opacity-80">
                        We recommend setting up relationships between tables to improve analysis accuracy. Click
                        &#34;Continue&#34; below to proceed without setting up relationships.
                      </div>
                      <div className="flex flex-col items-center space-y-3 mt-6">
                        <Button
                          onPress={onContinuePopoverOpenChange}
                          isLoading={isGenerateLoading}
                          variant="bordered"
                          radius="full"
                          className="text-base px-4"
                          startContent={<TbChevronLeft size="20" />}
                        >
                          Go back
                        </Button>
                        <Button
                          onPress={handleSubmit}
                          isLoading={isGenerateLoading}
                          color="primary"
                          radius="full"
                          className="text-base px-4"
                          endContent={<TbChevronRight size="20" />}
                        >
                          Continue
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Button
                    onPress={handleSubmit}
                    isLoading={isGenerateLoading}
                    color="primary"
                    radius="full"
                    className="text-base px-6"
                    endContent={<TbChevronRight size="20" />}
                  >
                    Continue
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="px-12 py-10">
              <NoData text="No data source configured" />
            </div>
          )}
        </>
      )}
    </>
  );
};

PreviewData.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default PreviewData;
