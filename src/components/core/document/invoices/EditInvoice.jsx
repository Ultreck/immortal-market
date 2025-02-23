import { useCallback, useEffect } from 'react';
import { IconChevronLeft, IconPlus, IconX } from '@tabler/icons-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { useQueryClient } from '@tanstack/react-query';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import IconButton from '@/components/ui/IconButton.jsx';
import Input from '@/components/ui/Input.jsx';
import TextArea from '@/components/ui/TextArea.jsx';
import Button from '@/components/ui/Button.jsx';
import { useUpdateInvoice } from '@/api/document.js';
import Select from '@/components/ui/Select.jsx';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business.js';
import { addToast } from '@heroui/react';

const schema = yup.object({
  number: yup.string().required('Invoice number is required'),
  vendorName: yup.string().required('Vendor name is required'),
  vendorAddress: yup.string().required('Vendor address is required'),
  receiverName: yup.string().required('Receiver name is required'),
  receiverAddress: yup.string().required('Receiver address is required'),
  date: yup.string().required('Invoice date is required'),
  dueDate: yup.string().required('Invoice due date is required'),
  tax: yup.number().min(0).optional(),
  discount: yup.number().min(0).optional(),
  shipping: yup.number().min(0).optional(),
  subtotal: yup.number().positive().required('Subtotal is required'),
  total: yup.number().positive().required('Total is required'),
  items: yup
    .array()
    .of(
      yup.object().shape({
        description: yup.string().required('Description is required'),
        price: yup.number().min(1).required('Cannot be empty'),
        quantity: yup.number().min(1).required('Cannot be empty'),
        total: yup.number().min(1).required('Cannot be empty'),
      })
    )
    .required(),
});

const EditInvoice = ({ invoice, onBack }) => {
  const qc = useQueryClient();
  const { business } = useBusiness();
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateInvoice(business._id, invoice._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      number: invoice.number,
      poNumber: invoice.poNumber,
      currency: invoice.currency,
      vendorName: invoice.vendorName,
      vendorAddress: invoice.vendorAddress,
      receiverName: invoice.receiverName,
      receiverAddress: invoice.receiverAddress,
      date: format(new Date(invoice.date), 'yyyy-MM-dd'),
      dueDate: format(new Date(invoice.dueDate), 'yyyy-MM-dd'),
      subtotal: invoice.subtotal,
      tax: invoice.tax,
      discount: invoice.discount,
      shipping: invoice.shipping,
      total: invoice.total,
      items: invoice.items,
    },
  });
  const { append, fields, remove } = useFieldArray({ control, name: 'items' });

  const onSubmit = async (values) => {
    try {
      await update(values);
      onBack();
      await qc.invalidateQueries({
        queryKey: ['invoices', invoice._id],
      });
      await qc.invalidateQueries({
        queryKey: ['invoices'],
      });
      addToast({ title: 'Invoice updated', color: 'success' });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  const updateSubtotal = useCallback(() => {
    const subtotal = watch().items.reduce((acc, i) => acc + i.total, 0);
    setValue('subtotal', subtotal);
  }, [setValue, watch]);

  useEffect(() => {
    updateSubtotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch().items, updateSubtotal]);

  useEffect(() => {
    const total = +watch().subtotal + +watch().tax + +watch().shipping - +watch().discount;
    setValue('total', total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch().subtotal, watch().tax, watch().shipping, watch().discount, watch, setValue]);

  return (
    <div>
      <div className="flex mb-10 items-center space-x-3">
        <IconButton
          onClick={onBack}
          color="black"
          rounded
          icon={<IconChevronLeft size="20" />}
          size="sm"
          variant="outlined"
        />
        <h3 className="font-medium">Edit invoice</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Input
            label="Invoice number"
            bordered
            {...register('number')}
            error={errors?.number?.message}
            disabled={isUpdateLoading}
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="P.O number"
              bordered
              {...register('poNumber')}
              error={errors?.poNumber?.message}
              disabled={isUpdateLoading}
            />
            <Select
              label="Currency"
              bordered
              options={[
                { text: 'NGN', value: 'NGN' },
                { text: 'USD', value: 'USD' },
              ]}
              {...register('currency', { required: 'This field is required' })}
              error={errors?.currency?.message}
            />
          </div>
          <Input
            label="Vendor name"
            bordered
            {...register('vendorName')}
            error={errors?.vendorName?.message}
            disabled={isUpdateLoading}
          />
          <TextArea
            label="Vendor address"
            bordered
            {...register('vendorAddress')}
            error={errors?.vendorAddress?.message}
            disabled={isUpdateLoading}
          />
          <Input
            label="Receiver name"
            bordered
            {...register('receiverName')}
            error={errors?.receiverName?.message}
            disabled={isUpdateLoading}
          />
          <TextArea
            label="Receiver address"
            bordered
            {...register('receiverAddress')}
            error={errors?.receiverAddress?.message}
            disabled={isUpdateLoading}
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="date"
              label="Invoice date"
              bordered
              {...register('date')}
              error={errors?.date?.message}
              disabled={isUpdateLoading}
            />
            <Input
              type="date"
              label="Due date"
              bordered
              {...register('dueDate')}
              error={errors?.dueDate?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div>
            <div className="border border-gray-300 rounded-xl overflow-hidden pt-4">
              <h4 className="font-medium mb-4 px-6">Line items</h4>
              <div className="divide-y divide-gray-300">
                {fields.map((item, i) => (
                  <div key={item.id} className="space-y-2 py-4 px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-md font-medium">Item #{i + 1}</p>
                      <Button
                        onPress={() => remove(i)}
                        size="xs"
                        variant="outlined"
                        color="red"
                        leftIcon={<IconX size="16" className="-mr-1" />}
                      >
                        Remove
                      </Button>
                    </div>
                    <Input
                      label="Description"
                      bordered
                      {...register(`items[${i}].description`)}
                      error={errors?.items?.[i]?.description?.message}
                      disabled={isUpdateLoading}
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <Input
                        type="number"
                        label="Quantity"
                        bordered
                        step="any"
                        {...register(`items[${i}].quantity`, {
                          onChange: () => {
                            const _item = watch().items[i];
                            setValue(`items[${i}].total`, _item.quantity * _item.price);
                            updateSubtotal();
                          },
                          setValueAs: (v) => (v ? +v : null),
                        })}
                        error={errors?.items?.[i]?.quantity?.message}
                        disabled={isUpdateLoading}
                      />
                      <Input
                        type="number"
                        label="Price"
                        bordered
                        step="any"
                        {...register(`items[${i}].price`, {
                          onChange: () => {
                            const _item = watch().items[i];
                            setValue(`items[${i}].total`, _item.quantity * _item.price);
                            updateSubtotal();
                          },
                          setValueAs: (v) => (v ? +v : null),
                        })}
                        error={errors?.items?.[i]?.price?.message}
                        disabled={isUpdateLoading}
                      />
                      <Input
                        label="Total"
                        bordered
                        step="any"
                        readOnly
                        {...register(`items[${i}].total`, {
                          setValueAs: (v) => (v ? +v : null),
                        })}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                disabled={isUpdateLoading}
                onClick={() => append({ description: '', quantity: 1, price: null, total: null })}
                className="border-t border-gray-300 py-3 hover:bg-slate-50 w-full flex items-center justify-center text-center disabled:opacity-50 diabled:pointer-events-none"
              >
                <IconPlus size="20" className="mr-4" />
                Add new item
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Subtotal"
              bordered
              step="any"
              readOnly
              {...register('subtotal')}
              error={errors?.subtotal?.message}
              disabled={isUpdateLoading}
            />
            <Input
              type="number"
              label="Tax"
              bordered
              step="any"
              {...register('tax')}
              error={errors?.tax?.message}
              disabled={isUpdateLoading}
            />
            <Input
              type="number"
              label="Discount"
              bordered
              step="any"
              {...register('discount')}
              error={errors?.discount?.message}
              disabled={isUpdateLoading}
            />
            <Input
              type="number"
              label="Shipping"
              bordered
              step="any"
              {...register('shipping')}
              error={errors?.shipping?.message}
              disabled={isUpdateLoading}
            />
            <Input
              label="Total"
              bordered
              step="any"
              readOnly
              {...register('total')}
              error={errors?.total?.message}
              disabled={isUpdateLoading}
            />
          </div>
        </div>
        <Button type="submit" loading={isUpdateLoading} color="green" className="mt-10">
          Save
        </Button>
      </form>
    </div>
  );
};

EditInvoice.propTypes = {
  invoice: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EditInvoice;
