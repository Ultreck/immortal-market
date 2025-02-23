import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { useQueryClient } from '@tanstack/react-query';
import { useGetBankingSettings, useUpdateBankingSettings } from '@/api/statement';
import { useForm } from 'react-hook-form';
import Card from '@/components/ui/Card';
import useBusiness from '@/hooks/use-business.js';
import { addToast } from '@heroui/react';

const colors = [
  { text: 'Purple', value: '#0000' },
  { text: 'Green', value: '#0001' },
  { text: 'Blue', value: '#0002' },
  { text: 'Orange', value: '#0003' },
  { text: 'Teal', value: '#0004' },
];

const WidgetCustomization = () => {
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
      widgetDisplayName: settings.statement?.widgetDisplayName,
      widgetThemeColor: settings.statement?.widgetThemeColor,
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
      <h4 className="font-medium">Widget customization</h4>
      <p className="mt-2 text-[.95rem] opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut itaque quasi temporibus?
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 space-y-3">
          <Input
            label="Display name"
            bordered
            {...register('widgetDisplayName', { required: 'This field is required ' })}
            error={errors?.widgetDisplayName?.message}
          />
          <Select
            label="Theme color"
            options={colors}
            bordered
            placeholder="Choose a color"
            {...register('widgetThemeColor', { required: 'This field is required ' })}
            error={errors?.widgetThemeColor?.message}
          />
        </div>
        <Button variant="subtle" type="submit" loading={isUpdateSettingsLoading} className="mt-8">
          Save
        </Button>
      </form>
    </Card>
  );
};

export default WidgetCustomization;
