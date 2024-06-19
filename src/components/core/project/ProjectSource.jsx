import { file_source } from '@/lib/business.js';
import { Image } from '@nextui-org/react';

const ProjectSource = () => {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-5">
      <div className="flex flex-col pt-4 gap-2 text-sm">
        <section className="text-primary-500 font-bold cursor-pointer">All</section>
        <section className="cursor-pointer opacity-50">Files & Feeds</section>
        <section className="cursor-pointer opacity-50">Cloud Storage/Drive</section>
        <section className="cursor-pointer opacity-50">Database</section>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-4">
          {file_source?.map((data) => (
            <div
              key={data.id}
              className="drop-shadow-sm border-1 border-sky-300/20 p-3 rounded-xl shadow-sm  flex flex-col  gap-3 hover:scale-105 hover:border-sky-500 justify-between  items-start transition-all duration-500 cursor-pointer h-32"
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

export default ProjectSource;
