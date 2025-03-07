import PageIndicator from '@/components/core/templates/create/footer/PageIndicator.jsx';
import ZoomSlider from '@/components/core/templates/create/footer/ZoomSlider.jsx';
import DesignOptions from '@/components/core/templates/create/footer/DesignOptions.jsx';
import DesignTitle from './DesignTitle.jsx';
import Share from '@/components/core/templates/create/footer/Share.jsx';
import FullscreenPreview from '@/components/core/templates/create/FullscreenPreview.jsx';
import CommentButton from '@/components/core/templates/create/footer/CommentButton.jsx';

const StatusBar = () => {
  return (
    <div className="h-[50px] w-full dark:bg-default-50/50 border-t border-default-200 dark:border-default-100 flex items-center justify-between px-12 space-x-6">
      <DesignTitle />
      <div className="flex items-center space-x-6 ml-auto">
        <PageIndicator />
        <ZoomSlider />
        <div className="flex items-center space-x-2">
          <FullscreenPreview />
          <CommentButton />
        </div>
        <div className="flex items-center space-x-3">
          <Share />
          <DesignOptions />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
