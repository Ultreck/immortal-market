/* eslint-disable no-unused-vars */

import Drawer from '@/components/ui/Drawer.jsx';
import useGlobalStore from '@/store/global.js';


const OptionModal = () => {
  const isOptionModalOpen = useGlobalStore((state) => state.data.isOptionModalOpen);
  const OptionModalData = useGlobalStore((state) => state.data.data);
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <Drawer
      isOpen={isOptionModalOpen}
      onClose={() => updateData({ isOptionModalOpen: false, })}
      width={600}
      padding={false}

    >
      <div className="flex max-h-screen overflow-hidden h-full dark:dark:bg-zinc-800">
             <div className="flex flex-col group shadow-md transition-all hover:shadow-sm duration-500">
                  <div className="flex flex-col relative h-[24rem] max-h-[24rem] overflow-hidden">
                      <img src={OptionModalData?.mainImg} alt="mainimg" className="h-full  transition-all duration-1000 " />
                      <div className=" absolute bg-[#5f73df] text-white text-sm px-2 py-1 m-2 shadow rounded "> <span className=" text-default-100 dark:text-gray-50">Save</span>  $5  <span className=" text-default-100 dark:text-gray-50">- Limited time offer</span></div>
                  </div>
                  <div className="flex flex-col bg-[#fafafa] dark:dark:bg-zinc-800  px-6 py-8 gap-6 ">
                      <small className="text-default-500 text-xs">Business Idea</small>
                      <big className="font-bold">{OptionModalData?.title}</big>
                      <p className=" line-clamp-5 text-default-500">{OptionModalData?.details}</p>
                  </div>
              </div>
      </div>
    </Drawer>
  );
};

export default OptionModal;
