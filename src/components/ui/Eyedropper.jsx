import PropTypes from 'prop-types';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import Portal from './Portal.js';
import { Button } from '@nextui-org/react';
import { TbColorPicker } from 'react-icons/tb';

const Eyedropper = ({ value, onChange }) => {
  const [coverUp, setCoverUp] = useState(false);

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
    if (!window.EyeDropper) {
      takePick();
    } else {
      const eyeDropper = new window.EyeDropper();
      const abortController = new window.AbortController();
      eyeDropper
        .open({ signal: abortController.signal })
        .then((result) => {
          onChange(result.sRGBHex);
        })
        .catch(() => {});
    }
  };

  const getColorLegacy = (e) => {
    e.stopPropagation();
    setCoverUp(false);
  };

  let bgValueText = value?.includes('gradient') ? 'gradient' : value || '';

  return (
    <div className="mt-5">
      <div className="flex gap-3">
        <div className="w-full rounded-xl border border-default-200 text-lg flex items-center justify-center">
          {bgValueText}
        </div>
        <Button onClick={getEyeDrop} isIconOnly size="md" variant="bordered">
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

Eyedropper.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Eyedropper;
