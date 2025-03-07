import PropTypes from 'prop-types';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { Button } from '@heroui/react';
import { TbCarouselHorizontalFilled, TbChevronLeft } from 'react-icons/tb';
import { ButtonPreview } from '@/components/core/templates/create/elements/Button.jsx';
import { getElementDefaultStyle } from '@/lib/elements';
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';

const styles = [
  {
    background: '#E66B5B',
    color: '#fff',
    borderRadius: 20,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 20,
  },
  {
    background: '#4CAF50',
    color: '#fff',
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 24,
    paddingRight: 24,
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    fontSize: 16,
    fontWeight: 'normal',
  },
  {
    background: 'transparent',
    color: '#2196F3',
    borderWidth: 2,
    borderColor: '#2196F3',
    borderRadius: 25,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 30,
    paddingRight: 30,
  },
  {
    background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
    color: '#fff',
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 25,
    paddingRight: 25,
  },
];
const sliders = [
  {
    id: 'frame-tabs',
    data: {
      type: 'frame',
      text: 'Frame tabs',
      size: {
        width: 300,
        height: 300,
      },
      children: [],
      style: getElementDefaultStyle({ type: 'frame', name: 'tabs' }),
      config: {
        name: 'tabs',
        tabs: [
          { id: 0, title: 'Tab 1' },
          { id: 1, title: 'Tab 2' },
        ],
      },
      tooltip: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <RiCheckboxMultipleBlankFill className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'frame-carousel',
    data: {
      type: 'frame',
      text: 'Frame carousel',
      size: {
        width: 300,
        height: 300,
      },
      children: [],
      style: getElementDefaultStyle({ type: 'frame', name: 'carousel' }),
      config: {
        name: 'carousel',
        slides: 2,
        speed: 500,
        slidesPerView: 1,
        autoplay: {
          enabled: false,
          delay: 0,
        },
        loop: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbCarouselHorizontalFilled className="w-full h-full" />
      </div>
    ),
  },
];
const buttons = styles.map((style, i) => {
  return {
    id: `button-${i}`,
    data: {
      type: 'button',
      text: 'Button',
      size: {
        width: 120,
        height: 48,
      },
      style,
      config: {
        text: 'Button',
      },
    },
    preview: <ButtonPreview element={{ size: { width: '100%', height: 48 }, style, config: { text: 'Button' } }} />,
  };
});
const items = [...buttons, ...sliders];

const InterfaceElements = ({ mini = false, onBack }) => {
  return (
    <>
      {mini ? (
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {items.slice(0, 4).map((element) => {
              return <DraggableElementWrapper key={element.id} element={element} />;
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
            <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-base font-semibold">Ui elements</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {items.map((element) => {
              return <DraggableElementWrapper key={element.id} element={element} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

InterfaceElements.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default InterfaceElements;
