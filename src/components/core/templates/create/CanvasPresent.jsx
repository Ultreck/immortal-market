import { createElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import ElementWrapperPresent from '@/components/core/templates/create/ElementWrapperPresent.jsx';
import { components } from '@/lib/elements.js';

const CanvasPresent = ({ page }) => {
  return (
    <div
      style={{
        width: page.width,
        height: page.height,
        backgroundColor: page.style.backgroundColor,
      }}
      className="origin-top-left relative overflow-hidden border-x first:border-t last:border-b first:rounded-t-2xl last:rounded-b-2xl"
    >
      {page.elements.map((element) => {
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
  );
};

CanvasPresent.propTypes = {
  page: PropTypes.object.isRequired,
};

export default CanvasPresent;
