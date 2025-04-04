import { Button, Card, CardBody, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbChevronRight, TbSettings2 } from 'react-icons/tb';
import { IoSwapHorizontal } from 'react-icons/io5';
import { useState } from 'react';
import ShapeSwap from '@/components/core/templates/create/tools/elements/specific/shape/ShapeSwap.jsx';
import useDesignStore from '@/store/design.js';

const ShapeConfig = ({ element }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);
  const [view, setView] = useState('home');

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={tool === 'shape'}
      onOpenChange={(v) => (v ? openTool('shape') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Shape config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 space-y-4 w-[360px] h-full max-h-[500px] overflow-y-auto block">
        {view === 'home' && (
          <div className="w-full pb-2">
            <h3 className="text-[1.05rem] font-semibold mb-6">Shape settings</h3>
            <div className="flex flex-col space-y-5">
              <Card
                onPress={() => setView('swap')}
                className="w-full border border-default-100"
                isPressable
                shadow="none"
              >
                <CardBody className="flex flex-row items-center justify-between p-4">
                  <div className="flex items-center space-x-2">
                    <IoSwapHorizontal size="20" />
                    <p className="text-base">Change shape</p>
                  </div>
                  <TbChevronRight size="20" />
                </CardBody>
              </Card>
            </div>
          </div>
        )}
        {view === 'swap' && <ShapeSwap element={element} onBack={() => setView('home')} />}
      </PopoverContent>
    </Popover>
  );
};

ShapeConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default ShapeConfig;
