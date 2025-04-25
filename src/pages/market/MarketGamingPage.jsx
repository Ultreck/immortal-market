import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, Input } from '@heroui/react';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const categories = [
  'Trending',
  'New',
  'Nigeria',
  '|',
  'Politics',
  'Sports',
  'Entertainment',
  'Technology',
  'Science',
  'Business',
  'Health',
  'Economy',
  'Crypto',
];

const MarketGamingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <>
      <MarketNavbar />
      <div className="container">
        <div className="flex flex-wrap gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={cn('opacity-70 cursor-pointer', selectedCategory === category && 'opacity-100 font-bold')}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[1fr_3.5fr] gap-10 mt-10 items-start">
          <div>
            <div className="flex items-center gap-2">
              <Input
                startContent={<IconSearch size={18} className="opacity-50" />}
                radius="full"
                placeholder="Search..."
              />
            </div>
            <div className="mt-4 space-y-1">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={cn(
                    'opacity-70 cursor-pointer px-6 py-2',
                    selectedCategory === category && 'opacity-100 font-bold bg-primary-200 rounded-full px-6 py-2'
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((m) => (
              <Link to={`/markets/gaming/${m}`} key={m} onClick={() => console.log('error')}>
                <Card className="card-shadow px-8 py-6 cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quos.
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketGamingPage;
