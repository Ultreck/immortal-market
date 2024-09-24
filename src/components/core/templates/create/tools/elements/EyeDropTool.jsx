import PropTypes from 'prop-types';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import Portal from '../../../../../ui/Portal.js';
import { Button } from '@nextui-org/react';
import { TbColorPicker } from 'react-icons/tb';

const EyeDropTool = ({ value, onChange }) => {
  const [coverUp, setCoverUp] = useState(false);
  const [isPicking, setIsPicking] = useState(false);

  const takePick = () => {
    const root = document.getElementById('root');
    setCoverUp(true);
    html2canvas(root).then((canvas) => {
      const blankCanvas = document.createElement('canvas');
      const ctx = blankCanvas.getContext('2d', { willReadFrequently: true });
      if (root && ctx) {
        blankCanvas.width = root.offsetWidth * 2;
        blankCanvas.height = root.offsetHeight * 2;
        ctx.drawImage(canvas, 0, 0);
      }
    });
  };

  const getEyeDrop = () => {
    setIsPicking(true);
    if (!window.EyeDropper) {
      takePick();
    } else {
      const eyeDropper = new window.EyeDropper();
      const abortController = new window.AbortController();
      eyeDropper
        .open({ signal: abortController.signal })
        .then((result) => {
          onChange(result.sRGBHex);
          setIsPicking(false);
        })
        .catch(() => {
          setIsPicking(false);
        });
    }
  };

  const getColorLegacy = (e) => {
    e.stopPropagation();
    setIsPicking(false);
    setCoverUp(false);
  };

  let bgValueText = value?.includes('gradient') ? 'gradient' : value || '';

  return (
    <div className="mt-5">
      <div className="flex gap-3">
        <div className="w-full rounded-xl border text-lg flex items-center justify-center">{bgValueText}</div>
        <Button
          onClick={getEyeDrop}
          isIconOnly
          size="md"
          variant="light"
          className={`border p-2 ${isPicking && `bg-slate-600`}`}
        >
          <TbColorPicker size={16} />
        </Button>
      </div>
      {coverUp && (
        <Portal>
          <div onClick={(e) => getColorLegacy(e)} />
        </Portal>
      )}
    </div>
  );
};

EyeDropTool.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EyeDropTool;
