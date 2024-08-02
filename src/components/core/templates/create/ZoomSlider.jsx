import useTemplateStore from '@/store/template.js';
import { Slider } from '@nextui-org/react';

const ZoomSlider = () => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const scale = useTemplateStore((state) => state.template.scale);

  return (
    <div className="flex items-center space-x-3">
      <Slider
        color="foreground"
        className="w-40"
        value={scale * 100}
        onChange={(v) => updateTemplate({ scale: v / 100 })}
        maxValue={300}
        minValue={20}
        showOutline
        classNames={{
          thumb: 'before:hidden after:hidden',
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
