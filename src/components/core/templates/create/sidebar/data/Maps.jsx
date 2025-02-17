import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { getElementDefaultStyle } from '@/lib/elements.js';
import PropTypes from 'prop-types';
import { Button, Skeleton } from '@heroui/react';
import { TbChevronLeft } from 'react-icons/tb';
import { useGetMaps } from '@/api/design.js';
import { capitalize, getImageLink } from '@/lib/utils.js';

const Maps = ({ mini, onBack }) => {
  const { data: { maps = [] } = {}, isLoading: isMapsLoading } = useGetMaps();

  const elements = maps.map((map) => ({
    id: `map-${map.name}`,
    data: {
      type: 'map',
      text: map.name,
      width: 400,
      height: 400,
      style: getElementDefaultStyle({ type: 'map' }),
      config: {
        data: [],
        name: map.name,
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
      tooltip: {
        enabled: true,
        type: 'bar',
      },
    },
    preview: (
      <div className="flex flex-col items-center justify-center">
        <img src={getImageLink(map.thumbnail)} className="w-full h-full object-cover" alt={`Map of ${map.name}`} />
        <p className="text-sm text-center leading-tight mt-2 opacity-60">{capitalize(map.name)}</p>
      </div>
    ),
  }));

  return (
    <>
      {mini ? (
        <div className="relative">
          {isMapsLoading ? (
            <div className="grid grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="aspect-square rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {elements.slice(0, 8).map((element) => {
                return <DraggableElementWrapper key={element.id} element={element} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
            <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-base font-semibold">Maps</h2>
          </div>
          {isMapsLoading ? (
            <div className="grid grid-cols-2 gap-4">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="aspect-square rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {elements.map((element) => {
                return <DraggableElementWrapper key={element.id} element={element} />;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

Maps.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default Maps;
