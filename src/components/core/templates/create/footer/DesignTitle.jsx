import useTemplateStore from '@/store/template.js';
import { useGetDesign } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Chip } from '@heroui/react';
import EditDesignTitleButton from '@/components/core/templates/create/footer/EditDesignTitleButton.jsx';

const DesignTitle = () => {
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { design = {} } = {} } = useGetDesign(business, id);

  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <p className="text-lg font-medium leading-tight">{design.title}</p>
          <EditDesignTitleButton />
        </div>
      </div>
      {design.type === 'template' && (
        <div className="flex items-center space-x-2">
          <Chip size="sm" color="warning" className="text-sm">
            Template
          </Chip>
          <Chip
            size="sm"
            color={{ draft: 'default', published: 'success' }[design.status]}
            className="text-sm capitalize"
          >
            {design.status}
          </Chip>
        </div>
      )}
    </div>
  );
};

export default DesignTitle;
