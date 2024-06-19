import { createElement } from 'react';
import classNames from 'classnames';
import Button from '@/components/ui/Button.jsx';
import Card from '@/components/ui/Card.jsx';
import PropTypes from 'prop-types';
import { IconArrowRight } from '@tabler/icons-react';

const ProductOnboarding = ({ product, onStart, isLoading }) => {
  return (
    <div className="bg-slate-50">
      <div
        className={classNames(
          'fixed z-[1] bottom-0 w-2/4 md:w-1/4 h-full rounded-tr-[300px] opacity-5',
          product.colors.bg
        )}
      />
      <div className="container !max-w-6xl relative z-[2]">
        <div className="md:h-screen grid md:grid-cols-12 gap-12 md:gap-16 items-center py-12">
          <Card className="md:col-span-7 overflow-hidden">
            <img src={`/images/${product.slug}.png`} alt={product.name} />
          </Card>
          <div className="md:col-span-5">
            <div className="flex items-center">
              <div
                className={classNames(
                  'w-10 h-10 rounded-3xl flex items-center justify-center text-white',
                  product.colors.bg
                )}
              >
                {createElement(product.icon, { size: 24 })}
              </div>
              <div className="ml-4 flex items-center">
                <p className="font-semibold text-lg">{product.name}</p>
                {product.status === 'pending' && (
                  <div className="px-2 py-0.5 rounded-full text-xs bg-gray-500 text-white w-max ml-3">Coming soon</div>
                )}
              </div>
            </div>
            <p className="mt-6 max-w-lg text-[1.04rem]">{product.summary}</p>
            {!!onStart && product.status === 'active' && (
              <Button onClick={onStart} className="mt-8" loading={isLoading} rightIcon={<IconArrowRight size="20" />}>
                Start
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductOnboarding.propTypes = {
  product: PropTypes.object,
  onStart: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ProductOnboarding;
