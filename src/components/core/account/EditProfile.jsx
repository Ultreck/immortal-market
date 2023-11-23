import { useAuth } from '@/hooks/use-auth';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { Cropper, ImageRestriction } from 'react-advanced-cropper';
import Input from '@/components/global/Input.jsx';
import Button from '@/components/global/Button.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import { useUpdateAccount } from '@/api/account.js';
import Modal from '@/components/global/Modal.jsx';
import 'react-advanced-cropper/dist/style.css';
import { imageFileToBase64 } from '@/lib/utils.js';
import Image from '@/components/core/shared/Image.jsx';
import TextArea from '@/components/global/TextArea.jsx';
import Select from '@/components/global/Select.jsx';

const MAX_FILE_SIZE_IN_MB = 5;

const EditProfile = ({ onClose }) => {
  const toast = useToast();
  const { user, reloadUser } = useAuth();
  const cropperRef = useRef(null);
  const [file, setFile] = useState(null);
  const [dataUri, setDataUri] = useState('');
  const [isCropperModalOpen, setIsCropperModalOpen] = useState(false);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      middleName: user.middleName,
      username: user.username,
      bio: user.bio,
      email: user.email,
      country: user.country,
    },
  });

  const onCrop = () => {
    setDataUri(cropperRef.current?.getCanvas().toDataURL());
    cropperRef.current?.getCanvas().toBlob(setFile);
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
    const uri = await imageFileToBase64(file);
    setDataUri(uri);
    setIsCropperModalOpen(true);
  };

  const onCancelCrop = () => {
    setDataUri(null);
    setFile(null);
    setIsCropperModalOpen(false);
  };

  const onSubmit = async (values) => {
    try {
      const fd = new FormData();
      if (file) fd.append('image', file);
      Object.keys(values).forEach((key) => {
        if (values[key] !== user[key]) fd.append(key, values[key]);
      });
      await update(fd);
      toast.success('Account updated');
      reloadUser();
      onClose();
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
              <label
                htmlFor="profilePic"
                className="cursor-pointer block w-12 hover:brightness transition-all duration-300"
              >
                {!!user.image && !dataUri ? (
                  <Image
                    src={dataUri || user.image || `https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`}
                    className="w-12 h-12 rounded-full"
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                ) : (
                  <img
                    src={dataUri || `https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`}
                    className="w-12 h-12 rounded-full"
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                )}
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
            <div>
              First name <span className="text-red-500">*</span>
            </div>
            <Input
              bordered
              {...register('firstName', { required: 'First name is required' })}
              error={errors?.firstName?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="grid items-center md:grid-cols-[1.5fr_3fr] gap-3">
            <div>
              Last name <span className="text-red-500">*</span>
            </div>
            <Input
              bordered
              {...register('lastName', { required: 'Last name is required' })}
              error={errors?.lastName?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="grid items-center md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Middle name</div>
            <Input
              bordered
              {...register('middleName')}
              error={errors?.middleName?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="grid items-center md:grid-cols-[1.5fr_3fr] gap-3">
            <div>
              Username <span className="text-red-500">*</span>
            </div>
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
            <div>Bio</div>
            <TextArea bordered {...register('bio')} error={errors?.email?.message} disabled={isUpdateLoading} />
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>
              Country <span className="text-red-500">*</span>
            </div>
            <Select
              bordered
              placeholder="Select country"
              options={[{ text: 'Nigeria', value: 'NG' }]}
              {...register('country', { required: 'Country is required' })}
              error={errors?.country?.message}
              disabled={isUpdateLoading}
            />
          </div>
          <div className="flex space-x-3">
            <Button
              type="button"
              onClick={onClose}
              disabled={isUpdateLoading}
              color="red"
              variant="outlined"
              className="mt-10"
            >
              Cancel
            </Button>
            <Button type="submit" loading={isUpdateLoading} color="green" className="mt-10">
              Save
            </Button>
          </div>
        </div>
      </form>

      <Modal size="sm" isOpen={isCropperModalOpen} onClose={() => setIsCropperModalOpen(false)}>
        <Cropper
          ref={cropperRef}
          src={dataUri}
          className="rounded-xl"
          stencilProps={{ aspectRatio: 1 }}
          imageRestriction={ImageRestriction.fitArea}
        />
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button onClick={onCancelCrop} color="red" variant="outlined">
            Cancel
          </Button>
          <Button onClick={onCrop} color="green">
            Crop
          </Button>
        </div>
      </Modal>
    </>
  );
};

EditProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditProfile;

