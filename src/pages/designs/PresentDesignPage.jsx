import { useGetDesign } from '@/api/business.js';
import { useParams } from 'react-router-dom';
import useBusiness from '@/hooks/use-business.js';
import { Spinner } from '@nextui-org/react';
import Present from '@/components/core/templates/create/Present.jsx';

const PresentDesignPage = () => {
  const { id } = useParams();
  const { id: businessId } = useBusiness();
  const { data: { design } = {}, isLoading: isTemplatesLoading } = useGetDesign(businessId, id);

  return (
    <>
      {isTemplatesLoading ? (
        <div className="h-screen w-full flex flex-col justify-center items-center text-center">
          <Spinner size="lg" />
          <p className="mt-6">Loading design..</p>
        </div>
      ) : (
        <>{!!design && <Present pages={design.data.pages} />}</>
      )}
    </>
  );
};

export default PresentDesignPage;
