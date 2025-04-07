import { Avatar, Badge, Button, Card, CardBody, CardHeader, Tooltip, useDisclosure } from '@heroui/react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { getImageLink, writers } from '@/lib/utils.js';
import ChatWIthAgentsModal from '@/pages/market/modals/ChatWIthAgents.jsx';
import { useMemo } from 'react';
import { RiUser3Fill } from 'react-icons/ri';
import WordCloud from 'react-d3-cloud';
import CountryFlag from '@/components/ui/CountryFlag.jsx';

const markers = [
  { name: 'New York, USA', coordinates: [-74.006, 40.7128], color: 'fill-blue-500' }, // North America
  { name: 'London, UK', coordinates: [-0.1278, 51.5074], color: 'fill-green-500' }, // Europe
  { name: 'Tokyo, Japan', coordinates: [139.6917, 35.6895], color: 'fill-red-500' }, // Asia
  { name: 'Sydney, Australia', coordinates: [151.2093, -33.8688], color: 'fill-purple-500' }, // Australia
  { name: 'São Paulo, Brazil', coordinates: [-46.6333, -23.5505], color: 'fill-yellow-500' }, // South America
  { name: 'Lagos, Nigeria', coordinates: [3.3792, 6.5244], color: 'fill-orange-500' }, // Africa
];

const words = [
  { text: 'Zenith', size: 'text-3xl', value: '800' },
  { text: 'Linkage', size: 'text-4xl', value: '800' },
  { text: 'Union', size: 'text-3xl', value: '800' },
  { text: 'Access', size: 'text-4xl', value: '800' },
  { text: 'MTN', size: 'text-xl', value: '800' },
  { text: 'GTB', size: 'text-sm', value: '800' },
  { text: 'UBA', size: 'text-lg', value: '800' },
  { text: 'Stanbic', size: 'text-base', value: '800' },
  { text: 'UCAP', size: 'text-xl', value: '800' },
  { text: 'Zenith', size: 'text-3xl', value: '800' },
  { text: 'Linkage', size: 'text-4xl', value: '800' },
  { text: 'Union', size: 'text-3xl', value: '800' },
  { text: 'Access', size: 'text-4xl', value: '800' },
  { text: 'MTN', size: 'text-xl', value: '800' },
  { text: 'GTB', size: 'text-sm', value: '800' },
  { text: 'UBA', size: 'text-lg', value: '800' },
  { text: 'Stanbic', size: 'text-base', value: '800' },
  { text: 'UCAP', size: 'text-xl', value: '800' },
  { text: 'Zenith', size: 'text-3xl', value: '800' },
  { text: 'Linkage', size: 'text-4xl', value: '800' },
  { text: 'Union', size: 'text-3xl', value: '800' },
  { text: 'Access', size: 'text-4xl', value: '800' },
  { text: 'MTN', size: 'text-xl', value: '800' },
  { text: 'GTB', size: 'text-sm', value: '800' },
  { text: 'UBA', size: 'text-lg', value: '800' },
  { text: 'Stanbic', size: 'text-base', value: '800' },
  { text: 'UCAP', size: 'text-xl', value: '800' },
  { text: 'Zenith', size: 'text-3xl', value: '800' },
  { text: 'Linkage', size: 'text-4xl', value: '800' },
  { text: 'Union', size: 'text-3xl', value: '800' },
  { text: 'Access', size: 'text-4xl', value: '800' },
  { text: 'MTN', size: 'text-xl', value: '800' },
  { text: 'GTB', size: 'text-sm', value: '800' },
  { text: 'UBA', size: 'text-lg', value: '800' },
  { text: 'Stanbic', size: 'text-base', value: '800' },
  { text: 'UCAP', size: 'text-xl', value: '800' },
  { text: 'Zenith', size: 'text-3xl', value: '800' },
  { text: 'Linkage', size: 'text-4xl', value: '800' },
  { text: 'Union', size: 'text-3xl', value: '800' },
  { text: 'Access', size: 'text-4xl', value: '800' },
  { text: 'MTN', size: 'text-xl', value: '800' },
  { text: 'GTB', size: 'text-sm', value: '800' },
  { text: 'UBA', size: 'text-lg', value: '800' },
  { text: 'Stanbic', size: 'text-base', value: '800' },
  { text: 'UCAP', size: 'text-xl', value: '800' },
];

const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 1000 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 100 },
  { text: 'duck', value: 100 },
];

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const MarketHero = () => {
  const countryColors = useMemo(() => ({}), []);

  const { isOpen: isChatWithAgentOpen, onOpen: onChatWithAgentOpen, onClose: onChatWithAgentClose } = useDisclosure();

  const getRandomPosition = () => ({
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
  });

  return (
    <div className="">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              if (!countryColors[geo.rsmKey]) {
                countryColors[geo.rsmKey] = getRandomColor();
              }
              return (
                <Tooltip
                  key={geo.rsmKey}
                  content={
                    <div className="space-y-2 w-[100px] px-4 py-2">
                      <p>name</p>
                      <p>coordinates</p>
                      <Button variant="bordered" size="sm">
                        Details
                      </Button>
                    </div>
                  }
                  closeDelay={100}
                  showArrow
                >
                  <Geography
                    geography={geo}
                    fill={countryColors[geo.rsmKey]}
                    stroke="#000"
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#f00', outline: 'none' },
                      pressed: { fill: '#fff', outline: 'none' },
                    }}
                  />
                </Tooltip>
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <Card className="card-shadow px-10 py-4">
        <div className="grid grid-cols-6">
          <div className="flex items-center space-x-4 col-span-2">
            <CountryFlag code={'NG'} className="" rounded />
            <p className="text-2xl">
              20 Most <br /> Active
            </p>
          </div>
          <div className="col-span-4">
            <WordCloud data={words} height={200} spiral="archimedean" onWordClick={() => console.log('clicked')} />
          </div>
        </div>
      </Card>
      <div className="mt-5">
        <div className="w-full bg-default-100 px-10 py-4 rounded-2xl flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-3xl font-bold">Chat with Immortal Agents</p>
            <Button size="lg" radius="full" color="primary" onPress={onChatWithAgentOpen}>
              Start chatting
            </Button>
          </div>
          <div className="grid grid-cols-4 items-center gap-6 mt-6">
            {writers?.slice(0, 8).map((writer, i) => (
              <Tooltip
                placement="bottom"
                key={i}
                classNames={{ content: 'dark:bg-default-100' }}
                content={
                  <Card shadow="none" className="w-[250px] border-none bg-transparent">
                    <CardHeader className="justify-between">
                      <div className="mr-2 flex items-center gap-3">
                        <Badge content="AI" isInvisible={writer.type !== 'ai'} placement="bottom-right">
                          <Avatar
                            radius="full"
                            src={getImageLink(writer.image)}
                            showFallback
                            fallback={<RiUser3Fill size="24" />}
                            className="!h-[40px] !w-[40px]"
                          />
                        </Badge>
                        <h4 className="text-base font-medium leading-none text-default-600">
                          {writer.firstName} {writer.lastName}
                        </h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 pb-4">
                      <p className="pl-px text-base text-default-500">{writer.bio}</p>
                      <Button
                        color="primary"
                        radius="full"
                        size="sm"
                        className="mt-6 text-base"
                        onPress={() => onChatWithAgentOpen()}
                      >
                        Chat with {writer.firstName}
                      </Button>
                    </CardBody>
                  </Card>
                }
              >
                <Avatar
                  radius="full"
                  src={getImageLink(writer.image)}
                  showFallback
                  fallback={<RiUser3Fill size="24" />}
                  className="!h-[42px] !w-[42px]"
                />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <ChatWIthAgentsModal isOpen={isChatWithAgentOpen} onClose={onChatWithAgentClose} writers={writers} />
    </div>
  );
};

export default MarketHero;
