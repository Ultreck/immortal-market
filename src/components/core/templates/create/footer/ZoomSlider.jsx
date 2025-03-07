import useDesignStore from '@/store/design.js';
import { Slider } from '@heroui/react';

const ZoomSlider = () => {
  const scale = useDesignStore((state) => state.scale);
  const updateStore = useDesignStore((state) => state.updateStore);

  return (
    <div className="flex items-center space-x-3">
      <Slider
        aria-label="zoom"
        color="foreground"
        className="w-40"
        value={scale * 100}
        onChange={(v) => updateStore({ scale: v / 100 })}
        maxValue={300}
        minValue={20}
        showOutline
        classNames={{
          thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
          track: 'border-s-default-300',
          filler: 'bg-gradient-to-r from-default-300 to-default-400',
        }}
        size="sm"
      />
      <p>{Math.ceil(scale * 100)}%</p>
    </div>
  );
};

export default ZoomSlider;
