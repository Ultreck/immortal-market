import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus } from 'react-icons/tb';

const NumberValueTool = ({ value, handleChange, valuesArray, title }) => {
  return (
    <div>
      <p className="text-left mb-1">{title}</p>
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
          aria-label={title}
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
            <AutocompleteItem key={n} value={n} textValue={n.toString()}>
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
    </div>
  );
};

NumberValueTool.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  valuesArray: PropTypes.array,
};

export default NumberValueTool;
