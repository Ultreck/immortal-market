import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Title from '../shared/Title';


const DBcredential = () => {
    const [isOpenPassword, setisOpenPassword] = useState(false)
  return (
    <div className="flex flex-col gap-10 px-7 md:px-12  py-10">
      <Title title={'Enter credential'} sub={'select from multiple sources'} />

      <div className="flex flex-col border dark:border-none shadow-xl bg-white rounded-md  dark:bg-zinc-800 max-w-[90%] py-10">
        <div className="flex flex-col p-4 py-6 gap-7 border-b border-gray-300 dark:border-black/40">
          <div className="flex flex-col sm:flex-row gap-2  sm:gap-10 justify-between ">
            <div className=" text-base font-medium w-[9rem] text-gray-600 dark:text-gray-300">Connection string</div>
            <div className="flex-1">
              <Input
                allowClear={true}
                size="lg"
                variant="bordered"
                classNames={{
                  inputWrapper: '!rounded border-gray-400/60 shadow-none ',
                }}
              ></Input>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2  sm:gap-10 justify-between ">
            <div className=" text-base font-medium w-[9rem] text-gray-600 dark:text-gray-300">Database name</div>
            <div className="flex-1">
              <Input
                allowClear={true}
                size="lg"
                variant="bordered"
                classNames={{
                  inputWrapper: '!rounded border-gray-400/60 shadow-none ',
                }}
              ></Input>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2  sm:gap-10 justify-between ">
            <div className=" text-base font-medium w-[9rem] text-gray-600 dark:text-gray-300">Username</div>
            <div className="flex-1">
              <Input
                allowClear={true}
                size="lg"
                variant="bordered"
                classNames={{
                  inputWrapper: '!rounded border-gray-400/60 shadow-none ',
                }}
              ></Input>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2  sm:gap-10 justify-between ">
            <div className=" text-base font-medium w-[9rem] text-gray-600 dark:text-gray-300">Password</div>
            <div className="flex-1">
              <Input
                
                type={isOpenPassword  ? 'text' : 'password'}
                endContent={ isOpenPassword  ? <FaEyeSlash color='gray' className=' cursor-pointer' onClick={()=>setisOpenPassword(false)}/> :   <FaEye color='gray' className=' cursor-pointer' onClick={()=>setisOpenPassword(true)}/>}
                size="lg"
                variant="bordered"
                classNames={{
                  inputWrapper: '!rounded border-gray-400/60 shadow-none ',
                }}
              ></Input>
            </div>
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

export default DBcredential;

