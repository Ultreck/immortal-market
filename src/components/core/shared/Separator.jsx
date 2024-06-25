import { Fragment } from 'react';
import PropType from 'prop-types';

const Separator = ({ separatorText }) => (
  <Fragment>
    <div className="flex items-center space-x-2 w-full mt-10">
      <div className="whitespace-nowrap dark:text-gray-500">{separatorText}</div>
      <span className="w-full h-1 border-t border-slate-300 dark:border-slate-800 mt-[0.4rem]"></span>
    </div>
  </Fragment>
);

Separator.propTypes = {
  separatorText: PropType.string,
};

export default Separator;
