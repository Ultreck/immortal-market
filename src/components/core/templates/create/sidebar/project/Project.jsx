import { TbClock, TbDatabaseCog } from 'react-icons/tb';
import { formatDistanceToNow } from 'date-fns';
import useProjectStore from '@/store/project.js';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { Button } from '@heroui/react';
import useDesignStore from '@/store/design';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import {
  formInitialData,
  pollInitialData,
  ProjectForm,
  ProjectPoll,
} from '@/components/core/templates/create/sidebar/project/ProjectForms.jsx';

import useBusiness from '@/hooks/use-business';
import { useGetComments } from '@/api/business';

const Project = () => {
  const { source } = useCurrentDesign();
  const design = useDesignStore((state) => state.design);
  const openProjectModal = useProjectStore((state) => state.openModal);
  const { id: business } = useBusiness();
  const activePage = useDesignStore((state) => state.activePage);
  const { data: { comments = [] } = {} } = useGetComments({ business, design: design.id });
  const _comments = comments.filter((comment) => comment.targetId === activePage && !comment.resolved);
  const elements = useDesignStore((state) => state.elements.filter((element) => element.page === state.activePage));

  const poll = elements?.find((e) => e.type === 'form' && e.config.name === 'poll');
  const form = elements?.find((e) => e.type === 'form' && e.config.name === 'form');

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
      <div className="space-y-3 mt-6">
        <>
          {poll ? (
            <ProjectPoll element={poll.id} />
          ) : (
            <DraggableElementWrapper
              element={{
                ...pollInitialData,
                id: crypto.randomUUID(),
                preview: (
                  <div className="border-2 text-sm w-full rounded-sm text-start justify-start bg-transparent border-default-300 py-[17px] px-3 ">
                    Polls (0)
                  </div>
                ),
              }}
            />
          )}
        </>
        <>
          {form ? (
            <ProjectForm element={form.id} />
          ) : (
            <DraggableElementWrapper
              element={{
                ...formInitialData,
                id: crypto.randomUUID(),
                preview: (
                  <div className="border-2 text-sm w-full rounded-sm text-start justify-start bg-transparent border-default-300 py-[17px] px-3 ">
                    Forms (0)
                  </div>
                ),
              }}
            />
          )}
        </>
        <Button
          radius="none"
          className="border-2 w-full rounded-sm text-start justify-start bg-transparent border-default-300 py-7 px-3 "
        >
          Comments ({_comments.length})
        </Button>
        <Button
          radius="none"
          className="border-2 w-full rounded-sm text-start justify-start bg-transparent border-default-300 py-7 px-3 "
        >
          Transition (0)
        </Button>
      </div>
    </div>
  );
};

export default Project;
