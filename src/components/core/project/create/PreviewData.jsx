import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { cn } from '@/lib/utils.js';
import { AnimatePresence } from 'framer-motion';
import TableDetails from '@/components/core/project/create/TableDetails.jsx';
import { useEffect, useState } from 'react';
import { Button, Popover, PopoverContent, PopoverTrigger, Spinner, useDisclosure } from '@nextui-org/react';
import { TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useGenerateCombinations } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useToast } from '@/hooks/use-toast.jsx';
import NoData from '@/components/ui/NoData.jsx';
import { RiAlertLine } from 'react-icons/ri';

const PreviewData = ({ onNext }) => {
  const toast = useToast();
  const { source, isSourceLoading, isDesignLoading } = useCurrentDesign();
  const [current, setCurrent] = useState(source?.tables?.[0]?.name);
  const table = source?.tables?.find((t) => t.name === current);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
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
      toast.error(e?.response?.data?.message ?? e?.message);
    }
  };

  return (
    <>
      {isDesignLoading || isSourceLoading ? (
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
                    <h3 className="font-semibold font-semibold mb-4 text-lg">Tables</h3>
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
                            <h3 className="text-base leading-tight">{t.slug}</h3>
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
                      <RiAlertLine size="40" className="opacity-50" />
                      <div className="text-base font-semibold mt-4">No relationship configured</div>
                      <div className="mt-1 text-md max-w-xs opacity-80">
                        We recommend you to setup relationships between tables to improve analysis accuracy. Click
                        continue below to continue without setting up relationships.
                      </div>
                      <div className="flex items-center space-x-2 mt-6">
                        <Button
                          onClick={onContinuePopoverOpenChange}
                          isLoading={isGenerateLoading}
                          variant="bordered"
                          radius="full"
                          size="sm"
                          className="text-base px-4"
                        >
                          Go back
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          isLoading={isGenerateLoading}
                          color="primary"
                          radius="full"
                          size="sm"
                          className="text-base px-4"
                        >
                          Continue
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Button
                    onClick={handleSubmit}
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
