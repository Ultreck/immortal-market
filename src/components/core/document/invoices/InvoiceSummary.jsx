import { useState } from 'react';
import { IconPencil } from "@tabler/icons-react";
import { format } from "date-fns";
import Button from "@/components/global/Button.jsx";
import { formatCurrency } from "@/lib/utils.js";
import Card from "@/components/global/Card.jsx";
import EditInvoice from "@/components/core/document/invoices/EditInvoice.jsx";
import PropTypes from "prop-types";

const InvoiceSummary = ({ invoice }) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Card className="p-10">
        {
          !edit ? (
            <>
              <div className="flex mb-10 items-center justify-between">
                <h3 className="font-medium">Invoice details</h3>
                <Button
                  onClick={ () => setEdit(true) }
                  leftIcon={ <IconPencil size="20"/> } size="sm" variant="outlined"
                >
                  Edit
                </Button>
              </div>
              <div className="mt-8 divide-y">
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Invoice number</div>
                  <div className="text-end">#{ invoice.number || 'N/A' }</div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">P.O number</div>
                  <div className="text-end">{ invoice.poNumber || 'N/A' }</div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Vendor name</div>
                  <div className="text-end">{ invoice.vendorName || 'N/A' }</div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Vendor address</div>
                  <div className="text-end">{ invoice.vendorAddress || 'N/A' }</div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Receiver name</div>
                  <div className="text-end">{ invoice.receiverName || 'N/A' }</div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Receiver address</div>
                  <div className="text-end">{ invoice.receiverAddress || 'N/A' }</div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Invoice date</div>
                  <div className="text-end">
                    { invoice.date ? format(new Date(invoice.date), 'do MMM, yyyy') : 'N/A' }
                  </div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Due date</div>
                  <div className="text-end">
                    { invoice.dueDate ? format(new Date(invoice.dueDate), 'do MMM, yyyy') : 'N/A' }
                  </div>
                </div>
                <div className="py-2">
                  <div className="opacity-70 whitespace-nowrap">Items</div>
                  <div className="divide-y mt-2">
                    {
                      invoice.items.map(item => (
                        <div key={ item.description } className="py-2">
                          <div className="flex justify-between items-center space-x-6">
                            <p className="leading-tight">
                              { item.quantity }&nbsp;&nbsp;{ item.description }
                            </p>
                            <p>
                              { formatCurrency(item.total, invoice.currency) }
                            </p>
                          </div>
                          <p className="flex-1 text-[.95rem] opacity-80 mt-1">
                            { formatCurrency(item.price, invoice.currency) } per unit
                          </p>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Subtotal</div>
                  <div className="text-end">
                    { formatCurrency(invoice.subtotal, invoice.currency) }
                  </div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Tax</div>
                  <div className="text-end">
                    { formatCurrency(invoice.tax, invoice.currency) }
                  </div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Discount</div>
                  <div className="text-end">
                    { formatCurrency(invoice.discount, invoice.currency) }
                  </div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Shipping</div>
                  <div className="text-end">
                    { formatCurrency(invoice.shipping, invoice.currency) }
                  </div>
                </div>
                <div className="flex items-start justify-between space-x-4 py-2">
                  <div className="opacity-70 whitespace-nowrap">Total</div>
                  <div className="text-end">
                    { formatCurrency(invoice.total, invoice.currency) }
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EditInvoice
              invoice={ invoice }
              onBack={ () => setEdit(false) }
            />
          )
        }
      </Card>
    </>
  );
};

InvoiceSummary.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default InvoiceSummary;
