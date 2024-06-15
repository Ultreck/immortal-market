/* eslint-disable no-unused-vars */
import { useState } from "react"
import InfoCharts from "./InfoCharts"
import Loading from "./Loading"
import Toolbar from "./Toolbar"


const ProjectChartDashboard = () => {
  const [canvasState, setCanvasState] = useState(null)

  return (
    <div className="h-full min-h-screen w-full relative bg-neutral-100 touch-none">
        {/* <Loading/> */}
      <InfoCharts/>
      <Toolbar 
        canvasState={canvasState}
        setCanvasState={setCanvasState}
      />
    </div>
  )
}

export default ProjectChartDashboard
