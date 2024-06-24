import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';
import { BreadcrumbItem, Breadcrumbs, Divider } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const DashboardTitle = ({ text, breadcrumbs = [], className, after, ...props }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="py-6">
          <div className={cn('w-full flex items-center justify-between', className)}>
            <div>
              <h2 {...props} className="font-semibold text-2xl">
                {text}
              </h2>
              {!!breadcrumbs.length && (
                <Breadcrumbs
                  radius="full"
                  variant="bordered"
                  className="mt-2"
                  classNames={{ list: 'px-3 py-1 shadow-none' }}
                >
                  {breadcrumbs.map(({ text, href }, index) => (
                    <BreadcrumbItem key={index} onClick={() => navigate(href)}>
                      {text}
                    </BreadcrumbItem>
                  ))}
                </Breadcrumbs>
              )}
            </div>
            {after}
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

DashboardTitle.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  after: PropTypes.element,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default DashboardTitle;
