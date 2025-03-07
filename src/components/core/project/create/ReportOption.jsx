import { useState } from 'react';
import Title from '@/components/core/shared/Title.jsx';
import { addToast, Button, Card } from '@heroui/react';
import { cn } from '@/lib/utils.js';
import { TbChevronRight, TbCircleCheckFilled, TbForms, TbRobot } from 'react-icons/tb';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business.js';
import useDesignStore from '@/store/design';
import { useAnalyze, useAutoGenerate, useUpdateDesignSource } from '@/api/business.js';
import useCurrentDesign from '@/hooks/template/use-current-design.js';

const ReportOption = ({ onNext, onClose }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { source } = useCurrentDesign();
  const [type, setType] = useState(source?.selection?.type || '');
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);
  const { mutateAsync: autoGenerate, isPending: isAutoGenerateLoading } = useAutoGenerate(business, id);
  const { mutateAsync: analyze, isPending: isAnalyzing } = useAnalyze(business, id);

  const handleSubmit = async () => {
    try {
      await update({ selection: { type } });
      if (type === 'auto') await handleAnalyze();
      onNext();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  const handleAnalyze = async () => {
    try {
      await autoGenerate(null);
      await analyze(null);
      onClose();
      window.location.reload();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto px-12 py-10">
        <Title
          title="How would you like to generate your report?"
          sub="Pick an option below to get started"
          classNames={{
            base: 'mb-10',
            title: 'text-3xl font-semibold max-w-sm leading-8',
            sub: 'mt-4',
          }}
        />
        <div className="mt-10 grid grid-cols-2 gap-6">
          <Card
            isPressable
            isDisabled={isUpdateLoading || isAutoGenerateLoading || isAnalyzing}
            onPress={() => setType('manual')}
            shadow="none"
            className={cn(
              'text-left border border-default-900/10 hover:bg-default-900/5 rounded-2xl px-8 py-10 cursor-pointer relative transition-all duration-300',
              { 'border-2 border-green-500': type === 'manual' }
            )}
          >
            <TbForms size="40" />
            <h4 className="text-xl font-semibold mt-4 leading-tight">Configure report manually</h4>
            <p className="mt-2 opacity-80">This is the most flexible option, but requires more technical knowledge</p>
            <TbCircleCheckFilled
              size="28"
              className={cn('absolute top-4 right-4 text-green-500 opacity-0 transition-opacity duration-300', {
                'opacity-100': type === 'manual',
              })}
            />
          </Card>
          <Card
            isPressable
            isDisabled={isUpdateLoading || isAutoGenerateLoading || isAnalyzing}
            onPress={() => setType('auto')}
            shadow="none"
            className={cn(
              'text-left border border-default-900/10 hover:bg-default-900/5 rounded-2xl px-8 py-10 cursor-pointer relative transition-all duration-300',
              { 'border-2 border-green-500': type === 'auto' }
            )}
          >
            <TbRobot size="40" />
            <h4 className="text-xl font-semibold mt-4 leading-tight">Generate with AI</h4>
            <p className="mt-2 opacity-80">Let Immortal AI do the heavy lifting for you, but requires more time</p>
            <TbCircleCheckFilled
              size="28"
              className={cn('absolute top-4 right-4 text-green-500 opacity-0 transition-opacity duration-300', {
                'opacity-100': type === 'auto',
              })}
            />
          </Card>
        </div>
      </div>
      <div className="px-12 py-4 border-t border-default-200 flex items-center space-x-3">
        <Button
          isDisabled={!type}
          onPress={handleSubmit}
          isLoading={isUpdateLoading || isAutoGenerateLoading || isAnalyzing}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

ReportOption.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ReportOption;
