import useDesignStore from '@/store/design';
import { Button, Input } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbPlus, TbX } from 'react-icons/tb';

const FrameTabsConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  const handleChange = (e, id) => {
    updateElement(
      element.id,
      {
        config: {
          ...element.config,
          tabs: element.config.tabs.map((t) => (t.id === id ? { ...t, title: e.target.value } : t)),
        },
      },
      true
    );
  };

  const handleRemove = (id) => {
    updateElement(
      element.id,
      {
        config: {
          ...element.config,
          tabs: element.config.tabs.filter((t) => id !== t.id),
        },
      },
      true
    );
  };

  const handleAdd = () => {
    updateElement(
      element.id,
      {
        config: {
          ...element.config,
          tabs: [...element.config.tabs, { id: element.config.tabs.length + 1, title: 'New tab' }],
        },
      },
      true
    );
  };

  return (
    <div>
      <div className="space-y-4">
        {element.config.tabs.map((tab) => (
          <div key={tab.id} className="flex gap-x-4">
            <Input value={tab.title} onChange={(e) => handleChange(e, tab.id)} classNames={{ input: 'text-base' }} />
            {element.config.tabs.length > 1 && (
              <Button isIconOnly onPress={() => handleRemove(tab.id)} size="sm" variant="light" color="danger">
                <TbX size="20" />
              </Button>
            )}
          </div>
        ))}
      </div>
      <Button
        onPress={handleAdd}
        className="text-base mt-6"
        radius="full"
        variant="bordered"
        startIcon={<TbPlus size="20" />}
      >
        Add Tab
      </Button>
    </div>
  );
};

FrameTabsConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default FrameTabsConfig;
