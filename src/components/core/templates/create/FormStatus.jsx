import { useGetForm, useGetFormResponses } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { Button } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbForms } from 'react-icons/tb';

const FormStatus = ({ page }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { form } = {} } = useGetForm(business, id, page);
  const { data: { responses } = {} } = useGetFormResponses(business, id, page, form?.id);
  const tool = useDesignStore((state) => state.tool);
  const updateStore = useDesignStore((state) => state.updateStore);

  return (
    <>
      {form ? (
        <Button
          className="flex items-center gap-2 text-base px-2 font-semibold"
          variant="flat"
          color="default"
          size="sm"
          radius="full"
          onPress={() =>
            updateStore({
              selectedPage: page,
              selectedElements: [],
              tool: tool === 'page-form' ? null : 'page-form',
            })
          }
        >
          <TbForms size={16} />
          {responses ? responses.length : null}
        </Button>
      ) : null}
    </>
  );
};

FormStatus.propTypes = {
  page: PropTypes.string.isRequired,
};

export default FormStatus;
