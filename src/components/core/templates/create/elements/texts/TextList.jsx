import { ElementPropTypes } from '@/lib/prop-types.js';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';

export const TextList = ({ element }) => {
  return <ListContent element={element} />;
};

export const ListPresent = ({ element }) => {
  return <ListContent element={element} />;
};

const ListContent = ({ element }) => {
  return (
    <ul
      className={cn(`h-full w-full list-inside`, {
        'list-disc': element.config.type === 'bullet',
        'list-decimal': element.config.type === 'number',
      })}
      style={{ width: element.size.width, height: '100%' }}
    >
      {element.config.texts.map((text, i) => (
        <li style={element.style} key={i}>
          {text}
        </li>
      ))}
    </ul>
  );
};

TextList.propTypes = ElementPropTypes;
ListPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
ListContent.propTypes = {
  element: PropTypes.object.isRequired,
};
