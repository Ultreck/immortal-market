import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { TbBrackets } from 'react-icons/tb';


const data = [
  {
    id: 'key-value',
    type: 'key-value',
    name: 'Key Value',
    data: {
      type: 'key-value',
      text: 'Key Value',
      width: 400,
      height: 200,
      style: {
        fontSize: 14,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#888',
        color: '#000',
        opacity: 1,
        animationDuration: '1s',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
        <TbBrackets className="w-full h-full" />
      </div>
    ),
  },

];

const DataElements = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        {data.map((element) => (
          <DraggableElementWrapper key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default DataElements;

