import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import { useGetBankingSettings, useUpdateBankingSettings } from '@/api/statement';
import { useGetUserBusiness } from '@/api/business';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import Card from '@/components/ui/Card';

const MbsCredentials = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { data: business } = useGetUserBusiness();
  const {
    data: { settings },
  } = useGetBankingSettings(business._id);
  const { mutateAsync: updateSettings, isPending: isUpdateSettingsLoading } = useUpdateBankingSettings(business._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mbsUsername: settings.statement?.mbsUsername,
      mbsClientId: settings.statement?.mbsClientId,
      mbsClientSecret: settings.statement?.mbsClientSecret,
    },
  });

  const onSubmit = async (values) => {
    try {
      await updateSettings({ statement: { ...(settings?.statement || {}), ...values } });
      toast.success('Settings updated');
      await qc.invalidateQueries({
        queryKey: ['statement', 'settings'],
      });
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 space-y-3">
          <Input
            label="Merchant email"
            bordered
            {...register('mbsUsername', { required: 'This field is required' })}
            error={errors?.mbsUsername?.message}
            disabled={isUpdateSettingsLoading}
          />
          <Input
            label="Client ID"
            bordered
            {...register('mbsClientId', { required: 'This field is required' })}
            error={errors?.mbsClientId?.message}
            disabled={isUpdateSettingsLoading}
          />
          <Input
            label="Client Secret"
            bordered
            {...register('mbsClientSecret', { required: 'This field is required' })}
            error={errors?.mbsClientSecret?.message}
            disabled={isUpdateSettingsLoading}
          />
        </div>
        <Button variant="subtle" type="submit" loading={isUpdateSettingsLoading} className="mt-8">
          Save
        </Button>
      </form>
    </Card>
  );
};

export default MbsCredentials;
