import Input from "@/components/global/Input";
import Button from "@/components/global/Button";
import { useForm } from "react-hook-form";
import { useGetStatementSettings, useUpdateStatementSettings } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import Card from "@/components/global/Card";

const MbsCredentials = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { data: business } = useGetUserBusiness();
  const { data: { settings } } = useGetStatementSettings(business._id);
  const { mutateAsync: updateSettings, isLoading: isUpdateSettingsLoading } = useUpdateStatementSettings(business._id);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      mbsUsername: settings.mbsUsername,
      mbsClientId: settings.mbsClientId,
      mbsClientSecret: settings.mbsClientSecret
    }
  });

  const onSubmit = async (values) => {
    try {
      await updateSettings(values);
      toast.success('Settings updated');
      await qc.invalidateQueries(['statement', 'settings']);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Card className="px-8 py-8">
      <h4 className="font-medium">MyBankStatement(MBS) Credentials</h4>
      <p className="mt-2 text-[.95rem] opacity-80">
        Set up your mbs integration by providing the following credentials from your mbs account
      </p>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="mt-8 space-y-3">
          <Input
            label="Merchant email" bordered
            { ...register('mbsUsername', { required: 'This field is required' }) }
            error={ errors?.mbsUsername?.message }
            disabled={ isUpdateSettingsLoading }
          />
          <Input
            label="Client ID" bordered
            { ...register('mbsClientId', { required: 'This field is required' }) }
            error={ errors?.mbsClientId?.message }
            disabled={ isUpdateSettingsLoading }
          />
          <Input
            label="Client Secret" bordered
            { ...register('mbsClientSecret', { required: 'This field is required' }) }
            error={ errors?.mbsClientSecret?.message }
            disabled={ isUpdateSettingsLoading }
          />
        </div>
        <Button variant="subtle" type="submit" loading={ isUpdateSettingsLoading } className="mt-8">
          Save
        </Button>
      </form>
    </Card>
  );
};

export default MbsCredentials;
