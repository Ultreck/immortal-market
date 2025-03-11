import { cn, getImageLink } from '@/lib/utils';
import useDesignStore from '@/store/design';
import { Avatar, Tooltip } from '@heroui/react';
import { TbCircleFilled } from 'react-icons/tb';

const CollaboratorsList = () => {
  const collaborators = useDesignStore((state) => state.collaborators);
  const connected = useDesignStore((state) => state.connected);

  return (
    <div className="absolute top-3 left-4 px-3 bg-white shadow dark:bg-default-100 rounded-full py-1 z-10 flex items-center space-x-2">
      <TbCircleFilled size="10" className={cn('text-green-600', { 'text-red-600': !connected })} />
      <div className="flex items-center -space-x-2">
        {collaborators.map((collaborator) => (
          <div key={collaborator._id}>
            <Tooltip content={`${collaborator.firstName} ${collaborator.lastName}`}>
              <Avatar
                src={getImageLink(collaborator.image, { bucket: 'statisense' })}
                name={`${collaborator.firstName} ${collaborator.lastName}`}
                classNames={{ base: 'size-9 border-3 border-white dark:border-default-100' }}
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorsList;
