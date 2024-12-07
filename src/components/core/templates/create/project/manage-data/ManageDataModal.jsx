import useTemplateStore from '@/store/template.js';
import Drawer from '@/components/ui/Drawer.jsx';
import { useGetDesignSource } from '@/api/business.js';
import { Chip, Spinner } from '@nextui-org/react';
import NoData from '@/components/ui/NoData.jsx';
import useBusiness from '@/hooks/use-business.js';
import Title from '@/components/core/shared/Title.jsx';
import { cn } from '@/lib/utils.js';
import { TbLayoutList, TbLink } from 'react-icons/tb';
import { AnimatePresence } from 'framer-motion';
import TableDetails from '@/components/core/templates/create/project/manage-data/TableDetails.jsx';
import { useEffect, useState } from 'react';

const ManageDataModal = () => {
  const isOpen = useTemplateStore((state) => state.template.isManageDataOpen);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {}, isLoading } = useGetDesignSource(business, id);
  const [current, setCurrent] = useState(source.tables?.[0]?.name);

  const table = source.tables?.find((t) => t.name === current);

  const handleClose = () => {
    updateTemplate({ isManageDataOpen: false });
  };

  useEffect(() => {
    if (source.tables?.length && !current) {
      setCurrent(source.tables[0].name);
    }
  }, [current, source.tables]);

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} padding={false} width={1100}>
      {isLoading ? (
        <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
          <Spinner size="lg" />
          <p className="mt-6">Just a moment</p>
        </div>
      ) : (
        <>
          {source ? (
            <div className="px-12 py-8">
              <Title title="Manage tables" className="mb-8" classNames={{ title: 'text-xl' }} />
              <div className="grid grid-cols-[260px_1fr] gap-6">
                <div className="flex flex-col space-y-3">
                  {source.tables?.map((t) => {
                    const relationships = source.relationships?.filter((r) => r.table === t.name) || [];
                    const references = source.relationships?.filter((r) => r.refTable === t.name) || [];
                    return (
                      <div
                        key={t.name}
                        className={cn(
                          'bg-default-100 px-6 py-4 rounded-2xl cursor-pointer transition-all duration-100',
                          { 'bg-primary-500 dark:bg-primary-100 text-white': current === t.name }
                        )}
                        onClick={() => setCurrent(t.name)}
                        tabIndex={0}
                      >
                        <h3 className="text-base leading-tight">{t.slug}</h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <Chip
                            size="sm"
                            className="text-md"
                            classNames={{ content: 'flex items-center space-x-1' }}
                            variant="flat"
                          >
                            <TbLayoutList size="14" />
                            <span>{t.columns.length}</span>
                          </Chip>
                          <Chip
                            color={relationships.length > 0 ? 'success' : 'default'}
                            size="sm"
                            className="text-md"
                            classNames={{ content: 'flex items-center space-x-1' }}
                            variant="flat"
                          >
                            <TbLink size="14" />
                            <span>{relationships.length}</span>
                          </Chip>
                          <Chip
                            color={references.length > 0 ? 'warning' : 'default'}
                            size="sm"
                            className="text-md"
                            classNames={{ content: 'flex items-center space-x-1' }}
                            variant="flat"
                          >
                            <TbLink size="14" />
                            <span>{references.length}</span>
                          </Chip>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <AnimatePresence mode="wait">{!!table && <TableDetails table={table} />}</AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="px-14 py-12">
              <NoData text="No data source configured for this project" />
            </div>
          )}
        </>
      )}
    </Drawer>
  );
};

export default ManageDataModal;
