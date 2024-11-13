import { Button, cn, Popover, PopoverContent, PopoverTrigger, Switch } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbSettings2 } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';
import NumberInput from '@/components/ui/NumberInput.jsx';

const FrameCarouselConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  const handleChange = (config) => {
    onChange({ ...element, config: { ...element.config, ...config } });
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'carousel'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'carousel' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-8">
              <p className="text-base">No. of slides</p>
              <NumberInput
                value={element.config.slides}
                onChange={(v) => handleChange({ slides: v })}
                ariaLabel="No. of slides"
                min={1}
              />
            </div>
            <div className="flex items-center justify-between space-x-8">
              <p className="text-base">Slides per view</p>
              <NumberInput
                value={element.config.slidesPerView}
                onChange={(v) => handleChange({ slidesPerView: v })}
                ariaLabel="Slides per view"
                min={1}
                step={0.1}
              />
            </div>
            <div className="flex items-center justify-between space-x-8">
              <p className="text-base">Slide speed</p>
              <NumberInput
                value={element.config.speed}
                onChange={(v) => handleChange({ speed: v })}
                ariaLabel="Slide speed"
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
                      ariaLabel="Delay"
                      step={100}
                      min={0}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

FrameCarouselConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default FrameCarouselConfig;
