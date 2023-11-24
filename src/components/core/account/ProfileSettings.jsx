import Card from '@/components/global/Card';
import { useAuth } from '@/hooks/use-auth';
import classNames from 'classnames';
import Button from '@/components/global/Button.jsx';
import { useState } from 'react';
import EditProfile from './EditProfile.jsx';
import { IconEdit } from '@tabler/icons-react';
import Image from '@/components/core/shared/Image.jsx';

const ProfileSettings = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card className="p-6 md:p-10">
      <h3 className="font-semibold mb-8">{isEditing ? 'Edit Profile' : 'Profile'}</h3>
      {isEditing ? (
        <EditProfile onClose={() => setIsEditing(false)} />
      ) : (
        <div className="space-y-6">
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3 items-center">
            <div>Profile picture</div>
            <div>
              <Image
                src={user.image ? user.image : `https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`}
                className="w-12 h-12 rounded-full"
                alt={`${user.firstName} ${user.lastName}`}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>First name</div>
            <div className="font-medium">{user.firstName}</div>
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Middle name</div>
            <div className="font-medium">
              {user.middleName || <span className="text-sm italic opacity-50 font-normal">Not provided</span>}
            </div>
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Last name</div>
            <div className="font-medium">{user.lastName}</div>
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Username</div>
            <div className="font-medium">{user.username}</div>
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Bio</div>
            <div className="font-medium">
              {user.bio || <span className="text-sm italic opacity-50 font-normal">Not provided</span>}
            </div>
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Email address</div>
            <div className="flex items-center">
              <div className="font-medium">{user.email}</div>
              <div
                className={classNames(
                  'px-2.5 py-1 leading-none inline-block rounded-full text-md text-white ml-3',
                  { 'bg-green-500': user.emailVerified },
                  { 'bg-red-500': !user.emailVerified }
                )}
              >
                {user.emailVerified ? 'Verified' : 'No verified'}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
            <div>Phone number</div>
            <div className="font-medium">{user.phone}</div>
          </div>
        </div>
      )}
      {!isEditing && (
        <Button
          onClick={() => setIsEditing(true)}
          variant="outlined"
          color="black"
          leftIcon={<IconEdit size="20" />}
          className="mt-10 mb-0"
        >
          Edit
        </Button>
      )}
    </Card>
  );
};

export default ProfileSettings;

