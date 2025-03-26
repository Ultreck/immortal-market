import {
  Button,
  Card,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import StocksChart from '@/pages/market/StocksChart.jsx';
import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { useCreateMeritradeOrder, useGetCardinalEquityList } from '@/api/trade.js';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast.jsx';
import { useEffect } from 'react';
import { useTradeStore } from '@/store/trade.js';
import axios from 'axios';

const s = {
  _id: '665867a2c6a35aab6119fea1',
  volume: 1231326991,
  name: 'Presco PLC',
  symbol: 'PRESCO',
  currency: 'NGN',
  change: 3207.1896446819665,
  price: 354.20001220703125,
};

const NewTrade = ({ isOpen, onClose, portfolio }) => {
  const { platform } = useTradeStore();
  const toast = useToast();
  const { data: equityList, isLoading: isEquityListLoading } = useGetCardinalEquityList();
  const { mutateAsync: createOrder, isPending: isCreateOrderLoading } = useCreateMeritradeOrder();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
    clearErrors,
  } = useForm();

  const submit = async (data) => {
    try {
      console.log(data);
      const value = {
        instrumentType: 'EQUITY',
        orderTerm: 'DAY',
        quantity: 10,
        orderType: 'BUY',
        priceType: 'MARKET',
        security: 'ABBEYBDS',
      };
      const res = await createOrder(data);
      toast.success('Order created');
      onClose();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e.message ?? 'An unknown error occurred, please try again later');
    }
  };

  const selectedSecId = watch('secId');
  const selectedSide = watch('side');

  useEffect(() => {
    if (selectedSide === 'SELL') {
      const existsInPortfolio = portfolio.some((item) => item.secId === selectedSecId);
      console.log(existsInPortfolio);
      if (!existsInPortfolio) {
        setError('secId', {
          type: 'manual',
          message: 'Symbol not found in your portfolio',
        });
        toast.error('Symbol not found in your portfolio');
      } else {
        clearErrors('secId');
      }
    }
  }, [selectedSecId, selectedSide, setError, clearErrors, portfolio]);

  const { token } = useTradeStore();
  const handleEquityChange = async (e) => {
    if (platform === 'cardinal') {
      try {
        const res = await axios.get(`https://market.api.statisense.co/${platform}/${e.target.value}?user=true`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const res = await axios.get(`https://market.api.statisense.co/${platform}/${e.target.value}?user=true`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} width={1200} title={'Place Orders'}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="">
            <div className="space-y-10">
              <div className="grid grid-cols-3 gap-8 items-center">
                {platform === 'cardinal' && (
                  <div>
                    <Select
                      variant="bordered"
                      labelPlacement="outside"
                      aria-label="Symbol"
                      label="Symbol"
                      size="lg"
                      placeholder="Select..."
                      selectionMode="single"
                      disallowEmptySelection
                      classNames={{ label: 'leading-none opacity-70' }}
                      {...register('secId', { required: 'Symbol is required' })}
                      errorMessage={errors?.secId?.message}
                    >
                      {equityList?.data?.content?.map((equity) => (
                        <SelectItem key={equity.secId} value={equity.secId}>
                          {equity.secDesc}
                        </SelectItem>
                      ))}
                    </Select>
                    <p className="text-red-500 text-xs mt-2">{errors?.secId?.message}</p>
                  </div>
                )}
                {platform === 'meritrade' && (
                  <>
                    <div>
                      <Select
                        variant="bordered"
                        labelPlacement="outside"
                        aria-label="Symbol"
                        label="Symbol"
                        size="lg"
                        placeholder="Select..."
                        selectionMode="single"
                        disallowEmptySelection
                        classNames={{ label: 'leading-none opacity-70' }}
                        {...register('secId', { required: 'Symbol is required' })}
                        errorMessage={errors?.secId?.message}
                        onChange={handleEquityChange}
                      >
                        {equityList?.data?.content?.map((equity) => (
                          <SelectItem key={equity.secId} value={equity.secId}>
                            {equity.secDesc}
                          </SelectItem>
                        ))}
                      </Select>
                      <p className="text-red-500 text-xs mt-2">{errors?.secId?.message}</p>
                    </div>
                    <div>
                      <Select
                        variant="bordered"
                        labelPlacement="outside"
                        aria-label="Price Type"
                        label="Price Tyoe"
                        size="lg"
                        placeholder="Select..."
                        selectionMode="single"
                        disallowEmptySelection
                        classNames={{ label: 'leading-none opacity-70' }}
                        {...register('secId', { required: 'Symbol is required' })}
                        errorMessage={errors?.secId?.message}
                      >
                        <SelectItem key="MARKET" value="MARKET">
                          Market
                        </SelectItem>
                        <SelectItem key="LIMIT" value="LIMIT">
                          Limit
                        </SelectItem>
                      </Select>
                      <p className="text-red-500 text-xs mt-2">{errors?.secId?.message}</p>
                    </div>
                  </>
                )}
                <Select
                  variant="bordered"
                  labelPlacement="outside"
                  aria-label={platform === 'cardinal' ? 'Asset Type' : 'Instrument Type'}
                  label={platform === 'cardinal' ? 'Asset Type' : 'Instrument Type'}
                  size="lg"
                  placeholder="Select..."
                  selectionMode="single"
                  disallowEmptySelection
                  classNames={{ label: 'leading-none opacity-70' }}
                  {...register('assetType', { required: 'Asset Type is required' })}
                  errorMessage={errors?.assetType?.message}
                >
                  <SelectItem key="EQUITY" value="EQUITY">
                    Equity
                  </SelectItem>
                  <SelectItem key="BOND" value="BOND">
                    Bond
                  </SelectItem>
                </Select>
                <Select
                  variant="bordered"
                  labelPlacement="outside"
                  aria-label="Order Type"
                  label="Order Type"
                  size="lg"
                  placeholder="Select..."
                  selectionMode="single"
                  disallowEmptySelection
                  classNames={{ label: 'leading-none opacity-70' }}
                  {...register('side', { required: 'Side is required' })}
                  errorMessage={errors?.side?.message}
                >
                  <SelectItem key="BUY" value="BUY">
                    Buy
                  </SelectItem>
                  <SelectItem key="SELL" value="SELL">
                    Sell
                  </SelectItem>
                </Select>
                <Input
                  variant="bordered"
                  labelPlacement="outside"
                  aria-label=" Quantity"
                  label="Quantity"
                  size="lg"
                  placeholder="0"
                  selectionMode="single"
                  disallowEmptySelection
                  classNames={{ label: 'leading-none opacity-70' }}
                  {...register('requestedQty', { required: 'Quantity is required' })}
                  errorMessage={errors?.requestedQty?.message}
                />
                <Select
                  variant="bordered"
                  labelPlacement="outside"
                  aria-label="Order Type"
                  label="Order Type"
                  size="lg"
                  placeholder="Select..."
                  selectionMode="single"
                  disallowEmptySelection
                  classNames={{ label: 'leading-none opacity-70' }}
                  {...register('tif', { required: 'Order Type is required' })}
                  errorMessage={errors?.tif?.message}
                >
                  <SelectItem key="DAY" value="DAY">
                    Day
                  </SelectItem>
                  <SelectItem key="good-till-date" value="good-till-date">
                    Good till date
                  </SelectItem>
                  <SelectItem key="good-till-canceled" value="good-till-canceled">
                    Good till canceled
                  </SelectItem>
                </Select>
              </div>
              <div className="flex items-center !mt-6">
                <Button
                  color="primary"
                  radius="full"
                  className="text-base px-4"
                  type="submit"
                  isLoading={isCreateOrderLoading}
                  isDisabled={!!errors.secId}
                >
                  Place Order
                </Button>
              </div>
              <StocksChart stock={s} />
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-10">
                  <Card className="card-shadow bg-default-100/50 px-10 py-8">
                    <p className="text-lg font-semibold mb-5 px-1">Offers</p>
                    <Table shadow="none" removeWrapper>
                      <TableHeader>
                        <TableColumn className="px-4 py-2 text-left text-md uppercase">Price</TableColumn>
                        <TableColumn className="px-4 py-2 text-left text-md uppercase">Quantity</TableColumn>
                        <TableColumn className="px-4 py-2 text-left text-md uppercase">Count</TableColumn>
                        <TableColumn className="px-4 py-2 text-left text-md uppercase">Actions</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <TableRow key={i}>
                            <TableCell className="px-4 py-2 text-left text-md">6.30</TableCell>
                            <TableCell className="px-4 py-2 text-left text-md">166</TableCell>
                            <TableCell className="px-4 py-2 text-left text-md">1</TableCell>
                            <TableCell className="px-4 py-2 text-left text-md">
                              <Button variant="bordered" size="sm" radius="full" className="text-base">
                                Buy
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
                <Card className="card-shadow bg-default-100/50 px-10 py-8">
                  <p className="text-lg font-semibold mb-5 px-1">Bids</p>
                  <Table shadow="none" removeWrapper>
                    <TableHeader>
                      <TableColumn className="px-4 py-2 text-left text-md uppercase">Price</TableColumn>
                      <TableColumn className="px-4 py-2 text-left text-md uppercase">Quantity</TableColumn>
                      <TableColumn className="px-4 py-2 text-left text-md uppercase">Count</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <TableRow key={i}>
                          <TableCell className="px-4 py-2 text-left text-md">6.30</TableCell>
                          <TableCell className="px-4 py-2 text-left text-md">166</TableCell>
                          <TableCell className="px-4 py-2 text-left text-md">1</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </div>
          </div>
        </form>
      </Drawer>
    </>
  );
};

NewTrade.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired,
};

export default NewTrade;
