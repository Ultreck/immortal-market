import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown.jsx';
import PropTypes from 'prop-types';
import Logo from '@/components/core/shared/Logo.jsx';

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-slate-100/70 min-h-screen">
      <div className="py-6 bg-[#11161b] text-white relative">
        <div className="absolute inset-0 bg-cover bg-grid opacity-30 z-[1]" />
        <div className="container !max-w-5xl relative z-[2]">
          <div className="flex items-center">
            <Link to="/" className="text-[1.4rem] flex items-center">
              <Logo light />
            </Link>
            <div className="flex items-center space-x-5 md:space-x-10 ml-auto">
              <UserDropdown />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
