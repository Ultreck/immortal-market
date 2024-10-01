import { createElement, forwardRef, Fragment } from 'react';
import { components } from '@/lib/elements.js';
import ElementWrapperPresent from '@/components/core/templates/create/ElementWrapperPresent.jsx';
import PropTypes from 'prop-types';

const ElementsPreview = forwardRef(({ elements }, ref) => {
  const maxRight = Math.max(...elements.map((el) => el.x + el.width));
  const minLeft = Math.min(...elements.map((el) => el.x));
  const minTop = Math.min(...elements.map((el) => el.y));
  const maxBottom = Math.max(...elements.map((el) => el.y + el.height));

  const _elements = elements.map((el) => {
    return { ...el, x: el.x - minLeft, y: el.y - minTop };
  });

  return (
    <div className="border rounded-2xl px-6 py-5">
      <div
        ref={ref}
        style={{ width: maxRight - minLeft, height: maxBottom - minTop }}
        className="relative overflow-hidden"
      >
        {!!_elements.length && (
          <div>
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
      </div>
    </div>
  );
});

ElementsPreview.displayName = 'ElementsPreview';

ElementsPreview.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  ref: PropTypes.any,
};

export default ElementsPreview;
