import PropTypes from 'prop-types';

const MessageInput = ({ placeholder, id, type, value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={onChange}
        id={id}
        type={type}
        autoComplete={id}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100
          w-full
          rounded-full
          focus:outline-none
          dark:bg-zinc-800
          dark:text-white
        "
      />
    </div>
  );
};

MessageInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MessageInput;
