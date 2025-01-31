import { useState } from 'react';
import { Button, Tab, Tabs } from '@heroui/react';
import PropTypes from 'prop-types';
import { HiChevronLeft } from 'react-icons/hi';
import ExternalImages from '@/components/core/templates/create/tools/elements/specific/image/ExternalImages.jsx';
import UploadedImages from '@/components/core/templates/create/tools/elements/specific/image/UploadedImages.jsx';

const ImageSwap = ({ element, onChange, onBack }) => {
  const [tab, setTab] = useState('uploads');

  const handleClick = (src) => {
    onChange({ ...element, config: { ...element.config, src } });
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center mb-5 space-x-2">
        <Button onPress={onBack} variant="bordered" radius="full" isIconOnly size="sm">
          <HiChevronLeft size="20" />
        </Button>
        <h3 className="text-base font-semibold">Swap image</h3>
      </div>
      <Tabs
        variant="bordered"
        aria-label="Options"
        width="full"
        color="primary"
        radius="full"
        classNames={{
          base: 'mb-4',
          tab: 'text-base px-4',
        }}
        size="sm"
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="uploads" title="Uploads" className="text-base" />
        <Tab key="search" title="Search" className="text-base" />
      </Tabs>
      <div className="overflow-y-auto">
        {tab === 'search' && <ExternalImages onClick={handleClick} />}
        {tab === 'uploads' && <UploadedImages onClick={handleClick} />}
      </div>
    </div>
  );
};

ImageSwap.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ImageSwap;
