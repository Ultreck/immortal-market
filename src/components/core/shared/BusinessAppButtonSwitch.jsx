/* eslint-disable react/prop-types */

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { IconBusinessplan, IconCreditCard, IconSettings } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function BusinessButtonPopup({ children }) {



  return (
    <>
      {/* { open && ( */}
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>{children}</PopoverTrigger>

          <PopoverContent className="h-fit w-full px-0 py-0 rounded-xl">
                <div className="flex flex-col gap-1 p-3">

                <Link
                    to={'#'}
                    className="rounded-2xl p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                    <div className="flex gap-2">
                        <IconCreditCard size={32} color="gray"/>
                        <div className="flex flex-col gap-2 w-72 text-gray-700">
                            <span className=" text-base font-semibold">Project</span>
                            <span className="text-sm">Start Exploring banking template for your finanacial analysis</span>
                        </div>
                    </div>
                </Link>
                <Link
                    to={'#'}
                    className="rounded-2xl p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                     <div className="flex gap-2">
                        <IconBusinessplan size={32} color="gray"/>
                        <div className="flex flex-col gap-2 w-72 text-gray-700">
                            <span className=" text-base font-semibold">Analyze Report</span>
                            <span className="text-sm">Start Exploring business template for your finanacial analysis</span>
                        </div>
                    </div>
                </Link>
                <Link
                    to={'#'}
                    className="rounded-2xl p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                     <div className="flex gap-2">
                        <IconSettings size={32} color="gray"/>
                        <div className="flex flex-col gap-2 w-72 text-gray-700">
                            <span className=" text-base font-semibold">Custom</span>
                            <span className="text-sm">Start Exploring business template for your finanacial analysis</span>
                        </div>
                    </div>
                </Link>


                </div>
          </PopoverContent>
        </Popover>
      {/* )} */}
    </>
  );
}
