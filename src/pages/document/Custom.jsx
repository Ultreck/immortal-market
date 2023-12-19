import { useState } from 'react';
import { format } from 'date-fns';
import NewCustomReport from '@/components/core/document/custom/NewCustomReport.jsx';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import Button from '@/components/global/Button.jsx';
import { IconFileTypeCsv, IconFileTypeDoc, IconFileTypePdf, IconFileTypeXls, IconPlus } from '@tabler/icons-react';
import Card from '@/components/global/Card.jsx';
import DashboardContent from '@/components/core/shared/DashboardContent.jsx';

const items = [
  {
    type: '.doc',
    title: 'Q1 2023 progress report for our company',
    createdAt: '01/01/2023',
  },
  {
    type: '.xls',
    title: 'Q1 2023 progress report for our company 2',
    createdAt: '01/01/2023',
  },
  {
    type: '.pdf',
    title: 'Q1 2023 progress report for our company 3',
    createdAt: '01/01/2023',
  },
  {
    type: '.csv',
    title: 'Q1 2023 progress report for our company 4',
    createdAt: '01/01/2023',
  },
  {
    type: '.pdf',
    title: 'Q1 2023 progress report for our company 5',
    createdAt: '01/01/2023',
  },
];

const Custom = () => {
  const [isNewReportOpen, setIsNewReportOpen] = useState(false);

  return (
    <DashboardContent>
      <div>
        <div className="flex justify-between items-center mb-8 md:mb-10">
          <DashboardTitle text="Custom documents" className="!mb-0" />
          <Button onClick={() => setIsNewReportOpen(true)} variant="outlined" leftIcon={<IconPlus size="20" />}>
            Upload document
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item) => (
            <Card key={item.title} className="flex items-start px-8 py-6" hover>
              <div className="mt-1">
                {item.type === '.doc' && <IconFileTypeDoc className="text-blue-700" size="36" />}
                {item.type === '.pdf' && <IconFileTypePdf className="text-red-700" size="36" />}
                {item.type === '.csv' && <IconFileTypeCsv className="text-teal-700" size="36" />}
                {item.type === '.xls' && <IconFileTypeXls className="text-cyan-700" size="36" />}
              </div>
              <div className="ml-3">
                <p>{item.title}</p>
                <p className="opacity-80 text-sm mt-1">{format(new Date(item.createdAt), 'do MMM, yyyy')}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <NewCustomReport isOpen={isNewReportOpen} onClose={() => setIsNewReportOpen(false)} />
    </DashboardContent>
  );
};

export default Custom;
