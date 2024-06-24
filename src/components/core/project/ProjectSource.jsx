import { file_source } from '@/lib/business.js';
import { Image } from '@nextui-org/react';

import PropTypes from "prop-types"
import Title from '../shared/Title';

const ProjectSource = ({setSourceType}) => {
  return (
    <div className="flex flex-col gap-5 px-7 md:px-12  py-10">
      <Title title={"Connect your data"} sub={"select from multiple sources"} />
      <div className="flex flex-col gap-2 bg-zinc-100 dark:bg-zinc-800 p-3 rounded-md">
        <div className="grid grid-cols-3 gap-4  ">
          {file_source?.map((data) => (
            <div
              key={data._id}
              className="   p-3 rounded shadow-sm  flex flex-col  gap-3 hover:scale-105 hover:border hover:border-sky-500  bg-white dark:bg-[#18181b]  transition-all duration-500 cursor-pointer h-32 items-center justify-center" 
              onClick={()=>setSourceType(data?.type)}
            >
              <Image src={data?.image} className="max-w-24 w-24 h-12 object-contain" />
              <div className="text-base font-medium">{data?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectSource.propTypes = {
  setSourceType: PropTypes.func
}

export default ProjectSource;
