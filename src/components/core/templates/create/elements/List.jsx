import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const List = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
      fit
    >
      <ListContent element={element} />
    </ElementWrapper>
  );
};

export const ListPresent = ({ element }) => {
  return <ListContent element={element} />;
};

export const ListContent = ({ element }) => {
  return (
    <ul
      className={cn(`h-full w-full list-inside`, {
        'list-disc': element.config.type === 'bullet',
        'list-decimal': element.config.type === 'number',
      })}
      style={{ width: element.width, height: '100%' }}
    >
      {element.config.texts.map((text, i) => (
        <li style={element.style} key={i}>
          {text}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = ElementPropTypes;
ListPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
ListContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default List;
