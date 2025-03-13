import DesignBuilder from '@/components/core/templates/create/DesignBuilder.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { Spinner } from '@heroui/react';
import { useAuth } from '@/hooks/use-auth';
import useDesignStore from '@/store/design.js';
import { useMount } from 'react-use';
import { useUnmount } from 'usehooks-ts';
import ChatWidget from '@/components/core/templates/create/ChatWidget';

const EditDesignPage = () => {
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
      <div className="h-screen w-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <DesignBuilder />
      <ChatWidget />
    </>
  );
};

export default EditDesignPage;
