import Card from "@/components/global/Card.jsx";
import Button from "@/components/global/Button.jsx";
import { IconLayoutList, IconPlus } from "@tabler/icons-react";
import { formatCurrency } from "@/lib/utils.js";

const Wallet = () => {
  return (
    <>
      <div className="bg-[#11161b] text-white pt-12 md:pt-16 pb-10 md:pb-12 relative">
        <div className="absolute inset-0 bg-cover bg-grid opacity-30"/>
        <div className="container !max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-semibold max-w-lg flex items-center">
            Wallet account
          </h1>
          <p className="mt-2 md:mt-3 opacity-75">
            View your wallet balance and transactions
          </p>
        </div>
      </div>
      <div className="container py-10 !max-w-5xl min-h-screen flex flex-col">
        <div className="grid md:grid-cols-11 gap-6">
          <div className="md:col-span-4">
            <Card className="p-8">
              <div className="text-4xl font-medium">
                { formatCurrency(0) }
              </div>
              <p className="opacity-75">Available balance</p>
              <div className="mt-10 space-y-3">
                <Button
                  variant="outlined" block className="text-left" leftIcon={ <IconPlus size="20"/> }
                >
                  Fund wallet
                </Button>
                <Button
                  variant="outlined" block className="text-left" leftIcon={ <IconLayoutList size="20"/> }
                >
                  Manage subscriptions
                </Button>
              </div>
            </Card>
          </div>
          <div className="md:col-span-7">
            <Card className="p-8">
              No transactions yet
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
