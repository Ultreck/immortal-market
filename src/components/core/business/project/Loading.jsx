import { IconLoader } from "@tabler/icons-react"
import InfoCharts from "./InfoCharts"


const Loading = () => {
  return (
    <main  className=" h-screen w-full relative bg-neutral-100 touch-none flex items-center justify-center">
        <IconLoader className="h-6 w-6 text-gray-400 animate-spin"/>
        <InfoCharts.Skeleton/>
    </main>
  )
}

export default Loading
