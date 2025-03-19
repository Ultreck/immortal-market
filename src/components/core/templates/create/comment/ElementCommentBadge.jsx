import { Avatar, Tooltip } from '@heroui/react';
import { RiChat3Fill } from 'react-icons/ri';
import { getImageLink } from '@/lib/utils.js';
import useBusiness from '@/hooks/use-business.js';
import useDesignStore from '@/store/design.js';
import { useGetComments } from '@/api/business.js';
import PropTypes from 'prop-types';

const ElementCommentBadge = ({ element }) => {
  const { id: business } = useBusiness();
  const design = useDesignStore((state) => state.id);
  const updateStore = useDesignStore((state) => state.updateStore);
  const selectElements = useDesignStore((state) => state.selectElements);
  const { data: { comments = [] } = {} } = useGetComments({ business, design });
  const filtered = comments.filter((comment) => comment.targetId === element.id && !comment.resolved);

  const handleClick = () => {
    updateStore({
      activeComment: filtered[0],
      isCommentsOpen: true,
      commentsTargetId: element.id,
    });
    selectElements([element.id]);
  };

  return (
    <>
      {filtered.length > 0 ? (
        <Tooltip content="View comments" placement="top" delay="500">
          <button
            onClick={handleClick}
            className="absolute -top-1.5 left-[calc(100%_+_8px)] rounded-full w-[40px] h-[40px] leading-none group"
          >
            <RiChat3Fill
              size="20"
              className="w-full h-full text-primary-100 dark:text-primary-100 absolute inset-0 z-[1] hover:text-primary-200"
            />
            {filtered.length > 1 ? (
              <div className="font-semibold relative z-[2] bg-white/20 dark:bg-white/20 w-[24px] h-[24px] m-auto rounded-full flex items-center justify-center pointer-events-none text-sm">
                <span className="text-primary-700 dark:text-primary-900 translate-y-[1px]">{filtered.length}</span>
              </div>
            ) : (
              <Avatar
                src={getImageLink(filtered[0].author.image, { bucket: 'statisense' })}
                name={`${filtered[0].author.firstName} ${filtered[0].author.lastName}`}
                classNames={{
                  base: '!w-[24px] !h-[24px] text-lg relative z-[2] m-auto pointer-events-none',
                }}
                size="sm"
              />
            )}
          </button>
        </Tooltip>
      ) : null}
    </>
  );
};

ElementCommentBadge.propTypes = {
  element: PropTypes.object.isRequired,
};

export default ElementCommentBadge;
