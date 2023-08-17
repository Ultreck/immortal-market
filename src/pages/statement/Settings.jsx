import MonoCredentials from "@/components/core/statement/settings/MonoCredentials.jsx";
import WidgetCustomization from "@/components/core/statement/settings/WidgetCustomization.jsx";
import MbsCredentials from "@/components/core/statement/settings/MbsCredentials.jsx";
import Tabs from "@/components/global/Tabs.jsx";

const tabs = [
  {
    key: 'preferences',
    name: 'Preferences',
    panel: (
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <WidgetCustomization/>
      </div>
    )
  },
  {
    key: 'keys',
    name: 'API Keys',
    panel: (
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
        <MbsCredentials/>
        <MonoCredentials/>
      </div>
    )
  },
];

const StatementSettings = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-6 md:mb-10 px-2">
        Settings
      </h1>
      <div>
        <Tabs tabs={ tabs }/>
      </div>
    </>
  );
};

export default StatementSettings;
