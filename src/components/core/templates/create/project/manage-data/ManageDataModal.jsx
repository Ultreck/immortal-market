import useTemplateStore from '@/store/template.js';
import Drawer from '@/components/ui/Drawer.jsx';
import { useGetDesignSource } from '@/api/business.js';
import { Spinner } from '@nextui-org/react';
import NoData from '@/components/ui/NoData.jsx';
import useBusiness from '@/hooks/use-business.js';
import ConfigureRelationships from '@/components/core/templates/create/project/manage-data/ConfigureRelationships.jsx';

const ManageDataModal = () => {
  const isOpen = useTemplateStore((state) => state.template.isManageDataOpen);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {}, isLoading } = useGetDesignSource(business, id);

  const handleClose = () => {
    updateTemplate({ isManageDataOpen: false });
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} padding={false} width={1100}>
      {isLoading ? (
        <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
          <Spinner size="lg" />
          <p className="mt-6">Just a moment</p>
        </div>
      ) : (
        <>
          {source ? (
            <ConfigureRelationships />
          ) : (
            <div className="px-14 py-12">
              <NoData text="No data source configured for this project" />
            </div>
          )}
        </>
      )}
    </Drawer>
  );
};

export default ManageDataModal;
