import { Avatar } from '@nextui-org/react';
import { IconLoader } from '@tabler/icons-react';
import { useState } from 'react';
import { TbPlus  } from 'react-icons/tb';




const UploadFile = () => {
    const [Loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col border dark:border-none  bg-white rounded-md  dark:bg-zinc-800 min-h-[28rem]   py-10 px-4 items-center justify-center">
        
        {
            Loading ?  (
                        <div className='flex flex-col justify-center items-center gap-10'>
                         {/* <Avatar
                                classNames={{
                                  base: '',
                                
                                }}
                                onClick={() =>setLoading(false)}
                                size="lg"
                                className="cursor-pointer p-16 "
                                icon={<TbLoader  strokeWidth={3} size={70} className=" animate-spin" />}
                              /> */}
                              <IconLoader  
                              strokeWidth={1} size={70} className=" animate-spin" />
                
                              <div className='flex flex-col items-center gap-2'>
                                <span className='text-blue-800 dark:text-blue-400 text-xl  '>Uploading (file one)</span>
                                <span className='text-xs'>Pls do not cancel until done</span>
                              </div>
                        </div>

            ) : (
            <div className='flex flex-col justify-center items-center gap-10'>
            <Avatar
                    classNames={{
                    base: 'bg-white border-1 border-gray-400/70 bg-[#f4f4f5]',
                    
                    }}
                    onClick={() =>setLoading(true)}
                    size="lg"
                    className="cursor-pointer p-16 "
                    icon={<TbPlus strokeWidth={3} size={50} className="text-gray-700" />}
                />

                <div className='flex flex-col items-center gap-2'>
                    <span className='text-blue-800 dark:text-blue-400 text-xl  '>Upload a file</span>
                    <span className='text-xs'>Not more than 10MB</span>
                </div>
            </div>

            )
        }

    </div>
  )
}

export default UploadFile
