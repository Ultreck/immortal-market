import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { Skeleton } from '@nextui-org/react';
import { useGetSvgCodeFromUrl } from '@/api/misc.js';
import { useEffect, useRef } from 'react';

const Infographic = ({ element, active, highlighted, onClick, onChange }) => {
  const el = useRef(null);
  const { data, isLoading } = useGetSvgCodeFromUrl(element.config.src);

  useEffect(() => {
    if (!isLoading && data && el.current && element.height !== el.current.scrollHeight) {
      onChange({ ...element, height: el.current.scrollHeight });
    }
  }, [data, element, isLoading, onChange]);

  const applyColors = () => {
    if (!data) return data;
    let coloredSvg = data;
    Object.entries(element.config.colors || {}).forEach(([originalColor, newColor]) => {
      const regex = new RegExp(`${originalColor}`, 'g');
      coloredSvg = coloredSvg.replace(regex, `${newColor}`);
    });
    return coloredSvg;
  };

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={(values) => {
        return onChange({ ...element, ...values, height: el.current.scrollHeight });
      }}
      active={active}
      highlighted={highlighted}
    >
      <div ref={el} className="w-full h-max">
        {isLoading ? (
          <div className="light w-full" style={{ height: element.height }}>
            <Skeleton className="rounded-2xl w-full h-full" />
          </div>
        ) : (
          <div
            style={element.style}
            className="h-max w-full infographic"
            dangerouslySetInnerHTML={{ __html: applyColors() }}
          />
        )}
      </div>
    </ElementWrapper>
  );
};

Infographic.propTypes = ElementPropTypes;

export default Infographic;
