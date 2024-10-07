import NumberInput from '@/components/ui/NumberInput';
import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import PropTypes from 'prop-types';
import { TbChartPie, TbRotate, TbRotate2 } from 'react-icons/tb';

const Rotate = ({ element, onChange }) => {
  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[350px] !max-h-[550px] overflow-y-auto block' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbRotate2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full space-y-4">
          <div className="flex items-center justify-between">
            <p>Width:</p>
            <NumberInput value={element.width} onChange={(e) => onChange({ ...element, width: Number(e) })} min={0} max={1000} />
          </div>
          <div className="flex items-center justify-between">
            <p>Height:</p>
            <NumberInput value={element.height} onChange={(e) => onChange({ ...element, height: Number(e) })} min={0} max={1000} />
          </div>
          <div className="flex items-center justify-between">
            <p>X:</p>
            <NumberInput value={element.x} onChange={(e) => onChange({ ...element, x: Number(e) })}  />
          </div>
          <div className="flex items-center justify-between">
            <p>Y:</p>
            <NumberInput value={element.y} onChange={(e) => onChange({ ...element, y: Number(e) })} />
          </div>
          <div className="flex items-center justify-between">
            <p>Rotate:</p>
            <NumberInput value={element.rotate} onChange={(e) => onChange({ ...element, rotate: Number(e) })} />
          </div>
        </div>
      </PopoverContent>
    </Popover>

  )
}

Rotate.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Rotate