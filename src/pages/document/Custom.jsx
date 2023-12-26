import { useState } from 'react';
import { format } from 'date-fns';
import NewCustomReport from '@/components/core/document/custom/NewCustomReport.jsx';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import Button from '@/components/global/Button.jsx';
import { IconFileTypeCsv, IconFileTypeDoc, IconFileTypePdf, IconFileTypeXls, IconPlus } from '@tabler/icons-react';
import Card from '@/components/global/Card.jsx';
import DashboardContent from '@/components/core/shared/DashboardContent.jsx';
import { useGetCustomDocuments } from '@/api/document.js';
import { useGetUserBusiness } from '@/api/business.js';
import NoData from '@/components/global/NoData.jsx';

const Custom = () => {
  const [isNewReportOpen, setIsNewReportOpen] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data: { documents = [] } = {}, isLoading } = useGetCustomDocuments(business._id);

  return (
    <DashboardContent>
      <div>
        <div className="flex justify-between items-center mb-8 md:mb-10">
          <DashboardTitle text="Custom documents" className="!mb-0" />
          <Button onClick={() => setIsNewReportOpen(true)} variant="outlined" leftIcon={<IconPlus size="20" />}>
            Upload document
          </Button>
        </div>
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="w-full h-32 bg-gray-100 rounded-3xl animate-pulse"></div>
            <div className="w-full h-32 bg-gray-100 rounded-3xl animate-pulse"></div>
            <div className="w-full h-32 bg-gray-100 rounded-3xl animate-pulse"></div>
            <div className="w-full h-32 bg-gray-100 rounded-3xl animate-pulse"></div>
            <div className="w-full h-32 bg-gray-100 rounded-3xl animate-pulse"></div>
            <div className="w-full h-32 bg-gray-100 rounded-3xl animate-pulse"></div>
          </div>
        ) : (
          <>
            {documents.length ? (
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {documents.map((doc) => (
                  <Card key={doc._id} className="flex items-center px-8 py-6" hover>
                    <div className="mt-1">
                      {doc.type === 'doc' && <IconFileTypeDoc className="text-blue-700" size="36" />}
                      {doc.type === 'pdf' && <IconFileTypePdf className="text-red-700" size="36" />}
                      {doc.type === 'csv' && <IconFileTypeCsv className="text-teal-700" size="36" />}
                      {doc.type === 'xlsx' && <IconFileTypeXls className="text-cyan-700" size="36" />}
                    </div>
                    <div className="ml-3">
                      <p>{doc.name}</p>
                      <p className="opacity-80 text-sm mt-1">{format(new Date(doc.createdAt), 'do MMM, yyyy')}</p>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <NoData text="No documents analyzed yet, click the button above to upload a document" />
            )}
          </>
        )}
      </div>

      <NewCustomReport isOpen={isNewReportOpen} onClose={() => setIsNewReportOpen(false)} />
    </DashboardContent>
  );
};

export default Custom;
