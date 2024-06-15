import { Card, Image } from '@nextui-org/react'


const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="px-3 py-4 rounded-lg flex flex-col gap-2">
            <Image className=" blur-sm"  src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png"/>
            <div className="text-xl md:text-xl font-semibold text-gray-800">{'Business Project'}</div>
            <div className="flex items-center ">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed report with custom template </p>
            </div>
          </Card>
          <Card className="px-3 py-4 rounded-lg flex flex-col gap-2">
            <Image className=" blur-sm" src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png"/>
            <div className="text-xl md:text-xl font-semibold text-gray-800">{'Business Project'}</div>
            <div className="flex items-center ">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed report with custom template </p>
            </div>
            
          </Card>

          <Card className="px-3 py-4 rounded-lg flex flex-col gap-2">
            <Image className="blur-sm" src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png"/>
            <div className="text-xl md:text-xl font-semibold text-gray-800">{'Business Project'}</div>
            <div className="flex items-center ">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed report with custom template </p>
            </div>
          
          </Card>
         
        </div>
  )
}

export default ProjectGrid
