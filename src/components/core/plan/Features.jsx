import { Tooltip } from '@nextui-org/react';
import { IconInfoCircle } from '@tabler/icons-react';

const pricingData = [
  { feature: 'Meeting polls', free: true, standard: true, teams: true, enterprise: true },
  { feature: 'One-on-ones', free: 'Only 1', standard: true, teams: true, enterprise: true },
  { feature: 'Group event types', free: false, standard: true, teams: true, enterprise: true },
  { feature: 'Collective event types', free: false, standard: true, teams: true, enterprise: true },
  { feature: 'Round robin event types', free: false, standard: false, teams: true, enterprise: true },
  {
    feature: 'Email notifications for bookings and cancellations',
    free: true,
    standard: true,
    teams: true,
    enterprise: true,
  },
  {
    feature: 'Email notifications for reminders and follow-ups',
    free: false,
    standard: true,
    teams: true,
    enterprise: true,
  },
  {
    feature: 'Customize workflows for all forms of notifications',
    free: false,
    standard: true,
    teams: true,
    enterprise: true,
  },
  {
    feature: 'View Contact',
    free: true,
    standard: true,
    teams: true,
    enterprise: true,
  },
];

const renderCellContent = (content) => {
  return content === true ? (
    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
      <svg
        className="w-4 h-4 text-white "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
  ) : (
    content
  );
};

const Features = () => {
  return (
    <div className="shadow-lg">
      <div className="overflow-x-auto rounded px-2 dark:px-0">
        <table className="min-w-full border border-gray-200 dark:border-gray-500 divide-y divide-gray-200">
          <thead className="bg-gray-50 dark:bg-[#111112]">
            <tr>
              <th className="px-6 py-8 text-left text-xs  text-gray-900 dark:text-gray-300 font-bold uppercase tracking-wider divide-x divide-gray-200 border border-gray-200 dark:border-zinc-800">
                Core features
              </th>
              <th className="px-6  py-8 text-left text-xs  text-gray-900 dark:text-gray-300  font-bold uppercase tracking-wider  divide-x divide-gray-200 border border-gray-200 dark:border-zinc-800 ">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span>FREE</span>
                  <span className="text-gray-500">$0</span>
                </div>
              </th>
              <th className="px-6  py-8 text-left text-xs  text-gray-900 dark:text-gray-300  font-bold uppercase tracking-wider  divide-x divide-gray-200 border border-gray-200 dark:border-zinc-800">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span>STANDARD</span>
                  <span className="text-gray-500">$10</span>
                </div>
              </th>
              <th className="px-6  py-8 text-left text-xs  text-gray-900 dark:text-gray-300  font-bold uppercase tracking-wider  divide-x divide-gray-200 border border-gray-200 dark:border-zinc-800">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span>TEAMS</span>
                  <span className="text-gray-500">$16</span>
                </div>
              </th>
              <th className="px-6  py-8 text-left text-xs  text-gray-900 dark:text-gray-300  font-bold uppercase tracking-wider  divide-x divide-gray-200 border border-gray-200 dark:border-zinc-800">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span>ENTERPRISE</span>
                  <span className="text-gray-500">Starts at $15k</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {pricingData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-[#e0e7e3]/50 dark:bg-[#18181b]' : 'bg-[#e0e7e3] dark:bg-[#18181b]'}
              >
                <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800">
                  <div className="flex ">
                    <span className="flex-1">{row.feature}</span>
                    <Tooltip
                      showArrow
                      content={
                        <span className="text-gray-500">
                          More details on <br /> {row.feature}
                        </span>
                      }
                    >
                      <IconInfoCircle size={18} color="gray" className=" cursor-pointer" />
                    </Tooltip>
                  </div>
                </td>
                <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500 border border-gray-200 dark:border-zinc-800">
                  <div className=" flex items-center justify-center">{renderCellContent(row.free)}</div>
                </td>
                <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500 border border-gray-200 dark:border-zinc-800">
                  <div className=" flex items-center justify-center">{renderCellContent(row.standard)}</div>
                </td>
                <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500 border border-gray-200 dark:border-zinc-800">
                  <div className=" flex items-center justify-center">{renderCellContent(row.teams)}</div>
                </td>
                <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500 border border-gray-200 dark:border-zinc-800">
                  <div className=" flex items-center justify-center">{renderCellContent(row.enterprise)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Features;
