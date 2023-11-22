import { useAuth } from '@/hooks/use-auth';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useRef, useState } from 'react';
import { Cropper } from 'react-advanced-cropper';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/global/Input.jsx';
import Button from '@/components/global/Button.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import { useUpdateAccount } from '@/api/account.js';
import Modal from '@/components/global/Modal.jsx';
import 'react-advanced-cropper/dist/style.css';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().required('Email is required'),
  phone: yup.string().required('Phone Number is required'),
});

const fileToDataUri = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

const EditProfileSettings = ({ setIsEditing }) => {
  const { user, reloadUser } = useAuth();
  const cropperRef = useRef(null);
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [isCropperModalOpen, setIsCropperModalOpen] = useState(false);
  const [dataUri, setDataUri] = useState('');
  const MAX_FILE_SIZE_IN_MB = 5;
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      phone: user.phone,
    },
  });

  const onCrop = () => {
    if (cropperRef.current) {
      setFile(cropperRef.current.getCanvas()?.toDataURL());
    }
    setIsCropperModalOpen(false);
  };

  const handleFileChange = async (event) => {
    let file = event.target.files[0];
    let fileSizeInMB = file.size / 1024 / 1024;
    if (!file) return;
    if (fileSizeInMB > MAX_FILE_SIZE_IN_MB) {
      toast.error('File is too large, Upload a file less than 5mb');
      event.target.value = '';
      return;
    }
    fileToDataUri(file)
      .then((dataUri) => {
        setDataUri(dataUri);
        setIsCropperModalOpen(true);
      })
      .catch(() => toast.error('An unexpected error has occured, please try again'));
  };

  const cancelEditing = () => {
    setFile(null);
    reset();
    setIsEditing(false);
  };

  const onSubmit = async (values) => {
    try {
      const fd = new FormData();
      if (file) {
        fd.append('image', file);
      }
      fd.append('firstName', values.firstName);
      fd.append('lastName', values.lastName);
      fd.append('username', values.username);
      fd.append('email', values.email);
      fd.append('phone', values.phone);
      await update(fd);
      toast.success('Account updated');
      await reloadUser();
      setIsEditing(false);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3 items-center">
            <div>Profile picture</div>
            <div>
              <label htmlFor="profilePic" className="cursor-pointer block w-12">
                <img
                  src={
                    file
                      ? file
                      : user.image
                      ? user.image
                      : `https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`
                  }
                  className="w-12 h-12 rounded-full"
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </label>
            </div>
            <input
              onChange={handleFileChange}
              accept="image/png, image/jpeg"
              className="hidden"
              type="file"
              id="profilePic"
            />
          </div>
          <div className="grid items-center md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Username</div>
            <Input
              bordered
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters',
                },
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message: 'Username can only contain letters, numbers, and underscores',
                },
              })}
              error={errors?.username?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="grid items-center md:grid-cols-[1.5fr_3fr] gap-3">
            <div>First name</div>
            <Input
              bordered
              {...register('firstName', { required: 'First name is required' })}
              error={errors?.firstName?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="grid items-center md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Last name</div>
            <Input
              bordered
              {...register('lastName', { required: 'Last name is required' })}
              error={errors?.lastName?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="grid items-center md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Email address</div>
            <Input
              bordered
              {...register('email', { required: 'Email address is required' })}
              error={errors?.email?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Phone number</div>
            <Input
              bordered
              {...register('phone', { required: 'Phone number is required' })}
              error={errors?.phone?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="flex gap-4">
            <Button type="submit" loading={isUpdateLoading} color="green" className="mt-10">
              Save
            </Button>
            <Button type="button" onClick={cancelEditing} color="black" variant="outlined" className="mt-10">
              Cancel
            </Button>
          </div>
        </div>
      </form>
      <Modal size="md" isOpen={isCropperModalOpen} onClose={() => setIsCropperModalOpen(false)}>
        <div className="flex flex-col  gap-4">
          <Cropper ref={cropperRef} src={dataUri} className="h-96" />
          <Button onClick={onCrop}>Crop</Button>
        </div>
      </Modal>
    </>
  );
};

EditProfileSettings.propTypes = {
  setIsEditing: PropTypes.func.isRequired,
};

export default EditProfileSettings;

