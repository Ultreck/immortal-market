import { useState } from 'react';
import { IconBuildingBank, IconChevronRight, IconCodeDots, IconPdf } from "@tabler/icons-react";
import Drawer from "@/components/global/Drawer.jsx";
import AnalyzePdf from "./AnalyzePdf.jsx";
import AnalyzeMono from "./AnalyzeMono.jsx";
import AnalyzeMbs from "./AnalyzeMbs.jsx";
import PropTypes from "prop-types";

const NewAnalysis = ({ isOpen, onClose }) => {
  const [view, setView] = useState('options');

  const handleClose = () => {
    onClose();
    setView('options');
  };

  return (
    <Drawer isOpen={ isOpen } onClose={ handleClose }>
      {
        view === 'options' && (
          <>
            <h2 className="font-bold mb-12 text-xl">New Analysis</h2>
            <div className="space space-y-4">
              <div
                onClick={ () => setView('pdf') } tabIndex="0"
                className="border border-gray-300 rounded-2xl px-7 md:px-8 py-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
              >
                <div>
                  <div className="w-12 md:w-16">
                    <IconPdf className="text-red-600" size="28"/>
                  </div>
                </div>
                <div>
                  <h4>Pdf</h4>
                  <p className="text-sm opacity-75">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, sequi.
                  </p>
                </div>
                <div>
                  <IconChevronRight size="20" className="ml-3"/>
                </div>
              </div>
              <div
                onClick={ () => setView('mono') } tabIndex="0"
                className="border border-gray-300 rounded-2xl px-7 md:px-8 py-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
              >
                <div>
                  <div className="w-12 md:w-16">
                    <IconCodeDots className="text-cyan-600" size="28"/>
                  </div>
                </div>
                <div>
                  <h4>Mono</h4>
                  <p className="text-sm opacity-75">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, sequi.
                  </p>
                </div>
                <div>
                  <IconChevronRight size="20" className="ml-3"/>
                </div>
              </div>
              <div
                onClick={ () => setView('mbs') } tabIndex="0"
                className="border border-gray-300 rounded-2xl px-7 md:px-8 py-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
              >
                <div>
                  <div className="w-12 md:w-16">
                    <IconBuildingBank className="text-green-600" size="28"/>
                  </div>
                </div>
                <div>
                  <h4>Mbs</h4>
                  <p className="text-sm opacity-75">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, sequi.
                  </p>
                </div>
                <div>
                  <IconChevronRight size="20" className="ml-3"/>
                </div>
              </div>
            </div>
          </>
        )
      }
      {
        view === 'pdf' && (
          <AnalyzePdf onBack={ () => setView('options') }/>
        )
      }
      {
        view === 'mono' && (
          <AnalyzeMono onBack={ () => setView('options') }/>
        )
      }
      {
        view === 'mbs' && (
          <AnalyzeMbs onBack={ () => setView('options') }/>
        )
      }
    </Drawer>
  );
};

NewAnalysis.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default NewAnalysis;
