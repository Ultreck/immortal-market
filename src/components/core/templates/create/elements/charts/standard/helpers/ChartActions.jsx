import { Button } from '@heroui/react';
import { LuEye, LuSettings, LuTable } from 'react-icons/lu';
import useDesignStore from '@/store/design';
import PropTypes from 'prop-types';
import ElementActionsWrapper from '../../../../ElementActionsWrapper';
import { cn } from '@/lib/utils';

const ChartActions = ({ element, onInsightsOpen }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);

  return (
    <ElementActionsWrapper element={element}>
      <Button
        onPress={onInsightsOpen}
        variant="flat"
        className="text-base px-4"
        size="sm"
        radius="full"
        startContent={<LuEye size="16" />}
      >
        Insights
      </Button>
      <Button
        isIconOnly
        variant="light"
        aria-label="Chart config"
        className="text-base"
        radius="full"
        size="sm"
        onPress={() => openTool(element.type === 'chart-s' ? 'chart' : 'advanced-chart')}
        isDisabled={tool === 'chart'}
      >
        <LuSettings size="20" />
      </Button>
      <Button
        isIconOnly
        variant="light"
        radius="full"
        size="sm"
        onPress={() => openTool('chart-data/data')}
        isDisabled={tool === 'chart-data/data'}
      >
        <LuTable size="18" />
      </Button>
      <button
        type="button"
        className={cn(
          'gap-2 text-sm font-medium transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-transparent min-w-9 group flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-transparent p-0 hover:bg-transparent focus-visible:bg-transparent',
          { 'disabled pointer-events-none': tool === 'colors' }
        )}
        tabIndex="0"
        onClick={() => openTool('colors')}
        disabled={tool === 'colors'}
      >
        <div className="h-6 w-6 overflow-hidden rounded-full">
          <div className="grid h-12 w-12 -translate-x-1/4 -translate-y-1/4 grid-cols-2 overflow-hidden rounded-md transition-all ease-in-out group-hover:rotate-45 rotate-0 gap-[2px]">
            {element.config.colors?.slice(0, 4).map((color, index) => (
              <span key={index} className="flex h-6 w-6" style={{ backgroundColor: color }} />
            ))}
            {element.config.colors?.length < 4 &&
              Array(4 - element.config.colors?.length)
                .fill(null)
                .map((_, index) => <span key={index} className="flex h-6 w-6 bg-default-200/70" />)}
            <span className="sr-only">Default</span>
          </div>
        </div>
      </button>
    </ElementActionsWrapper>
  );
};

ChartActions.propTypes = {
  element: PropTypes.object.isRequired,
  onInsightsOpen: PropTypes.func.isRequired,
};

export default ChartActions;
