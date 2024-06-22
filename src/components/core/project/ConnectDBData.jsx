import { Avatar, Button, Checkbox, Input, Textarea } from '@nextui-org/react';
import Title from '../shared/Title';
import { TbFile, TbPlus } from 'react-icons/tb';
import UploadModal from './UploadModal';
import { useState } from 'react';
import DbDetails from './DbDetail';
import PropTypes from 'prop-types';
import UploadFile from './UploadFile';

const ConnectDBData = ({ sourceType }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col gap-10 px-7 md:px-12  py-10">
      <Title
        title={sourceType === 'DB' ? 'Connect your database' : 'Upload your fils'}
        sub={'select from multiple sources'}
      />

      <div className="flex flex-col border dark:border-none shadow-xl bg-white rounded-md  dark:bg-zinc-800 max-w-[90%]">
        <div className="flex flex-col p-4 border-b-2 border-gray-300 dark:border-black/40">

          {
            sourceType === "DB" ?  (
              <div className="flex flex-col sm:flex-row gap-2 py-5 px-5  sm:gap-6  items-center ">
              <Avatar
                classNames={{
                  base: 'bg-white border-1 border-gray-400/70 bg-[#f4f4f5] ',
                }}
                onClick={() => setShowModal(true)}
                size="lg"
                className="cursor-pointer"
                icon={<TbPlus strokeWidth={3} size={25} className="text-gray-700" />}
              />
  
              <div className="text-gray-500 dark:text-gray-400">Connect your database and select tables</div>
            </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 py-5 px-5  sm:gap-6  items-center ">

                <div className='flex gap-2'>
                <Avatar
                  classNames={{
                    base: 'bg-white border-1 border-gray-400/70 bg-[#f4f4f5] ',
                  }}
                  onClick={() => setShowModal(true)}
                  size="lg"
                  className="cursor-pointer"
                  icon={<TbPlus strokeWidth={3} size={25} className="text-gray-700" />}
                />
                <Avatar
                  classNames={{
                    base: 'bg-white border-1 border-gray-400/70 bg-[#f4f4f5] ',
                  }}
                  onClick={() => setShowModal(true)}
                  size="lg"
                  className="cursor-pointer"
                  icon={<TbFile strokeWidth={3} size={25} className="text-gray-700" />}
                />
                <Avatar
                  classNames={{
                    base: 'bg-white border-1 border-gray-400/70 bg-[#f4f4f5] ',
                  }}
                  onClick={() => setShowModal(true)}
                  size="lg"
                  className="cursor-pointer"
                  icon={<TbFile strokeWidth={3} size={25} className="text-gray-700" />}
                />

                </div>
  
              <div className="text-gray-500 dark:text-gray-400">Upload up to 3 related files at once</div>
            </div>
            )
          }
         
        </div>

        <div className="flex flex-col p-4 py-6 gap-7 border-b border-gray-300 dark:border-black/40">
          <div className="flex flex-col sm:flex-row gap-2  sm:gap-10 justify-between ">
            <div className=" text-base font-medium w-32 text-gray-600 dark:text-gray-300">Project name</div>
            <div className="flex-1">
              <Input
                placeholder="Enter project name"
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
            <div className=" text-base font-medium w-32 text-gray-600 dark:text-gray-300">Description</div>
            <div className="flex-1">
              <Textarea
                placeholder="Enter description"
                allowClear={true}
                size="lg"
                variant="bordered"
                classNames={{
                  inputWrapper: '!rounded border-gray-400/60 shadow-none',
                }}
              ></Textarea>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2  sm:gap-10 justify-between ">
            <div className=" text-base font-medium w-32 text-gray-600 dark:text-gray-300">Select File type</div>
            <div className="flex-1">
              <Input
                allowClear={true}
                size="lg"
                variant="bordered"
                classNames={{
                  inputWrapper: '!rounded border-gray-400/60 shadow-none',
                }}
              ></Input>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4  gap-4 h-[10rem] bg-[#fafafa] dark:bg-zinc-800/60 ">
          <label className="flex gap-6">
            <Checkbox />
            <div className="text-sm">First Row is header</div>
          </label>
          <label className="flex gap-6">
            <Checkbox />
            <div className="text-sm">Test for inconsistency</div>
          </label>
        </div>
        <div className="flex p-4 py-10 gap-4 border-t border-gray-300 dark:border-black/40 bg-[#f4f4f5] dark:bg-zinc-800/50">
          <Button color="primary">Continue</Button>
          <Button color="danger">Cancel</Button>
        </div>
      </div>

      <UploadModal showModal={showModal} setShowModal={() => setShowModal(false)}>
        {sourceType === 'DB' ? <DbDetails /> : <UploadFile />}
      </UploadModal>
    </div>
  );
};

ConnectDBData.propTypes = {
  sourceType: PropTypes.string,
};

export default ConnectDBData;

