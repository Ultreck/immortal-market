import MonoCredentials from "@/components/core/banking/settings/MonoCredentials.jsx";
import WidgetCustomization from "@/components/core/banking/settings/WidgetCustomization.jsx";
import MbsCredentials from "@/components/core/banking/settings/MbsCredentials.jsx";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

const tabs = [
  {
    key: 'statement',
    name: 'Statement',
    panel: (
      <div className="space-y-6">
        <WidgetCustomization/>
        <MbsCredentials/>
        <MonoCredentials/>
      </div>
    )
  },
  {
    key: 'Customer',
    name: 'Customer insights',
    panel: (
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
      </div>
    )
  },
];

const BankingSettings = () => {
  return (
    <>
      <div>
        <Tab.Group>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <Tab.List className="flex flex-col space-y-2 sticky top-10">
                {
                  tabs.map(tab => (
                    <Tab
                      key={ tab.key }
                      className={ ({ selected }) =>
                        classNames(
                          'py-3 px-6 md:px-8 rounded-full text-left focus:outline-none transition-all duration-150',
                          selected ? 'bg-slate-200/50 font-semibold' : 'hover:bg-slate-100 text-gray-700'
                        )
                      }
                    >
                      { tab.name }
                    </Tab>
                  ))
                }
              </Tab.List>
            </div>
            <div className="md:col-span-9">
              <Tab.Panels className="px-1">
                {
                  tabs.map(tab => (
                    <Tab.Panel key={ tab.key }>
                      { tab.panel }
                    </Tab.Panel>
                  ))
                }
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </div>
    </>
  );
};

export default BankingSettings;
