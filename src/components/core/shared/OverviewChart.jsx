import { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import { Card } from "@nextui-org/react";


const data = [
    { name: 'United States', value: 50 },
    { name: 'United Kingdom', value: 30 },
    { name: 'Germany', value: 20 },
  ];
const datapurchase = [
    { name: 'United States', value: 40 },
    { name: 'United Kingdom', value: 30 },
    { name: 'Germany', value: 30 },
  ];
const dataquotes = [
    { name: 'United States', value: 10 },
    { name: 'United Kingdom', value: 40 },
    { name: 'Germany', value: 50 },
  ];


const OverviewChart = () => {
    const [currentTab, setCurrentTab] = useState("traffic");
    const [DoughnutData, setDoughnutData] = useState(data);

    const tab = (recentTab) => {
        setCurrentTab(recentTab);
        if (recentTab === "purchase") {
          setDoughnutData(datapurchase);
        } else if (recentTab === "quotes") {
          setDoughnutData(dataquotes);
        } else {
          setDoughnutData(data);
        }
      };

  return (
    <div className="flex flex-col gap-4">
          <Card className="DoughnutChart rounded-lg shadow-md">
            <div className="border-b border-gray-200 dark:border-b-[#343436]">
              <nav
                className="-mb-px flex gap-6 justify-center mt-4"
                aria-label="Tabs"
              >
                <div
                  className={`border-b-2 font-medium cursor-pointer px-1 pb-4 text-sm ${
                    currentTab === "traffic"
                      ? "border-sky-500 "
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => tab("traffic")}
                >
                  Traffic
                </div>
                <div
                  className={`border-b-2 font-medium cursor-pointer px-1 pb-4 text-sm ${
                    currentTab === "purchase"
                      ? "border-sky-500 "
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => tab("purchase")}
                >
                  Purchase
                </div>

                <div
                  className={`border-b-2 font-medium cursor-pointer px-1 pb-4 text-sm ${
                    currentTab === "quotes"
                      ? "border-sky-500 "
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                  onClick={() => tab("quotes")}
                >
                  Quotes
                </div>
              </nav>
            </div>
            <DoughnutChart key={currentTab}  data={DoughnutData} />
          </Card>
        </div>
  )
}

export default OverviewChart
