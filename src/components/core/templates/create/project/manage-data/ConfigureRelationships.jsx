import Title from '@/components/core/shared/Title.jsx';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useGetDesignSource } from '@/api/business.js';
import { cn } from '@/lib/utils.js';
import { Chip } from '@nextui-org/react';
import { TbLayoutList, TbLink } from 'react-icons/tb';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TableDetails from '@/components/core/templates/create/project/manage-data/TableDetails.jsx';

const ConfigureRelationships = () => {
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);
  const [current, setCurrent] = useState(source.tables?.[0]?.name);

  const table = source.tables.find((t) => t.name === current);

  return (
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
                className={cn('border px-6 py-4 rounded-2xl cursor-pointer transition-all duration-100', {
                  'border-primary-500 border-l-2 border-b-2': current === t.name,
                })}
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
  );
};

ConfigureRelationships.propTypes = {
  onBack: PropTypes.func,
};

export default ConfigureRelationships;
