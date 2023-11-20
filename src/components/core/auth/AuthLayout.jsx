import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '@/components/core/shared/Logo.jsx';

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen md:min-h-0 md:h-screen flex flex-col md:grid md:grid-cols-12 md:overflow-hidden bg-slate-100/70">
      <div className="md:col-span-4">
        <div className="bg-[#11161b] text-white px-8 py-12 md:px-16 md:py-20 overflow-hidden pattern-1 h-full flex flex-col rounded-r-md">
          <Link to="/" className="text-[1.6rem] flex items-center mb-10 md:mb-16">
            <Logo light />
          </Link>
          <p className="text-xl md:text-[1.4rem] text-slate-300 max-w-[240px] !leading-snug">
            Get insights to make better business decisions
          </p>
        </div>
      </div>
      <div className="md:col-span-8 flex-1 flex flex-col overflow-y-auto">
        <div className="container my-auto">{children}</div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.any,
};

export default AuthLayout;
