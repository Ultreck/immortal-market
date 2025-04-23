import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Form, Drawer, DrawerContent, DrawerHeader, DrawerBody } from '@heroui/react';
import { useGetCurrentPrice } from '@/store/bot';
import { FaNairaSign } from 'react-icons/fa6';
import { usePlaceOrder, useSellOrder, useGetWalletBalance, useGetAllOrders } from '@/api/ai-chat';
import { formatCurrency } from '@/lib/utils';

const VirtualPlaceOrderWalletModal = ({ id, text, type, state, setWinning, shouldStart = false  }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [tab, seTtab] = useState('current-orders');

  const { currentPrice } = useGetCurrentPrice();
  const { mutateAsync: placeOrder } = usePlaceOrder();
  const { mutateAsync: sellOrder } = useSellOrder();
  const { mutateAsync: MyOrder } = useGetAllOrders();
  const { data: walletBalance } = useGetWalletBalance();
  const [Order, setOrders] = useState([]);
  const [totalOrder, settotalOrders] = useState(0);
  const [max, setMax] = useState(false);

  const [data, setData] = useState({
    quantity: 0,
    amount: 0,
    price: shouldStart? currentPrice?.close : currentPrice?.price,
    orderPrice: 0,
    total: 0,
  });

  useEffect(() => {
    setData({
      ...data,
      price: shouldStart? currentPrice?.close : currentPrice?.price,
      quantity: (currentPrice?.price / data?.amount).toFixed(2),
      amount: max ? totalOrder : data.amount,
    });
    // console.log(data);
    
    const total = Order.reduce((sum, item) => {
      return sum + (item?.quantity - item?.quantitySold) * currentPrice?.price;
    }, 0);
    settotalOrders(total);

    const boughtOrderPrice = Order.reduce((sum, item) => {
      return sum + (item?.quantity - item?.quantitySold) * item.initialPrice;
    }, 0);
    const currentOrderPrice = Order.reduce((sum, item) => {
      return sum + (item?.quantity - item?.quantitySold) * currentPrice?.price;
    }, 0);
    const change = ((currentOrderPrice - boughtOrderPrice) / boughtOrderPrice) * 100;
    setWinning(change ? change.toFixed(2) : 0);

    if (shouldStart) {
      setWinning(0);
      settotalOrders(0);
      setOrders([]);
    }
  }, [data?.quantity, currentPrice, shouldStart]);

  useEffect(() => {
    myOrder();
  }, [isOpen]);

  useEffect(() => {
    if (shouldStart) {
      onClose();
    }
  }, [shouldStart]);

  const myOrder = async () => {
    const res = await MyOrder({
      page: 1,
      status: [false],
      sessionId: currentPrice?._id,
    });
    if (res) {
      setOrders(res.data.order);
      const total = res.data.order.reduce((sum, item) => {
        return sum + (item.quantity - item.quantitySold) * currentPrice?.price;
      }, 0);
      settotalOrders(total);
    }
  };
  const onSubmit = async () => {
    try {
      if (type === 'buy') {
        const orderData = {
          stock: id,
          session: currentPrice?._id,
          amount: data.amount,
          initialPrice: data?.price,
          quantity: data?.quantity,
        };
        const res = await placeOrder(orderData);
        // console.log(res);
      } else {
        const sellData = {
          sessionId: currentPrice?._id,
          stockId: id,
          amount: data.amount,
          price: data.price,
          quantity: data.quantity,
        };
        const res = await sellOrder(sellData);
        // console.log(res);
      }
      myOrder();
    } catch (error) {
      console.log('Something is wrong somewhere', error);
    }
  };
  
  return (
    <>
      <Button onPress={onOpen} color="primary" radius="full" className="w-32">
        Place order
      </Button>
      <Drawer
        isOpen={isOpen}
        size={'lg'}
        backdrop={'opaque'}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              duration: 0.3,
            },
            exit: {
              x: 100,
              opacity: 0,
              duration: 0.3,
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <DrawerContent className='pt-10'>
          <>
            <DrawerHeader className="flex flex-col gap-1">
            <span>{state}</span>
                <div className='flex justify-between pr-5'>
                  {type === 'buy' ? (
                    <>
                      Balance <strong>{formatCurrency(walletBalance?.balance || 0)}</strong>
                    </>
                  ) : (
                    <>
                      Total order <strong>₦{totalOrder?.toFixed(2)}</strong>
                    </>
                  )}
                </div>
            </DrawerHeader>
            <DrawerBody>
              <div className="flex w-full flex-col">
                <Form className="w-full grid" onSubmit={onSubmit}>
                  <div className="grid relative grid-cols-3 my-auto">
                    <p className="text flex items-center">How much</p>
                    <Input
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            <FaNairaSign />
                          </span>
                        </div>
                      }
                      className="col-span-2"
                      value={data.amount}
                      min={1}
                      onChange={(e) => {
                        setData({ ...data, amount: e.target.value });
                      }}
                      name="amount"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                  <button className="col-12" onClick={() => setMax(!max)} hidden={type === 'buy'}>
                    <p className="text-right">max</p>
                  </button>
                  <div className="grid relative mt-5 grid-cols-3 my-auto">
                    <p className="text flex items-center">Market price</p>
                    <Input
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            <FaNairaSign />
                          </span>
                        </div>
                      }
                      disabled
                      name="price"
                      className="col-span-2"
                      value={(data.price)}
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                  <div className="grid relative mt-5 grid-cols-3 my-auto" hidden={type == 'sell'}>
                    <p className="text flex items-center">Quantity</p>
                    <Input
                      disabled
                      name="quantity"
                      className="col-span-2"
                      value={(data?.amount / data?.price).toFixed(2)}
                      placeholder="0"
                      type="number"
                    />
                  </div>
                  {type === 'buy' ? (
                    <Button
                      className="w-full mt-5 font-semibold mb-5"
                      color="primary"
                      onPress={() => {
                        onClose();
                        onSubmit();
                      }}
                    >
                      Place order
                    </Button>
                  ) : (
                    <Button
                      isDisabled={shouldStart}
                      className="w-full font-semibold mb-5"
                      color="danger"
                      onPress={() => {
                        onClose();
                        onSubmit();
                      }}
                    >
                      Sell order
                    </Button>
                  )}
                </Form>
              </div>
            </DrawerBody>
          </>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default VirtualPlaceOrderWalletModal;
