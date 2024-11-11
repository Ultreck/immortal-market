import { useGetTemplates } from '@/api/business.js';
import { Image, Input, Popover, PopoverContent, PopoverTrigger, Skeleton, useDisclosure } from '@nextui-org/react';
import { TbPhotoCircle, TbSearch } from 'react-icons/tb';
import { getImageLink } from '@/lib/utils.js';
import ApplyTemplate from '@/components/core/templates/create/sidebar/build/ApplyTemplate.jsx';
import PropTypes from 'prop-types';

const Templates = () => {
  const { data: { designs = [] } = {}, isLoading: isDeignsLoading } = useGetTemplates();

  return (
    <div>
      <Input
        type="text"
        name="query"
        id="query"
        classNames={{
          input: 'text-base',
          base: 'transition-all duration-300 w-full',
          inputWrapper: 'h-12 bg-white/[.1] group-hover:bg-white/15 focus-within:!bg-white/15',
        }}
        startContent={<TbSearch size="24" className="mx-1 opacity-30" />}
        placeholder="Search.."
        radius="full"
      />
      {isDeignsLoading ? (
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {designs.map((design) => (
            <TemplateItem key={design._id} design={design} />
          ))}
        </div>
      )}
    </div>
  );
};

const TemplateItem = ({ design }) => {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <Popover
      placement="right"
      showArrow
      offset={10}
      classNames={{ content: 'w-[300px]' }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <PopoverTrigger>
        {design.thumbnails.length ? (
          <Image
            src={getImageLink(design.thumbnails[0])}
            alt={design.title}
            removeWrapper
            className="w-full h-full object-cover rounded-xl aspect-square cursor-pointer"
          />
        ) : (
          <div className="bg-white/10 hover:bg-white/15 cursor-pointer rounded-xl px-6 py-4 flex items-center justify-center aspect-square">
            <TbPhotoCircle size="32" className="opacity-50" />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <ApplyTemplate id={design._id} onClose={onOpenChange} />
      </PopoverContent>
    </Popover>
  );
};

TemplateItem.propTypes = {
  design: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnails: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Templates;
