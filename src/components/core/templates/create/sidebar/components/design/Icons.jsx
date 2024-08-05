import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';

const icons = [
  {
    id: 'icon',
    type: 'icon',
    name: 'Icon',
    data: {
      type: 'icon',
      text: 'Icon',
      width: 60,
      height: 60,
      style: { opacity: 1, animationDuration: '1s' },
    },
    group: 'placeholders',
    category: 'design',
  },
];

const Icons = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Icons</h2>
      <div className="grid grid-cols-2 gap-4">
        {icons.map((element) => (
          <DraggableElementWrapper key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Icons;
