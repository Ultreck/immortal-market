import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import LabelConfig from '../../../../elements/charts/standard/helpers/LabelConfig';
import useDesignStore from '@/store/design';

const AdvanceLinearChartConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-x-5">
        <p className="text-base">Value font size:</p>
        <AutoCompleteNumberInput
          value={element.config.fontSize}
          onChange={(v) => updateElement(element.id, { config: { ...element.config, fontSize: Number(v) } }, true)}
          min={1}
          max={1000}
          aria-label="fontSize"
        />
      </div>
      <LabelConfig element={element} remove={['position', 'font-family']} />
    </div>
  );
};

AdvanceLinearChartConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceLinearChartConfig;
