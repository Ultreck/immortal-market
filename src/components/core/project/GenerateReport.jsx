import { Button,  Checkbox,  Radio, RadioGroup, } from '@nextui-org/react';
import { IoIosArrowDown } from "react-icons/io";
import Title from './Title';

const GenerateReport = () => {
  return (
    <div className="flex flex-col gap-10 px-7 md:px-12  py-10 max-h-[100vh] overflow-auto">
      <Title title={'Generate your report'} />
      <RadioGroup
        orientation="horizontal"
        className="gap-10"
        classNames={{
          wrapper: 'gap-x-12 gap-y-4',
        }}
      >
        <Radio color="default" value="file 1">
          {' '}
          <span className="text-gray-700 dark:text-gray-300">Let AI generate</span>
        </Radio>
        <Radio color="default" value="file 2">
          <span className="text-gray-700 dark:text-gray-300">Generate yourself</span>
        </Radio>
      </RadioGroup>

      <div className="flex flex-col border dark:border-none shadow-xl bg-white rounded-md  dark:bg-zinc-800 max-w-[90%]">
        <div className="flex flex-col p-6 gap-5 border-b-2 border-gray-300 dark:border-black/40">
            <div className='text-xl'>Summary</div>
            <div className='flex  gap-20 md:gap-32 flex-wrap'>
                <div className='flex flex-col  gap-2'>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Disbursment by Month</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Paid by Month</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Percentage paid to disbursed</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Disbursment by Month</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Paid by Month</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Percentage paid to disbursed</span>
                        </label>
                   
                   

                </div>
                <div className='flex flex-col  gap-2'>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Disbursment by Month</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Paid by Month</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Percentage paid to disbursed</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Disbursment by Month</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Paid by Month</span>
                        </label>
                        <label className='flex gap-2 items-center' >
                        <Checkbox  color="default" /> <span className=' text-gray-500 dark:text-white/70'>Percentage paid to disbursed</span>
                        </label>

                </div>
            </div>
        </div>

        <div>
          <div className="space-y-4 mt-5 p-3">
            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-zinc-700/30 dark:text-white">
                <h2 className=" text-xl">Disbursement</h2>

                <IoIosArrowDown  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur
                distinctio corporis earum similique!
              </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-zinc-700/30 dark:text-white">
                <h2 className=" text-xl">Repayment</h2>

                <IoIosArrowDown  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur
                distinctio corporis earum similique!
              </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-zinc-700/30 dark:text-white">
                <h2 className=" text-xl">Disbursement date</h2>

                <IoIosArrowDown  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur
                distinctio corporis earum similique!
              </p>
            </details>
          </div>
        </div>

      
        <div className="flex p-4 py-10 gap-4 border-t border-gray-300 dark:border-black/40 bg-[#f4f4f5] dark:bg-zinc-800/50">
          <Button color="primary">Continue</Button>
          <Button color="danger">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;

