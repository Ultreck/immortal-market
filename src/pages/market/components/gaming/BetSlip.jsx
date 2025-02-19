import { tableData } from '@/lib/gaming';
import useOddsStore from '@/store/gaming';
import { Tabs, Tab, Input, Button, Card, CardBody } from '@heroui/react';
import React, { useState } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';

const BetSlip = () => {
  const [selected, setSelected] = React.useState('login');
  const { selectedOdds, removeOdd } = useOddsStore();
  const [stakingPrice, setstakingPrice] = useState(100);

  const selectedData = selectedOdds.flatMap(({ rowId, section, key }) =>
    tableData
      .filter((row) => row.id === rowId)
      .map((row) => ({
        id: row.id,
        exchange: row.exchange,
        rank: row.rank,
        section: section,
        value: row[section]?.[key],
        key: key,
      }))
  );
  console.log(selectedOdds);
  const handlePrice = (e) => {
    setstakingPrice(Number(e.target.value));
  };

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
              {selectedData.length === 0 && (
                <div className="w-full min-h-[300px] bg-slate-600/50 flex rounded-lg justify-center items-center">
                  <p className="text-gray-500">No bet available</p>
                </div>
              )}
              {selectedData.length > 0 && (
                <div className="text overflow-y-auto w-auto px-3">
                  <div className="text">
                    {selectedData.map((row, index) => (
                      <div className="py-2 border-t dark:border-default-200 mt-3">
                        <div key={index} className="text grid grid-cols-2">
                          <div className="text my-3">{row.exchange}</div>
                          <div
                            className="text-end flex justify-end my-3"
                            onClick={() => removeOdd({ rowId: row.id, section: row.section, key: row.key })}
                          >
                            <RxCross2 className="cursor-pointer w-8 h-8 p-2 rounded-full hover:bg-default-200" />
                          </div>
                        </div>
                        <div className="text-end">{row.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text grid grid-cols-6 border-t dark:border-default-200 mt-5 py-5">
                    <div className="text col-span-1">
                      <h1 className="text">Type</h1>
                      <span className="text-default-500">Single</span>
                    </div>
                    <div className="text col-span-1">
                      <h1 className="text-center">NO</h1>
                      <span className="text-default-500 flex justify-center items-center">{selectedData.length}</span>
                    </div>
                    <div className="text col-span-4">
                      <Input
                        label="Stake"
                        labelPlacement="outside"
                        placeholder="0.00"
                        defaultValue={stakingPrice}
                        onChange={handlePrice}
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <TbCurrencyNaira className="text-default-500 text-lg" />
                          </div>
                        }
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="text flex justify-between items-center">
                    <div className="text">Total stake:</div>
                    <div className="text">
                      <div className="pointer-events-none flex items-center">
                        <TbCurrencyNaira className="text-default-500 text-lg" />
                      {stakingPrice * Number(selectedData.length)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
