import { Card, Image } from '@nextui-org/react';
import img from '../../assets/business.webp';
import PropTypes from 'prop-types';

const TemplateCardComponent = ({ data }) => {
  const cardHeights = ['h-[280px]', 'h-52', 'h-60', 'h-64', 'h-72', 'h-80'];

  const heightClass =
    data < 3 ? cardHeights[0] : data === 3 ? cardHeights[1] : cardHeights[Math.min(data - 2, cardHeights.length - 1)];

  return (
    <div className={`w-full h-full text-center md:text-start  ${data === 8 && 'lg:-translate-y-20'}`}>
      <Card className={`rounded-lg ${heightClass} w-[220px] mx-auto  mb-2 cursor-pointer`}>
        <Image
          removeWrapper
          alt="Card background"
          className="h-full object-cotain rounded-none hover:scale-125"
          src={img}
        />
      </Card>
      <span className="mx-auto">Looking for design templates</span>
    </div>
  );
};

TemplateCardComponent.propTypes = {
  data: PropTypes.any,
};

export default TemplateCardComponent;
