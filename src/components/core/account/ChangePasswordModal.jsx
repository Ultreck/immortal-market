import { useForm } from "react-hook-form";
import Drawer from "@/components/global/Drawer";
import PasswordInput from "@/components/global/PasswordInput";
import Button from "@/components/global/Button";
import { useChangePassword } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";
import PropTypes from "prop-types";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { mutateAsync: change, isPending: isChangeLoading } = useChangePassword();

  const onSubmit = async (values) => {
    try {
      const { currentPassword, newPassword, confirmPassword } = values;
      if (newPassword !== confirmPassword) return toast.error('New passwords do not match');
      await change({ currentPassword, newPassword });
      toast.success('Password successfully changed');
      handleClose();
    } catch (e) {
      toast.error(e?.response?.data?.message || 'Something went wrong, please try again');
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Drawer isOpen={ isOpen } onClose={ handleClose }>
      <div className="mb-10">
        <h2 className="text-lg font-medium">Change password</h2>
        <p className="opacity-80">Set a new password to protect your account</p>
      </div>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="space-y-4">
          <PasswordInput
            label="Current password" bordered
            { ...register('currentPassword', {
              required: 'Current is required',
              minLength: { value: 8, message: 'Password should not be less than 8 characters' }
            }) }
            error={ errors?.currentPassword?.message }
            disabled={ isChangeLoading }
          />
          <PasswordInput
            label="New password" bordered
            { ...register('newPassword', {
              required: 'New password is required',
              minLength: { value: 8, message: 'Password should not be less than 8 characters' }
            }) }
            error={ errors?.newPassword?.message }
            disabled={ isChangeLoading }
          />
          <PasswordInput
            label="Confirm new password" bordered
            { ...register('confirmPassword', {
              required: 'Enter new password again to confirm',
              minLength: { value: 8, message: 'Password should not be less than 8 characters' }
            }) }
            error={ errors?.confirmPassword?.message }
            disabled={ isChangeLoading }
          />
        </div>
        <Button type="submit" className="mt-10" disabled={ isChangeLoading }>
          Submit
        </Button>
      </form>
    </Drawer>
  );
};

ChangePasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ChangePasswordModal;
