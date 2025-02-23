import { useForm } from 'react-hook-form';
import Drawer from '@/components/ui/Drawer.jsx';
import { useChangePassword } from '@/api/auth.js';
import PropTypes from 'prop-types';
import { Button, Input, addToast } from '@heroui/react';
import { useState } from 'react';
import Success from '@/components/ui/Success.jsx';

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('form');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutateAsync: change, isPending: isChangeLoading } = useChangePassword();

  const onSubmit = async (values) => {
    try {
      const { currentPassword, newPassword, confirmPassword } = values;
      if (newPassword !== confirmPassword) {
        addToast({
          title: 'Error',
          description: 'New passwords do not match',
          color: 'danger'
        });
        return;
      }
      await change({ currentPassword, newPassword });
      setView('success');
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger'
      });
    }
  };

  const handleClose = () => {
    setView('form');
    reset();
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      {view === 'form' && (
        <>
          <div className="mb-10">
            <h2 className="text-xl font-semibold">Change password</h2>
            <p className="mt-1 opacity-80">Set a new password to protect your account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <Input
                label="Current password"
                type="password"
                variant="bordered"
                classNames={{ inputWrapper: 'px-4' }}
                {...register('currentPassword', {
                  required: 'Current is required',
                  minLength: { value: 8, message: 'Password should not be less than 8 characters' },
                })}
                errorMessage={errors?.currentPassword?.message}
                isDisabled={isChangeLoading}
              />
              <Input
                label="New password"
                type="password"
                variant="bordered"
                classNames={{ inputWrapper: 'px-4' }}
                {...register('newPassword', {
                  required: 'New password is required',
                  minLength: { value: 8, message: 'Password should not be less than 8 characters' },
                })}
                errorMessage={errors?.newPassword?.message}
                isDisabled={isChangeLoading}
              />
              <Input
                label="Confirm new password"
                type="password"
                variant="bordered"
                classNames={{ inputWrapper: 'px-4' }}
                {...register('confirmPassword', {
                  required: 'Enter new password again to confirm',
                  minLength: { value: 8, message: 'Password should not be less than 8 characters' },
                })}
                errorMessage={errors?.confirmPassword?.message}
                isDisabled={isChangeLoading}
              />
            </div>
            <Button color="primary" type="submit" className="mt-10 text-base" radius="full" isLoading={isChangeLoading}>
              Submit
            </Button>
          </form>
        </>
      )}
      {view === 'success' && (
        <Success
          text="Password changed"
          subtext="Your password has been changed successfully"
          onButtonClick={handleClose}
        />
      )}
    </Drawer>
  );
};

ChangePasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChangePasswordModal;
