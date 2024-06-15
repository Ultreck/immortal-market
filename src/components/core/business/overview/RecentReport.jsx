import { IconReportAnalytics } from "@tabler/icons-react"
import { Card, Image, Button } from "@nextui-org/react";
import { TbEye } from "react-icons/tb";


const RecentReport = () => {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex gap-2 items-start border-b py-3 ">
                <IconReportAnalytics/>
                <span className="font-semibold text-xl">Recent Reports</span>
        </div>




        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="px-3 py-4 rounded-lg flex flex-col gap-2">
            <Image className=" blur-sm"  src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png"/>
            <div className="text-xl md:text-xl font-semibold text-gray-800">{'Single Report'}</div>
            <div className="flex items-center ">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed report with custom template </p>
            </div>
            <Button  size="sm" className="w-10 ml-auto">
                <TbEye size={15}/>
                </Button>
          </Card>
          <Card className="px-3 py-4 rounded-lg flex flex-col gap-2">
            <Image className=" grayscale" src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png"/>
            <div className="text-xl md:text-xl font-semibold text-gray-800">{'Single Report'}</div>
            <div className="flex items-center ">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed report with custom template </p>
            </div>
            <Button  size="sm" className="w-10 ml-auto">
                <TbEye size={15}/>
                </Button>
          </Card>

          <Card className="px-3 py-4 rounded-lg flex flex-col gap-2">
            <Image src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png"/>
            <div className="text-xl md:text-xl font-semibold text-gray-800">{'Single Report'}</div>
            <div className="flex items-center ">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed report with custom template </p>
            </div>
            <Button  size="sm" className="w-10 ml-auto">
                <TbEye size={15}/>
                </Button>
          </Card>

          <Card className="px-3 py-4 rounded-lg flex flex-col gap-2">
            <Image className=" grayscale" src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png"/>
            <div className="text-xl md:text-xl font-semibold text-gray-800">{'Single Report'}</div>
            <div className="flex items-center ">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed report with custom template </p>
            </div>
            <Button  size="sm" className="w-10 ml-auto">
                <TbEye size={15}/>
                </Button>
          </Card>
         
        </div>
    </div>
  )
}

export default RecentReport
