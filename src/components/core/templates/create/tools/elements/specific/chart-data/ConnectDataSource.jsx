import NoData from '@/components/ui/NoData';
import DataSource from './DataSource';
import useCurrentDesign from '@/hooks/template/use-current-design';
import PropTypes from 'prop-types';
import Title from '@/components/core/shared/Title';
import { TbPlugConnectedX } from 'react-icons/tb';

const ConnectDataSource = ({ element, onChange, onBack }) => {
  const { source, analysis } = useCurrentDesign();

  return (
    <div>
      <Title title="Data source" onBack={onBack} classNames={{ title: 'text-base font-medium', base: 'mb-6' }} />
      {!!source && !!analysis ? (
        <DataSource element={element} onChange={onChange} />
      ) : (
        <NoData icon={<TbPlugConnectedX size="28" />} text="No data source found" />
      )}
    </div>
  );
};

ConnectDataSource.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ConnectDataSource;
