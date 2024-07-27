import PageIndicator from '@/components/core/templates/create/PageIndicator.jsx';
import ZoomSlider from '@/components/core/templates/create/ZoomSlider.jsx';

const StatusBar = () => {
  return (
    <div className="h-[60px] w-full dark:bg-default-50/50 border-t border-default-200 dark:border-default-100 flex items-center justify-between px-12">
      <div className="flex items-center space-x-4 ml-auto">
        <PageIndicator />
        <ZoomSlider />
      </div>
    </div>
  );
};

export default StatusBar;
