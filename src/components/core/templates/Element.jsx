import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import Handle from '@/components/core/templates/Handle.jsx';
import { TbChartPie } from 'react-icons/tb';

const Element = ({ element }) => {
  return (
    <>
      {element.type === 'heading' && (
        <Draggable handle=".handle" bounds="parent" defaultClassName="absolute z-1">
          <h1
            contentEditable="true"
            className="w-max border border-transparent hover:border-default-200 rounded-lg p-1 relative group text-3xl"
          >
            Heading
            <Handle placement="outside" />
          </h1>
        </Draggable>
      )}
      {element.type === 'text' && (
        <Draggable handle=".handle" bounds="parent" defaultClassName="absolute z-1">
          <h1
            contentEditable="true"
            className="w-max border border-transparent hover:border-default-200 rounded-lg p-1 relative group"
          >
            Text Element
            <Handle placement="outside" />
          </h1>
        </Draggable>
      )}
      {element.type === 'chart' && (
        <Draggable handle=".handle" bounds="parent" defaultClassName="absolute">
          <ResizableBox
            width={200}
            height={50}
            minConstraints={[100, 10]}
            maxConstraints={[400, 400]}
            resizeHandles={['se', 'sw', 'ne', 'nw', 'n', 's', 'e', 'w']}
          >
            <div className="border border-default-200 rounded-lg p-1 h-full w-full relative group flex items-center justify-center">
              <TbChartPie size={20} />
              <Handle />
            </div>
          </ResizableBox>
        </Draggable>
      )}
    </>
  );
};

Element.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default Element;
