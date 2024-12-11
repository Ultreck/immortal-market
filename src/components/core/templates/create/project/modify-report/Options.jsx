import { useState } from 'react';
import Title from '@/components/core/shared/Title.jsx';
import { Button, Card } from '@nextui-org/react';
import { cn } from '@/lib/utils.js';
import { TbChevronLeft, TbChevronRight, TbCircleCheckFilled, TbForms, TbRobot } from 'react-icons/tb';
import PropTypes from 'prop-types';

const Options = ({ value, onPrev, onNext }) => {
  const [type, setType] = useState(value);

  const handleSubmit = () => {
    onNext(type);
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto px-12 py-10">
        <Title
          title="Hi there, I'm here to assist you with your report"
          sub="Pick an option below to get started"
          classNames={{
            base: 'mb-10',
            title: 'text-3xl font-semibold max-w-sm leading-8',
            sub: 'mt-4',
          }}
        />
        <div className="mt-10 grid grid-cols-2 gap-6">
          <Card
            isPressable
            onPress={() => {
              setType('manual');
            }}
            shadow="none"
            className={cn(
              'text-left border border-default-900/10 hover:bg-default-900/5 rounded-2xl px-8 py-10 cursor-pointer relative transition-all duration-300',
              { 'border-2 border-green-500': type === 'manual' }
            )}
          >
            <TbForms size="40" />
            <h4 className="text-xl font-semibold mt-4 leading-tight">Configure report manually</h4>
            <p className="mt-2 opacity-80">This is the most flexible option, but requires more technical</p>
            <TbCircleCheckFilled
              size="28"
              className={cn('absolute top-4 right-4 text-green-500 opacity-0 transition-opacity duration-300', {
                'opacity-100': type === 'manual',
              })}
            />
          </Card>
          <Card
            isPressable
            onPress={() => setType('auto')}
            shadow="none"
            isDisabled
            className={cn(
              'text-left border border-default-900/10 hover:bg-default-900/5 rounded-2xl px-8 py-10 cursor-pointer relative transition-all duration-300 disabled',
              { 'border-2 border-green-500': type === 'auto' }
            )}
          >
            <TbRobot size="40" />
            <h4 className="text-xl font-semibold mt-4 leading-tight">Generate a quick report</h4>
            <p className="mt-2 opacity-80">Let Immortal AI do the heavy lifting for you, but requires more time</p>
            <TbCircleCheckFilled
              size="28"
              className={cn('absolute top-4 right-4 text-green-500 opacity-0 transition-opacity duration-300', {
                'opacity-100': type === 'auto',
              })}
            />
          </Card>
        </div>
      </div>
      <div className="px-12 py-4 border-t border-default-200 flex items-center space-x-3">
        <Button
          onClick={onPrev}
          radius="full"
          variant="bordered"
          className="text-base px-6"
          startContent={<TbChevronLeft size="20" />}
        >
          Back
        </Button>
        <Button
          isDisabled={type === ''}
          onClick={handleSubmit}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

Options.propTypes = {
  value: PropTypes.string.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Options;
