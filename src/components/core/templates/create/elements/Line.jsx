import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.jsx';

const Line = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['e']}
    >
      <div className="!h-max">
        <svg id="line" viewBox={`0 0 ${element.width} ${element.height}`} width={element.width} height={element.height}>
          {element.lineEnd === 'arrow' && (
            <defs>
              <marker id="lineEnd" orient="auto" markerWidth="3" markerHeight="4" refX="0.1" refY="2">
                <path d="M0,0 V4 L2,2 Z" fill={element.style.backgroundColor} />
              </marker>
            </defs>
          )}
          {element.lineEnd === 'square' && (
            <defs>
              <marker id="lineEnd" orient="auto" markerWidth="3" markerHeight="4" refX="0.1" refY="2">
                <path
                  d="
                    M 0, 0
                    m 75, 0
                    a 75,75 0 1,0 -150,0
                    a 75,75 0 1,0  150,0
                    "
                  fill={element.style.backgroundColor}
                />
              </marker>
            </defs>
          )}
          {element.lineEnd === 'circle' && (
            <defs>
              <marker id="lineEnd" markerWidth="4" markerHeight="4" refX="2" refY="2">
                <circle cx="2" cy="2" r="2" fill={element.style.backgroundColor} />
              </marker>
            </defs>
          )}
          {element.lineStart === 'arrow' && (
            <defs>
              <marker id="lineStart" orient="auto" markerWidth="3" markerHeight="4" refX="0" refY="2">
                <path d="M4,0 V4 L-2,2 Z" fill={element.style.backgroundColor} />
              </marker>
            </defs>
          )}
          {element.lineStart === 'square' && (
            <defs>
              <marker id="lineStart" orient="auto" markerWidth="3" markerHeight="4" refX="0" refY="2">
                <path
                  d="
                    M 0, 0
                    m 75, 0
                    a 75,75 0 1,0 -150,0
                    a 75,75 0 1,0  150,0
                    "
                  fill={element.style.backgroundColor}
                />
              </marker>
            </defs>
          )}
          {element.lineStart === 'circle' && (
            <defs>
              <marker id="lineStart" markerWidth="4" markerHeight="4" refX="0" refY="2">
                <circle cx="2" cy="2" r="2" fill={element.style.backgroundColor} />
              </marker>
            </defs>
          )}

          <path
            id="arrow-line"
            markerEnd="url(#lineEnd)"
            markerStart="url(#lineStart)"
            strokeWidth="4"
            fill={element.style.backgroundColor}
            stroke="black"
            d={`M0,${element.height / 2}, ${element.width / 1.1} ${element.height / 2},20`}
            style={{ stroke: element.style.backgroundColor, strokeWidth: element.style.strokeWidth }}
          />
        </svg>
      </div>
    </ElementWrapper>
  );
};

Line.propTypes = elementPropTypes;

export default Line;
