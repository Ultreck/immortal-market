import { Tabs, Tab, Input, Link, Button, Card, CardBody } from '@heroui/react';
import React from 'react';

const BetSlip = () => {
  const [selected, setSelected] = React.useState('login');
  return (
    <div className="flex flex-col w-full mt-6 sticky top-5 items-center">
      <Card className="max-w-full w-[340px] min-h-[300px] max-h-[680px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            aria-label="Tabs form"
            selectedKey={selected}
            size="md"
            color="success"
            centered
            onSelectionChange={setSelected}
          >
            <Tab key="betslip" title="Betslip" className="h-auto overflow-y-auto overflow-x-hidden">
            <div className="w-full min-h-[300px] bg-slate-600/50 flex rounded-lg justify-center items-center">
                <p className="text-gray-500">No bet available</p>
              </div>
              <div className="text overflow-y-auto w-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iusto vero ea culpa suscipit veniam
                aliquam voluptatum quaerat nemo, aliquid, fugit eos non accusantium omnis cum cupiditate iste molestias
                quae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iusto vero ea culpa suscipit veniam
                aliquam voluptatum quaerat nemo, alte molestias quae!
              </div>
            </Tab>
            <Tab key="cash-out" title="Cash out" className="h-full w-full flex items-center">
              <div className="w-full min-h-[300px] bg-slate-600/50 flex rounded-lg justify-center items-center">
                <p className="text-gray-500">No bet available</p>
              </div>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default BetSlip;
