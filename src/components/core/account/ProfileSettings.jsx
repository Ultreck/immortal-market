import Card from "@/components/global/Card";
import { useAuth } from "@/hooks/use-auth";
import classNames from "classnames";

const ProfileSettings = () => {
  const { user } = useAuth();

  return (
    <Card className="p-6 md:p-10">
      <h3 className="font-semibold mb-8">Profile</h3>
      <div className="space-y-6">
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-3 items-center">
          <div>Profile picture</div>
          <div>
            <img
              src={ `https://ui-avatars.com/api/?name=${ user.firstName } ${ user.lastName }` }
              className="w-12 h-12 rounded-full" alt={ `${ user.firstName } ${ user.lastName }` }
            />
          </div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
          <div>First name</div>
          <div className="font-medium">{ user.firstName }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
          <div>Last name</div>
          <div className="font-medium">{ user.lastName }</div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
          <div>Email address</div>
          <div className="flex items-center">
            <div className="font-medium">{ user.email }</div>
            <div className={ classNames(
              'px-2.5 py-1 leading-none inline-block rounded-full text-md text-white ml-3',
              { 'bg-green-500': user.emailVerified }, { 'bg-red-500': !user.emailVerified },
            ) }>
              { user.emailVerified ? 'Verified' : 'No verified' }
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-[1.5fr_3fr] gap-3">
          <div>Phone number</div>
          <div className="font-medium">{ user.phone }</div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSettings;
