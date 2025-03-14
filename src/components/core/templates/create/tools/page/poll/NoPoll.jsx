import { useState } from 'react';
import { CgPoll } from 'react-icons/cg';
import CreatePoll from './CreatePoll';
import { Button } from '@heroui/react';
import PropTypes from 'prop-types';

const NoPoll = ({ page }) => {
  const [view, setView] = useState('empty');

  return (
    <div>
      {view === 'empty' && (
        <div className="px-12 py-12">
          <div className="w-16 h-16 bg-primary-500 flex items-center justify-center rounded-full text-white">
            <CgPoll size="28" />
          </div>
          <div className="text-base mt-8">
            <p className="mb-2">Create interactive polls to gather opinions:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Each page can have its own poll</li>
              <li>Customize with various options</li>
              <li>View real-time voting results</li>
            </ul>
          </div>
          <Button onPress={() => setView('create')} variant="solid" className="text-base px-4 mt-8" radius="full">
            Setup poll
          </Button>
        </div>
      )}
      {view === 'create' && <CreatePoll page={page} />}
    </div>
  );
};

NoPoll.propTypes = {
  page: PropTypes.string.isRequired,
};

export default NoPoll;
