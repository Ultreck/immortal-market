import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '@heroui/react';
import Present from '@/components/core/templates/create/Present.jsx';
import { useAuth } from '@/hooks/use-auth';
import useDesignStore from '@/store/design';
import { useMount } from 'react-use';
import { useUnmount } from 'usehooks-ts';

const PresentDesignPage = () => {
  const params = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const design = useDesignStore((state) => state.design);
  const initialized = useDesignStore((state) => state.initialized);
  const joinDesign = useDesignStore((state) => state.joinDesign);
  const leaveDesign = useDesignStore((state) => state.leaveDesign);
  const initializeSocket = useDesignStore((state) => state.initializeSocket);

  useMount(() => {
    initializeSocket({
      onDesignNotFound: () => navigate('/'),
    });
    joinDesign(params.id, user.id);
  });

  useUnmount(() => {
    leaveDesign();
  });

  if (!initialized || !design) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center text-center">
        <Spinner size="lg" />
        <p className="mt-6">Loading design..</p>
      </div>
    );
  }

  return <Present />;
};

export default PresentDesignPage;
