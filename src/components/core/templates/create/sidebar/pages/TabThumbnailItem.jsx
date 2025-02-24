import useTemplateStore from '@/store/template.js';
import { Card, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from '@heroui/react';
import { cn, getImageLink } from '@/lib/utils.js';
import { TbChevronDown, TbChevronUp, TbCopyPlus, TbDots, TbTrash } from 'react-icons/tb';
import { useActions } from '@/hooks/template/use-actions.js';
import PropTypes from 'prop-types';

const TabThumbnailItem = ({ page, thumbnail, active, index, onClick, ...props }) => {
  const totalPages = useTemplateStore((state) => state.template.pages.length);
  const { handleAction } = useActions({ id: page.id });

  const options = [
    {
      key: 'page-duplicate',
      label: 'Duplicate',
      icon: <TbCopyPlus size="16" />,
    },
    {
      key: 'page-delete',
      label: 'Delete',
      icon: <TbTrash size="16" />,
    },
  ];

  if (totalPages > 1) {
    if (index < totalPages - 1) {
      options.unshift({
        key: 'page-move-down',
        label: 'Move down',
        icon: <TbChevronDown size="18" />,
      });
    }
    if (index > 0) {
      options.unshift({
        key: 'page-move-up',
        label: 'Move up ',
        icon: <TbChevronUp size="18" />,
      });
    }
  }

  return (
    <Card
      as="div"
      {...props}
      className={cn(
        'flex p-2 items-center relative w-full border-0 aspect-square justify-center bg-default-200/60 dark:bg-default-100 rounded-2xl cursor-pointer group ',
        { '!bg-primary-200': active }
      )}
      shadow="none"
      isPressable
      onPress={onClick}
      tabIndex={0}
    >
      <Dropdown placement="bottom" size="lg">
        <DropdownTrigger>
          <button className="z-[2] absolute top-2 right-1.5 px-1 py-0 rounded-full bg-primary-100 hover:bg-primary-50 opacity-0 group-hover:opacity-100">
            <TbDots size={20} />
          </button>
        </DropdownTrigger>
        <DropdownMenu
          onAction={(key) => {
            if (key === 'page-move-down') handleAction('page-move-down');
            if (key === 'page-move-up') handleAction('page-move-up');
            if (key === 'page-duplicate') handleAction('page-duplicate');
            if (key === 'page-delete') handleAction('page-delete');
          }}
        >
          {options.map((action) => (
            <DropdownItem
              key={action.key}
              startContent={action.icon}
              textValue={action.label}
              classNames={{
                base: 'rounded-xl !m-0',
              }}
            >
              <span className="text-base">{action.label}</span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      {!!thumbnail && (
        <Image src={getImageLink(thumbnail)} removeWrapper className="object-cover rounded-xl h-full z-[1] w-full" />
      )}
      <Chip className="absolute bottom-1 left-2 z-[2] w-[5] h-[5] p-0" size="lg">
        {index + 1}
      </Chip>
    </Card>
  );
};

TabThumbnailItem.propTypes = {
  page: PropTypes.object.isRequired,
  thumbnail: PropTypes.string,
  active: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func,
};

export default TabThumbnailItem;
