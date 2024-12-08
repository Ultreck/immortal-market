import { RiAlertLine } from 'react-icons/ri';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { Button } from '@nextui-org/react';
import useTemplateStore from '@/store/template.js';

const DataNotConfiguredOverlay = () => {
  const { source } = useCurrentDesign();
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);

  return (
    <>
      {!source?.selection && (
        <div className="absolute inset-0 z-20 group hover:bg-default-50/90 transition-background flex items-center justify-center">
          <div className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <RiAlertLine size="32" />
            <p className="max-w-[200px] text-center mt-6">
              Data source not configured. Please configure the data source for this project to unlock the editor.
            </p>
            <Button
              onClick={() => updateTemplate({ isModifyReportOpen: true })}
              radius="full"
              className="mt-6 text-base px-4"
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
