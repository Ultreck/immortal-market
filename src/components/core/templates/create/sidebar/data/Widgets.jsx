import { Button } from '@nextui-org/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';

const elements = [
  {
    id: 'widget-summarizer',
    data: {
      type: 'widget',
      text: 'Summarizer',
      width: 400,
      height: 400,
      config: {
        name: 'summarizer',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 border border-default-200 rounded-2xl p-6">
        <p className="text-2xl">20%</p>
        <p className="mt-2">
          lorem ipsum dolor sit amet consectetur adipisicing elit. fugiat, quidem, voluptate, doloremque, quos,
          aspernatur
        </p>
      </div>
    ),
  },
];

const Widgets = ({ onBack }) => {
  return (
    <div>
      {/* <div className="flex items-center space-x-3 mb-6">
        <Button variant="bordered" radius="full" size="sm" isIconOnly onClick={onBack}>
          <RiArrowLeftSLine size="20" />
        </Button>
        <h3 className="text-base font-medium">Dynamic fields</h3>
      </div> */}
      <div className="grid grid-cols-1 gap-4">
        {elements.map((element) => {
          return (
            <div key={element.id}>
              <DraggableElementWrapper element={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Widgets.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Widgets;
