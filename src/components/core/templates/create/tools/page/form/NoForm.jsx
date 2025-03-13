import { useState } from 'react';
import { RxInput } from 'react-icons/rx';
import CreateForm from './CreateForm';
import { Button } from '@heroui/react';
import PropTypes from 'prop-types';

const NoForm = ({ page }) => {
  const [view, setView] = useState('empty');

  return (
    <div>
      {view === 'empty' && (
        <div className="px-12 py-12">
          <div className="w-16 h-16 bg-primary-500 flex items-center justify-center rounded-full">
            <RxInput size="28" />
          </div>
          <div className="text-base mt-8">
            <p className="mb-2">Create interactive forms to collect information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Each page can have its own form</li>
              <li>Customize with various field types</li>
              <li>Add validation rules as needed</li>
            </ul>
          </div>
          <Button onPress={() => setView('create')} variant="flat" className="text-base px-4 mt-8" radius="full">
            Setup form
          </Button>
        </div>
      )}
      {view === 'create' && <CreateForm page={page} />}
    </div>
  );
};

NoForm.propTypes = {
  page: PropTypes.string.isRequired,
};

export default NoForm;
