import React from 'react';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import useTemplateStore from '@/store/template';
import { options } from '@/lib/utils';
import { Button } from '@heroui/react';
import useBusiness from '@/hooks/use-business';
import { useGetForms, useGetPolls } from '@/api/business';
export const pollInitialData = {
  data: {
    type: 'form',
    text: 'poll',
    question: '"Guess the Answer", Add Question',
    options: options.map((_) => ({ ..._, id: crypto.randomUUID() })),
    width: 350,
    height: 200,
    config: {
      name: 'poll',
    },
    style: {
      background: '#05805F',
      color: '#fff',
      borderRadius: 10,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
};
export const formInitialData = {
  id: crypto.randomUUID(),
  data: {
    type: 'form',
    title: 'Add Question',
    fields: [
      {
        text: 'Question',
        type: 'shortText',
        id: crypto.randomUUID(),
        required: false,
        dataType: 'text',
        options: [],
      },
      {
        text: 'Question',
        type: 'paragraph',
        id: crypto.randomUUID(),
        required: false,
        dataType: 'text',
        options: [],
      },
      {
        text: 'Question',
        type: 'dropdown',
        id: crypto.randomUUID(),
        required: false,
        dataType: 'text',
        options: options.map((val) => ({ ...val, id: crypto.randomUUID() })),
      },
    ],
    width: 450,
    height: 350,
    config: {
      name: 'form',
    },
    style: {
      background: 'white',
      color: '#000',
      borderRadius: 10,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
};

export const ProjectPoll = ({ element }) => {
  const { id: business } = useBusiness();
  const design = useTemplateStore((state) => state.template.id);
  const { data: { polls = [] } = {} } = useGetPolls({ business, design, element: element });

  return (
    <Button
      radius="none"
      className="border-2 text-sm w-full rounded-sm text-start justify-start bg-transparent border-default-300 py-7 px-3 "
    >
      Polls ({polls.length})
    </Button>
  );
};

export const ProjectForm = ({ element }) => {
  const { id: business } = useBusiness();
  const design = useTemplateStore((state) => state.template.id);
  const { data: { forms = [] } = {} } = useGetForms({ business, design, element: element });
  return (
    <Button
      radius="none"
      className="border-2 text-sm w-full rounded-sm text-start justify-start bg-transparent border-default-300 py-7 px-3 "
    >
      Forms ({forms.length})
    </Button>
  );
};
