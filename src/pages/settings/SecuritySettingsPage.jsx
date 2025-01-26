import { useState } from 'react';
import ChangePasswordModal from '@/components/core/account/ChangePasswordModal';
import { LuKeyRound } from 'react-icons/lu';
import { Button } from '@heroui/react';
import { TbAuth2Fa } from 'react-icons/tb';

const SecuritySettings = () => {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  return (
    <>
      <div>
        <h3 className="mb-6 text-lg font-medium">Security settings</h3>
        <div className="space-y-6">
          <div className="divide-y divide-default-100">
            <div className="flex items-center py-4">
              <LuKeyRound size="20" />
              <div className="flex-1 px-4">
                <h5>Change password</h5>
                <p className="text-[.95rem] opacity-70">Set a new password to protect your account</p>
              </div>
              <Button
                onPress={() => setIsChangePasswordOpen(true)}
                variant="bordered"
                className="text-base"
                size="sm"
                radius="full"
              >
                Change
              </Button>
            </div>
            <div className="flex items-center py-4">
              <TbAuth2Fa size="20" />
              <div className="flex-1 px-4">
                <h5>Two factor authentication</h5>
                <p className="text-[.95rem] opacity-70">Add an extra layer of security to your account</p>
              </div>
              <Button isDisabled variant="bordered" className="text-base" size="sm" radius="full">
                Enable
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ChangePasswordModal isOpen={isChangePasswordOpen} onClose={() => setIsChangePasswordOpen(false)} />
    </>
  );
};

export default SecuritySettings;
