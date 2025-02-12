import { Avatar, Badge, Button, Card, CardBody, CardHeader, Tooltip, useDisclosure } from '@nextui-org/react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { getImageLink, writers } from '@/lib/utils.js';
import { RiUser3Fill } from 'react-icons/ri';
import ChatWIthAgentsModal from '@/pages/market/modals/ChatWIthAgents.jsx';

const markers = [
  { name: 'New York, USA', coordinates: [-74.006, 40.7128], color: 'fill-blue-500' }, // North America
  { name: 'London, UK', coordinates: [-0.1278, 51.5074], color: 'fill-green-500' }, // Europe
  { name: 'Tokyo, Japan', coordinates: [139.6917, 35.6895], color: 'fill-red-500' }, // Asia
  { name: 'Sydney, Australia', coordinates: [151.2093, -33.8688], color: 'fill-purple-500' }, // Australia
  { name: 'São Paulo, Brazil', coordinates: [-46.6333, -23.5505], color: 'fill-yellow-500' }, // South America
  { name: 'Lagos, Nigeria', coordinates: [3.3792, 6.5244], color: 'fill-orange-500' }, // Africa
];

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const MarketHero = () => {
  const { isOpen: isChatWithAgentOpen, onOpen: onChatWithAgentOpen, onClose: onChatWithAgentClose } = useDisclosure();

  return (
    <div className="relative overflow-y-auto flex container">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="rgba(255, 255, 255, 0.3)" stroke="#000" />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, color }, index) => (
          <Marker key={index} coordinates={coordinates}>
            <Tooltip
              className="p-4"
              content={
                <div className="space-y-2">
                  <p>{name}</p>
                  <p>{coordinates}</p>
                  <Button variant="bordered">Details</Button>
                </div>
              }
              placement="top"
            >
              <circle r={10} className={`${color} cursor-pointer hover:scale-125 transition-transform`} />
            </Tooltip>
          </Marker>
        ))}
      </ComposableMap>
      <div className="container absolute bottom-0 left-0 right-0 ">
        <div className="w-full bg-default-100 px-10 py-4 rounded-2xl flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-3xl font-bold">Chat with Immortal Agents</p>
            <Button size="lg" radius="full" color="primary" onClick={onChatWithAgentOpen}>
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
                        onClick={() => onChatWithAgentOpen()}
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
