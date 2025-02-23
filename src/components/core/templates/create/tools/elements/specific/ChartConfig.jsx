import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbSettings2 } from 'react-icons/tb';
import StandardBarCommonConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardBarCommonConfig.jsx';
import StandardPieCommonConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardPieCommonConfig.jsx';
import useTemplateStore from '@/store/template.js';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';

const ChartConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[450px]' }}
      isOpen={openTool === 'chart'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'chart' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Chart config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200 h-full max-h-[500px] overflow-y-auto block">
        <div className="px-8 py-6 w-full">
          <ErrorBoundary>
            <ChartData element={element} onChange={onChange} onClose={() => updateTemplate({ openTool: null })} />
          </ErrorBoundary>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ChartData = ({ element, onChange }) => {
  return (
    <div>
      {['pie', 'pie-2', 'semi-pie', 'semi-pie-2'].includes(element.config.name) && (
        <StandardPieCommonConfig element={element} onChange={onChange} />
      )}
      {[
        'bar',
        'bar-stacked',
        'bar-multiple',
        'line',
        'line-multiple',
        'area',
        'area-multiple',
        'line-area',
        'line-bar',
        'alt-bar',
        'bubble',
        'scatter',
      ].includes(element.config.name) && <StandardBarCommonConfig element={element} onChange={onChange} />}
    </div>
  );
};

const propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

ChartConfig.propTypes = propTypes;

ChartData.propTypes = { ...propTypes, onBack: PropTypes.func, onClose: PropTypes.func };

export default ChartConfig;
