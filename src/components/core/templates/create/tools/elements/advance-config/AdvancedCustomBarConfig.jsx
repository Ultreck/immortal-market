import { capitalize, getKeysFromJson, isValidJsonArray } from '@/lib/utils';
import { Button, Checkbox, Select, SelectItem, Switch, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const AdvancedCustomBarConfig = ({ element, onChange }) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
      ...Object.keys(element.config.keys).reduce((acc, key) => {
        acc[key] = element.config.keys[key];
        return acc;
      }, {}),
    },
  });

  const keys = getKeysFromJson(watch().json);

  const onSubmit = async (values) => {
    const { json } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...element.config, data } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-2">
        <Controller
          name="json"
          control={control}
          rules={{
            required: 'A valid JSON array is required',
            validate: (value) => isValidJsonArray(value),
          }}
          render={({ field, fieldState: { error } }) => {
            const message = error?.type === 'validate' ? 'Invalid JSON array' : error?.message;
            return (
              <Textarea
                classNames={{ inputWrapper: 'px-5 py-5' }}
                minRows="10"
                label="Paste JSON Array Here.."
                bordered
                {...field}
                errorMessage={message}
                isInvalid={!!message}
              />
            );
          }}
        />
        <div className="grid grid-cols-2 gap-2 mt-6">
          {Object.keys(element.config.keys).map((name) => {
            return (
              <Controller
                key={name}
                name={name}
                control={control}
                rules={{ required: `${name} is required` }}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    name={field.name}
                    label={capitalize(name)}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Select one"
                    size="lg"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    {keys.map((key) => (
                      <SelectItem key={key} classNames={{ title: 'text-base px-2' }}>
                        {key}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
            );
          })}
        </div>
        <div className="mt-6">
          <Controller
            name="orientation"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Select
                name={field.name}
                label="Orientation"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Select one"
                size="lg"
                selectedKeys={element.config.orientation ? [element.config.orientation] : []}
                onChange={(e) => onChange({ ...element, config: { ...element.config, orientation: e.target.value } })}
                errorMessage={error?.message}
                isInvalid={!!error?.message}
                classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                disableEmptySelection={true}
              >
                <SelectItem key="vertical" classNames={{ title: 'text-base px-2' }}>
                  Vertical
                </SelectItem>
                <SelectItem key="horizontal" classNames={{ title: 'text-base px-2' }}>
                  Horizontal
                </SelectItem>
              </Select>
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="axisPosition"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Select
                name={field.name}
                label="axisPosition"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Select one"
                size="lg"
                selectedKeys={element.config.axisPosition ? [element.config.axisPosition] : []}
                onChange={(e) =>
                  onChange({
                    ...element,
                    config: { ...element.config, axisPosition: e.target.value },
                  })
                }
                errorMessage={error?.message}
                isInvalid={!!error?.message}
                classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                disableEmptySelection={true}
              >
                <SelectItem key="front" classNames={{ title: 'text-base px-2' }}>
                  Front
                </SelectItem>
                <SelectItem key="behind" classNames={{ title: 'text-base px-2' }}>
                  Behind
                </SelectItem>
              </Select>
            )}
          />
        </div>
        <div className="grid grid-cols-2 mt-6 gap-4">
          <div>
            <Checkbox
              isSelected={element.config.curvedEnd}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, curvedEnd: v } })}
            >
              Curved End
            </Checkbox>
          </div>
          <div>
            <Checkbox
              isSelected={element.config.haveHeader}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, haveHeader: v } })}
            >
              Have Header
            </Checkbox>
          </div>
          <div>
            <Checkbox
              isSelected={element.config.showIcon}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showIcon: v } })}
            >
              Show Icon
            </Checkbox>
          </div>
          <div>
            <Checkbox
              isSelected={element.config.tooltipToEachBar}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, tooltipToEachBar: v } })}
            >
              Tooltip To Each Bar
            </Checkbox>
          </div>
          <div>
            <Checkbox
              isSelected={element.config.tooltipToCard}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, tooltipToCard: v } })}
            >
              Tooltip To Card
            </Checkbox>
          </div>
        </div>

        <div className="mt-6">
          <Switch
            name="backgroundImage.enabled"
            variant="bordered"
            size="lg"
            onChange={(e) =>
              onChange({ ...element, config: { ...element.config, backgroundImage: { enabled: !!e.target.checked } } })
            }
          >
            Enable Background Image
          </Switch>
        </div>

        {element.config.backgroundImage.enabled && (
          <div className="mt-6">
            <Textarea
              placeholder="Enter Background Image URL"
              size="lg"
              variant="bordered"
              className="w-full mt-2"
              onChange={(e) =>
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    backgroundImage: { ...element.config.backgroundImage, url: e.target.value },
                  },
                })
              }
              value={element.config.backgroundImage.url}
              minRows={1}
              disabled={!element.config.backgroundImage.enabled}
            />
          </div>
        )}

        <div className="mt-6">
          <div className="mt-6">
            <Textarea
              placeholder="No of Bars to Show"
              label="No of Bars to Show"
              size="lg"
              variant="bordered"
              className="w-full mt-2"
              onChange={(e) =>
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    numberOfBarsToShow: +e.target.value,
                  },
                })
              }
              value={element.config.numberOfBarsToShow}
              minRows={1}
            />
          </div>
        </div>
      </div>
      <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
        Apply
      </Button>
    </form>
  );
};

AdvancedCustomBarConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedCustomBarConfig;
