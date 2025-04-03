import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Form } from '@heroui/react';
import { useGetCurrentPrice } from '@/store/bot';
import { FaNairaSign } from 'react-icons/fa6';
import { usePlaceOrder, useSellOrder } from '@/api/ai-chat';

const PlaceOrder = ({ id, text, type, state }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { currentPrice } = useGetCurrentPrice();
  const { mutateAsync: placeOrder } = usePlaceOrder();
  const { mutateAsync: sellOrder } = useSellOrder();
  const [data, setData] = useState({
    quantity: 1,
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
      total: type === 'buy' ? data?.quantity * currentPrice?.price : data?.quantity * currentPrice?.price,
      orderPrice:
        type === 'buy'
          ? data?.quantity * currentPrice?.price - data?.charges
          : data?.quantity * currentPrice?.price - data?.charges,
    });
  }, [data?.quantity, currentPrice]);

  const onSubmit = async () => {
    console.log(data);
    console.log(currentPrice);

    try {
      if (type === 'buy') {
        const orderData = {
          stock: id,
          session: currentPrice?._id,
          initialPrice: data?.price,
          quantity: data?.quantity,
        };
        const res = await placeOrder(orderData);
        console.log(res?.data?.data);
      }else {
        const sellData = {
          orderId:"",
          price: currentPrice?.price
      };
      const res = await sellOrder(sellData);
      console.log(res?.data?.data);
      }
    } catch (error) {
      console.log("Something is wrong somewhere", error);
      
    }
  };

  return (
    <>
      <Button onPress={onOpen} color={type === 'buy' ? 'primary' : 'danger'} radius="full">
        {text}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{state?.symbol}</ModalHeader>
              <ModalBody>
                <Form className="w-full grid" onSubmit={onSubmit}>
                  <div className="grid relative grid-cols-3 my-auto">
                    <p className="text flex items-center">Quantity</p>
                    <Input
                      disabled={type === 'sell'}
                      className="col-span-2"
                      value={data.quantity}
                      min={1}
                      onChange={(e) => {
                        setData({ ...data, quantity: e.target.value });
                      }}
                      name="quantity"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
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
                      value={data.quantity < 1 ? 0 : String(data.price).slice(0, 8)}
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                  <div className="grid relative mt-5 grid-cols-3">
                    <p className="text flex items-center">Estimated total</p>
                    <Input
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            <FaNairaSign />
                          </span>
                        </div>
                      }
                      disabled
                      name="total"
                      value={data.quantity < 1 ? 0 : String(data.total).slice(0, 8)}
                      className="col-span-2"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                  <div className="grid relative mt-5 grid-cols-3 my-auto">
                    <p className="text flex items-center">Charges</p>
                    <Input
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            <FaNairaSign />
                          </span>
                        </div>
                      }
                      disabled
                      name="charges"
                      value={data.quantity < 1 ? 0 : String(data.charges).slice(0, 6)}
                      className="col-span-2"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                  <div className="grid relative my-5 grid-cols-3">
                    <p className="text flex items-center">Order price</p>
                    <Input
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            <FaNairaSign />
                          </span>
                        </div>
                      }
                      disabled
                      name="orderPrice"
                      value={data.quantity < 1 ? 0 : String(data.orderPrice).slice(0, 8)}
                      className="col-span-2"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                  {type === 'buy' ? (
                    <Button
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
