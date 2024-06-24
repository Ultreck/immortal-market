import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { TbChartPie } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';
import Handle from '@/components/core/templates/Handle.jsx';

const propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
};

const Heading = ({ element, selected, onClick }) => {
  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      defaultClassName="absolute z-1"
      defaultPosition={{ x: element.x, y: element.y }}
    >
      <h1
        contentEditable="true"
        onClick={onClick}
        className={cn(
          'w-max max-w-full border-2 border-transparent p-1 relative group text-3xl',
          { 'border-primary-500': selected },
          { 'hover:border-gray-200': !selected }
        )}
      >
        Heading
        {!!selected && <Handle placement="outside" />}
      </h1>
    </Draggable>
  );
};

Heading.propTypes = propTypes;

const Text = ({ element, selected, onClick }) => {
  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      defaultClassName="absolute z-1"
      defaultPosition={{ x: element.x, y: element.y }}
    >
      <p
        contentEditable="true"
        onClick={onClick}
        className={cn(
          'w-max max-w-full border-2 border-transparent p-1 relative group',
          { 'border-primary-500': selected },
          { 'hover:border-gray-200': !selected }
        )}
      >
        Text Element
        {!!selected && <Handle placement="outside" />}
      </p>
    </Draggable>
  );
};

Text.propTypes = propTypes;

const Chart = ({ element, selected, onClick, width }) => {
  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      defaultClassName="absolute"
      defaultPosition={{ x: element.x, y: element.y }}
    >
      <ResizableBox
        onClick={onClick}
        width={200}
        height={100}
        minConstraints={[100, 100]}
        maxConstraints={[width, 400]}
        resizeHandles={['se', 'e', 's']}
        handle={(axis, ref) => {
          if (['se', 'sw', 'ne', 'nw'].includes(axis)) {
            return (
              <div
                ref={ref}
                className={cn('absolute rounded-full bg-white shadow border border-gray-400 w-[14px] h-[14px]', {
                  '-right-[4px] -top-[4px] cursor-ne-resize': axis === 'ne',
                  '-left-[4px] -top-[4px] cursor-nw-resize': axis === 'nw',
                  '-left-[4px] -bottom-[4px] cursor-sw-resize': axis === 'sw',
                  '-right-[4px] -bottom-[4px] cursor-se-resize': axis === 'se',
                  hidden: !selected,
                })}
              />
            );
          }
          if (['n', 's', 'e', 'w'].includes(axis)) {
            return (
              <div
                ref={ref}
                className={cn('absolute rounded-full bg-white shadow border border-gray-400', {
                  '-top-[2px] left-1/2 -translate-x-1/2 w-[20px] h-[5px] cursor-n-resize': axis === 'n',
                  '-bottom-[2px] left-1/2 -translate-x-1/2 w-[20px] h-[5px] cursor-s-resize': axis === 's',
                  '-left-[2px] top-1/2 -translate-y-1/2 w-[5px] h-[20px] cursor-w-resize': axis === 'w',
                  '-right-[2px] top-1/2 -translate-y-1/2 w-[5px] h-[20px] cursor-e-resize': axis === 'e',
                  hidden: !selected,
                })}
              />
            );
          }
          return null;
        }}
      >
        <div
          className={cn(
            'border-2 border-transparent p-1 h-full w-full relative group flex items-center justify-center bg-gray-100',
            { 'border-primary-500': selected },
            { 'hover:border-gray-200': !selected }
          )}
        >
          <TbChartPie size={32} />
          {!!selected && <Handle placement="outside" />}
        </div>
      </ResizableBox>
    </Draggable>
  );
};

Chart.propTypes = propTypes;

const Element = ({ element, selected, width, onClick }) => {
  return (
    <>
      {element.type === 'heading' && <Heading element={element} selected={selected} onClick={onClick} />}
      {element.type === 'text' && <Text element={element} selected={selected} onClick={onClick} />}
      {element.type === 'chart' && <Chart element={element} selected={selected} onClick={onClick} width={width} />}
    </>
  );
};

Element.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }),
  selected: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Element;
