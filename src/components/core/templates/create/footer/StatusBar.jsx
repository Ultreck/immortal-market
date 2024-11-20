import PageIndicator from '@/components/core/templates/create/footer/PageIndicator.jsx';
import ZoomSlider from '@/components/core/templates/create/footer/ZoomSlider.jsx';
import { Button } from '@nextui-org/react';
import useTemplateStore from '@/store/template.js';
import SaveButton from '@/components/core/templates/create/footer/SaveButton.jsx';
import DesignOptions from '@/components/core/templates/create/footer/DesignOptions.jsx';
import DesignTitle from './DesignTitle.jsx';
import Share from '@/components/core/templates/create/footer/Share.jsx';
import FullscreenPreview from '@/components/core/templates/create/FullscreenPreview.jsx';
import CommentButton from '@/components/core/templates/create/footer/CommentButton.jsx';
import SwitchModeButton from '@/components/core/templates/create/footer/SwitchModeButton.jsx';

const StatusBar = () => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);

  return (
    <div className="h-[50px] w-full dark:bg-default-50/50 border-t border-default-200 dark:border-default-100 flex items-center justify-between px-12">
      <DesignTitle />
      <div className="flex items-center space-x-6 ml-auto">
        <PageIndicator />
        <ZoomSlider />
        <div className="flex items-center space-x-2">
          <FullscreenPreview />
          <Button
            className="text-sm"
            color="default"
            size="sm"
            onClick={() => updateTemplate({ isTransitionOpen: true })}
          >
            Transition
          </Button>
          <CommentButton />
          <SwitchModeButton />
        </div>
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
