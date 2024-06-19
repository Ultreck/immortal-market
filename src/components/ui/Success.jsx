import { RiCheckboxCircleFill } from 'react-icons/ri';
import Button from '@/components/ui/Button.jsx';
import PropTypes from 'prop-types';

const Success = ({ text, subtext, buttonText = 'Close', onButtonClick, ...props }) => {
  return (
    <div className="flex flex-col items-center text-center py-10" {...props}>
      <RiCheckboxCircleFill size="70" className="text-teal-500" />
      <h2 className="text-2xl mt-10 font-medium">{text}</h2>
      <p className="mt-2 opacity-80 mx-auto">{subtext}</p>
      <Button color="black" onClick={onButtonClick} className="mt-10">
        {buttonText}
      </Button>
    </div>
  );
};

Success.propTypes = {
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Success;
