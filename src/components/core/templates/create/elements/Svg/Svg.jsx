import { ElementPropTypes } from '@/lib/prop-types.js';
import { Skeleton } from '@heroui/react';
import { useGetSvgCodeFromUrl } from '@/api/misc.js';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ElementSvgWrapper from '@/components/core/templates/create/elements/Svg/helpers/ElementSvgWrapper.jsx';
import useDesignStore from '@/store/design.js';

const applyColors = (data, colors) => {
  if (!data) return data;
  let coloredSvg = data;
  Object.entries(colors || {}).forEach(([originalColor, newColor]) => {
    const regex = new RegExp(`${originalColor}`, 'g');
    coloredSvg = coloredSvg.replace(regex, `${newColor}`);
  });
  return coloredSvg;
};

export const Svg = ({ element }) => {
  const el = useRef(null);
  const { data, isLoading } = useGetSvgCodeFromUrl(element.config.src);
  const updateElement = useDesignStore((state) => state.updateElement);

  useEffect(() => {
    if (!isLoading && data && el.current && element.height !== el.current.scrollHeight) {
      updateElement(element.id, { height: el.current.scrollHeight });
    }
  }, [data, element, isLoading, updateElement]);

  return (
    <ElementSvgWrapper element={element}>
      <div
        ref={el}
        className="w-full h-max"
        style={{
          height: element.size.height,
          width: element.size.width,
        }}
      >
        {isLoading ? (
          <Skeleton className="w-full rounded-3xl" style={{ height: element.size.height }} />
        ) : (
          <div
            style={element.style}
            className="h-max w-full infographic"
            dangerouslySetInnerHTML={{ __html: applyColors(data, element.config.colors) }}
          />
        )}
      </div>
    </ElementSvgWrapper>
  );
};

export const SvgPresent = ({ element }) => {
  return <SvgContent element={element} />;
};

const SvgContent = ({ element }) => {
  const { data, isLoading } = useGetSvgCodeFromUrl(element.config.src);
  return (
    <div className="w-full h-max">
      {isLoading ? (
        <div className="light w-full" style={{ height: element.size.height }}>
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

Svg.propTypes = ElementPropTypes;
SvgContent.propTypes = {
  element: PropTypes.object.isRequired,
};
SvgPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
