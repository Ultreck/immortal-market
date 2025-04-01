import { Button } from '@heroui/react';
import { LuDatabaseZap, LuUngroup, LuX } from 'react-icons/lu';
import useDesignStore from '@/store/design';
import PropTypes from 'prop-types';
import ElementActionsWrapper from '../../ElementActionsWrapper';

const GroupActions = ({ element }) => {
  const ungroupElements = useDesignStore((state) => state.ungroupElements);
  const updateElement = useDesignStore((state) => state.updateElement);
  const elements = useDesignStore((state) => state.elements.filter((e) => e.parent === element.key));

  const handleConvertToDataGroup = () => {
    updateElement(element.id, { type: 'data-group' }, true);
  };

  const handleDeleteDataGroup = () => {
    updateElement(element.id, { type: 'group', config: {} }, true);
  };

  const hasDataTags = elements.some((element) => element.type === 'data-tag');

  return (
    <ElementActionsWrapper element={element}>
      {element.type !== 'data-group' && (
        <Button
          variant="light"
          radius="full"
          className="text-base px-2"
          size="sm"
          startContent={<LuUngroup size="18" />}
          onPress={() => ungroupElements(element.key)}
        >
          Ungroup
        </Button>
      )}
      {element.type !== 'data-group' && hasDataTags && (
        <Button
          variant="light"
          radius="full"
          className="text-base px-2"
          size="sm"
          startContent={<LuDatabaseZap size="18" />}
          onPress={handleConvertToDataGroup}
        >
          Convert to data group
        </Button>
      )}
      {element.type === 'data-group' && (
        <Button
          variant="light"
          radius="full"
          className="text-base px-2"
          size="sm"
          startContent={<LuX size="18" />}
          onPress={handleDeleteDataGroup}
        >
          Delete data group
        </Button>
      )}
    </ElementActionsWrapper>
  );
};

GroupActions.propTypes = {
  element: PropTypes.object.isRequired,
};

export default GroupActions;
