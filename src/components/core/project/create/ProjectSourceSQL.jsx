import Title from '@/components/core/shared/Title.jsx';
import { Button, Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';

const ProjectSourceSQL = ({ onNext, onPrev }) => {
  const handleSubmit = () => {
    onNext();
  };

  return (
    <div className="flex flex-col">
      <Title title="Connect to SQL" sub="Import data from your SQL database" className="mb-10" />
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-2">
          <p>Database type</p>
          <Select variant="bordered" size="lg" classNames={{ value: 'px-2' }} placeholder="Select one">
            {[
              { key: 'MySQL', name: 'MySQL' },
              { key: 'PostgreSQL', name: 'PostgreSQL' },
              { key: 'SQL Server', name: 'SQL Server' },
              { key: 'Oracle', name: 'Oracle' },
            ].map((type) => (
              <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                {type.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Host</p>
            <Input placeholder="Enter host" size="lg" variant="bordered" classNames={{ input: 'px-2' }} />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p>Database name</p>
            <Input placeholder="Enter database name" size="lg" variant="bordered" classNames={{ input: 'px-2' }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Username</p>
            <Input placeholder="Enter username" size="lg" variant="bordered" classNames={{ input: 'px-2' }} />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p>Password</p>
            <Input placeholder="Enter password" size="lg" variant="bordered" classNames={{ input: 'px-2' }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <p>Port</p>
            <Input placeholder="Enter port" size="lg" variant="bordered" classNames={{ input: 'px-2' }} />
          </div>
          <div className="grid grid-cols-1">
            <p>SSL</p>
            <Checkbox>Enable SSL</Checkbox>
          </div>
        </div>
      </div>
      <div className="mt-10 space-x-4 flex items-center">
        <Button
          onClick={onPrev}
          color="default"
          variant="bordered"
          radius="full"
          className="text-base px-6"
          startContent={<TbChevronLeft size="20" />}
        >
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

ProjectSourceSQL.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default ProjectSourceSQL;
