import useCurrentDesign from '@/hooks/template/use-current-design.js';
import Title from '@/components/core/shared/Title.jsx';
import { cn } from '@/lib/utils.js';
import { AnimatePresence } from 'framer-motion';
import TableDetails from '@/components/core/templates/create/project/manage-data/TableDetails.jsx';
import { useEffect, useState } from 'react';
import { Button, Spinner } from '@nextui-org/react';
import { TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useGenerateCombinations } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useToast } from '@/hooks/use-toast.jsx';
import NoData from '@/components/ui/NoData.jsx';

const ModelData = ({ onNext }) => {
  const toast = useToast();
  const { source, isSourceLoading, isDesignLoading } = useCurrentDesign();
  const [current, setCurrent] = useState(source?.tables?.[0]?.name);
  const table = source?.tables?.find((t) => t.name === current);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { mutateAsync: generate, isPending: isGenerateLoading } = useGenerateCombinations(business, id);

  useEffect(() => {
    if (source?.tables?.length && !current) setCurrent(source?.tables?.[0]?.name);
  }, [current, source?.tables]);

  const handleSubmit = async () => {
    try {
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
              <div className="flex-1 overflow-y-auto px-12 py-10">
                <div className="flex items-center justify-between mb-6">
                  <Title title="Data model" classNames={{ title: 'text-xl font-semibold' }} />
                </div>
                <div className="flex space-x-3">
                  {source?.tables?.map((t) => {
                    return (
                      <div
                        key={t.name}
                        className={cn(
                          'py-4 cursor-pointer transition-all duration-100 px-6 border border-default-200 rounded-2xl',
                          {
                            'bg-default-200/50': current === t.name,
                          }
                        )}
                        onClick={() => setCurrent(t.name)}
                        tabIndex={0}
                      >
                        <h3 className="text-base leading-tight">{t.slug}</h3>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4">
                  <AnimatePresence mode="wait">{!!table && <TableDetails table={table} />}</AnimatePresence>
                </div>
              </div>
              <div className="px-12 py-4 border-t border-default-200 flex items-center space-x-3">
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

ModelData.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default ModelData;
