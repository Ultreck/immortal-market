import { useGetForm } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { Badge, Button, Popover, PopoverContent, PopoverTrigger, Spinner } from '@heroui/react';
import NoForm from './NoForm';
import PropTypes from 'prop-types';
import FormDetails from './FormDetails';
import { TbForms } from 'react-icons/tb';

const PageForm = ({ page }) => {
  const tool = useDesignStore((state) => state.tool);
  const updateStore = useDesignStore((state) => state.updateStore);
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { form } = {}, isLoading: isFormLoading } = useGetForm(business, id, page);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={tool === 'page-form'}
      onOpenChange={() => updateStore({ tool: tool === 'page-form' ? null : 'page-form' })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" color="default" aria-label="Adjust font size" className="text-base">
          <Badge
            color="success"
            content=""
            isInvisible={!form}
            classNames={{ badge: 'translate-y-[-10px] translate-x-[10px]' }}
          >
            <TbForms size="20" />
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200 w-[500px] max-h-[600px] overflow-y-auto block">
        {isFormLoading ? (
          <div className="px-6 py-6 space-y-4 flex items-center justify-center">
            <Spinner variant="dots" />
          </div>
        ) : (
          <>{!form ? <NoForm page={page} /> : <FormDetails page={page} />}</>
        )}
      </PopoverContent>
    </Popover>
  );
};

PageForm.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PageForm;
