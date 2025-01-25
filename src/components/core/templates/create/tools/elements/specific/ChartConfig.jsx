import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbSettings2 } from 'react-icons/tb';
import StandardStackedBarConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardStackedBarConfig.jsx';
import StandardBarCommonConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardBarCommonConfig.jsx';
import StandardPieCommonConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardPieCommonConfig.jsx';
import StandardAltBarConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardAltBarConfig.jsx';
import StandardMultipleBarConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardMultipleBarConfig.jsx';
import StandardBubbleChartConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardBubbleChartConfig.jsx';
import useTemplateStore from '@/store/template.js';

const ChartConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
      isOpen={openTool === 'chart'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'chart' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Chart config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full">
          <ChartData element={element} onChange={onChange} onClose={() => updateTemplate({ openTool: null })} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ChartData = ({ element, onChange }) => {
  return (
    <div>
      {element.config.name === 'stacked-bar' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.config.name === 'stacked-bar-vertical' && (
        <StandardStackedBarConfig element={element} onChange={onChange} />
      )}
      {element.config.name === 'line-area' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.config.name === 'line-area-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.config.name === 'line-bar' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.config.name === 'area-bar' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.config.name === 'area-bar-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.config.name === 'line-bar-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.config.name === 'bar' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'bubble' && <StandardBubbleChartConfig element={element} onChange={onChange} />}
      {element.config.name === 'scatter' && <StandardBubbleChartConfig element={element} onChange={onChange} />}
      {element.config.name === 'area' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'area-multiple' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.config.name === 'line' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'line-multiple' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.config.name === 'bar-not-sep' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'vertical-bar' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'vertical-bar-no-sep' && (
        <StandardBarCommonConfig element={element} onChange={onChange} />
      )}
      {element.config.name === 'bar-multiple' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.config.name === 'bar-multiple-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.config.name === 'pie' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'semi-pie' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'semi-circle' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'doughnut' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'doughnut-standard' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'doughnut-crazy' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'alt-bar' && <StandardAltBarConfig element={element} onChange={onChange} />}
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
