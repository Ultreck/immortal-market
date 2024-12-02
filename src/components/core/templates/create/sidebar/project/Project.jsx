import { TbClock, TbDatabaseCog, TbReportAnalytics } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';
import { useParams } from 'react-router-dom';
import useBusiness from '@/hooks/use-business.js';
import { useGetDesign } from '@/api/business.js';
import { formatDistanceToNow } from 'date-fns';

const Project = () => {
  const { id } = useParams();
  const { id: business } = useBusiness();
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { data: { design } = {} } = useGetDesign(business, id);

  const handleModifyReport = () => {
    updateTemplate({ isModifyReportOpen: true });
  };

  const handleManageData = () => {
    updateTemplate({ isManageDataOpen: true });
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
          className="flex items-center space-x-3 text-center leading-tight bg-default-900/5 hover:bg-default-900/10 px-6 py-3 rounded-2xl cursor-pointer"
          tabIndex={0}
        >
          <TbReportAnalytics size="24" />
          <span className="text-md">Modify report</span>
        </div>
        <div
          onClick={handleManageData}
          className="flex items-center space-x-3 text-center leading-tight bg-default-900/5 hover:bg-default-900/10 px-6 py-3 rounded-2xl cursor-pointer"
          tabIndex={0}
        >
          <TbDatabaseCog size="24" />
          <span className="text-md">Manage data</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
