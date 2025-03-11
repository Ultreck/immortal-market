import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, useDisclosure } from '@heroui/react';
import { getImageLink } from '@/lib/utils.js';
import { TbDotsVertical, TbPencil, TbPhotoCircle, TbPresentation, TbTrash } from 'react-icons/tb';
import PropTypes from 'prop-types';
import DeleteDesignModal from '../templates/create/footer/DeleteDesignModal';

const DesignCard = ({ id, title, thumbnail, onClick }) => {
  const navigate = useNavigate();
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

  const options = [
    {
      key: 'edit',
      label: 'Edit',
      icon: <TbPencil size={20} />,
    },
    {
      key: 'present',
      label: 'Present',
      icon: <TbPresentation size={20} />,
    },
    {
      key: 'delete',
      label: 'Delete',
      icon: <TbTrash size={20} />,
    },
  ];

  return (
    <div className="group relative">
      <div
        onClick={() => (onClick ? onClick() : navigate(`/designs/${id}/edit`))}
        className="flex items-center justify-center p-5 bg-black/5 dark:bg-white/5 hover:bg-black/[.07] hover:dark:bg-white/[.07] rounded-2xl aspect-square cursor-pointer"
      >
        {thumbnail ? (
          <Image src={getImageLink(thumbnail)} alt={title} removeWrapper className="object-contain rounded-lg h-full" />
        ) : (
          <div className="">
            <TbPhotoCircle size="48" className="opacity-50" />
          </div>
        )}
      </div>
      <div className="mt-3 px-2 flex items-center justify-between">
        <h4 className="font-medium text-base leading-tight truncate">{title}</h4>
      </div>
      <Dropdown placement="bottom" size="lg">
        <DropdownTrigger>
          <button className="z-[2] absolute top-3 right-3 px-0 py-2 rounded-full bg-default-200 hover:bg-default-300 opacity-0 group-hover:opacity-100">
            <TbDotsVertical size={20} />
          </button>
        </DropdownTrigger>
        <DropdownMenu
          onAction={(key) => {
            if (key === 'edit') navigate(`/designs/${id}/edit`);
            if (key === 'present') navigate(`/designs/${id}/present`);
            if (key === 'delete') onDeleteOpen();
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

      <DeleteDesignModal id={id} isOpen={isDeleteOpen} onClose={onDeleteClose} />
    </div>
  );
};

DesignCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  onClick: PropTypes.func,
};

export default DesignCard;
