import Drawer from '@/components/ui/Drawer.jsx';
import useTemplateStore from '@/store/template.js';
import { Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useUpdateDesignSource } from '@/api/business.js';
import NoData from '@/components/ui/NoData.jsx';
import Stepper from '@/components/ui/Stepper.jsx';
import Options from '@/components/core/templates/create/project/modify-report/Options.jsx';
import Summary from '@/components/core/templates/create/project/modify-report/Summary.jsx';
import Combinations from '@/components/core/templates/create/project/modify-report/Combinations.jsx';
import { LuCombine, LuOption, LuText } from 'react-icons/lu';
import useCurrentDesign from '@/hooks/template/use-current-design.js';

const ModifyReportModal = () => {
  const toast = useToast();
  const isOpen = useTemplateStore((state) => state.template.isModifyReportOpen);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const [view, setView] = useState('options');
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { source, isSourceLoading } = useCurrentDesign();
  const [data, setData] = useState({ type: '', summary: [], combinations: [] });
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);

  const steps = [
    {
      key: 'options',
      title: 'Options',
      icon: <LuOption size="16" />,
    },
    {
      key: 'summary',
      title: 'Summary',
      icon: <LuText size="16" />,
    },
    {
      key: 'combinations',
      title: 'Combinations',
      icon: <LuCombine size="16" />,
    },
  ];

  useEffect(() => {
    if (!isSourceLoading) {
      if (!source?.selection) {
        updateTemplate({ isModifyReportOpen: true });
      } else {
        setView('combinations');
        setData(source?.selection);
      }
    }
  }, [isSourceLoading, source?.selection, updateTemplate]);

  const handleClose = () => {
    if (source?.selection) setView('combinations');
    else setView('options');
    updateTemplate({ isModifyReportOpen: false });
  };

  const handleSubmit = async (payload) => {
    await handleSaveSelection(payload);
  };

  const handleSaveSelection = async (payload) => {
    try {
      await update({ selection: payload });
      handleClose();
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} padding={false} width={1000}>
      {isSourceLoading ? (
        <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
          <Spinner size="lg" />
          <p className="mt-6">Just a moment</p>
        </div>
      ) : (
        <>
          {source ? (
            <div className="grid grid-cols-[280px_1fr] h-full">
              <div className="border-r border-default-200 dark:border-default-100 py-12 px-12 h-full bg-[#f4f5f6] dark:bg-[#0b161f]">
                <Stepper
                  current={view}
                  steps={steps}
                  onChange={(key) => setView(key)}
                  classNames={{ circle: 'ring-[#f4f5f6] dark:ring-[#0b161f]' }}
                />
              </div>
              {isUpdateLoading ? (
                <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
                  <Spinner size="lg" />
                  <p className="mt-6">Processing..</p>
                </div>
              ) : (
                <>
                  {view === 'options' && (
                    <Options
                      value={data.type}
                      onDone={(type) => {
                        setData((v) => ({ ...v, type }));
                        setView('summary');
                      }}
                    />
                  )}
                  {view === 'summary' && (
                    <Summary
                      value={data.summary}
                      onBack={() => setView('options')}
                      onDone={(summary) => {
                        setData((v) => ({ ...v, summary }));
                        setView('combinations');
                      }}
                    />
                  )}
                  {view === 'combinations' && (
                    <Combinations
                      value={data.combinations}
                      onBack={() => setView('summary')}
                      onDone={(combinations) => {
                        setData((v) => ({ ...v, combinations }));
                        handleSubmit({ ...data, combinations });
                      }}
                    />
                  )}
                </>
              )}
            </div>
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

export default ModifyReportModal;
