import Card from "@/components/global/Card.jsx";
import DashboardContent from "@/components/core/shared/DashboardContent.jsx";
import DashboardTitle from "@/components/core/shared/DashboardTitle.jsx";
import { Link } from "react-router-dom";
import { IconMessage2Plus } from "@tabler/icons-react";

const AssistantOverview = () => {
  return (
    <DashboardContent>
      <DashboardTitle text="Top Insights"/>
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        <Link to="/assistant/conversations" className="flex">
          <Card
            hover
            className="px-6 py-12 h-full w-full flex flex-col items-center justify-center cursor-pointer"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600 text-white text-xl md:text-3xl font-semibold"
            >
              <IconMessage2Plus size="36"/>
            </div>
            <p className="text-ellipsis whitespace-nowrap overflow-hidden mt-4 text-lg font-medium">
              Ask a question
            </p>
          </Card>
        </Link>
        <Card className="overflow-hidden">
          <img
            className="w-full h-28 object-cover rounded-2xl" alt="random"
            src="https://images.pexels.com/photos/5620207/pexels-photo-5620207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="px-8 py-6">
            <h4 className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur.
            </h4>
            <p className="mt-1.5 leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, sint?
            </p>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <img
            className="w-full h-28 object-cover rounded-2xl"
            src="https://images.pexels.com/photos/1827882/pexels-photo-1827882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="random"
          />
          <div className="px-8 py-6">
            <h4 className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur.
            </h4>
            <p className="mt-1.5 leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, sint?
            </p>
          </div>
        </Card>
      </div>
    </DashboardContent>
  )
};

export default AssistantOverview;
