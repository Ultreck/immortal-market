import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast.jsx";
import Input from "@/components/global/Input.jsx";
import Select from "@/components/global/Select.jsx";
import TextArea from "@/components/global/TextArea.jsx";
import Button from "@/components/global/Button.jsx";
import { useCreateBusinessMutation } from "@/api/business.js";
import { industries, sizes } from "@/lib/options.js";

const CreateBusiness = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutateAsync: create, isPending: isCreateLoading } = useCreateBusinessMutation();
  const [isFetching, setIsFetching] = useState(false);

  const submit = async (values) => {
    try {
      await create(values);
      setIsFetching(true);
      await qc.invalidateQueries({
        queryKey: ['business']
      });
      setIsFetching(false);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-semibold">Setup your business</h1>
        <p className="mt-2">Kindly fill in all fields below correctly</p>
      </div>
      <form onSubmit={ handleSubmit(submit) }>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Legal business name" bordered
              { ...register('name', { required: 'This field is required' }) }
              error={ errors?.name?.message }
              disabled={ isCreateLoading || isFetching }
            />
            <Input
              label="Business email" bordered type="email"
              { ...register('email', { required: 'This field is required' }) }
              error={ errors?.email?.message }
              disabled={ isCreateLoading || isFetching }
            />
          </div>
          <Select
            label="Industry" bordered
            options={ industries } placeholder="Select industry"
            { ...register('industry', { required: 'This field is required' }) }
            error={ errors?.industry?.message }
            disabled={ isCreateLoading || isFetching }
          />
          <Select
            label="Business size" bordered
            options={ sizes } placeholder="Select business size"
            { ...register('size', { required: 'This field is required' }) }
            error={ errors?.size?.message }
            disabled={ isCreateLoading || isFetching }
          />
          <Input
            label="Website" bordered type="url"
            { ...register('website', { required: 'This field is required' }) }
            error={ errors?.website?.message }
            disabled={ isCreateLoading || isFetching }
          />
          <TextArea
            label="Business address" bordered
            { ...register('address', { required: 'This field is required' }) }
            error={ errors?.address?.message }
            disabled={ isCreateLoading || isFetching }
          />
          <Select
            label="What country is your business based?" bordered
            options={ [{ text: 'Nigeria', value: 'NG' }] }
            { ...register('country', { required: 'This field is required' }) }
            error={ errors?.country?.message }
            disabled={ isCreateLoading || isFetching }
          />
          <Input
            label="RC number" bordered
            { ...register('rcNumber', { required: 'This field is required' }) }
            error={ errors?.rcNumber?.message }
            disabled={ isCreateLoading || isFetching }
          />
        </div>
        <Button type="submit" className="mt-10" loading={ isCreateLoading || isFetching }>
          Create business
        </Button>
      </form>
    </>
  );
};

export default CreateBusiness;
