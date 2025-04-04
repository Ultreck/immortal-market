import { Button, Card, CardBody, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbChevronRight, TbSettings2 } from 'react-icons/tb';
import { IoSwapHorizontal } from 'react-icons/io5';
import FrameSwap from '@/components/core/templates/create/tools/elements/specific/frame/FrameSwap.jsx';
import { useState } from 'react';
import FrameCarouselConfig from '@/components/core/templates/create/tools/elements/specific/frame/FrameCarouselConfig.jsx';
import FrameTabsConfig from '@/components/core/templates/create/tools/elements/specific/frame/FrameTabsConfig.jsx';
import useDesignStore from '@/store/design.js';

const FrameConfig = ({ element }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);
  const [view, setView] = useState('home');

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={tool === 'frame'}
      onOpenChange={(v) => (v ? openTool('frame') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Frame config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 space-y-4 w-[360px] h-full max-h-[500px] overflow-y-auto block">
        {view === 'home' && (
          <div className="w-full pb-2">
            <h3 className="text-[1.05rem] font-semibold mb-6">Frame settings</h3>
            <div className="flex flex-col space-y-5">
              {element.config.name.startsWith('shape') && (
                <Card
                  onPress={() => setView('swap')}
                  className="w-full border border-default-100"
                  isPressable
                  shadow="none"
                >
                  <CardBody className="flex flex-row items-center justify-between p-4">
                    <div className="flex items-center space-x-2">
                      <IoSwapHorizontal size="20" />
                      <p className="text-base">Change frame</p>
                    </div>
                    <TbChevronRight size="20" />
                  </CardBody>
                </Card>
              )}
              {element.config.name === 'carousel' && <FrameCarouselConfig element={element} />}
              {element.config.name === 'tabs' && <FrameTabsConfig element={element} />}
            </div>
          </div>
        )}
        {view === 'swap' && <FrameSwap element={element} onBack={() => setView('home')} />}
      </PopoverContent>
    </Popover>
  );
};

FrameConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FrameConfig;
