import ElementActionsWrapper from '@/components/core/templates/create/ElementActionsWrapper.jsx';
import { Button } from '@heroui/react';
import useDesignStore from '@/store/design.js';
import PropTypes from 'prop-types';
import { IoSwapHorizontal } from 'react-icons/io5';
import { LuSettings } from 'react-icons/lu';

const ImageActions = ({ element }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);

  return (
    <ElementActionsWrapper element={element}>
      <Button
        variant="flat"
        className="text-base px-4"
        size="sm"
        radius="full"
        startContent={<IoSwapHorizontal size="16" />}
        onPress={() => openTool('image/swap')}
        isDisabled={tool === 'image/swap'}
      >
        Swap image
      </Button>
      <Button
        variant="light"
        size="sm"
        radius="full"
        isIconOnly
        onPress={() => openTool('image')}
        isDisabled={tool === 'image'}
      >
        <LuSettings size="16" />
      </Button>
    </ElementActionsWrapper>
  );
};

ImageActions.propTypes = {
  element: PropTypes.object.isRequired,
};

export default ImageActions;
