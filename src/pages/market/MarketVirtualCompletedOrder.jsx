import { Card, CardBody, ScrollShadow } from '@heroui/react';
import React from 'react';
import PlaceOrder from './modals/PlaceOrder';
import { useGetCurrentPrice } from '@/store/bot';

const MarketVirtualCompletedOrder = ({ shouldStart, setWinning, data}) => {
  return (
    <div className="w-full mx-auto mt-5 pb-2">
      <ScrollShadow className="w-full h-[80vh] py-5" size={10}>
        <div className="space-y-4">
          {data.length === 0 ? (
            <div className="text-center text-gray-400 italic">No active orders to display.</div>
          ) : (
            data.map((order) => (
              <Card key={order._id} className="rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl  font-semibold text-gray-400">{order.stock.name}</h2>
                      <p className="text-sm text-gray-300 mt-1">
                        {order.stock.symbol} • {order.stock.exchange} • {order.stock.currency}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">
                        Quantity: <span className="font-semibold">{order.quantity}</span>
                      </p>
                      <p className="text-sm text-gray-300">
                        Total: <span className="font-bold text-blue-600">₦{order.amount.toFixed(2)}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                    <p>Bought at: ₦{order.initialPrice.toFixed(2)}</p>
                    <p>
                      {new Date(order.createdAt).toLocaleDateString('en-NG', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-yellow-700 text-white`}
                    >
                      {'Completed'}
                    </span>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </ScrollShadow>
    </div>
  )
}

export default MarketVirtualCompletedOrder