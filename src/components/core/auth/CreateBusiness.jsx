import { Controller, useForm } from 'react-hook-form';
import { useCreateBusinessMutation } from '@/api/business.js';
import { industries, sizes } from '@/lib/options.js';
import { addToast, Button, Input, Select, SelectItem, Textarea } from '@heroui/react';
import { useNavigate } from 'react-router-dom';

const CreateBusiness = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { mutateAsync: create, isPending: isCreateLoading } = useCreateBusinessMutation();

  const submit = async (values) => {
    try {
      await create(values);
      navigate('/');
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  return (
    <div className="py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold">Setup your business</h1>
        <p className="mt-2 opacity-80">Kindly fill in all fields below correctly</p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="space-y-5">
          <Controller
            name="name"
            control={control}
            rules={{ required: 'This field is required' }}
            disabled={isCreateLoading}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="pt-[1px]">
                  <Input
                    label="Legal business name"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="e.g. Acme Inc"
                    size="lg"
                    value={field.value}
                    onChange={field.onChange}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    isDisabled={field.disabled}
                  />
                </div>
              );
            }}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Business name is required',
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email' },
            }}
            disabled={isCreateLoading}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="pt-[1px]">
                  <Input
                    label="Business email"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="e.g. acme@acme.com"
                    size="lg"
                    type="email"
                    value={field.value}
                    onChange={field.onChange}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    isDisabled={field.disabled}
                  />
                </div>
              );
            }}
          />
          <Controller
            name="industry"
            control={control}
            rules={{ required: 'Business email is required' }}
            disabled={isCreateLoading}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="pt-[1px]">
                  <Select
                    label="Industry"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="Select industry"
                    size="lg"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                    isDisabled={field.disabled}
                  >
                    {industries.map((industry) => (
                      <SelectItem key={industry.value}>{industry.text}</SelectItem>
                    ))}
                  </Select>
                </div>
              );
            }}
          />
          <Controller
            name="size"
            control={control}
            rules={{ required: 'Business size is required' }}
            disabled={isCreateLoading}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="pt-[1px]">
                  <Select
                    label="Business size"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="Select size"
                    size="lg"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                    isDisabled={field.disabled}
                  >
                    {sizes.map((size) => (
                      <SelectItem key={size.value}>{size.text}</SelectItem>
                    ))}
                  </Select>
                </div>
              );
            }}
          />
          <Controller
            name="website"
            control={control}
            rules={{ required: 'Website is required' }}
            disabled={isCreateLoading}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="pt-[1px]">
                  <Input
                    label="Website"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="e.g. https://acme.com"
                    size="lg"
                    type="url"
                    value={field.value}
                    onChange={field.onChange}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    isDisabled={field.disabled}
                  />
                </div>
              );
            }}
          />
          <Controller
            name="address"
            control={control}
            rules={{ required: 'Address is required' }}
            disabled={isCreateLoading}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="pt-[1px]">
                  <Textarea
                    label="Business address"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="e.g. 123 Main St, Lagos, Nigeria"
                    size="lg"
                    value={field.value}
                    onChange={field.onChange}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    isDisabled={field.disabled}
                  />
                </div>
              );
            }}
          />
          <Controller
            name="country"
            control={control}
            rules={{ required: 'Country is required' }}
            disabled={isCreateLoading}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="pt-[1px]">
                  <Select
                    label="Country"
                    labelPlacement="outside"
                    placeholder="Select country"
                    variant="bordered"
                    size="lg"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                    isDisabled={field.disabled}
                  >
                    {[{ text: 'Nigeria', value: 'NG' }].map((country) => (
                      <SelectItem key={country.value}>{country.text}</SelectItem>
                    ))}
                  </Select>
                </div>
              );
            }}
          />
          <Controller
            name="rcNumber"
            control={control}
            rules={{ required: 'RC number is required' }}
            disabled={isCreateLoading}
            render={({ field, fieldState: { error } }) => {
              return (
                <div className="pt-[1px]">
                  <Input
                    label="RC number"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="e.g. 123456789"
                    size="lg"
                    value={field.value}
                    onChange={field.onChange}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    isDisabled={field.disabled}
                  />
                </div>
              );
            }}
          />
        </div>
        <Button
          type="submit"
          variant="solid"
          color="primary"
          radius="full"
          size="lg"
          className="mt-12"
          isLoading={isCreateLoading}
        >
          Create business
        </Button>
      </form>
    </div>
  );
};

export default CreateBusiness;
