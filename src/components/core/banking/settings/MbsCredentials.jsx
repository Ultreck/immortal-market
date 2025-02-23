import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import { useGetBankingSettings, useUpdateBankingSettings } from '@/api/statement';
import { useQueryClient } from '@tanstack/react-query';
import Card from '@/components/ui/Card';
import useBusiness from '@/hooks/use-business.js';
import { addToast } from '@heroui/react';

const MbsCredentials = () => {
  const qc = useQueryClient();
  const { business } = useBusiness();
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
      addToast({ title: 'Settings updated', color: 'success' });
      await qc.invalidateQueries({
        queryKey: ['statement', 'settings'],
      });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
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
