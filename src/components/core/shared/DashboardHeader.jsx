import PropTypes from 'prop-types';
import { Button } from '@nextui-org/react';
import { LuBell, LuHelpCircle } from 'react-icons/lu';
import AuthDropdown from '@/components/core/shared/AuthDropdown.jsx';
import { cn } from '@/lib/utils.js';

const DashboardHeader = ({ content, className }) => (
  <div className={cn('container', className)}>
    <div className="flex pt-5 pb-8 justify-between items-center">
      <div>{content}</div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <Button isIconOnly variant="light" aria-label="Notifications" className="text-base">
            <LuBell size="20" />
          </Button>
          <Button isIconOnly variant="light" aria-label="Notifications" className="text-base">
            <LuHelpCircle size="20" />
          </Button>
        </div>
        <AuthDropdown />
      </div>
    </div>
  </div>
);

DashboardHeader.propTypes = {
  content: PropTypes.element,
  className: PropTypes.string,
};

export default DashboardHeader;
