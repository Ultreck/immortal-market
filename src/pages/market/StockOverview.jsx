import { Card } from '@nextui-org/react';
import { currencyToSymbol, formatCurrency } from '@/lib/utils';
import CountryFlag from '@/components/ui/CountryFlag';
import countries from '@/lib/countries';
import numeral from 'numeral';
import StocksChart from '@/pages/market/StocksChart.jsx';
import PropTypes from 'prop-types';

const StockOverview = ({ stock }) => {
  const country = [...countries.africa, ...countries.global].find((c) => c.slug === stock?.country);

  return (
    <div className="space-y-4">
      <Card className="bg-default-100 px-8 py-6 shadow-none">
        <div className="grid grid-cols-4">
          <div>
            <p>{formatCurrency(stock.price.close, stock.currency)}</p>
            <div className="mt-0.5 text-md opacity-80">Prev. Close</div>
          </div>
          <div>
            <p>{formatCurrency(stock.price.open, stock.currency)}</p>
            <div className="mt-0.5 text-md opacity-80">Prev. Open</div>
          </div>
          <div>
            <p className="uppercase">
              {currencyToSymbol(stock.currency)}
              {numeral(stock.marketCap).format('0.00a')}
            </p>
            <div className="mt-0.5 text-md opacity-80">Market cap</div>
          </div>
          <div>
            <div className="flex w-min items-center space-x-2">
              <CountryFlag code={country.code} rounded className="h-4 w-4" />
              <span>{stock.exchange}</span>
            </div>
            <div className="mt-0.5 text-md opacity-80">Exchange</div>
          </div>
        </div>
      </Card>
      <Card className="bg-default-100 px-8 py-8 shadow-none">
        <StocksChart stock={stock} />
      </Card>
    </div>
  );
};

StockOverview.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default StockOverview;
