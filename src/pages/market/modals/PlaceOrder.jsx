import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Form } from '@heroui/react';
import { useGetCurrentPrice } from '@/store/bot';
import { FaNairaSign } from 'react-icons/fa6';
import { usePlaceOrder, useSellOrder, useGetWalletBalance, useGetAllOrders } from '@/api/ai-chat';

const PlaceOrder = ({ id, text, type, state, setWinning, shouldStart = false }) => {
  // const [balance, setBalance] = useState(0)
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { currentPrice } = useGetCurrentPrice();
  const { mutateAsync: placeOrder } = usePlaceOrder();
  const { mutateAsync: sellOrder } = useSellOrder();
  const { mutateAsync: MyOrder } = useGetAllOrders();
  const { data: walletBalance } = useGetWalletBalance();
  const [Order, setOrders] = useState([]);
  const [totalOrder, settotalOrders] = useState(0);
  const [max, setMax] = useState(false);

  const [data, setData] = useState({
    quantity: 1,
    amount: 0,
    price: currentPrice?.price,
    charges: currentPrice?.price * (type === 'buy' ? 0.01 : 0.05),
    orderPrice: 0,
    total: 0,
  });

  useEffect(() => {
    setData({
      ...data,
      price: currentPrice?.price,
      charges: currentPrice?.price * (type === 'buy' ? 0.01 : 0.05),
      quantity: String(data.amount / currentPrice?.price).slice(0, 1),
      amount: max ? totalOrder : data.amount,
    });
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
    // console.log(totalOrder);
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
      console.log("total:: ", total);
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
        if(orderData.quantity >0){
          const res = await placeOrder(orderData);
        }
      } else {
        const sellData = {
          sessionId: currentPrice?._id,
          stockId: id,
          amount: data.amount,
          price: data.price,
          quantity: data.quantity,
        };
        const res = await sellOrder(sellData);
      }
      myOrder();
    } catch (error) {
      console.log('Something is wrong somewhere', error);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        isDisabled={(type === 'buy' && shouldStart) || (type === 'sell' && (totalOrder <= 0 || shouldStart))}
        color={type === 'buy' ? 'primary' : 'danger'}
        radius="full"
        className="w-32"
      >
        {/* {totalOrder} */}
        {text}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-1 justify-around mr-6">
                <span>{state?.symbol}</span>
                <div>
                  {type === 'buy' ? (
                    <>
                      Balance <strong>₦{walletBalance?.balance || 0}</strong>
                    </>
                  ) : (
                    <>
                      Total order <strong>₦{totalOrder?.toFixed(2)}</strong>
                    </>
                  )}
                </div>
              </ModalHeader>
              <ModalBody>
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
                      value={String(data.price).slice(0, 8)}
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                  <div className="grid relative mt-5 grid-cols-3 my-auto" hidden={type == 'sell'}>
                    <p className="text flex items-center">Quantity</p>
                    <Input
                      disabled
                      name="price"
                      className="col-span-2"
                      value={String(data?.amount / data?.price).slice(0, 1)}
                      placeholder="0"
                      type="number"
                    />
                  </div>
                  {type === 'buy' ? (
                    <Button
                      isDisabled={shouldStart}
                      className="w-full font-semibold mb-5"
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlaceOrder;
