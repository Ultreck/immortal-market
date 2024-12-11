import { TbClock, TbDatabaseCog } from 'react-icons/tb';
import { formatDistanceToNow } from 'date-fns';
import useProjectStore from '@/store/project.js';
import useCurrentDesign from '@/hooks/template/use-current-design.js';

const Project = () => {
  const { design, source } = useCurrentDesign();
  const openProjectModal = useProjectStore((state) => state.openModal);

  const handleModifyReport = () => {
    openProjectModal({ restore: true, source });
  };

  return (
    <div className="px-2">
      <h2 className="text-lg font-semibold">{design.title}</h2>
      <p className="mt-4 opacity-75 italic">{design.description || 'No description'}</p>
      <div className="space-y-4 mt-4">
        <div className="flex items-center">
          <TbClock size="24" />
          <span className="text-md ml-2">
            Last updated <span className="italic">{formatDistanceToNow(new Date(design.updatedAt))}</span>
          </span>
        </div>
      </div>
      <div className="space-y-3 mt-6">
        <div
          onClick={handleModifyReport}
          className="flex items-center space-x-3 leading-tight bg-warning-400 text-black hover:brightness-110 px-5 py-4 rounded-2xl cursor-pointer"
          tabIndex={0}
        >
          <div>
            <TbDatabaseCog size="32" />
          </div>
          <span className="text-base text-left leading-[1.2]">Click here to finish setting up your data</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
