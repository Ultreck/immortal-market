import { RiCloseFill } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import { createElement } from 'react';
import _elements from '@/lib/elements.js';
import { Button } from '@nextui-org/react';
import useTemplateStore from '@/store/template.js';

const Layers = () => {
  const elements = useTemplateStore((state) => state.template.elements);
  const selected = useTemplateStore((state) => state.template.selected);
  const selectElement = useTemplateStore((state) => state.selectElement);
  const deleteElement = useTemplateStore((state) => state.deleteElement);

  return (
    <div className="px-4 py-4">
      {elements.length > 0 ? (
        <div className="space-y-1">
          {elements.map((element) => {
            const active = element.id === selected;
            const icon = _elements.find((e) => e.type === element.type).icon;

            return (
              <div
                key={element.id}
                className={cn('transition-all duration-200 border-2 border-transparent rounded-2xl p-1 select-none', {
                  'border-primary-500 dark:border-primary-400': active,
                })}
              >
                <div
                  className={cn(
                    'relative rounded-xl px-4 py-2 flex items-center space-x-2 cursor-pointer justify-between',
                    'bg-default-200/60 hover:bg-default-200 dark:bg-default-100/50 dark:hover:bg-default-100'
                  )}
                  onClick={() => selectElement(element.id)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="opacity-60">{createElement(icon, { size: 20 })}</span>
                    <span className="truncate">{element.text}</span>
                  </div>
                  <Button isIconOnly variant="light" size="sm" radius="full">
                    <RiCloseFill size={20} className="block" onClick={() => deleteElement(element.id)} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-20">
          <p className="text-center text-sm opacity-80 max-w-[200px] mx-auto">
            No elements. Add some elements to the canvas
          </p>
        </div>
      )}
    </div>
  );
};

Layers.propTypes = {};

export default Layers;
