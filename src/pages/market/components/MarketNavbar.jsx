import { TbDotsVertical } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const linkItems = [
  { name: 'Home', href: '/markets' },
  { name: 'Analytics', href: '/markets/analytics' },
  { name: 'Virtuals', href: '/markets/virtuals' },
  { name: 'Gaming', href: '/markets/gaming' },
];

const MarketNavbar = () => {
  return (
    <div className="flex justify-between h-[80px] container py-6 mb-8">
      <div className="">
        <p className="text-2xl font-bold">Global Markets</p>
        <p className="opacity-70 my-auto">23 Nov 2025</p>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-10">
          {linkItems.map((item) => (
            <Link key={item.name} to={item.href}>
              <div className="text-base font-semibold">{item.name}</div>
            </Link>
          ))}
        </div>
        <TbDotsVertical className="mt-2" />
      </div>
    </div>
  );
};

export default MarketNavbar;
