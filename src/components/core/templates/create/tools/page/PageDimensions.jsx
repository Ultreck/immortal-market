import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { TbDimensions } from 'react-icons/tb';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';

const PageDimensions = ({ page, onChange }) => {
  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbDimensions size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-64 space-y-4">
          <div>
            <p className="text-base mb-2">Height</p>
            <NumberInput
              onChange={(v) => {
                onChange({ size: { ...page.size, height: v } });
              }}
              value={page.size.height}
              min={200}
              step={10}
              ariaLabel="Page height"
              fullWidth
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

PageDimensions.propTypes = {
  page: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PageDimensions;
