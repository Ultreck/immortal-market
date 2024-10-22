import { useAuth } from '@/hooks/use-auth';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { Cropper, ImageRestriction } from 'react-advanced-cropper';
import { useToast } from '@/hooks/use-toast.jsx';
import 'react-advanced-cropper/dist/style.css';
import { imageFileToBase64 } from '@/lib/utils.js';
import Image from '@/components/core/shared/Image.jsx';
import { Button, Input, Modal, ModalBody, ModalContent, Select, SelectItem, Textarea } from '@nextui-org/react';
import { useUpdateAccount } from '@/api/auth.js';

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
    handleSubmit,
    formState: { errors },
    control,
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
          <div className="grid items-center gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Profile picture</div>
            <div>
              <label
                htmlFor="profilePic"
                className="hover:brightness block w-12 cursor-pointer transition-all duration-300"
              >
                {!!user.image && !dataUri ? (
                  <Image
                    src={dataUri || user.image || `https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`}
                    className="h-12 w-12 rounded-full"
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                ) : (
                  <img
                    src={dataUri || `https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`}
                    className="h-12 w-12 rounded-full"
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
          <div className="grid items-center gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">
              First name <span className="text-red-500">*</span>
            </div>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: 'First name is required' }}
              disabled={isUpdateLoading}
              render={({ field }) => (
                <Input
                  variant="bordered"
                  labelPlacement="outside"
                  className="text-base"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  errorMessage={errors?.firstName?.message}
                  isDisabled={field.disabled}
                />
              )}
            ></Controller>
          </div>
          <div className="grid items-center gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">
              Last name <span className="text-red-500">*</span>
            </div>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'Last name is required' }}
              disabled={isUpdateLoading}
              render={({ field }) => (
                <Input
                  variant="bordered"
                  labelPlacement="outside"
                  className="text-base"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  errorMessage={errors?.lastName?.message}
                  isDisabled={field.disabled}
                />
              )}
            />
          </div>
          <div className="grid items-center gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Middle name</div>
            <Controller
              name="middleName"
              control={control}
              disabled={isUpdateLoading}
              render={({ field }) => (
                <Input
                  variant="bordered"
                  labelPlacement="outside"
                  className="text-base"
                  size="lg"
                  errorMessage={errors?.middleName?.message}
                  value={field.value}
                  onChange={field.onChange}
                  isDisabled={field.disabled}
                />
              )}
            />
          </div>
          <div className="grid items-center gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">
              Username <span className="text-red-500">*</span>
            </div>
            <Controller
              name="username"
              control={control}
              rules={{
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters',
                },
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message: 'Username can only contain letters, numbers, and underscores',
                },
              }}
              disabled={isUpdateLoading}
              render={({ field }) => (
                <Input
                  variant="bordered"
                  labelPlacement="outside"
                  className="text-base"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  errorMessage={errors?.username?.message}
                  isDisabled={field.disabled}
                />
              )}
            />
          </div>
          <div className="grid items-center gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Bio</div>
            <Controller
              name="bio"
              control={control}
              disabled={isUpdateLoading}
              render={({ field }) => (
                <Textarea
                  variant="bordered"
                  labelPlacement="outside"
                  className="text-base"
                  size="lg"
                  value={field.value}
                  onChange={field.onChange}
                  errorMessage={errors?.bio?.message}
                  isDisabled={field.disabled}
                />
              )}
            />
          </div>
          <div className="grid items-center gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">
              Country <span className="text-red-500">*</span>
            </div>
            <Controller
              name="country"
              rules={{ required: 'Country is required' }}
              control={control}
              render={({ field }) => (
                <Select
                  variant="bordered"
                  labelPlacement="outside"
                  aria-label="Select country"
                  size="lg"
                  classNames={{ trigger: 'px-4' }}
                  placeholder="Select country"
                  selectedKeys={field.value ? [field.value] : []}
                  onChange={(e) => field.onChange(e)}
                  errorMessage={errors?.country?.message}
                  isDisabled={isUpdateLoading}
                  selectionMode="single"
                  disallowEmptySelection
                >
                  <SelectItem key="NG" value="NG">
                    Nigeria
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="mt-10 flex space-x-3">
          <Button
            type="button"
            onClick={onClose}
            isDisabled={isUpdateLoading}
            color="danger"
            variant="bordered"
            className="text-base"
            radius="full"
          >
            Cancel
          </Button>
          <Button type="submit" isLoading={isUpdateLoading} color="success" className="text-base" radius="full">
            Save
          </Button>
        </div>
      </form>

      <Modal size="md" isOpen={isCropperModalOpen} onClose={() => setIsCropperModalOpen(false)} hideCloseButton>
        <ModalContent>
          <ModalBody className="p-6">
            <Cropper
              ref={cropperRef}
              src={dataUri}
              className="rounded-xl"
              stencilProps={{ aspectRatio: 1 }}
              imageRestriction={ImageRestriction.fitArea}
            />
            <div className="mt-2 flex items-center justify-center space-x-4">
              <Button onClick={onCancelCrop} color="danger" variant="bordered" radius="full" className="text-base">
                Cancel
              </Button>
              <Button onClick={onCrop} color="success" radius="full" className="text-base">
                Crop
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

EditProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditProfile;
