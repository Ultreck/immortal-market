import { useState } from 'react';
import Drawer from "@/components/global/Drawer";
import CircleUploadFileInput from "@/components/core/shared/CircleUploadFileInput";
import { delay } from "@/lib/utils";
import { GridLoader } from "react-spinners";
import PropTypes from "prop-types";

const NewCustomReport = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState('');

  const handleChange = async (file) => {
    console.log({ file });
    setLoading('Analyzing your document..');
    await delay(5000);
    setLoading('Preparing bot..');
    await delay(5000);
    setLoading('');
  };

  return (
    <Drawer isOpen={ isOpen } onClose={ onClose }>
      {
        loading ? (
          <div className="h-full flex flex-col items-center justify-center">
            <GridLoader color={ "#2563eb" }/>
            <p className="mt-6">{ loading || 'Analyzing your document..' }</p>
          </div>
        ) : (
          <>
            <div className="h-full flex flex-col justify-center items-center text-center py-16">
              <CircleUploadFileInput
                onChange={ handleChange }
                label="Drag and drop a document or click to select"
                accept={ { 'application/pdf': ['.pdf'] } }
              />
            </div>
          </>
        )
      }
    </Drawer>
  );
};

NewCustomReport.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default NewCustomReport;
