import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/pages/FrameContents.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';
import { cn } from '@/lib/utils.js';

const FrameCarousel = ({ element, active, highlighted, width, onClick, onChange }) => {
  const slides = Array(2).fill(null);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
      className="flex flex-col"
    >
      {({ isEditing }) => (
        <BasicCarousel
          classNames={{ base: cn('w-full h-full light', { 'overflow-hidden': !isEditing }) }}
          slides={slides.map((s, i) => {
            return {
              id: i,
              content: (
                <FrameContents
                  key={i}
                  id={`frame/${i}/${element.id}`}
                  element={element}
                  onChange={onChange}
                  isEditing={isEditing}
                  active={active}
                  highlighted={highlighted}
                  overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" />}
                />
              ),
            };
          })}
        />
      )}
    </ElementWrapper>
  );
};

FrameCarousel.propTypes = ElementPropTypes;

export default FrameCarousel;
