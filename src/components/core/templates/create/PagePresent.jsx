import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PageContentPresent from '@/components/core/templates/create/PageContentPresent.jsx';

const PagePresent = ({ page }) => {
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
    <div ref={el}>
      <PageContentPresent page={page} scale={scale} />
    </div>
  );
};

PagePresent.propTypes = {
  page: PropTypes.object.isRequired,
};

export default PagePresent;
