import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus } from 'react-icons/tb';

const NumberValueTool = ({ value, handleChange, valuesArray }) => {
  return (
    <>
      <p htmlFor="strokeWidth" className="text-left mb-1">
        Stroke Width
      </p>
      <div className="gap-2 w-full flex items-center">
        <Button
          isIconOnly
          variant="flat"
          className="text-base"
          isDisabled={!value}
          onClick={() => {
            if (!value) return;
            handleChange(Math.max(1, +value - 1));
          }}
        >
          <TbMinus size="20" />
        </Button>
        <Autocomplete
          type="number"
          isClearable={false}
          classNames={{ base: 'w-[80px] text-base' }}
          allowsEmptyCollection={false}
          inputValue={value}
          onInputChange={(v) => {
            if (+v <= 0) return;
            handleChange(+v);
          }}
          onSelectionChange={(v) => {
            handleChange(+v);
          }}
        >
          {valuesArray.map((n) => (
            <AutocompleteItem key={n} value={n}>
              {n}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Button
          isIconOnly
          variant="flat"
          className="text-base"
          isDisabled={!value}
          onClick={() => {
            if (!value) return;
            handleChange(Math.max(1, +value + 1));
          }}
        >
          <TbPlus size="20" />
        </Button>
      </div>
    </>
  );
};

NumberValueTool.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  valuesArray: PropTypes.array,
};

export default NumberValueTool;

