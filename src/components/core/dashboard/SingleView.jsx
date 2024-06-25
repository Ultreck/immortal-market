import { Button } from "@nextui-org/react"
import TeamImage from "../../icons/team"


const SingleView = () => {
  return (
    <div className="border dark:border-zinc-800 flex flex-col p-4 md:p-6 bg-white rounded-xl  dark:bg-[#18181b] gap-10 relative overflow-hidden">
        <div className="text-[#52658c] tracking-wider text-4xl font-bold">Create a single view <br /> for all your key data.</div>

        <ul style={{listStyleType:"circle"}} className="flex flex-col gap-2 tracking-wider ml-4">
            <li>Select from multiple projects</li>
            <li>Build your dashboard from template</li>
            <li>Get notified realtime.</li>
        </ul>
        <Button className="mr-auto w-40" color="primary" size="lg"    >Start Now</Button>

        <div className="absolute  right-0 -top-20 hidden sm:block ">
         <TeamImage  />
        </div>
    </div>
  )
}

export default SingleView
