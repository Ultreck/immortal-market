import { Avatar, Card, CardBody, CardHeader, cn, Tab, Tabs, Tooltip } from '@heroui/react';
import SimpleBar from 'simplebar-react';
import countries from '@/lib/countries.js';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import { useState } from 'react';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri';
// import { useGetNigeriaVirtual } from '@/api/ai-chat';
// import { useGetCountryStocks } from '@/store/bot';

const CountryList = ({setCountryName}) => {
  const [code, setCode] = useState('NG');
  const [tab, setTab] = useState('africa');
  // const {setCountryStocks} = useGetCountryStocks();

  const onSubmit = async (c) => {
       setCountryName(c.name);
  };
  return (
    <Card className="card-shadow rounded-2xl h-96">
      <SimpleBar style={{ maxHeight: 340 }}>
        <CardHeader className="sticky top-0 px-7 pb-3 pt-6">
          <Tabs aria-label="Categories" radius="full" selectedKey={tab} onSelectionChange={setTab}>
            <Tab
              key="special"
              title={
                <div className="flex items-center space-x-2">
                  <BsGlobeEuropeAfrica size="20" />
                  <span>Special</span>
                </div>
              }
              className="text-base"
            />{' '}
            <Tab
              key="africa"
              title={
                <div className="flex items-center space-x-2">
                  <BsGlobeEuropeAfrica size="20" />
                  <span>Africa</span>
                </div>
              }
              className="text-base"
            />
            <Tab
              key="global"
              title={
                <div className="flex items-center space-x-2">
                  <RiGlobalLine size="20" />
                  <span>World</span>
                </div>
              }
              className="text-base"
            />
          </Tabs>
        </CardHeader>
        <CardBody className="px-8 pb-6 pt-0">
          <div className="mt-4 grid grid-cols-4 items-center justify-center gap-4">
            {countries[tab].map((c) => (
              <div key={c.code}>
                <div
                  tabIndex={1}
                  onClick={() => {
                    setCode(c.code);
                    onSubmit(c);
                  }}
                  className={cn(
                    'w-fit rounded-full border-2 transition-all duration-300',
                    code === c.code ? 'border-default-500 p-1' : 'border-transparent hover:brightness-50'
                  )}
                >
                  <Tooltip content={<span className="capitalize">{c.name}</span>} placement="bottom">
                    <Avatar
                      size="md"
                      className="aspect-square h-10 w-10"
                      icon={<CountryFlag code={c.code} className="h-full w-full cursor-pointer" rounded />}
                    />
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </SimpleBar>
    </Card>
  );
};

export default CountryList;
