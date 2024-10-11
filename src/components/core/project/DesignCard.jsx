import { Link } from 'react-router-dom';
import { Image } from '@nextui-org/react';
import { getImageLink } from '@/lib/utils.js';
import { TbPhotoCircle } from 'react-icons/tb';
import PropTypes from 'prop-types';

const DesignCard = ({ id, title, thumbnail }) => {
  return (
    <div>
      <Link
        to={`/designs/${id}/edit`}
        className="flex items-center justify-center p-5 bg-black/5 dark:bg-white/5 hover:bg-black/[.07] hover:dark:bg-white/[.07] rounded-2xl aspect-square cursor-pointer"
      >
        {thumbnail ? (
          <Image src={getImageLink(thumbnail)} alt={title} removeWrapper className="object-contain rounded-lg" />
        ) : (
          <div className="">
            <TbPhotoCircle size="48" className="opacity-50" />
          </div>
        )}
      </Link>
      <div className="mt-4 px-2 flex items-center justify-between">
        <h4 className="font-medium text-lg leading-tight">{title}</h4>
      </div>
    </div>
  );
};

DesignCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
};

export default DesignCard;
