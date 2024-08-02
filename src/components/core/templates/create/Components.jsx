import { useState } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
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

const shapes = [
  ...([
    'rectangle',
    'circle',
    'triangle',
    'rhombus',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-down',
    'arrow-up-down',
  ].map((type) => ({
    id: `shape-${type}`,
    type: `shape-${type}`,
    name: `Shape ${type}`,
    data: {
      style: {
        backgroundColor: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        animationDuration: '1s',
      },
      type: `shape-${type}`,
      text: `Shape ${type}`,
      width: 120,
      height: 120,
    },
    group: 'shape',
    category: 'design',
  })) || []),
  {
    id: 'line',
    type: 'line',
    name: 'Line',
    data: {
      style: {
        backgroundColor: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        strokeWidth: 2,
        animationDuration: '1s',
      },
      lineEnd: null,
      lineStart: null,
      type: 'line',
      text: 'Line',
      width: 100,
      height: 4,
    },
    group: 'shape',
    category: 'design',
  },
];

const frames = [
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

const data = [
  {
    id: 'table',
    type: 'table',
    name: 'Table',
    data: {
      type: 'table',
      text: 'Table',
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
    group: 'visual',
    category: 'data',
  },
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
    group: 'visual',
    category: 'data',
  },
];

const icons = [
  // {
  //   id: 'icon-arrow-up',
  //   type: 'icon-arrow-up',
  //   name: 'Arrow Up',
  //   data: {
  //     type: 'icon-arrow-up',
  //     text: 'Arrow Up',
  //     width: 200,
  //     height: 200,
  //     style: { opacity: 1 },
  //   },
  //   group: 'placeholders',
  //   category: 'design',
  // },
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

const Components = () => {
  const [tab, setTab] = useState('design');

  return (
    <>
      <Tabs
        variant="bordered"
        aria-label="Options"
        color="primary"
        radius="full"
        classNames={{
          base: 'mb-6',
          tab: 'text-base px-4',
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="design" title="Design" className="text-base" />
        <Tab key="data" title="Data" className="text-base" />
      </Tabs>
      {tab === 'design' && <DesignElements />}
      {tab === 'data' && <DataElements />}
    </>
  );
};

const DesignElements = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Text</h2>
        <div className="space-y-4">
          {texts.map((element) => (
            <DraggableElementWrapper key={element.id} element={element} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Shapes</h2>
        <div className="grid grid-cols-2 gap-4">
          {shapes.map((element) => (
            <DraggableElementWrapper key={element.id} element={element} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Frames</h2>
        <div className="grid grid-cols-2 gap-4">
          {frames.map((element) => (
            <DraggableElementWrapper key={element.id} element={element} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Icons</h2>
        <div className="grid grid-cols-2 gap-4">
          {icons.map((element) => (
            <DraggableElementWrapper key={element.id} element={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

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

export default Components;

