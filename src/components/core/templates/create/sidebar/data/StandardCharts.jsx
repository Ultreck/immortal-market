import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { standard } from '@/lib/design/charts.jsx';
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
                      {standard.slice(index * 8, index * 8 + 8).map((element) => (
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
          <div className="flex items-center space-x-3 mb-8">
            <Button onPress={onBack} variant="bordered" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-xl font-semibold">Standard charts</h2>
          </div>
          <div className="space-y-8">
            {[
              { id: 'bar', title: 'Bar' },
              { id: 'pie', title: 'Pie' },
              { id: 'doughnut', title: 'Doughnut' },
              { id: 'line', title: 'Line' },
              { id: 'area', title: 'Area' },
              { id: 'semi-pie', title: 'Semi Pie' },
              { id: 'semi-circle', title: 'Semi Circle' },
              { id: 'bubble', title: 'Bubbles' },
              { id: 'combination', title: 'Combinations' },
            ].map(({ id, title }) => {
              const items = standard.filter((element) => element.category === id);
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
