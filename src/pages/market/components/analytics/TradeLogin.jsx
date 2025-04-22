import Drawer from '@/components/ui/Drawer.jsx';
import { Link } from 'react-router-dom';
import Logo from '@/pages/market/components/analytics/Logo.jsx';
import { Button, Card, Input, Select, SelectItem } from '@heroui/react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useTradeLogin } from '@/api/trade.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useTradeStore } from '@/store/trade.js';
import Title from '@/components/core/shared/Title';
import { cn } from '@/lib/utils';

const tradingPlatforms = [
  {
    name: 'Meritrade',
    website: 'https://www.meritrade.com',
    img: '/images/tradingPlatforms/meritrade-logo.png',
  },
  {
    name: 'Cardinal Stone',
    website: 'https://www.cardinalstone.com',
    img: '/images/tradingPlatforms/cardinalstone-logo.png',
  },
  {
    name: 'Chapel Hill Denham',
    website: 'https://www.chapelhilldenham.com',
    img: '/images/tradingPlatforms/chapel-hill-denham-logo.png',
  },
  {
    name: 'ARM Securities',
    website: 'https://www.armsecurities.com.ng',
    img: '/images/tradingPlatforms/arm-logo-resize.webp',
  },
  {
    name: 'Stanbic IBTC Stockbrokers',
    website: 'https://www.stanbicibtcstockbrokers.com',
    img: '/images/tradingPlatforms/stanbic.jpeg',
  },
  {
    name: 'Afrinvest',
    website: 'https://www.afrinvest.com',
    img: '/images/tradingPlatforms/afrinvest.svg',
  },
  {
    name: 'FBNQuest Securities',
    website: 'https://www.fbnquest.com/securities',
    img: '/images/tradingPlatforms/FBN-Quest-Securities.svg',
  },
  {
    name: 'United Capital Securities',
    website: 'https://www.unitedcapitalplcgroup.com/securities',
    img: '/images/tradingPlatforms/United-Capital.webp',
  },
  {
    name: 'CSL Stockbrokers',
    website: 'https://www.cslstockbrokers.com',
    img: '/images/tradingPlatforms/csl.svg',
  },
  {
    name: 'GTI Securities',
    website: 'https://www.gti.com.ng',
    img: '/images/tradingPlatforms/gti.png',
  },
  {
    name: 'Greenwich Securities',
    website: 'https://www.gtlgroup.com.ng',
    img: '/images/tradingPlatforms/GMB.png',
  },
  {
    name: 'Anchoria Investment & Securities',
    website: 'https://www.anchoriaonline.com',
    img: '/images/tradingPlatforms/AISL-Logos.png',
  },
];

const TradeLogin = ({ isOpen, onClose }) => {
  const toast = useToast();
  const { setUser } = useTradeStore();
  const { mutateAsync: login, isPending: isLoginLoading } = useTradeLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const submit = async (data) => {
    try {
      const res = await login(data);
      if (res.status === 200) {
        setUser(res.data.data.user, res.data.data.token, data.platform);
        // toast.success('Login successful');
        onClose();
      } else {
        // toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
        <div className="flex w-full flex-col md:grid md:grid-cols-12 md:overflow-hidden">
          <div className="md:col-span-3">
            <div className="pattern-1 flex h-full flex-col overflow-hidden rounded-r-md bg-[#11161b] px-8 py-12 text-white md:px-16 md:py-20">
              <Link to="/" className="mb-10 flex items-center text-[1.6rem] md:mb-16">
                <Logo light />
              </Link>
              <p className="max-w-[240px] text-xl !leading-snug text-slate-300 md:text-[1.4rem]">
                Get insights to make better business decisions
              </p>
            </div>
          </div>
          <div className="px-12 py-10 md:col-span-9">
            <div className="flex-1 overflow-y-auto">
              <Title title="Connect your data" sub="Choose a data source below to continue" className="mb-10" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {tradingPlatforms.map((source) => (
                <Card
                  key={source.key}
                  isPressable
                  // onPress={() => handleClick(source)}
                  radius="lg"
                  className={cn(
                    'shadow-none border-2 border-default-200 dark:border-default-200/70 hover:bg-default-100 px-10 py-6 flex items-center justify-center',
                    { disabled: source.disabled }
                  )}
                >
                  <img src={source.img} alt={source.name} />
                  <div className="text-md font-medium mt-3 leading-tight">{source.name}</div>
                </Card>
              ))}
            </div>
            {/* <div className="container my-auto">
              <div className="container py-20">
                <div className="mx-auto w-full max-w-md rounded-xl">
                  <div className="mb-10">
                    <h1 className="text-3xl font-semibold">Login</h1>
                    <p className="mt-3">Enter your credentials below to sign in to your account</p>
                  </div>
                  <form onSubmit={handleSubmit(submit)}>
                    <div className="space-y-4">
                      <Input
                        label="Username or email address"
                        variant="bordered"
                        autoComplete="true"
                        {...register('username', {
                          required: 'Username or email address is required',
                          pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$|^[a-zA-Z0-9_]+$/,
                            message: 'Username or email address is invalid',
                          },
                        })}
                        errorMessage={errors?.username?.message}
                        classNames={{
                          inputWrapper: 'px-4',
                        }}
                        isDisabled={isLoginLoading}
                      />
                      <Input
                        label="Password"
                        variant="bordered"
                        type="password"
                        autoComplete="true"
                        {...register('password', { required: 'Password is required' })}
                        errorMessage={errors?.password?.message}
                        classNames={{
                          inputWrapper: 'px-4',
                        }}
                        isDisabled={isLoginLoading}
                      />
                      <Select
                        label="Select Platform"
                        variant="bordered"
                        classNames={{
                          label: 'text-sm',
                          inputWrapper: 'px-4',
                        }}
                        isDisabled={isLoginLoading}
                        {...register('platform', { required: 'Platform is required' })}
                      >
                        <SelectItem key="meritrade" value="meritrade">
                          Meritrade
                        </SelectItem>
                        <SelectItem key="cardinal" value="cardinal">
                          Cardinal Stone
                        </SelectItem>
                      </Select>
                    </div>
                    <Button
                      variant="solid"
                      color="primary"
                      type="submit"
                      className="mt-10 text-base"
                      isLoading={isLoginLoading}
                    >
                      Login
                    </Button>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Drawer>
    </div>
  );
};
TradeLogin.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TradeLogin;

