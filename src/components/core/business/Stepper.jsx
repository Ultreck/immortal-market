import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { IconChartBar, IconFile, IconGrid3x3, IconTable } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const Stepper = ({ onNextStep, currentPage }) => {
  return (
    <Breadcrumbs onAction={onNextStep} className='mb-10'>
      <BreadcrumbItem isCurrent={currentPage === 'Details'} key={'Details'} startContent={<IconGrid3x3 />}>
        Details
      </BreadcrumbItem>

      <BreadcrumbItem isCurrent={currentPage === 'Upload Files'} key={'Upload Files'} startContent={<IconFile />}>
        Upload Files
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent={currentPage === 'Tables Report'} key={'Tables Report'} startContent={<IconTable />}>
        Tables Report
      </BreadcrumbItem>
      <BreadcrumbItem
        isCurrent={currentPage === 'Charts Dashboard'}
        key={'Charts Dashboard'}
        startContent={<IconChartBar />}
      >
        Charts Dashboard
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};

Stepper.propTypes = {
  onNextStep: PropTypes.func,
  currentPage: PropTypes.string,
};

export default Stepper;

