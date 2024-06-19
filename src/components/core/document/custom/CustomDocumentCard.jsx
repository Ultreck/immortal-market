import { IconFileTypeCsv, IconFileTypeDoc, IconFileTypePdf, IconFileTypeXls } from '@tabler/icons-react';
import { format } from 'date-fns';
import Card from '@/components/ui/Card.jsx';
import PropTypes from 'prop-types';

const CustomDocumentCard = ({ document, onClick }) => {
  return (
    <Card onClick={onClick} className="flex items-center px-8 py-6" hover>
      <div className="mt-1">
        {document.type === 'doc' && <IconFileTypeDoc className="text-blue-700" size="36" />}
        {document.type === 'pdf' && <IconFileTypePdf className="text-red-700" size="36" />}
        {document.type === 'csv' && <IconFileTypeCsv className="text-teal-700" size="36" />}
        {document.type === 'xlsx' && <IconFileTypeXls className="text-cyan-700" size="36" />}
      </div>
      <div className="ml-3">
        <p>{document.name}</p>
        <p className="opacity-80 text-sm mt-1">{format(new Date(document.createdAt), 'do MMM, yyyy')}</p>
      </div>
    </Card>
  );
};

CustomDocumentCard.propTypes = {
  document: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomDocumentCard;
