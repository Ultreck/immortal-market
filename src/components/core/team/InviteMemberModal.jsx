import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { Button, Input, Select, SelectItem, addToast } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import { useSendInvitationMutation } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';

const InviteMemberModal = ({ isOpen, onClose }) => {
  const { id } = useBusiness();
  const { control, handleSubmit, reset } = useForm();
  const { mutateAsync: send, isPending: isSendLoading } = useSendInvitationMutation(id);

  const submit = async (data) => {
    try {
      await send({ business: id, ...data });
      addToast({ 
        title: `Invitation sent to ${data.email}`,
        color: 'success'
      });
      onClose();
      reset();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e.message,
        color: 'danger'
      });
    }
  };

  const roles = [
    { key: 'admin', label: 'Admin' },
    { key: 'member', label: 'Member' },
    { key: 'guest', label: 'Guest' },
  ];

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Invite member">
      <form onSubmit={handleSubmit(submit)}>
        <div className="space-y-12">
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email' },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <Input
                  type="email"
                  label="Email"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Enter email"
                  value={field.value}
                  size="lg"
                  onChange={field.onChange}
                  classNames={{ input: 'text-base px-2' }}
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  isDisabled={field.disabled}
                />
              );
            }}
          />
          <Controller
            name="role"
            control={control}
            rules={{ required: 'Role is required' }}
            render={({ field, fieldState: { error } }) => (
              <Select
                label="Role"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Select role"
                size="lg"
                selectedKeys={field.value ? [field.value] : []}
                onChange={(e) => field.onChange(e)}
                errorMessage={error?.message}
                isInvalid={!!error?.message}
                classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                disableEmptySelection={true}
              >
                {roles.map((role) => (
                  <SelectItem key={role.key} classNames={{ title: 'text-base px-2' }}>
                    {role.label}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
        <Button type="submit" color="primary" radius="lg" className="mt-12 text-base" isLoading={isSendLoading}>
          Send Invite
        </Button>
      </form>
    </Drawer>
  );
};

InviteMemberModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default InviteMemberModal;
