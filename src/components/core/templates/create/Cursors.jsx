import { memo } from 'react';
import useDesignStore from '@/store/design';
import { LuMousePointer2 } from 'react-icons/lu';

const Cursors = ({ page }) => {
  const cursors = useDesignStore((state) => state.cursors);
  const entries = Object.entries(cursors).filter(([, cursor]) => cursor.page === page);
  const collaborators = useDesignStore((state) => state.collaborators);

  return (
    <div>
      {entries.map(([user, cursor]) => {
        const collaborator = collaborators.find((c) => c._id === user);
        return (
          <div
            key={user}
            style={{
              transform: `translate(${cursor.position.x}px, ${cursor.position.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
            className="absolute top-0 left-0 pointer-events-none z-10"
          >
            <LuMousePointer2 fill={collaborator?.color} stroke={collaborator?.color} size="20" />
            <p className="whitespace-nowrap">
              {collaborator?.firstName} {collaborator?.lastName || ''}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Cursors);
