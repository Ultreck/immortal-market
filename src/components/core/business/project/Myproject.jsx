import { IconReportAnalytics } from "@tabler/icons-react"
import { Button } from "@nextui-org/react";
import BusinessCreateProjectPopup from "../../shared/BusinessCreateProjectPopup";
import ProjectGrid from "../ProjectGrid";

const Myproject = () => {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex gap-2 items-start justify-between border-b py-3 ">
            <div className="flex gap-2 items-start ">
                <IconReportAnalytics/>
                <span className="font-semibold text-xl">Recent Project</span>
            </div>

            <BusinessCreateProjectPopup>
                <Button>Create Project</Button>
            </BusinessCreateProjectPopup>
        </div>

        <ProjectGrid/>
    </div>
  )
}

export default Myproject
