import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';

const frames = [
  {
    id: 'frame-tabs',
    type: 'frame-tabs',
    name: 'Frame tabs',
    data: {
      type: 'frame-tabs',
      text: 'Frame tabs',
      width: 300,
      height: 300,
      children: [],
      style: {
        animationDuration: '1s',
        opacity: 1,
      },
    },
  },
  {
    id: 'frame-carousel',
    type: 'frame-carousel',
    name: 'Frame carousel',
    data: {
      type: 'frame-carousel',
      text: 'Frame carousel',
      width: 300,
      height: 300,
      children: [],
      style: {
        animationDuration: '1s',
        opacity: 1,
      },
    },
  },
  ...([
    'rectangle',
    'triangle',
    'circle',
    'star',
    'heart',
    'rhombus',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-down',
    'arrow-up-down',
  ].map((type) => ({
    id: `frame-${type}`,
    type: `frame-${type}`,
    name: `Frame ${type}`,
    data: {
      style: {
        backgroundColor: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        animationDuration: '1s',
      },
      type: `frame-${type}`,
      text: `Frame ${type}`,
      width: 300,
      height: 300,
      children: [],
    },
    group: 'frame',
    category: 'design',
  })) || []),
];

const Frames = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Frames</h2>
      <div className="relative">
        <BasicCarousel
          classNames={{ next: 'right-0', prev: 'left-0' }}
          slides={Array(Math.ceil(frames.length / 6))
            .fill(null)
            .map((_, index) => {
              return {
                id: index,
                content: (
                  <div className="grid grid-cols-3 gap-3">
                    {frames.slice(index * 6, index * 6 + 6).map((element) => (
                      <DraggableElementWrapper key={element.id} element={element} />
                    ))}
                  </div>
                ),
              };
            })}
        />
      </div>
    </div>
  );
};

export default Frames;
