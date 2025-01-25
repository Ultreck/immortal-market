import { useAuth } from '@/hooks/use-auth';
import { useState } from 'react';
import EditProfile from '@/components/core/account/EditProfile.jsx';
import Image from '@/components/core/shared/Image.jsx';
import { TbEdit } from 'react-icons/tb';
import { Button, Chip } from '@heroui/react';

const ProfileSettingsPage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h3 className="mb-6 text-lg font-medium">{isEditing ? 'Edit Profile ' : 'Profile Settings'}</h3>
      {isEditing ? (
        <EditProfile onClose={() => setIsEditing(false)} />
      ) : (
        <div className="space-y-6">
          <div className="grid items-center gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Profile picture</div>
            <div>
              <Image
                src={user.image ? user.image : `https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`}
                className="h-12 w-12 rounded-full"
                alt={`${user.firstName} ${user.lastName}`}
              />
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">First name</div>
            <div className="font-medium">{user.firstName}</div>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Middle name</div>
            <div className="font-medium">
              {user.middleName || <span className="text-sm font-normal italic opacity-50">Not provided</span>}
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Last name</div>
            <div className="font-medium">{user.lastName}</div>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Username</div>
            <div className="font-medium">{user.username}</div>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Bio</div>
            <div className="font-medium">
              {user.bio || <span className="text-sm font-normal italic opacity-50">Not provided</span>}
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Email address</div>
            <div className="flex items-center space-x-3">
              <div className="font-medium">{user.email}</div>
              {user.verification?.email ? (
                <Chip color="success" size="sm" className="text-white">
                  Email verified
                </Chip>
              ) : (
                <Chip color="danger" size="sm" className="text-white">
                  Not verified
                </Chip>
              )}
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.5fr_3fr]">
            <div className="opacity-70">Phone number</div>
            <div className="font-medium">{user.phone}</div>
          </div>
        </div>
      )}
      <div>
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            variant="bordered"
            color="default"
            startContent={<TbEdit size="20" />}
            className="mb-0 mt-10 text-base"
            radius="full"
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
