import { useRef, useState } from 'react';
import { Button } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';

const shapes = [
  ...([
    'rectangle',
    'circle',
    'triangle',
    'rhombus',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-down',
    'arrow-up-down',
  ].map((type) => ({
    id: `shape-${type}`,
    type: `shape-${type}`,
    name: `Shape ${type}`,
    data: {
      style: {
        backgroundColor: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        animationDuration: '1s',
      },
      type: `shape-${type}`,
      text: `Shape ${type}`,
      width: 120,
      height: 120,
    },
    group: 'shape',
    category: 'design',
  })) || []),
  {
    id: 'line',
    type: 'line',
    name: 'Line',
    data: {
      style: {
        backgroundColor: '#eee',
        borderWidth: 0,
        borderColor: '#000000',
        opacity: 1,
        borderRadius: 0,
        strokeWidth: 2,
        animationDuration: '1s',
      },
      lineEnd: null,
      lineStart: null,
      type: 'line',
      text: 'Line',
      width: 100,
      height: 8,
    },
    group: 'shape',
    category: 'design',
  },
];

const Shapes = () => {
  const [, setControlledSwiper] = useState(null);
  const nextEl = useRef(null);
  const prevEl = useRef(null);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Shapes</h2>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 -right-8 z-[10]">
          <Button
            ref={nextEl}
            isIconOnly
            size="sm"
            className="w-[28px] !h-[28px] min-h-auto min-w-[auto] rounded-full flex items-center justify-center"
            variant="light"
          >
            <TbChevronRight size="24" />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-8 z-[10]">
          <Button
            ref={prevEl}
            isIconOnly
            size="sm"
            className="w-[28px] !h-[28px] min-h-auto min-w-[auto] rounded-full flex items-center justify-center"
            variant="light"
          >
            <TbChevronLeft size="24" />
          </Button>
        </div>
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
          navigation={{ nextEl: nextEl.current, prevEl: prevEl.current }}
          modules={[Navigation]}
          onSwiper={(swiper) => setControlledSwiper(swiper)}
        >
          {Array(Math.ceil(shapes.length / 6))
            .fill(null)
            .map((_, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-3 gap-3">
                    {shapes.slice(index * 6, index * 6 + 6).map((element) => (
                      <DraggableElementWrapper key={element.id} element={element} />
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Shapes;
