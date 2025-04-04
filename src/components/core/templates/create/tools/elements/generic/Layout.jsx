import { Button, NumberInput, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { RxDimensions } from 'react-icons/rx';
import useDesignStore from '@/store/design.js';

const Layout = ({ element }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);
  const updateElement = useDesignStore((state) => state.updateElement);

  const onChange = (updates) => {
    updateElement(element.id, updates, true);
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[320px] !max-h-[550px] overflow-y-auto block' }}
      isOpen={tool === 'layout'}
      onOpenChange={(v) => (v ? openTool('layout') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Layout" className="text-base">
          <RxDimensions size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full space-y-4">
          <div className="flex items-center justify-between">
            <p>Width:</p>
            <NumberInput
              labelPlacement="outside"
              classNames={{ base: 'w-[120px]', input: 'px-1' }}
              value={element.size.width}
              onValueChange={(e) => onChange({ size: { ...element.size, width: Number(e) } })}
              minValue={1}
              aria-label="Width"
            />
          </div>
          <div className="flex items-center justify-between">
            <p>Height:</p>
            <NumberInput
              labelPlacement="outside"
              classNames={{ base: 'w-[120px]', input: 'px-1' }}
              value={element.size.height}
              onValueChange={(e) => onChange({ size: { ...element.size, height: Number(e) } })}
              minValue={1}
              aria-label="Height"
            />
          </div>
          <div className="flex items-center justify-between">
            <p>X:</p>
            <NumberInput
              labelPlacement="outside"
              classNames={{ base: 'w-[120px]', input: 'px-1' }}
              value={element.position.x}
              onValueChange={(e) => onChange({ position: { ...element.position, x: Number(e) } })}
              aria-label="X"
            />
          </div>
          <div className="flex items-center justify-between">
            <p>Y:</p>
            <NumberInput
              labelPlacement="outside"
              classNames={{ base: 'w-[120px]', input: 'px-1' }}
              value={element.position.y}
              onValueChange={(e) => onChange({ position: { ...element.position, y: Number(e) } })}
              aria-label="Y"
            />
          </div>
          <div className="flex items-center justify-between">
            <p>Rotate:</p>
            <NumberInput
              labelPlacement="outside"
              classNames={{ base: 'w-[120px]', input: 'px-1' }}
              value={element.rotation}
              onValueChange={(e) => onChange({ rotation: Number(e) })}
              aria-label="Rotate"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

Layout.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Layout;
