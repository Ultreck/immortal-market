import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useGetBankingSettings, useUpdateBankingSettings } from '@/api/statement';
import { useForm } from 'react-hook-form';
import Card from '@/components/ui/Card';
import useBusiness from '@/hooks/use-business.js';

const MonoCredentials = () => {
  const toast = useToast();
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
      monoApp: settings.statement?.monoApp,
      monoSecretKey: settings.statement?.monoSecretKey,
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
      <h4 className="font-medium">Mono Credentials</h4>
      <p className="mt-2 text-[.95rem] opacity-80">
        Set up your mono integration by providing the following credentials from your mono dashboard
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 space-y-3">
          <Input
            label="App Id"
            bordered
            {...register('monoApp', { required: 'This field is required ' })}
            error={errors?.monoApp?.message}
          />
          <Input
            label="Secret key"
            bordered
            {...register('monoSecretKey', {
              required: 'This field is required',
              pattern: { value: /^live_sk_.*$/, message: 'Invalid secret key' },
            })}
            error={errors?.monoSecretKey?.message}
          />
        </div>
        <Button variant="subtle" type="submit" loading={isUpdateSettingsLoading} className="mt-8">
          Save
        </Button>
      </form>
    </Card>
  );
};

export default MonoCredentials;
