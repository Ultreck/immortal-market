import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbSettings2 } from 'react-icons/tb';
import StandardBarCommonConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardBarCommonConfig.jsx';
import StandardPieCommonConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardPieCommonConfig.jsx';
import useDesignStore from '@/store/design.js';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';

const ChartConfig = ({ element }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[450px]' }}
      isOpen={tool === 'chart'}
      onOpenChange={(v) => (v ? openTool('chart') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Chart config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200 h-full max-h-[500px] overflow-y-auto block">
        <div className="px-8 py-6 w-full">
          <ErrorBoundary>
            <ChartData element={element} onClose={() => closeTool()} />
          </ErrorBoundary>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ChartData = ({ element }) => {
  return (
    <div>
      {['pie', 'pie-2', 'semi-pie', 'semi-pie-2'].includes(element.config.name) && (
        <StandardPieCommonConfig element={element} />
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
      ].includes(element.config.name) && <StandardBarCommonConfig element={element} />}
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
};

ChartConfig.propTypes = propTypes;

ChartData.propTypes = { ...propTypes, onClose: PropTypes.func };

export default ChartConfig;
