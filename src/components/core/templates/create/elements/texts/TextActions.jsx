import PropTypes from 'prop-types';
import { Bold, Italic, TextAlign, TextColor, Underline } from '../../tools/elements/generic/Font';
import { Button } from '@heroui/react';
import useDesignStore from '@/store/design';
import { LuEllipsis } from 'react-icons/lu';
import ElementActionsWrapper from '../../ElementActionsWrapper';

const TextActions = ({ element }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);

  return (
    <ElementActionsWrapper element={element}>
      <Bold elements={[element]} />
      <Italic elements={[element]} />
      <Underline elements={[element]} />
      <TextAlign elements={[element]} />
      <TextColor elements={[element]} />
      <Button
        isIconOnly
        variant="light"
        radius="full"
        size="sm"
        onPress={() => openTool('font')}
        isDisabled={tool === 'font'}
      >
        <LuEllipsis size="18" />
      </Button>
    </ElementActionsWrapper>
  );
};

TextActions.propTypes = {
  element: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default TextActions;
