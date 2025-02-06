import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { charts, chartCategories } from '@/lib/design/charts.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel';
import { TbChevronLeft } from 'react-icons/tb';
import { Button } from '@heroui/react';
import PropTypes from 'prop-types';

const StandardCharts = ({ mini = false, onBack }) => {
  return (
    <>
      {mini ? (
        <div className="relative">
          <BasicCarousel
            classNames={{ next: 'right-0', prev: 'left-0', base: 'overflow-hidden' }}
            slides={Array(2)
              .fill(null)
              .map((_, index) => {
                return {
                  id: index,
                  content: (
                    <div className="grid grid-cols-4 gap-4">
                      {charts.slice(index * 8, index * 8 + 8).map((element) => (
                        <DraggableElementWrapper key={element.id} element={element} />
                      ))}
                    </div>
                  ),
                };
              })}
          />
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
            <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-base font-semibold">Charts</h2>
          </div>
          <div className="space-y-8">
            {chartCategories.map(({ id, title }) => {
              const items = charts.filter((element) => element.category === id);
              return (
                <div key={id}>
                  <h3 className="text-base font-medium mb-3 px-2">{title}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {items.map((element) => (
                      <DraggableElementWrapper key={element.id} element={element} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

StandardCharts.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default StandardCharts;
