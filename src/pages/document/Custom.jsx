import { useMemo, useState } from 'react';
import NewCustomReport from '@/components/core/document/custom/NewCustomReport.jsx';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import Button from '@/components/ui/Button.jsx';
import { IconPlus } from '@tabler/icons-react';
import DashboardContent from '@/components/core/shared/DashboardContent.jsx';
import { useGetCustomDocuments } from '@/api/document.js';
import { useGetUserBusiness } from '@/api/business.js';
import NoData from '@/components/ui/NoData.jsx';
import CustomDocumentCard from '@/components/core/document/custom/CustomDocumentCard.jsx';
import CustomDocumentDetailsModal from '@/components/core/document/custom/CustomDocumentDetailsModal.jsx';

const Custom = () => {
  const [id, setId] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isNewReportOpen, setIsNewReportOpen] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data: { documents = [] } = {}, isLoading } = useGetCustomDocuments(business._id);

  const current = useMemo(() => documents.find((document) => document._id === id), [documents, id]);

  const handleClick = (document) => {
    setId(document._id);
    setIsDetailsOpen(true);
  };

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
                {documents.map((document) => (
                  <CustomDocumentCard key={document._id} document={document} onClick={() => handleClick(document)} />
                ))}
              </div>
            ) : (
              <NoData text="No documents analyzed yet, click the button above to upload a document" />
            )}
          </>
        )}
      </div>

      <NewCustomReport isOpen={isNewReportOpen} onClose={() => setIsNewReportOpen(false)} />
      <CustomDocumentDetailsModal onClose={() => setIsDetailsOpen(false)} isOpen={isDetailsOpen} document={current} />
    </DashboardContent>
  );
};

export default Custom;
