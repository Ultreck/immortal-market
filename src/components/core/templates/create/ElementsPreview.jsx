import { createElement, Fragment, useRef } from 'react';
import { components } from '@/lib/elements.js';
import ElementWrapperPresent from '@/components/core/templates/create/ElementWrapperPresent.jsx';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

const ElementsPreview = ({ isOpen, onClose, elements }) => {
  const el = useRef(null);
  const maxRight = Math.max(...elements.map((el) => el.x + el.width));
  const minLeft = Math.min(...elements.map((el) => el.x));
  const minTop = Math.min(...elements.map((el) => el.y));
  const maxBottom = Math.max(...elements.map((el) => el.y + el.height));

  const _elements = elements.map((el) => {
    return { ...el, x: el.x - minLeft, y: el.y - minTop };
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent style={{ width: '100%', maxWidth: maxRight - minLeft, height: maxBottom - minTop }}>
        <ModalBody className="p-0">
          {!!_elements.length && (
            <div
              ref={el}
              className="origin-top relative overflow-hidden mx-auto"
              style={{ width: maxRight - minLeft, height: maxBottom - minTop }}
            >
              {_elements.map((element) => {
                return (
                  <Fragment key={element.id}>
                    {components.present[element.type] ? (
                      <ElementWrapperPresent element={element}>
                        {createElement(components.present[element.type], { element })}
                      </ElementWrapperPresent>
                    ) : (
                      <div className="text-red-500 border-red-500 border-2 rounded-lg px-2 py-1 w-max">
                        Unknown element type: {element.type}
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

ElementsPreview.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ElementsPreview;
