import useTemplateStore from '@/store/template.js';
import { Spinner } from '@nextui-org/react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useUpdateDesignSource } from '@/api/business.js';
import Options from '@/components/core/templates/create/project/modify-report/Options.jsx';
import Summary from '@/components/core/templates/create/project/modify-report/Summary.jsx';
import Combinations from '@/components/core/templates/create/project/modify-report/Combinations.jsx';
import PropTypes from 'prop-types';

const ModifyReport = ({ onNext, onPrev }) => {
  const toast = useToast();
  const [view, setView] = useState('options');
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const [data, setData] = useState({ type: '', summary: [], combinations: [] });
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);

  const handleSubmit = async (payload) => {
    try {
      await update({ selection: payload });
      onNext();
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  return (
    <>
      {isUpdateLoading ? (
        <div className="flex flex-col items-center justify-center h-full">
          <Spinner size="lg" />
          <p className="mt-6">Processing..</p>
        </div>
      ) : (
        <>
          {view === 'options' && (
            <Options
              value={data.type}
              onPrev={onPrev}
              onNext={(type) => {
                setData((v) => ({ ...v, type }));
                setView('summary');
              }}
            />
          )}
          {view === 'summary' && (
            <Summary
              value={data.summary}
              onPrev={() => setView('options')}
              onNext={(summary) => {
                setData((v) => ({ ...v, summary }));
                setView('combinations');
              }}
            />
          )}
          {view === 'combinations' && (
            <Combinations
              value={data.combinations}
              onPrev={() => setView('summary')}
              onNext={(combinations) => {
                setData((v) => ({ ...v, combinations }));
                handleSubmit({ ...data, combinations });
              }}
            />
          )}
        </>
      )}
    </>
  );
};

ModifyReport.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default ModifyReport;
