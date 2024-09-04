import PageIndicator from '@/components/core/templates/create/footer/PageIndicator.jsx';
import ZoomSlider from '@/components/core/templates/create/footer/ZoomSlider.jsx';
import { Chip } from '@nextui-org/react';
import useTemplateStore from '@/store/template.js';
import SaveButton from '@/components/core/templates/create/footer/SaveButton.jsx';
import DesignOptions from '@/components/core/templates/create/footer/DesignOptions.jsx';
import DesignTitle from './DesignTitle.jsx';
import Share from '@/components/core/templates/create/footer/Share.jsx';
import FullscreenPreview from '@/components/core/templates/create/FullscreenPreview.jsx';

const StatusBar = () => {
  const status = useTemplateStore((state) => state.template.status);
  const type = useTemplateStore((state) => state.template.type);

  return (
    <div className="h-[50px] w-full dark:bg-default-50/50 border-t border-default-200 dark:border-default-100 flex items-center justify-between px-12">
      <div className="flex items-center space-x-4">
        <DesignTitle />
        {type === 'template' && (
          <div className="flex items-center space-x-2">
            <Chip size="sm" color="warning" className="text-sm">
              Template
            </Chip>
            <Chip size="sm" color={{ draft: 'default', published: 'success' }[status]} className="text-sm capitalize">
              {status}
            </Chip>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-6 ml-auto">
        <PageIndicator />
        <ZoomSlider />
        <FullscreenPreview />
        <div className="flex items-center space-x-3">
          <Share />
          <SaveButton />
          <DesignOptions />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
