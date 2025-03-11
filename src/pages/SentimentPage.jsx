import { useState } from 'react';
import { Button, Select, SelectItem, Tooltip, useDisclosure } from '@heroui/react';
import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import KeywordsList from '@/components/core/sentiment/KeywordsList.jsx';
import SentimentMap from '../components/core/sentiment/SentimentMap';
import MapPreview from '../components/core/sentiment/MapPreview';
import MapLegend from '../components/core/sentiment/MapLegend';
import { LuClock, LuExpand } from 'react-icons/lu';
import { format } from 'date-fns';

const categories = [
  { name: 'Business', value: 'business' },
  { name: 'Market', value: 'market' },
  { name: 'Technology', value: 'technology' },
];

const SentimentPage = () => {
  const [category, setCategory] = useState('business');
  const { isOpen: isMapOpen, onOpen: onMapOpen, onClose: onMapClose } = useDisclosure();

  return (
    <>
      <DashboardHeader content={<h2 className="text-2xl font-semibold">Global Sentiments</h2>} />
      <div className="container pb-20">
        <div className="grid grid-cols-[3fr_1.2fr] gap-4 items-start">
          <div className="space-y-4">
            <div className="w-full border border-default-200 rounded-2xl p-4 relative">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <LuClock size="20" />
                  <p className="text-base">{format(new Date(), 'MMM d, yyyy')}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Tooltip
                    content={
                      <div className="p-1">
                        <p>Preview Map</p>
                      </div>
                    }
                    placement="top"
                  >
                    <Button
                      isIconOnly
                      variant="light"
                      aria-label="Preview Map"
                      className="text-base absolute bottom-4 right-4"
                      size="sm"
                    >
                      <LuExpand size="18" className="text-gray-500 cursor-pointer" onClick={onMapOpen} />
                    </Button>
                  </Tooltip>
                  <Select
                    variant="bordered"
                    className="w-[150px]"
                    classNames={{
                      value: 'text-base px-1',
                    }}
                    aria-label="Select Category"
                    selectedKeys={category ? new Set([category]) : new Set()}
                    onSelectionChange={(keys) => {
                      const selectedKey = [...keys][0];
                      setCategory(selectedKey);
                    }}
                    disallowEmptySelection
                  >
                    {categories.map(({ value, name }) => (
                      <SelectItem key={value} classNames={{ title: 'text-base px-1' }}>
                        {name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <SentimentMap />
            </div>
            <MapLegend />
          </div>
          <KeywordsList category={category} />
        </div>
      </div>

      <MapPreview isOpen={isMapOpen} onClose={onMapClose} />
    </>
  );
};

export default SentimentPage;
