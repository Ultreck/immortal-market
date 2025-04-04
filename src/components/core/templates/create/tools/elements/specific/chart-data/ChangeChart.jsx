import { useMemo } from 'react';
import { standard } from '@/lib/design/charts.jsx';
import PropTypes from 'prop-types';
import { Button, addToast } from '@heroui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import useDesignStore from '@/store/design.js';

const ChangeChart = ({ element, onBack }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  const filteredCharts = useMemo(() => {
    const areKeysEqual = (keys1, keys2) => {
      if (!keys1 || !keys2) return false;
      const xEqual = keys1.x === keys2.x;
      const bothArrays = Array.isArray(keys1.y) && Array.isArray(keys2.y);
      const yEqual = bothArrays
        ? keys1.y.length === keys2.y.length && keys1.y.every((val, index) => val === keys2.y[index])
        : keys1.y === keys2.y;

      return xEqual && yEqual;
    };
    return standard.filter((chart) => {
      const chartKeys = chart.data.config.keys;
      return areKeysEqual(chartKeys, element.config.keys);
    });
  }, [element.config.keys]);

  return (
    <>
      <div className="flex items-center space-x-1 mb-6">
        <Button onPress={onBack} variant="bordered" className="mr-2" radius="full" isIconOnly size="sm">
          <RiArrowLeftSLine size="20" />
        </Button>
        <h2 className="text-lg">Change Chart</h2>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {filteredCharts.map((e) => (
          <div
            className="cursor-pointer rounded-2xl"
            key={e.id}
            onClick={() => {
              updateElement(element.id, { config: { ...element.config, name: e.data.config.name } }, true);
              addToast({
                title: 'Chart updated',
                description: 'The chart has been updated successfully',
                color: 'success',
              });
            }}
          >
            {e.preview}
            <p className="text-center">{e.data.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

ChangeChart.propTypes = {
  element: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ChangeChart;
