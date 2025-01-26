import PropTypes from 'prop-types';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import Portal from './Portal.js';
import { Button } from '@heroui/react';
import { TbColorPicker } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';

const Eyedropper = ({ onPick, className }) => {
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
          onPick(result.sRGBHex);
        })
        .catch(() => {});
    }
  };

  const getColorLegacy = (e) => {
    e.stopPropagation();
    setCoverUp(false);
  };

  return (
    <div className={cn(className)}>
      <Button onPress={getEyeDrop} isIconOnly size="md" variant="bordered">
        <TbColorPicker size={16} />
      </Button>
      {coverUp && (
        <Portal>
          <div onClick={(e) => getColorLegacy(e)} />
        </Portal>
      )}
    </div>
  );
};

Eyedropper.propTypes = {
  onPick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Eyedropper;
