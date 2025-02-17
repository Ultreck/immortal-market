import PropTypes from 'prop-types';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
const styles = [
  {
    background: '#05805F',
  },
  {
    background: '#0079A9',
  },
];
const options= [{ text: 'Option 1' }, { text: 'Option 2' }, { text: 'Option 3' }]
const polls = styles.map((style, i) => {
  return {
    id: crypto.randomUUID(),
    data: {
      type: 'form',
      text: 'poll',
      question: '"Guess the Answer", Add Question',
      options: options.map((_)=>({..._,id:crypto.randomUUID()})),
      width: 350,
      height: 200,
      config: {
        name: 'poll',
      },
      style: {
        ...style,
        color: '#fff',
        borderRadius: 10,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    preview: (
      <div className="flex flex-col gap-1 w-24 border p-2 border-default-500 rounded" style={{...style}}>
        <p className="text-[0.6rem]">hello world</p>
        <div className="bg-gray-100 h-2 w-[20%] rounded"></div>
        <div className="bg-gray-100 h-2 w-[40%] rounded"></div>
        <div className="bg-gray-100 h-2 w-[80%] rounded"></div>
        <div className="bg-gray-100 h-2 w-full rounded"></div>
      </div>
    ),
  };
});

const Form = () => {
  return (
    <>
      <div>
        <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
          <h2 className="text-base font-semibold">Forms</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {polls.map((element) => {
            return <DraggableElementWrapper key={element.id} element={element} />;
          })}
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default Form;