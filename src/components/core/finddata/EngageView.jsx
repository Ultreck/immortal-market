import { Button } from "@nextui-org/react"
import TeamImage from "../../icons/team"


const EngageView = () => {
  return (
    <div className="border dark:border-zinc-800 flex flex-col p-4 md:p-6 bg-white rounded-xl  dark:bg-[#18181b] gap-10 relative overflow-hidden">
        <div className="text-[#52658c] tracking-wider text-4xl font-bold">Engage us to gather <br />your business data</div>

        <ul style={{listStyleType:"circle"}} className="flex flex-col gap-2 tracking-wider ml-4">
            <li>Select from multiple projects</li>
            <li>Build your dashboard from template</li>
            <li>Get notified realtime.</li>
        </ul>
        <Button className="mr-auto w-40" color="primary" size="lg"    >Start Now</Button>

        <div className="absolute  -right-[16.7rem] top-[4.2rem] hidden sm:block ">
         <TeamImage big={true}  />
        </div>
    </div>
  )
}

export default EngageView
