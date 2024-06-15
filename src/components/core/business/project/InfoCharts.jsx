import { Skeleton } from "antd"


const InfoCharts = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      TODO: Info about infographic  
    </div>
  )
}

export default InfoCharts

InfoCharts.Skeleton = function InfoChartsSkeleton(){
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 w-20 flex items-center shadow-md ">
    <Skeleton className="w-10 h-full"/>  
  </div>
  )
}