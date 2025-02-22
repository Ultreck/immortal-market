import PropTypes from 'prop-types';
import Drawer from '@/components/ui/Drawer.jsx';
import { HiX } from 'react-icons/hi';
import { Button } from '@heroui/react';

import { SvgPresent } from '@/components/core/templates/create/elements/Svg/Svg.jsx';

const ExpandChartModal = ({ element, isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
      <div className="px-14 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-semibold max-w-lg">Expand Svg</h3>
          <Button onPress={onClose} isIconOnly radius="full" variant="bordered">
            <HiX size="20" />
          </Button>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-10">
          <div className="border border-default-200 bg-default-100/50 rounded-3xl px-10 py-10">
            <SvgPresent element={{ ...element, width: 600, height: 400 }} isMapWrapperDisabled={true} />
          </div>
          <div className="py-2">
            <h3 className="text-2xl font-semibold max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias consequatur illo impedit.
            </h3>
            <ul className="list-disc ml-4 opacity-75 mt-6 space-y-4">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt dolorem dolorum fugit incidunt
                nam vero? Deserunt fugit laudantium pariatur!
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt qui repudiandae.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt enim, eveniet illum incidunt, nobis
                odio placeat rem repellendus rerum sed sint sunt suscipit tenetur voluptatum!
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt qui repudiandae.</li>
            </ul>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

ExpandChartModal.propTypes = {
  element: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ExpandChartModal;
