import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { cn, Input } from '@nextui-org/react';
import { TbSearch } from 'react-icons/tb';
import { useState } from 'react';

const StockQueries = ({ isOpen, onClose, stocks }) => {
  const [query, setQuery] = useState('');
  const filtered = stocks.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));
  const [data, updateData] = useState('');

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Stock Queries">
      <div className="relative mb-6">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          name="query"
          id="query"
          size="sm"
          classNames={{ input: 'text-base', base: 'transition-all duration-300', inputWrapper: 'h-14' }}
          startContent={<TbSearch size="24" className="mx-2 opacity-30" />}
          placeholder="Search..."
          radius="full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {(query.length ? filtered : stocks).map((c) => {
          return (
            <div
              key={c.key}
              tabIndex="0"
              onClick={() => {
                onClose();
                setQuery('');
                return updateData(c.key);
              }}
              className={cn(
                'flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl px-4 py-6 text-center',
                data === c.key
                  ? 'bg-primary-200'
                  : 'border border-default-200 hover:bg-default-200 dark:border-default-100'
              )}
            >
              <div>{c.icon}</div>
              <p>{c.name}</p>
            </div>
          );
        })}
      </div>
    </Drawer>
  );
};

StockQueries.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  stocks: PropTypes.array,
};

export default StockQueries;
