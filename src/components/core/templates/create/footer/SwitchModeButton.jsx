import { Button } from '@heroui/react';
import { LuGalleryThumbnails } from 'react-icons/lu';
import useTemplateStore from '@/store/template.js';
import { TbLayoutList } from 'react-icons/tb';

const SwitchModeButton = () => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const mode = useTemplateStore((state) => state.template.mode);

  return (
    <>
      {mode === 'scroll' && (
        <Button
          variant="light"
          color="default"
          radius="full"
          size="sm"
          onClick={() => updateTemplate({ mode: 'tab' })}
          isIconOnly
          className="relative"
        >
          <LuGalleryThumbnails size="20" />
        </Button>
      )}
      {mode === 'tab' && (
        <Button
          variant="light"
          color="default"
          radius="full"
          size="sm"
          onClick={() => updateTemplate({ mode: 'scroll' })}
          isIconOnly
          className="relative"
        >
          <TbLayoutList size="20" />
        </Button>
      )}
    </>
  );
};

export default SwitchModeButton;
