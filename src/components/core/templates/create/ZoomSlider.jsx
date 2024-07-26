import useTemplateStore from '@/store/template.js';
import { Slider } from '@nextui-org/react';

const ZoomSlider = () => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const zoom = useTemplateStore((state) => state.template.zoom);

  return (
    <Slider
      color="foreground"
      className="w-40"
      value={zoom * 100}
      onChange={(zoom) => updateTemplate({ zoom: zoom / 100 })}
      maxValue={120}
      minValue={20}
      showOutline
      classNames={{
        thumb: 'before:hidden after:hidden',
        track: 'border-s-default-300',
        filler: 'bg-gradient-to-r from-default-300 to-default-400',
      }}
      size="sm"
    />
  );
};

export default ZoomSlider;
