/* eslint-disable no-unused-vars */

import Drawer from '@/components/ui/Drawer.jsx';
import useGlobalStore from '@/store/global.js';
import Title from '../shared/Title';
import { Button, Checkbox, Input } from '@nextui-org/react';

const InviteModal = () => {
  const isInviteModalOpen = useGlobalStore((state) => state.data.isInviteModalOpen);
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <Drawer
      isOpen={isInviteModalOpen || false}
      onClose={() => updateData({ isInviteModalOpen: false })}
      width={700}
      padding={false}
      round={false}
    >
      <div className="flex max-h-screen overflow-hidden">
        <div className="flex flex-col gap-10 px-7  py-10  w-full">
          <Title title={'Invite Someone'} sub={'Invite creaors, collaborators and viewers'} />

          <div className="flex flex-col border dark:border-none shadow-xl bg-white rounded-md  dark:bg-zinc-800  w-full  ">

            <div className="flex flex-col p-4 py-6 gap-7 border-b border-gray-300 dark:border-black/40">
              <div className="flex flex-col sm:flex-row gap-2  sm:gap-10 justify-between ">
                <div className=" text-base font-medium w-32 text-gray-600 dark:text-gray-300">Name</div>
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
                <div className=" text-base font-medium w-32 text-gray-600 dark:text-gray-300">Email</div>
                <div className="flex-1">
                  <Input
                    allowClear={true}
                    size="lg"
                    type="email"
                    variant="bordered"
                    classNames={{
                      inputWrapper: '!rounded border-gray-400/60 shadow-none',
                    }}
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2  sm:gap-10 justify-between ">
                <div className=" text-base font-medium w-32 text-gray-600 dark:text-gray-300">Select Project(s)</div>
                <div className="flex-1">
                  <Input
                    allowClear={true}
                    size="lg"
                    type="email"
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
                <div className="text-sm"> Creator (Can Create and collaborate)</div>
              </label>
              <label className="flex gap-6">
                <Checkbox />
                <div className="text-sm"> Editor (Can only Edit and collaborate)</div>
              </label>
              <label className="flex gap-6">
                <Checkbox />
                <div className="text-sm"> Viewer (Can only view)</div>
              </label>
            </div>

            <div className="flex p-4 py-10 gap-4 border-t border-gray-300 dark:border-black/40 bg-[#f4f4f5] dark:bg-zinc-800/50">
              <Button color="primary">Continue</Button>
              <Button color="danger">Cancel</Button>
            </div>

          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default InviteModal;
