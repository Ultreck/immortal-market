import { Card } from "@nextui-org/react"
import {IconPlus } from "@tabler/icons-react"
import { RiFileExcel2Line } from "react-icons/ri";
import { TbFileTypeCsv, TbFileTypePdf } from "react-icons/tb";
import { MdOutlineFolderZip } from "react-icons/md";
import OracleIcon from '/images/oracleImg.png'
import SQLServerIcon from '/images/sqlserver.png'
import SQLIcon from '/images/sql.png'




const StartProjectCard = () => {
  return (
    <Card
    hover
    role="button"
    tabIndex={0}
    aria-label="Upload a new document"
    aria-describedby="Upload a new document"
    aria-hidden={false}
    aria-disabled={false}
    className="px-6 py-6 flex flex-col  justify-center cursor-pointer"
    >
        <p className="text-ellipsis whitespace-nowrap overflow-hidden text-2xl  font-medium dark:text-white/90">
            Start a project
        </p>
        <p className="text-sm mt-0.5 opacity-80 mb-10 dark:text-white/80">A lot of the business can not do the needful so we are here for you!</p>

        <div className="flex flex-wrap gap-3 md:gap-6 items-center justify-center ">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-green-700 text-white text-xl md:text-3xl font-semibold">
                <RiFileExcel2Line
                size="36"
                className="bg-gradient-to-r from-green-700 to--600 bg-clip-text text-white"
                />
            </div>

            <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-green-700 text-white text-xl md:text-3xl font-semibold">
                <TbFileTypeCsv
                size="36"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-green-700"
                />
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-red-500 text-white text-xl md:text-3xl font-semibold">
                <TbFileTypePdf
                size="36"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-white"
                />
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#0f86c5] text-white text-xl md:text-3xl font-semibold">
                <MdOutlineFolderZip
                size="36"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-white"
                />
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-red-900 text-white text-xl md:text-3xl font-semibold">
                <img src={OracleIcon} alt=""  className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-blue-600" />
            </div>
            <div className=" min-w-20 min-h-20 rounded-full">
                <img src={SQLIcon} alt="" style={{width: '90px'}}   className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-blue-600 bg-red-800  " />
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center  text-white text-xl md:text-3xl font-semibold">
                <img src={SQLServerIcon} alt=""  className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-blue-600 rounded-full" />
            </div>
           
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-50 text-white text-xl md:text-3xl font-semibold border border-gray-500">
                <IconPlus
                size="36"
                className="text-gray-500"
                />
            </div>
        </div>

       
    </Card>
  )
}

export default StartProjectCard
