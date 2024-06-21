/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { HiPaperAirplane } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CiCircleRemove } from "react-icons/ci";
import { GrAttachment } from "react-icons/gr";
import { useState } from "react";


const Form = ({mate}) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');


  const handleMessage = (e)=>{
      e.preventDefault()
      setMessage(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
  };


  return (
    <div className="border-t
    dark:border-t-zinc-700 ">
      <div className="p-1">
        {file &&  file?.type?.includes('application') ? (
               <div className="relative w-20 h-10 truncate">
                <div alt="" className="border py-2 px-1 shadow-sm">
                <span>{file?.name}</span>
              </div>
               <CiCircleRemove
                 size={22}
                 strokeWidth={2.4}
                 className="text-red-400 absolute -right-4 top-0 cursor-pointer"
                 onClick={() => setFile(null)}
               />
             </div>
        ) : file && file?.type?.includes('image') && (
          
          <div className="relative w-20 h-20">
            <img className="w-20 h-20" alt="" src={URL.createObjectURL(file)} />
            <CiCircleRemove
              size={22}
              strokeWidth={2.4}
              className="text-red-400 absolute -right-4 top-0 cursor-pointer"
              onClick={() => setFile(null)}
            />
          </div>
        )}
      </div>

      <div
        className="
          py-4 
          px-4 
          bg-white 
          dark:bg-transparent

          flex 
          items-center 
          gap-2 
          lg:gap-4 
          w-full
        "
      >

        <label htmlFor="file" className=" cursor-pointer">
          <GrAttachment size={25} className="text-sky-500 dark:text-zinc-400/60" />
        </label>

        <input
          type="file"
          className="hidden"
          accept=".jpg, .png, .jpeg, application/*"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <form
          onSubmit={onSubmit}
          className="flex items-center gap-2 lg:gap-4 w-full"
        >
          <MessageInput
            id="message"
            value={message}
            onChange={(e)=>handleMessage(e)}
            required
            placeholder="Write a message"
          />
          <button
            type="submit"
            disabled={!(message?.trim()) && !file }
            className=" disabled:bg-sky-200 
              rounded-full 
              p-2 
              bg-sky-500  dark:bg-zinc-400/60
              cursor-pointer 
              hover:bg-sky-600 
              hover:dark:bg-zinc-600 
              transition
              
            "
          >
            <HiPaperAirplane size={18} className="text-white dark:text-zinc-800" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
