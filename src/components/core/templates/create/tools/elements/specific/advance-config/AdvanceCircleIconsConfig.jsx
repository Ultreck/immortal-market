import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';

const AdvanceCircleIconsConfig = ({ element, onChange }) => {
  // const { handleSubmit, control } = useForm({
  //   defaultValues: {
  //     json: JSON.stringify(element.config.data, null, 2),
  //   },
  // });
  //
  // const onSubmit = async (values) => {
  //   const { json } = values;
  //   const data = JSON.parse(json);
  //   onChange({ ...element, config: { ...element.config, data } });
  // };

  return (
    <div>
      <div className="flex justify-between">
        <p className="my-auto">Number of Circles: </p>
        <AutoCompleteNumberInput
          onChange={(v) =>
            onChange({
              ...element,
              config: { ...element.config, circles: Number(v) },
            })
          }
          value={element.config.circles}
          min={1}
          max={element.config.data.length}
          ariaLabel="No of Circles to Show"
        />
      </div>
      {/*<div className="text">{"There's no settings for this chart"}</div>*/}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="space-y-6">
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
          </div>

          <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
            Apply
          </Button>
        </div>
      </form> */}
    </div>
  );
};

AdvanceCircleIconsConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceCircleIconsConfig;
