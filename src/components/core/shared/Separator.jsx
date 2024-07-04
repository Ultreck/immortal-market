import { Fragment } from 'react';
import PropType from 'prop-types';

const Separator = ({ text }) => (
  <Fragment>
    <div className="flex items-center space-x-2 w-full mt-10">
      <div className="whitespace-nowrap font-medium">{text}</div>
      <span className="w-full h-1 border-t border-default-300 dark:border-default-100 mt-[0.4rem]"></span>
    </div>
  </Fragment>
);

Separator.propTypes = {
  text: PropType.string,
};

export default Separator;
