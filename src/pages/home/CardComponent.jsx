import { ElementPropTypes } from '@/lib/prop-types';
import { Card, Image } from '@nextui-org/react';

const CardComponent = ({ data }) => {
  return (
    <div className="text mt-5">
      <Card className="rounded-2xl p-4 w-[250px] mb-2  h-48 cursor-pointer">
        {data.icon && <div className="text  border-2 border-dashed rounded-md w-full h-full">
           <span className="text hover:scale-110 w-full h-full flex justify-center items-center">
            {data.icon}
            </span> 
            </div>}
        {data.imageUrl && (
          <Image
            removeWrapper
            alt="Card background"
            className="h-[200px] object-cotain rounded-none hover:scale-110"
            src={data.imageUrl}
          />
        )}
      </Card>

      <span>{data.title}</span>
    </div>
  );
};
CardComponent.propTypes = ElementPropTypes;
export default CardComponent;
