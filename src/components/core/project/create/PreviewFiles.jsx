import PropTypes from 'prop-types';
import useCreateProjectStore from '@/store/create-project.js';
import PreviewFilesCsv from '@/components/core/project/create/PreviewFilesCsv.jsx';
import PreviewFilesExcel from '@/components/core/project/create/PreviewFilesExcel.jsx';

const PreviewFiles = ({ onNext, onPrev }) => {
  const type = useCreateProjectStore((state) => state.data.type);

  return (
    <div>
      {type === 'csv' && <PreviewFilesCsv onNext={onNext} onPrev={onPrev} />}
      {type === 'xlsx' && <PreviewFilesExcel onNext={onNext} onPrev={onPrev} />}
    </div>
  );
};

PreviewFiles.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default PreviewFiles;
