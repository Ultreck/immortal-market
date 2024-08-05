import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';

const texts = [
  {
    id: 'heading',
    type: 'heading',
    name: 'Heading',
    data: {
      type: 'heading',
      text: 'Heading',
      width: 400,
      height: 36,
      style: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        opacity: 1,
        fontFamily: 'Roboto',
        letterSpacing: 0,
        lineHeight: 1,
        verticalAlign: 'baseline',
        animationDuration: '1s',
      },
    },
    group: 'text',
    category: 'design',
    preview: (
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'left',
          opacity: 1,
          fontFamily: 'Roboto',
          letterSpacing: 0,
          lineHeight: 1,
          verticalAlign: 'baseline',
        }}
      >
        Heading
      </h1>
    ),
  },
  {
    id: 'text',
    type: 'text',
    name: 'Text',
    data: {
      type: 'text',
      text: 'Text',
      width: 300,
      height: 20,
      style: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#000000',
        textAlign: 'left',
        opacity: 1,
        fontFamily: 'Roboto',
        letterSpacing: 0,
        lineHeight: 1,
        verticalAlign: 'baseline',
        animationDuration: '1s',
      },
    },
    group: 'text',
    category: 'design',
    preview: (
      <p
        style={{
          fontSize: '16px',
          fontWeight: 'normal',
          textAlign: 'left',
          opacity: 1,
          fontFamily: 'Roboto',
          letterSpacing: 0,
          lineHeight: 1,
          verticalAlign: 'baseline',
        }}
      >
        Paragraph
      </p>
    ),
  },
];

const Texts = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Text</h2>
      <div className="space-y-4">
        {texts.map((element) => (
          <DraggableElementWrapper key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Texts;
