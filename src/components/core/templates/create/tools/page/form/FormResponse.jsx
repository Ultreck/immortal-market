import { Button, Card } from '@heroui/react';
import { LuArrowLeft } from 'react-icons/lu';
import PropTypes from 'prop-types';

const FormResponse = ({ response, form, onBack }) => {
  return (
    <div className="px-10 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="bordered" onPress={onBack} isIconOnly size="sm" radius="full">
          <LuArrowLeft size="18" />
        </Button>
        <h3 className="text-lg font-medium mx-auto">{response.user?.username}&apos;s responses</h3>
      </div>
      <div className="space-y-2">
        {form.fields.map((val, idx) => (
          <Card key={idx} shadow="none" className="rounded-2xl bg-default-100 px-4 py-2">
            <div className="flex items-center justify-between text-base">
              <p className="opacity-60">{val.label}</p>
              {Array.isArray(response.values[val.name]) ? (
                <p>{response.values[val.name].join(', ')}</p>
              ) : (
                <p>{response.values[val.name]}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

FormResponse.propTypes = {
  response: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default FormResponse;
