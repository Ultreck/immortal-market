/* eslint-disable react/prop-types */

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { IconAnalyze, IconFileAnalytics, IconTemplate } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function BusinessCreateProjectPopup({ children }) {



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
                        <IconAnalyze size={32} color="gray"/>
                        <div className="flex flex-col gap-2 w-72 text-gray-700">
                            <span className=" text-base font-semibold">Project</span>
                            <span className="text-sm">Projects is a permanent report analytics you want to keep updating</span>
                        </div>
                    </div>
                </Link>
                <Link
                    to={'#'}
                    className="rounded-2xl p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                     <div className="flex gap-2">
                        <IconFileAnalytics size={32} color="gray"/>
                        <div className="flex flex-col gap-2 w-72 text-gray-700">
                            <span className=" text-base font-semibold">Quick Analysis</span>
                            <span className="text-sm">Analyze a one off file such as CSV etc</span>
                        </div>
                    </div>
                </Link>
                <Link
                    to={'#'}
                    className="rounded-2xl p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                     <div className="flex gap-2">
                        <IconTemplate size={32} color="gray"/>
                        <div className="flex flex-col gap-2 w-72 text-gray-700">
                            <span className=" text-base font-semibold">Template</span>
                            <span className="text-sm">Use bank statement, FR, Receipt template</span>
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
