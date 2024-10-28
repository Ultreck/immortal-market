import { ElementPropTypes } from '@/lib/prop-types.js';
import { Skeleton } from '@nextui-org/react';
import { useGetSvgCodeFromUrl } from '@/api/misc.js';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const applyColors = (data, colors) => {
  if (!data) return data;
  let coloredSvg = data;
  Object.entries(colors || {}).forEach(([originalColor, newColor]) => {
    const regex = new RegExp(`${originalColor}`, 'g');
    coloredSvg = coloredSvg.replace(regex, `${newColor}`);
  });
  return coloredSvg;
};

export const Infographic = ({ element, onChange }) => {
  const el = useRef(null);
  const { data, isLoading } = useGetSvgCodeFromUrl(element.config.src);

  useEffect(() => {
    if (!isLoading && data && el.current && element.height !== el.current.scrollHeight) {
      onChange({ ...element, height: el.current.scrollHeight });
    }
  }, [data, element, isLoading, onChange]);

  return (
    <div ref={el} className="w-full h-max">
      {isLoading ? (
        <div className="light w-full" style={{ height: element.height }}>
          <Skeleton className="rounded-2xl w-full h-full" />
        </div>
      ) : (
        <div
          style={element.style}
          className="h-max w-full infographic"
          dangerouslySetInnerHTML={{ __html: applyColors(data, element.config.colors) }}
        />
      )}
    </div>
  );
};

export const InfographicPresent = ({ element }) => {
  return <InfographicContent element={element} />;
};

const InfographicContent = ({ element }) => {
  const { data, isLoading } = useGetSvgCodeFromUrl(element.config.src);
  return (
    <div className="w-full h-max">
      {isLoading ? (
        <div className="light w-full" style={{ height: element.height }}>
          <Skeleton className="rounded-2xl w-full h-full" />
        </div>
      ) : (
        <div
          style={element.style}
          className="h-max w-full infographic"
          dangerouslySetInnerHTML={{ __html: applyColors(data, element.config.colors) }}
        />
      )}
    </div>
  );
};

Infographic.propTypes = ElementPropTypes;
InfographicContent.propTypes = {
  element: PropTypes.object.isRequired,
};
InfographicPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
