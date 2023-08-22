import Drawer from "@/components/global/Drawer.jsx";
import PropTypes from "prop-types";
import { createElement, useState } from "react";
import classNames from "classnames";
import {
  IconBell,
  IconCheck,
  IconHelpCircle,
  IconListDetails,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6
} from "@tabler/icons-react";
import Button from "@/components/global/Button.jsx";
import useCountdown from "@/hooks/use-countdown.js";
import Card from "@/components/global/Card.jsx";
import IconButton from "@/components/global/IconButton.jsx";
import { useAddLaunchSubscriber, useGetLaunchSubscriptions } from "@/api/misc.js";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast.jsx";
import Loader from "@/components/global/Loader.jsx";

const ProductSummary = ({ product, isOpen, onClose }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const timer = useCountdown('09/01/2023');
  const [isFetching, setIsFetching] = useState(false);
  const { mutateAsync: notify, isLoading: isNotifyLoading } = useAddLaunchSubscriber();
  const { data: { subscriptions = [] } = {}, isLoading: isSubscriptionsLoading } = useGetLaunchSubscriptions();

  const isSubscribed = subscriptions.some(s => s.product === product?.slug);

  const handleNotify = async () => {
    try {
      await notify({ product: product.slug })
      setIsFetching(true)
      await qc.invalidateQueries(['product', 'launch', 'subscriptions']);
      setIsFetching(false)
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Drawer isOpen={ isOpen } onClose={ onClose } padding={ false } fullscreen>
      {
        !!product && (
          <>
            <div className={ classNames('border-b px-8 md:px-12 pt-12 pb-24 text-white', product.backgroundColor) }>
              <div className="flex items-center">
                <div className="text-[1.05rem] font-semibold flex items-center">
                  <div
                    className={ classNames("w-10 h-10 rounded-full mr-3 flex items-center justify-center bg-white", product.textColor) }
                  >
                    { createElement(product.icon, { size: 22 }) }
                  </div>
                  { product.name }
                </div>
              </div>
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid atque culpa cum deleniti.
              </p>
            </div>
            <div className="px-8 md:px-12">
              <Card className="px-6 md:px-8 py-6 -mt-16 flex items-center justify-between">
                <div>
                  <h6 className="font-medium opacity-50">Going live in</h6>
                  <div className="text-[1.05rem] mt-[1px]">
                    1st Sept 2023
                  </div>
                </div>
                <div className="text-end">
                  <div className="opacity-80 pe-1">
                    {
                      !timer.expired ? (
                        <>
                          { timer.days }d:{ timer.hours }h:{ timer.minutes }m:{ timer.seconds }s
                        </>
                      ) : '0:0:0:0'
                    }
                  </div>
                  {
                    (isFetching || isNotifyLoading || isSubscriptionsLoading) ? (
                      <Loader size="sm"/>
                    ) : (
                      <>
                        {
                          isSubscribed ? (
                            <div className="text-teal-600 flex items-center space-x-1 mt-0.5">
                              <IconCheck size="20"/> <p>Subscribed</p>
                            </div>
                          ) : (
                            <>
                              <Button
                                onClick={ handleNotify } size="sm"
                                variant="subtle" leftIcon={ <IconBell size="20"/> } className="mt-2 hidden sm:flex"
                              >
                                Notify me
                              </Button>
                              <IconButton
                                variant="subtle" icon={ <IconBell size="20"/> } className="mt-2 sm:hidden" size="sm"
                              />
                            </>
                          )
                        }
                      </>
                    )
                  }
                </div>
              </Card>
            </div>
            <div className="px-8 md:px-12 py-10 space-y-10">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <IconListDetails size="20"/>
                  <h2 className="font-medium">Features</h2>
                </div>
                <div className="border p-6 rounded-3xl grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center py-4">
                    <div className="w-7 h-7 rounded-full bg-red-100 text-red-800 grid place-items-center">
                      <IconNumber1 size="16"/>
                    </div>
                    <p className="mt-3 leading-tight">
                      Lorem ipsum dolor sit opew efowe.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center py-4">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 grid place-items-center">
                      <IconNumber2 size="16"/>
                    </div>
                    <p className="mt-3 leading-tight">
                      Lorem ipsum dolor sit opew efowe.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center py-4">
                    <div className="w-7 h-7 rounded-full bg-green-100 text-green-800 grid place-items-center">
                      <IconNumber3 size="16"/>
                    </div>
                    <p className="mt-3 leading-tight">
                      Lorem ipsum dolor sit opew efowe.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center py-4">
                    <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-800 grid place-items-center">
                      <IconNumber4 size="16"/>
                    </div>
                    <p className="mt-3 leading-tight">
                      Lorem ipsum dolor sit opew efowe.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center py-4">
                    <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 grid place-items-center">
                      <IconNumber5 size="16"/>
                    </div>
                    <p className="mt-3 leading-tight">
                      Lorem ipsum dolor sit opew efowe.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center py-4">
                    <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-800 grid place-items-center">
                      <IconNumber6 size="16"/>
                    </div>
                    <p className="mt-3 leading-tight">
                      Lorem ipsum dolor sit opew efowe.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <IconHelpCircle size="20"/>
                  <h2 className="font-medium">How it works</h2>
                </div>
                <div className="border rounded-3xl divide-y py-1">
                  <div className="px-6 py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, laborum?
                  </div>
                  <div className="px-6 py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, laborum?
                  </div>
                  <div className="px-6 py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, laborum?
                  </div>
                </div>
              </div>
              <Button onClick={ onClose } variant="outlined" color="red" className="mt-10">
                Close
              </Button>
            </div>
          </>
        )
      }
    </Drawer>
  );
};

ProductSummary.propTypes = {
  product: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ProductSummary;
