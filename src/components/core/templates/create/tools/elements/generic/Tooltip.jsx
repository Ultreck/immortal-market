import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { TbAbc } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';
import { LuMousePointerClick } from 'react-icons/lu';
import useDesignStore from '@/store/design.js';

const ElementTooltip = ({ element, onChange }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px] !max-h-[550px] overflow-y-auto block' }}
      isOpen={tool === 'tooltip'}
      onOpenChange={(v) => (v ? openTool('tooltip') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Tooltip" className="text-base">
          <LuMousePointerClick size="24" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-10 py-8 w-full space-y-3">
          <h3 className="text-lg font-semibold mb-7">Tooltip</h3>
          <div className="flex flex-col space-y-4 w-full">
            <div>
              <Select
                variant="bordered"
                label="Field"
                labelPlacement="outside"
                classNames={{ value: 'text-base', label: 'text-base leading-none font-normal' }}
                aria-label="Field"
                radius="lg"
              >
                {[{ key: 'default', name: 'Default' }].map((type) => (
                  <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                    {type.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Select
                variant="bordered"
                label="Data"
                labelPlacement="outside"
                classNames={{ value: 'text-base', label: 'text-base leading-none font-normal' }}
                aria-label="Data"
                radius="lg"
              >
                {[
                  {
                    key: 'disbursement-by-date',
                    label: 'Disbursement by date',
                  },
                  {
                    key: 'disbursement-by-range',
                    label: 'Disbursement by range',
                  },
                ].map((item) => (
                  <SelectItem key={item.key} classNames={{ title: 'px-2 text-base' }}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-2">
              <div
                className={cn('cursor-pointer rounded', {
                  'border-2 border-[#2563eb]': element.tooltip?.type === 'text',
                })}
              >
                <div
                  className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60"
                  onClick={() => {
                    onChange({ ...element, tooltip: { ...element.tooltip, type: 'text' } });
                  }}
                >
                  <TbAbc className="w-full h-full" />
                </div>
                <p className="text-center">Text</p>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

ElementTooltip.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ElementTooltip;
