import { Avatar } from '@heroui/react';
import ReactCountryFlag from 'react-country-flag';
import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

const CountryFlag = ({ code, rounded = false, className }) => {
  
  return (
    <>
      {!rounded ? (
        <ReactCountryFlag countryCode={code} svg className={cn('!h-auto overflow-hidden rounded-lg', className)} />
      ) : (
        <Avatar
          alt={code}
          className={cn('h-6 w-6', className)}
          src={`https://flagcdn.com/${code?.toLowerCase()}.svg`}
        />
      )}
    </>
  );
};

CountryFlag.propTypes = {
  code: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  className: PropTypes.string,
};

export default CountryFlag;
