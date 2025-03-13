import { useGetForm } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { Button, Popover, PopoverContent, PopoverTrigger, Spinner } from '@heroui/react';
import { RxInput } from 'react-icons/rx';
import NoForm from './NoForm';
import PropTypes from 'prop-types';
import FormDetails from './FormDetails';

const PageForm = ({ page }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { form } = {}, isLoading: isFormLoading } = useGetForm(business, id, page);

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button
          isIconOnly
          variant={form ? 'flat' : 'light'}
          color={form ? 'success' : 'default'}
          aria-label="Adjust font size"
          className="text-base"
        >
          <RxInput size="20" />
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
