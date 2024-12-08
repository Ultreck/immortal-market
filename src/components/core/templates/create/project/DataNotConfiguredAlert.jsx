import { RiPlugLine } from 'react-icons/ri';
import { Button } from '@nextui-org/react';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import useTemplateStore from '@/store/template.js';

const DataNotConfiguredAlert = () => {
  const { source } = useCurrentDesign();
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);

  return (
    <>
      {!source?.selection && (
        <div className="z-[10] absolute top-0 left-1/2 -translate-x-1/2 flex flex-row items-center justify-center text-center w-[800px] h-max bg-warning-500 text-white px-8 py-2 rounded-b-xl rounded-t">
          <RiPlugLine size="28" />
          <p className="text-base ml-3">Finish configuring the data source for this project to unlock the editor</p>
          <Button
            onClick={() => updateTemplate({ isModifyReportOpen: true })}
            radius="full"
            className="ml-auto text-base px-4"
            size="sm"
          >
            Configure
          </Button>
        </div>
      )}
    </>
  );
};

export default DataNotConfiguredAlert;
