import BusinessSettings from "@/components/core/account/BusinessSettings.jsx";
import PaymentSettings from "@/components/core/account/PaymentSettings.jsx";
import SecuritySettings from "@/components/core/account/SecuritySettings.jsx";
import ProfileSettings from "@/components/core/account/ProfileSettings.jsx";
import { useAuth } from "@/hooks/use-auth.jsx";
import { useGetUserBusiness } from "@/api/business.js";
import Card from "@/components/global/Card.jsx";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

const tabs = [
  { key: 'profile', name: 'Profile' },
  { key: 'business', name: 'Business settings' },
  { key: 'security', name: 'Security' },
];

const AccountSetting = () => {
  const { user } = useAuth();
  const { isLoading: isBusinessLoading } = useGetUserBusiness();

  return (
    <>
      <div className="bg-[#11161b] text-white pt-12 md:pt-16 pb-10 md:pb-12">
        <div className="container !max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-semibold max-w-lg flex items-center">
            Account settings
          </h1>
          <p className="mt-2 md:mt-3 opacity-75">
            Manage your account settings here
          </p>
        </div>
      </div>
      <div className="container py-10 !max-w-5xl min-h-screen flex flex-col">
        <div>
          {
            isBusinessLoading ? (
              <>
                <div className="grid md:grid-cols-11 gap-6">
                  <div className="md:col-span-4 min-h-[300px] bg-slate-200 rounded-2xl"></div>
                  <div className="md:col-span-7 min-h-[300px] bg-slate-200 rounded-2xl"></div>
                </div>
              </>
            ) : (
              <Tab.Group>
                <div className="grid md:grid-cols-11 gap-6">
                  <div className="md:col-span-4">
                    <Card className="overflow-hidden">
                      <div className="flex flex-col px-8 md:px-10 pt-10 pb-8">
                        <img
                          src={ `https://ui-avatars.com/api/?name=${ user.firstName } ${ user.lastName }` }
                          className="w-16 h-16 rounded-full" alt={ `${ user.firstName } ${ user.lastName }` }
                        />
                        <div className="mt-3">
                          <h2 className="leading-0 font-medium">{ user.firstName } { user.lastName }</h2>
                          <p className="leading-0 mt-[1px] opacity-80">{ user.email }</p>
                        </div>
                      </div>
                      <Tab.List className="flex flex-col divide-y">
                        {
                          tabs.map(tab => (
                            <Tab
                              key={ tab.key }
                              className={ ({ selected }) =>
                                classNames(
                                  'py-2.5 px-8 md:px-10 text-left focus:outline-none transition-all duration-150',
                                  selected ? 'bg-slate-200/40 font-semibold' : 'hover:bg-slate-100 text-gray-700'
                                )
                              }
                            >
                              { tab.name }
                            </Tab>
                          ))
                        }
                      </Tab.List>
                    </Card>
                  </div>
                  <div className="md:col-span-7">
                    <Tab.Panels className="px-1">
                      <Tab.Panel>
                        <ProfileSettings/>
                      </Tab.Panel>
                      <Tab.Panel>
                        <BusinessSettings/>
                      </Tab.Panel>
                      <Tab.Panel>
                        <SecuritySettings/>
                      </Tab.Panel>
                      <Tab.Panel>
                        <PaymentSettings/>
                      </Tab.Panel>
                    </Tab.Panels>
                  </div>
                </div>
              </Tab.Group>
            )
          }
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
