import { useGetForm, useDeleteForm, useGetFormResponses } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  addToast,
  Avatar,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from '@heroui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { LuPencil } from 'react-icons/lu';
import EditForm from './EditForm';
import { TbDotsVertical, TbTrash } from 'react-icons/tb';
import FormResponse from '@/components/core/templates/create/tools/page/form/FormResponse.jsx';
import { getImageLink } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import NoData from '@/components/ui/NoData';

const FormDetails = ({ page }) => {
  const [view, setView] = useState('details');
  const [result, setResult] = useState(null);
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { form } = {} } = useGetForm(business, id, page);
  const { mutateAsync: deleteForm, isPending: isDeletingForm } = useDeleteForm(business, id, page);
  const { data: { responses = [] } = {}, isLoading: isResponsesLoading } = useGetFormResponses(
    business,
    id,
    page,
    form?.id
  );
  const response = responses.find((val) => val.id === result);

  const onDeleteForm = async () => {
    try {
      await deleteForm({ id: form.id });
    } catch (error) {
      addToast({
        title: 'Error',
        description: error?.response?.data?.message || 'Failed to delete form',
        color: 'error',
      });
    }
  };

  return (
    <div>
      {view === 'details' && (
        <div className="px-10 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">{form.title}</h3>
            <Dropdown classNames={{ content: 'shadow border border-default-200' }} placement="top">
              <DropdownTrigger>
                <Button variant="light" isIconOnly size="sm" isLoading={isDeletingForm}>
                  <TbDotsVertical size="20" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
                onAction={async (key) => {
                  if (key === 'delete') onDeleteForm();
                }}
              >
                <DropdownItem
                  key="delete"
                  startContent={<TbTrash size="20" className="ml-1" />}
                  textValue="Delete form"
                >
                  <span className="text-base">Delete form</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          {isResponsesLoading ? (
            <Skeleton className="rounded-2xl h-[150px] w-full" />
          ) : (
            <>
              {responses.length > 0 ? (
                <Table
                  aria-label="Custom table"
                  removeWrapper
                  selectionMode="single"
                  classNames={{ td: 'cursor-pointer' }}
                >
                  <TableHeader>
                    <TableColumn>
                      <span className="text-md">User</span>
                    </TableColumn>
                    <TableColumn>
                      <span className="text-md">Date submitted</span>
                    </TableColumn>
                  </TableHeader>
                  <TableBody items={responses}>
                    {(response) => (
                      <TableRow
                        key={response.id}
                        onClick={() => {
                          setResult(response.id);
                          setView('response');
                        }}
                      >
                        <TableCell>
                          <div className="flex items-center gap-x-2">
                            <Avatar
                              src={getImageLink(response.user.image, { bucket: 'statisense' })}
                              name={`${response.user.firstName} ${response.user.lastName}`}
                              size="sm"
                              classNames={{ base: 'w-8 h-8 border-3 border-white dark:border-default-100' }}
                            />
                            <p className="text-base">{response.user.username}</p>
                          </div>
                        </TableCell>
                        <TableCell>{formatDistanceToNow(new Date(response.createdAt))}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              ) : (
                <NoData text="No responses yet" />
              )}
            </>
          )}
          <div className="mt-8">
            <Button
              onPress={() => setView('edit')}
              color="default"
              variant="flat"
              className="text-base px-5"
              radius="full"
              startContent={<LuPencil size="18" />}
            >
              Edit form
            </Button>
          </div>
        </div>
      )}
      {view === 'edit' && <EditForm page={page} onBack={() => setView('details')} />}
      {view === 'response' && <FormResponse form={form} response={response} onBack={() => setView('details')} />}
    </div>
  );
};

FormDetails.propTypes = {
  page: PropTypes.string.isRequired,
};

export default FormDetails;
