/* eslint-disable react/prop-types */


import { MdCancel } from "react-icons/md";
import allUser from './data';
import { Avatar } from '@heroui/react';
import { IconSearch } from "@tabler/icons-react";



const ChatSidebar = ({
  showSearchInp,
  selectedUserData,
  searchTerm,
  handleChange,
  selectAChat,
  toggleInp,
}) => {

  const  setCurrent = (data)=>{
    selectAChat(data)
  }

  return (

    <div
      className={`h-full w-60  bg-[#324249] ${
        (!selectedUserData) ? "w-full md:w-60 block" : "hidden md:block"
      }
      `}
    >
      <div className="py-[0.68rem] w-full text-gray-400 border-b border-slate-600 flex items-center justify-between  px-5">
        {!showSearchInp && <h3 className=" text-center">Group Message</h3>}
        <div className={`m-0 pl-2 px-1`}>
          <div
            className={`flex items-center h-10 bg-sidebarInpColor/30    rounded-2xl px-4 relative shadow   ${
              showSearchInp ? "" : "w-11"
            }`}
          >
            <input
              name=""
              id=""
              autoFocus={true}
              className={` outline-none border-none bg-transparent  px-2 w-full placeholder:text-xs  transition-all duration-700     placeholder:text-sidebarInptextColor text-gray-500 ${
                showSearchInp ? "chatInpShow" : "chatInp"
              } `}
              onChange={(e)=>handleChange(e)}
              value={searchTerm}
              type="text"
              placeholder="Search"
            />
            <div
              className="ml-auto h-full  items-center  cursor-pointer"
              onClick={toggleInp}
            >
              <button className="pl-3  outline-none rounded flex items-center justify-center">
                {" "}
                {showSearchInp ? (
                  <MdCancel
                    className=" text-sidebarInptextColor text-center  absolute top-[0.9rem] right-4"
                    size={14}
                  />
                ) : (
                  <IconSearch
                    className=" text-sidebarInptextColor text-center  absolute top-[0.9rem] right-4"
                    size={14}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 text-gray-400">
        <div className="flex flex-col space-y-4">

          <div className=" max-h-[90vh]  overflow-y-auto px-3 pb-10 scrollbar-hide ">


            {


             (allUser)?.map((user) => (
                <div
                  key={user?.id}
                  className="flex justify-between items-start cursor-pointer rounded-md hover:bg-slate-600 p-2 py-3"
                  onClick={() => setCurrent(user)}
                >
                  <div className="flex gap-x-4">
                    <div className="relative">
                        <Avatar
                          isBordered
                          size="sm"
                          color="default"
                          name={user.name[0]}
                          className=" cursor-pointer"
                        />

                    </div>

                    {/* <span className=" truncate w-[8.5rem] text-gray-700 font-medium text-[0.85rem]">{user?.name}</span> */}


                       <div className="flex flex-col gap-y-1 w-[8rem]">
                          <span className=" truncate w-[8rem] text-xs font-medium text-slate-200/80">{user.name}</span>
                          <span className=" truncate w-[8rem] text-[0.55rem] ">Ada, Siji and 27 others</span>

                        </div>
                  </div>
                </div>
              ))

            }






          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
