import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { useGenerateCustomReport } from '@/api/document.js';
import Button from '@/components/ui/Button.jsx';
import Card from '@/components/ui/Card.jsx';
import { IconFileCheck } from '@tabler/icons-react';
import { useQueryClient } from '@tanstack/react-query';
import useBusiness from '@/hooks/use-business.js';

const CustomDocumentDetailsModal = ({ isOpen, onClose, document }) => {
  const qc = useQueryClient();
  const { business } = useBusiness();
  const { mutateAsync: generate, isPending } = useGenerateCustomReport();

  const q = qc.getQueryState(['documents', 'custom']);
  const isFetching = q.isInvalidated && q.fetchStatus === 'fetching';

  const handleGenerateReport = async () => {
    const res = await generate({ business: business._id, document: document._id });
    console.log({ res });
    await qc.invalidateQueries({ queryKey: ['documents', 'custom'] });
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      {!!document && (
        <>
          <h3 className="text-lg mb-8">{document.name}</h3>
          {!document.report ? (
            <Card className="px-8 py-6">
              <h3 className="font-semibold text-lg">Generate report</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at atque dicta doloremque iste labore
                modi numquam officia tempora ullam.
              </p>
              <Button onClick={handleGenerateReport} loading={isPending || isFetching} className="mt-6" size="sm">
                Generate report
              </Button>
            </Card>
          ) : (
            <Card className="px-6 py-4 flex items-start">
              <div className="mt-3">
                <IconFileCheck size="40" className="text-green-500" />
              </div>
              <div className="ml-4">
                <p className="mt-2">Your report has been generated. Click the button below to view</p>
                <a
                  href={`https://dev.infographics.statisense.co/report/${document._id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="green" className="mt-4" size="sm">
                    View report
                  </Button>
                </a>
              </div>
            </Card>
          )}
        </>
      )}
    </Drawer>
  );
};

CustomDocumentDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  document: PropTypes.object,
};

export default CustomDocumentDetailsModal;
