import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbPlus, TbSettings2, TbX } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';

const FrameTabsConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  const handleChange = (e, id) => {
    onChange({
      ...element,
      config: {
        ...element.config,
        tabs: element.config.tabs.map((t) => (t.id === id ? { ...t, title: e.target.value } : t)),
      },
    });
  };

  const handleRemove = (id) => {
    onChange({
      ...element,
      config: {
        ...element.config,
        tabs: element.config.tabs.filter((t) => id !== t.id),
      },
    });
  };

  const handleAdd = () => {
    onChange({
      ...element,
      config: {
        ...element.config,
        tabs: [...element.config.tabs, { id: element.config.tabs.length + 1, title: 'New tab' }],
      },
    });
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'tabs'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'tabs' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Frame tabs config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6">
          <div className="space-y-4">
            {element.config.tabs.map((tab) => (
              <div key={tab.id} className="flex gap-x-4">
                <Input
                  value={tab.title}
                  onChange={(e) => handleChange(e, tab.id)}
                  classNames={{ input: 'text-base' }}
                />
                {element.config.tabs.length > 1 && (
                  <Button isIconOnly onClick={() => handleRemove(tab.id)} size="sm" variant="light" color="danger">
                    <TbX size="20" />
                  </Button>
                )}
              </div>
            ))}
          </div>
          <Button
            onClick={handleAdd}
            className="text-base mt-6"
            radius="full"
            variant="bordered"
            startIcon={<TbPlus size="20" />}
          >
            Add Tab
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

FrameTabsConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default FrameTabsConfig;
