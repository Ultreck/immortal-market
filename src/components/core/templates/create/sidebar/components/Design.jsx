import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';

const Design = () => {
  return (
    <div className="space-y-8">
      <Texts />
      <Shapes />
      <Frames />
      <Icons />
    </div>
  );
};

export default Design;
