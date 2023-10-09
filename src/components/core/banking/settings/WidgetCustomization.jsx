import Input from "@/components/global/Input";
import Select from "@/components/global/Select";
import Button from "@/components/global/Button";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useGetUserBusiness } from "@/api/business";
import { useGetStatementSettings, useUpdateStatementSettings } from "@/api/statement";
import { useForm } from "react-hook-form";
import Card from "@/components/global/Card";

const colors = [
  { text: 'Purple', value: '#0000' },
  { text: 'Green', value: '#0001' },
  { text: 'Blue', value: '#0002' },
  { text: 'Orange', value: '#0003' },
  { text: 'Teal', value: '#0004' },
];

const WidgetCustomization = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const { data: business } = useGetUserBusiness();
  const { data: { settings } } = useGetStatementSettings(business._id);
  const { mutateAsync: updateSettings, isLoading: isUpdateSettingsLoading } = useUpdateStatementSettings(business._id);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      widgetDisplayName: settings.widgetDisplayName,
      widgetThemeColor: settings.widgetThemeColor,
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
      <h4 className="font-medium">Widget customization</h4>
      <p className="mt-2 text-[.95rem] opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut itaque quasi temporibus?
      </p>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="mt-8 space-y-3">
          <Input
            label="Display name" bordered
            { ...register('widgetDisplayName', { required: 'This field is required ' }) }
            error={ errors?.widgetDisplayName?.message }
          />
          <Select
            label="Theme color" options={ colors } bordered placeholder="Choose a color"
            { ...register('widgetThemeColor', { required: 'This field is required ' }) }
            error={ errors?.widgetThemeColor?.message }
          />
        </div>
        <Button variant="subtle" type="submit" loading={ isUpdateSettingsLoading } className="mt-8">
          Save
        </Button>
      </form>
    </Card>
  );
};

export default WidgetCustomization;
