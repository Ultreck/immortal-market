import { useState } from 'react';
import { IconPencil } from '@tabler/icons-react';
import { format } from 'date-fns';
import Button from '@/components/ui/Button.jsx';
import { formatCurrency } from '@/lib/utils.js';
import Card from '@/components/ui/Card.jsx';
import EditReceipt from '@/components/core/document/receipts/EditReceipt.jsx';
import PropTypes from 'prop-types';

const ReceiptSummary = ({ receipt }) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Card className="p-10">
        {!edit ? (
          <>
            <div className="flex mb-10 items-center justify-between">
              <h3 className="font-medium">Receipt details</h3>
              <Button onPress={() => setEdit(true)} leftIcon={<IconPencil size="20" />} size="sm" variant="outlined">
                Edit
              </Button>
            </div>
            <div className="mt-8 divide-y">
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Receipt number</div>
                <div className="text-end">#{receipt.number || 'N/A'}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">P.O number</div>
                <div className="text-end">{receipt.poNumber || 'N/A'}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Vendor name</div>
                <div className="text-end">{receipt.vendorName || 'N/A'}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Vendor address</div>
                <div className="text-end">{receipt.vendorAddress || 'N/A'}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Receiver name</div>
                <div className="text-end">{receipt.receiverName || 'N/A'}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Receiver address</div>
                <div className="text-end">{receipt.receiverAddress || 'N/A'}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Receipt date</div>
                <div className="text-end">{receipt.date ? format(new Date(receipt.date), 'do MMM, yyyy') : 'N/A'}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Due date</div>
                <div className="text-end">
                  {receipt.dueDate ? format(new Date(receipt.dueDate), 'do MMM, yyyy') : 'N/A'}
                </div>
              </div>
              <div className="py-2">
                <div className="opacity-70 whitespace-nowrap">Items</div>
                <div className="divide-y mt-2">
                  {receipt.items.map((item) => (
                    <div key={item.description} className="py-2">
                      <div className="flex justify-between items-center space-x-6">
                        <p className="leading-tight">
                          {item.quantity}&nbsp;&nbsp;{item.description}
                        </p>
                        <p>{formatCurrency(item.total, receipt.currency)}</p>
                      </div>
                      <p className="flex-1 text-[.95rem] opacity-80 mt-1">
                        {formatCurrency(item.price, receipt.currency)} per unit
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Subtotal</div>
                <div className="text-end">{formatCurrency(receipt.subtotal, receipt.currency)}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Tax</div>
                <div className="text-end">{formatCurrency(receipt.tax, receipt.currency)}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Discount</div>
                <div className="text-end">{formatCurrency(receipt.discount, receipt.currency)}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Shipping</div>
                <div className="text-end">{formatCurrency(receipt.shipping, receipt.currency)}</div>
              </div>
              <div className="flex items-start justify-between space-x-4 py-2">
                <div className="opacity-70 whitespace-nowrap">Total</div>
                <div className="text-end">{formatCurrency(receipt.total, receipt.currency)}</div>
              </div>
            </div>
          </>
        ) : (
          <EditReceipt receipt={receipt} onBack={() => setEdit(false)} />
        )}
      </Card>
    </>
  );
};

ReceiptSummary.propTypes = {
  receipt: PropTypes.object.isRequired,
};

export default ReceiptSummary;
