import { IconFilePlus, IconFileTypeCsv, IconFileTypeDoc, IconFileTypePdf, IconFileTypeXls } from "@tabler/icons-react";
import { useState } from "react";
import DashboardTitle from "@/components/core/shared/DashboardTitle.jsx";
import Card from "@/components/global/Card.jsx";
import NewCustomReport from "@/components/core/custom-report/NewCustomReport.jsx";
import { formatCurrency } from "@/lib/utils.js";

const items = [
  {
    type: '.doc',
    title: 'Q1 2023 progress report for our company',
    createdAt: '01/01/2023'
  },
  {
    type: '.xls',
    title: 'Q1 2023 progress report for our company 2',
    createdAt: '01/01/2023'
  },
  {
    type: '.pdf',
    title: 'Q1 2023 progress report for our company 3',
    createdAt: '01/01/2023'
  },
  {
    type: '.csv',
    title: 'Q1 2023 progress report for our company 4',
    createdAt: '01/01/2023'
  },
  {
    type: '.pdf',
    title: 'Q1 2023 progress report for our company 5',
    createdAt: '01/01/2023'
  },
];

const CustomReportOverview = () => {
  const [isNewReportOpen, setIsNewReportOpen] = useState(false);

  return (
    <>
      <div>
        <DashboardTitle text="Overview"/>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <Card className="flex flex-col justify-center px-8 py-4">
              <div className="text-xl md:text-2xl font-semibold text-gray-800">
                0
              </div>
              <div className="flex items-center mt-1">
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">
                  Reports analyzed
                </p>
              </div>
            </Card>
            <Card className="flex flex-col justify-center px-8 py-4">
              <div className="text-xl md:text-2xl font-semibold text-gray-800">
                Basic
              </div>
              <div className="flex items-center mb-1">
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Subscription</p>
              </div>
            </Card>
            <Card className="flex flex-col justify-center px-8 py-4">
              <div className="text-xl md:text-2xl font-semibold text-gray-800">
                { formatCurrency(0) }
              </div>
              <div className="flex items-center mb-1">
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Wallet balance</p>
              </div>
            </Card>
            <Card className="flex flex-col justify-center px-8 py-6">
              Lorem ipsum dolor sit amet, consectetur.
            </Card>
          </div>
          <Card
            onClick={ () => setIsNewReportOpen(true) }
            hover role="button" tabIndex={ 0 }
            aria-label="Upload a new document"
            aria-describedby="Upload a new document"
            aria-hidden={ false } aria-disabled={ false }
            className="px-6 py-12 flex flex-col items-center justify-center cursor-pointer"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-50 text-white text-xl md:text-3xl font-semibold"
            >
              <IconFilePlus size="36"
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-blue-600"/>
            </div>
            <p className="text-ellipsis whitespace-nowrap overflow-hidden mt-4 text-lg font-medium">
              Upload a new document
            </p>
            <p className="text-sm mt-0.5 opacity-80">.pdf, .docx, .csv, .xlsx</p>
          </Card>
        </div>
        <div className="mt-10">
          <h5 className="text-lg font-medium mb-8 px-1">Recent documents</h5>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {
              items.slice(0, 3).map(item => (
                <Card key={ item.title } className="flex items-center space-x-4 px-8 py-6 overflow-hidden" hover>
                  <div>
                    { item.type === '.doc' && <IconFileTypeDoc className="text-blue-700" size="36"/> }
                    { item.type === '.pdf' && <IconFileTypePdf className="text-red-700" size="36"/> }
                    { item.type === '.csv' && <IconFileTypeCsv className="text-teal-700" size="36"/> }
                    { item.type === '.xls' && <IconFileTypeXls className="text-cyan-700" size="36"/> }
                  </div>
                  <p className="text-ellipsis whitespace-nowrap overflow-hidden">
                    { item.title }
                  </p>
                </Card>
              ))
            }
          </div>
        </div>
      </div>

      <NewCustomReport
        isOpen={ isNewReportOpen }
        onClose={ () => setIsNewReportOpen(false) }
      />
    </>
  );
};

export default CustomReportOverview;
