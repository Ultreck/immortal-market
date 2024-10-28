import { createElement, Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ElementWrapperPresent from '@/components/core/templates/create/ElementWrapperPresent.jsx';
import { getElementPresentComponent } from '@/lib/elements.js';

const PageContentPresent = ({ page }) => {
  const el = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      const ph = el.current.parentElement.clientHeight;
      const h = el.current.clientHeight;
      const scale = ph / h;
      setScale(scale);
    }, 50);
  }, [page]);

  return (
    <div
      ref={el}
      style={{
        width: page.width,
        height: page.height,
        background: page.style.background || '#fff',
        transform: `scale(${scale})`,
      }}
      className="origin-top relative overflow-hidden mx-auto"
    >
      {page.elements.map((element) => {
        const component = getElementPresentComponent(element);
        return (
          <Fragment key={element.id}>
            {component ? (
              <ElementWrapperPresent element={element}>{createElement(component, { element })}</ElementWrapperPresent>
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

PageContentPresent.propTypes = {
  page: PropTypes.object.isRequired,
};

export default PageContentPresent;
