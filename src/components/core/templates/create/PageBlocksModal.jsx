import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { useDeleteDesignBlock, useGetDesignBlocks } from '@/api/business.js';
import { addToast, Button, Chip, Image, Skeleton } from '@heroui/react';
import useBusiness from '@/hooks/use-business.js';
import { cn, getImageLink } from '@/lib/utils.js';
import useTemplateStore from '@/store/template.js';
import NoData from '@/components/ui/NoData.jsx';
import { useState } from 'react';
import { TbTrash } from 'react-icons/tb';

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
                return <PageBlockItem block={block} key={block._id} onClick={() => handleClick(block)} />;
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

const PageBlockItem = ({ block, onClick }) => {
  const { mutateAsync: deleteBlock, isPending: isDeleteBlockPending } = useDeleteDesignBlock();

  const handleDelete = async () => {
    try {
      await deleteBlock(block.id);
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  return (
    <div key={block._id} className="break-inside-avoid mb-6 relative group">
      <div
        className={cn(
          'absolute top-4 right-4 z-[2] group-hover:opacity-100 opacity-0 transition-opacity duration-300',
          { 'opacity-100': isDeleteBlockPending }
        )}
      >
        <Button
          onPress={handleDelete}
          isIconOnly
          radius="full"
          size="sm"
          isLoading={isDeleteBlockPending}
          color="danger"
        >
          <TbTrash size="18" />
        </Button>
      </div>
      <Image
        onClick={onClick}
        src={getImageLink(block.thumbnail)}
        className="w-full object-cover rounded-2xl cursor-pointer hover:brightness-90 border z-[1] relative"
      />
    </div>
  );
};

PageBlocksModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
PageBlockItem.propTypes = {
  block: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PageBlocksModal;
