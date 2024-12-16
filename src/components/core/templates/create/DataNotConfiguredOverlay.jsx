import { RiAlertLine } from 'react-icons/ri';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { Button } from '@nextui-org/react';
import useProjectStore from '@/store/project.js';

const DataNotConfiguredOverlay = () => {
  const { source } = useCurrentDesign();
  const openProjectModal = useProjectStore((state) => state.openModal);

  return (
    <>
      {!source?.selection?.combinations?.length && (
        <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-b from-transparent to-white/100 text-black py-12 opacity-0 hover:opacity-100 transition-all duration-300">
          <div className="w-full flex items-center justify-center space-x-4">
            <RiAlertLine size="32" />
            <p className="max-w-[300px] ml-6">
              Data source not configured. Please configure the data source for this project to unlock the editor.
            </p>
            <Button
              onClick={() => openProjectModal({ restore: true, source })}
              radius="full"
              className="text-base px-4"
            >
              Configure
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default DataNotConfiguredOverlay;
