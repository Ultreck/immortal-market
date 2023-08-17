import { forwardRef } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

const Checkbox = forwardRef(({ id, children, disabled, className, ...props }, ref) => {
  return (
    <label className={ classNames('flex items-start', className) }>
      <input
        ref={ ref }
        className={ classNames(
          "w-4 h-4 mt-1 text-primary-600 bg-gray-100 rounded-md border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
          { 'opacity-60 pointer-events-none': disabled }
        ) }
        id={ id } type="checkbox" { ...props }
      />
      {
        !!children &&
        <span className="ml-2">
          { children }
        </span>
      }
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any
};

export default Checkbox;
