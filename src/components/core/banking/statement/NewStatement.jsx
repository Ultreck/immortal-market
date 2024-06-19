import { useState } from 'react';
import { IconBuildingBank, IconChevronRight, IconPdf, IconWorld } from '@tabler/icons-react';
import Drawer from '@/components/ui/Drawer.jsx';
import AnalyzePdf from './AnalyzePdf.jsx';
import AnalyzeMono from './AnalyzeMono.jsx';
import AnalyzeMbs from './AnalyzeMbs.jsx';
import PropTypes from 'prop-types';

const NewStatement = ({ isOpen, onClose }) => {
  const [view, setView] = useState('options');

  const handleClose = () => {
    onClose();
    setView('options');
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      {view === 'options' && (
        <>
          <h2 className="font-bold mb-12 text-xl">New Analysis</h2>
          <div className="space space-y-4">
            <div
              onClick={() => setView('pdf')}
              tabIndex="0"
              className="border border-gray-300 rounded-2xl px-7 md:px-8 py-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
            >
              <div>
                <div className="w-12 md:w-16">
                  <IconPdf className="text-red-600" size="28" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Upload bank statement file</h4>
                <p className="opacity-70 leading-tight mt-1">Manually upload your statement as a pdf file here</p>
              </div>
              <div>
                <IconChevronRight size="20" className="ml-3" />
              </div>
            </div>
            <div
              onClick={() => setView('mono')}
              tabIndex="0"
              className="border border-gray-300 rounded-2xl px-7 md:px-8 py-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
            >
              <div>
                <div className="w-12 md:w-16">
                  <IconWorld className="text-cyan-600" size="28" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Use internet banking</h4>
                <p className="opacity-70 leading-tight mt-1">
                  Use your internet or mobile banking credentials to get statement.
                </p>
              </div>
              <div>
                <IconChevronRight size="20" className="ml-3" />
              </div>
            </div>
            <div
              onClick={() => setView('mbs')}
              tabIndex="0"
              className="border border-gray-300 rounded-2xl px-7 md:px-8 py-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
            >
              <div>
                <div className="w-12 md:w-16">
                  <IconBuildingBank className="text-green-600" size="28" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Receive PIN from your bank</h4>
                <p className="opacity-70 leading-tight mt-1">
                  Provide a ticket id and password sent by your bank to authorize us to get your statement
                </p>
              </div>
              <div>
                <IconChevronRight size="20" className="ml-3" />
              </div>
            </div>
          </div>
        </>
      )}
      {view === 'pdf' && <AnalyzePdf onBack={() => setView('options')} />}
      {view === 'mono' && <AnalyzeMono onBack={() => setView('options')} />}
      {view === 'mbs' && <AnalyzeMbs onBack={() => setView('options')} />}
    </Drawer>
  );
};

NewStatement.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewStatement;
