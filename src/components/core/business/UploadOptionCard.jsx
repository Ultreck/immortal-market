import { Image } from '@nextui-org/react'
import PropTypes from 'prop-types';

const UploadOptionCard = ({data}) => {
  return (
    <div className=" drop-shadow-sm border-1 border-sky-300/20 p-3 rounded-xl shadow-sm  flex flex-col  gap-3 hover:scale-105 hover:border-sky-500 justify-between  items-start transition-all duration-500 cursor-pointer h-32">
            <Image src={data?.image} className="max-w-24 w-24 h-12 object-contain"/>

            <div className="text-base font-medium">
                {data?.name}
            </div>  
        </div>
  )
}


UploadOptionCard.propTypes = {
    data: PropTypes.any
  };

export default UploadOptionCard
