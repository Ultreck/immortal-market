import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const Summarizer = ({ element, active, highlighted, width, onClick, onChange }) => {
  const heading = element.config.heading?.output;
  const body = element.config.body?.output;

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      fit
    >
      <div>
        <p className="text-4xl">{heading || 'Lorem ipsum dolor sit amet.'}</p>
        <div className="mt-3">
          {body ? (
            <>
              {Array.isArray(body) ? (
                <ul className="list-disc ml-4">
                  {body.map((o, index) => (
                    <li key={index}>{o}</li>
                  ))}
                </ul>
              ) : (
                <p>{body}</p>
              )}
            </>
          ) : (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. fugiat, quidem, voluptate, doloremque, quos,
              aspernatur
            </>
          )}
        </div>
      </div>
    </ElementWrapper>
  );
};

Summarizer.propTypes = ElementPropTypes;

export default Summarizer;
