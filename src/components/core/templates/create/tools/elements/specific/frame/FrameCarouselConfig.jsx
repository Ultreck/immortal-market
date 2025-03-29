import { cn, Switch } from '@heroui/react';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';

const FrameCarouselConfig = ({ element, onChange }) => {
  const handleChange = (config) => {
    onChange({ ...element, config: { ...element.config, ...config } });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-x-8">
        <p className="text-base">No. of slides</p>
        <NumberInput
          value={element.config.slides}
          onChange={(v) => handleChange({ slides: v })}
          aria-label="No. of slides"
          min={1}
        />
      </div>
      <div className="flex items-center justify-between space-x-8">
        <p className="text-base">Slides per view</p>
        <NumberInput
          value={element.config.slidesPerView}
          onChange={(v) => handleChange({ slidesPerView: v })}
          aria-label="Slides per view"
          min={1}
          step={0.1}
        />
      </div>
      <div className="flex items-center justify-between space-x-8">
        <p className="text-base">Slide speed</p>
        <NumberInput
          value={element.config.speed}
          onChange={(v) => handleChange({ speed: v })}
          aria-label="Slide speed"
          step={100}
          min={1}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-base">Loop</p>
        <Switch
          isSelected={!!element.config?.loop}
          onValueChange={(v) => handleChange({ loop: v })}
          classNames={{
            wrapper: 'p-0 h-4 overflow-visible',
            thumb: cn(
              'w-6 h-5 border-2 shadow-lg',
              'group-data-[hover=true]:border-primary',
              'group-data-[current=true]:ml-4',
              'group-data-[pressed=true]:w-7',
              'group-data-[current]:group-data-[pressed]:ml-4'
            ),
          }}
          size="sm"
        />
      </div>
      <div className="border border-default-200 rounded-2xl px-5 py-3">
        <div className="flex items-center justify-between">
          <p className="text-base">Autoplay</p>
          <Switch
            isSelected={!!element.config?.autoplay?.enabled}
            onValueChange={(v) => {
              onChange({
                ...element,
                config: {
                  ...element.config,
                  autoplay: {
                    ...(element?.config?.autoplay || {}),
                    enabled: v,
                  },
                },
              });
            }}
            classNames={{
              wrapper: 'p-0 h-4 overflow-visible',
              thumb: cn(
                'w-6 h-5 border-2 shadow-lg',
                'group-data-[hover=true]:border-primary',
                'group-data-[current=true]:ml-4',
                'group-data-[pressed=true]:w-7',
                'group-data-[current]:group-data-[pressed]:ml-4'
              ),
            }}
            size="sm"
          />
        </div>
        {!!element.config?.autoplay?.enabled && (
          <div className="mt-4">
            <div className="flex items-center justify-between space-x-8">
              <p className="text-base">Delay</p>
              <NumberInput
                value={element.config.autoplay?.delay}
                onChange={(v) => handleChange({ autoplay: { ...element.config.autoplay, delay: v } })}
                aria-label="Delay"
                step={100}
                min={0}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

FrameCarouselConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default FrameCarouselConfig;
