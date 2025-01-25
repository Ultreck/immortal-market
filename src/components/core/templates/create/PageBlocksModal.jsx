import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { useGetDesignBlocks } from '@/api/business.js';
import { Chip, Image, Skeleton } from '@heroui/react';
import useBusiness from '@/hooks/use-business.js';
import { getImageLink } from '@/lib/utils.js';
import useTemplateStore from '@/store/template.js';
import NoData from '@/components/ui/NoData.jsx';
import { useState } from 'react';

const categories = [
  { key: 'headlines', label: 'Headlines' },
  { key: 'charts', label: 'Charts & Graphs' },
  { key: 'statistics', label: 'Statistic & Figures' },
  { key: 'tables', label: 'Tables' },
  { key: 'shapes', label: 'Shapes' },
  { key: 'infographics', label: 'Infographics' },
];

const PageBlocksModal = ({ isOpen, onClose }) => {
  const { id: business } = useBusiness();
  const [category, setCategory] = useState('all');
  const { data: { blocks = [] } = {}, isLoading: isBlocksLoading } = useGetDesignBlocks({
    business,
    type: 'page',
    category: category === 'all' ? undefined : category,
  });
  const addPage = useTemplateStore((state) => state.addPage);

  const handleClick = (block) => {
    addPage({
      id: crypto.randomUUID(),
      title: 'Untitled',
      width: block.data.width,
      height: block.data.height,
      style: block.data.style,
      elements: block.data.elements,
    });
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Page blocks">
      <div className="flex flex-row flex-wrap gap-3 mb-8">
        <Chip
          size="lg"
          onClick={() => setCategory('all')}
          color={category === 'all' ? 'primary' : 'default'}
          className="cursor-pointer hover:brightness-90"
        >
          All
        </Chip>
        {categories.map((c) => {
          return (
            <Chip
              key={c.key}
              size="lg"
              onClick={() => setCategory(c.key)}
              color={c.key === category ? 'primary' : 'default'}
              className="cursor-pointer hover:brightness-90"
            >
              {c.label}
            </Chip>
          );
        })}
      </div>
      {isBlocksLoading ? (
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
        </div>
      ) : (
        <>
          {blocks.length ? (
            <div className="columns-2 gap-6 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit">
              {blocks.map((block) => {
                return (
                  <div key={block._id} className="break-inside-avoid mb-6">
                    <Image
                      onClick={() => handleClick(block)}
                      src={getImageLink(block.thumbnail)}
                      className="w-full object-cover rounded-2xl cursor-pointer hover:brightness-90 border"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <NoData text="No templates found" />
          )}
        </>
      )}
    </Drawer>
  );
};

PageBlocksModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PageBlocksModal;
