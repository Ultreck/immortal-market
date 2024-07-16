import useTemplateStore from '@/store/template.js';
import { Button, Pagination } from '@nextui-org/react';
import { TbPlus, TbTrash } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const TemplatePagination = ({ className }) => {
  const pages = useTemplateStore(({ template }) => template.pages);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === template.page));
  const addPage = useTemplateStore(({ addPage }) => addPage);
  const updateTemplate = useTemplateStore(({ updateTemplate }) => updateTemplate);
  const deletePage = useTemplateStore(({ deletePage }) => deletePage);

  const index = pages.findIndex((p) => p.id === page.id);

  const handleAddPage = () => {
    addPage();
  };

  const handleChangePage = (index) => {
    const page = pages[index - 1];
    updateTemplate({ page: page.id, selectedElements: [] });
  };

  const handleDeletePage = () => {
    deletePage(page.id);
  };

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="flex items-center space-x-2">
        <Pagination
          total={pages.length}
          page={index + 1}
          onChange={handleChangePage}
          color="success"
          isCompact
          variant="flat"
          size="lg"
          classNames={{
            item: 'bg-default-200 dark:bg-default-100 shadow-none',
            wrapper: 'overflow-hidden shadow-none',
          }}
        />
        <Button variant="flat" isIconOnly onClick={handleAddPage}>
          <TbPlus size="18" />
        </Button>
      </div>
      {pages.length > 1 && (
        <Button variant="flat" isIconOnly onClick={handleDeletePage}>
          <TbTrash size="18" />
        </Button>
      )}
    </div>
  );
};

TemplatePagination.propTypes = {
  className: PropTypes.string,
};

export default TemplatePagination;
