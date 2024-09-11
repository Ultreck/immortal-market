import { Button } from '@nextui-org/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const DynamicFields = ({ onBack }) => {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <Button variant="bordered" radius="full" size="sm" isIconOnly onClick={onBack}>
          <RiArrowLeftSLine size="20" />
        </Button>
        <h3 className="text-base font-medium">Dynamic fields</h3>
      </div>
    </div>
  );
};

DynamicFields.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default DynamicFields;
