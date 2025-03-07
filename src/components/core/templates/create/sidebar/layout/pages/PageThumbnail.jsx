import useDesignStore from '@/store/design.js';
import { Card, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from '@heroui/react';
import { cn, getImageLink } from '@/lib/utils.js';
import { TbChevronDown, TbChevronUp, TbCopyPlus, TbDots, TbTrash } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const PageThumbnail = forwardRef(({ page, thumbnail, active, onClick, style, ...props }, ref) => {
  const totalPages = useDesignStore((state) => state.pages.length);
  const duplicatePage = useDesignStore((state) => state.duplicatePage);
  const deletePage = useDesignStore((state) => state.deletePage);
  const movePageDown = useDesignStore((state) => state.movePageDown);
  const movePageUp = useDesignStore((state) => state.movePageUp);

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
    if (page.order < totalPages - 1) {
      options.unshift({
        key: 'page-move-down',
        label: 'Move down',
        icon: <TbChevronDown size="18" />,
      });
    }
    if (page.order > 0) {
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
      ref={ref}
      style={style}
      className={cn(
        'flex p-2 items-center relative w-full border-0 h-[130px] justify-center bg-black/5 dark:bg-white/5 rounded-2xl cursor-pointer group ',
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
            if (key === 'page-move-down') movePageDown(page.id);
            if (key === 'page-move-up') movePageUp(page.id);
            if (key === 'page-duplicate') duplicatePage(page.id);
            if (key === 'page-delete') deletePage(page.id);
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
        {page.order}
      </Chip>
    </Card>
  );
});

PageThumbnail.displayName = 'PageThumbnail';

PageThumbnail.propTypes = {
  page: PropTypes.object.isRequired,
  thumbnail: PropTypes.string,
  active: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default PageThumbnail;
