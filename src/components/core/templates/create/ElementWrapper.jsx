import { capitalize, cn } from '@/lib/utils.js';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import DragResizeRotate from '@/components/ui/DragResizeRotate.jsx';
import ElementTooltip from '@/components/core/templates/create/ElementTooltip.jsx';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { Bar, BarChart, XAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';

const ElementWrapper = ({
  element,
  onClick,
  onDoubleClick,
  children,
  onEditStart,
  active,
  highlighted,
  maxWidth = Infinity,
  minWidth = 10,
  minHeight = 10,
  maxHeight = Infinity,
  onChange,
  resizeHandles,
  constrained = false,
  editable = false,
  fit = false,
  className,
}) => {
  const el = useRef(null);
  const scale = useTemplateStore((state) => state.template.scale);
  const addUndoHistory = useTemplateStore((state) => state.addUndoHistory);
  const [isEditing, setIsEditing] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!active) setIsEditing(false);
  }, [active, element]);

  useEffect(() => {
    if (isEditing) onEditStart?.();
  }, [isEditing, onEditStart]);

  useEffect(() => {
    if (fit && el.current && element.height !== el.current.scrollHeight) {
      onChange({ ...element, height: el.current.scrollHeight }, true);
    }
  }, [element, fit, onChange]);
  
  return (
    <DragResizeRotate
      values={{ x: element.x, y: element.y, width: element.width, height: element.height, rotate: element.rotate }}
      onChange={(values) => onChange({ ...element, ...values })}
      resizable={active}
      rotatable={active}
      draggable={!isEditing}
      className={cn('w-max border-2 border-transparent absolute group select-none pointer-events-auto', className)}
      onClick={(e) => onClick(element.id, e)}
      onDoubleClick={(e) => {
        if (editable) setIsEditing(true);
        onDoubleClick?.(element.id, e);
      }}
      handles={resizeHandles}
      constrained={constrained}
      scale={scale}
      onDragStart={() => addUndoHistory()}
      onResizeStart={() => addUndoHistory()}
      onRotateStart={() => addUndoHistory()}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
    >
      <ElementTooltip element={element} tooltipContent="This is a tooltip" onChange={onChange}>
        <div
          className={cn(
            'absolute inset-[-1px] border border-transparent z-[10] pointer-events-none',
            { 'group-hover:border-gray-200': !active && !highlighted },
            { 'border-gray-200': highlighted },
            { 'border-primary-500': active },
            { 'border-purple-500': isEditing }
          )}
        />
        {fit ? (
          <div ref={el} className="w-full h-max">
            {typeof children === 'function' ? children({ isEditing }) : children}
          </div>
        ) : (
          <>{typeof children === 'function' ? children({ isEditing }) : children}</>
        )}
      </ElementTooltip>

      {element.modal.enabled && (
        <Modal
          size="2xl"
          isOpen={element.modal.enabled}
          onClose={() => onChange({ ...element, modal: { enabled: false } })}
        >
          <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <ChartContainer config={{}} style={{ width: '100%', height: '100%' }}>
                  <BarChart
                    accessibilityLayer
                    data={[
                      {
                        name: 'Page A',
                        value: 4000,
                        fill: '#E66B5B',
                      },
                      {
                        name: 'Page B',
                        value: 3000,
                        fill: '#1D9085',
                      },
                      {
                        name: 'Page C',
                        value: 2000,
                        fill: '#264A5A',
                      },
                      {
                        name: 'Page D',
                        value: 2780,
                        fill: '#E8C22C',
                      },
                      {
                        name: 'Page E',
                        value: 1890,
                        fill: '#F6881F',
                      },
                    ]}
                  >
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => capitalize(value)}
                    />
                    <Bar dataKey="value" radius={8} />
                  </BarChart>
                </ChartContainer>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                  do dolor eiusmod.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => onChange({ ...element, modal: { enabled: false } })}
                >
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      )}
    </DragResizeRotate>
  );
};

ElementWrapper.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    rotate: PropTypes.number.isRequired,
    style: PropTypes.object,
    modal: PropTypes.object,
  }),
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  children: PropTypes.any.isRequired,
  onEditStart: PropTypes.func,
  resizeHandles: PropTypes.arrayOf(PropTypes.string),
  constrained: PropTypes.bool,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  editable: PropTypes.bool,
  fit: PropTypes.bool,
};

export default ElementWrapper;

