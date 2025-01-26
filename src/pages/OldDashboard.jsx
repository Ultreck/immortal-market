import products, { categories } from '@/lib/products.js';
import { createElement, useState } from 'react';
import classNames from 'classnames';
import Card from '@/components/ui/Card.jsx';
import PropTypes from 'prop-types';
import ProductSummary from '@/components/core/ProductSummary.jsx';
import Button from '@/components/ui/Button.jsx';
import HelpTrainModel from '@/components/core/HelpTrainModel.jsx';
import Hover from '@/components/ui/Hover.jsx';
import { IconArrowRight, IconRobot } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const OldDashboard = () => {
  const [selected, setSelected] = useState(null);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isTrainOpen, setIsTrainOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelected(product);
    setIsSummaryOpen(true);
  };

  const handleTrainClick = (product) => {
    setSelected(product);
    setIsTrainOpen(true);
  };

  return (
    <>
      <div className="container py-8 md:py-10 !max-w-5xl min-h-screen flex flex-col space-y-10">
        {categories
          .filter((c) => c.id !== 'featured')
          .map((c, i) => {
            const items = products.filter((p) => p.categories.includes(c.id));

            return (
              <div key={c.id}>
                <div className="flex items-center justify-between mb-8 px-1 border-b pb-6">
                  <h3 className="text-xl font-medium">{c.name}</h3>
                  {c.status === 'active' && !!c.path && (
                    <Link to={c.path}>
                      <Button variant="outlined" color="black" rightIcon={<IconArrowRight size="16" />}>
                        View dashboard
                      </Button>
                    </Link>
                  )}
                </div>
                {items.length === 2 && (
                  <TwoCols items={items} onClick={handleProductClick} onTrain={handleTrainClick} />
                )}
                {items.length === 3 && i % 2 !== 0 && (
                  <ThreeCols items={items} onClick={handleProductClick} onTrain={handleTrainClick} />
                )}
                {items.length === 3 && i % 2 === 0 && (
                  <ThreeCols2 items={items} onClick={handleProductClick} onTrain={handleTrainClick} />
                )}
                {items.length === 4 && i % 2 !== 0 && (
                  <FourCols items={items} onClick={handleProductClick} onTrain={handleTrainClick} />
                )}
                {items.length === 4 && i % 2 === 0 && (
                  <FourCols2 items={items} onClick={handleProductClick} onTrain={handleTrainClick} />
                )}
                {items.length === 5 && (
                  <FiveCols items={items} onClick={handleProductClick} onTrain={handleTrainClick} />
                )}
                {![2, 3, 4, 5].includes(items.length) && (
                  <div className={classNames('grid md:grid-cols-3 gap-4 md:gap-6')}>
                    {items.map((product) => (
                      <ProductCard
                        key={product.name}
                        product={product}
                        onClick={handleProductClick}
                        onTrain={handleTrainClick}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <ProductSummary product={selected} isOpen={isSummaryOpen} onClose={() => setIsSummaryOpen(false)} />
      <HelpTrainModel isOpen={isTrainOpen} onClose={() => setIsTrainOpen(false)} category={selected?.slug} />
    </>
  );
};

export default OldDashboard;

const defaultPropTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onTrain: PropTypes.func,
};

const TwoCols = ({ items = [], onClick, onTrain }) => {
  return (
    <div className={classNames('grid md:grid-cols-2 gap-4 md:gap-6')}>
      {items.map((product) => (
        <ProductCard product={product} key={product.name} onClick={onClick} onTrain={onTrain} style="wide" />
      ))}
    </div>
  );
};

TwoCols.propTypes = defaultPropTypes;

const ThreeCols = ({ items = [], onClick, onTrain }) => {
  return (
    <div className={classNames('grid md:grid-cols-3 gap-4 md:gap-6')}>
      {items.map((product) => (
        <ProductCard product={product} key={product.name} onClick={onClick} onTrain={onTrain} style="tall" />
      ))}
    </div>
  );
};

ThreeCols.propTypes = defaultPropTypes;

const ThreeCols2 = ({ items = [], onClick, onTrain }) => {
  const left = items[0];
  const right = [items[1], items[2]];

  return (
    <div className="grid md:grid-cols-11 gap-4 md:gap-6">
      <div className="md:col-span-5">
        <FeaturedProductCard product={left} key={left.name} onClick={onClick} onTrain={onTrain} style="wide" />
      </div>
      <div className="md:col-span-6 grid md:grid-cols-1 gap-4 md:gap-6">
        {right.map((product) => (
          <div key={product.name}>
            <ProductCard product={product} onClick={onClick} onTrain={onTrain} />
          </div>
        ))}
      </div>
    </div>
  );
};

ThreeCols2.propTypes = defaultPropTypes;

const FourCols = ({ items = [], onClick, onTrain }) => {
  const highlighted = items[0];
  const top = [items[1], items[2]];
  const bottom = items[3];

  return (
    <div className="grid md:grid-cols-11 gap-4 md:gap-6">
      <div className="md:col-span-6 grid md:grid-cols-2 gap-4 md:gap-6">
        {top.slice(0, 2).map((product) => (
          <ProductCard key={product.name} product={product} onClick={onClick} onTrain={onTrain} />
        ))}
        {!!bottom && (
          <ProductCard
            className="md:col-span-2"
            product={bottom}
            key={bottom.name}
            onClick={onClick}
            onTrain={onTrain}
          />
        )}
      </div>
      <FeaturedProductCard
        className="md:col-span-5"
        product={highlighted}
        key={highlighted.name}
        onClick={onClick}
        onTrain={onTrain}
        style="wide"
      />
    </div>
  );
};

FourCols.propTypes = defaultPropTypes;

const FourCols2 = ({ items = [], onClick, onTrain }) => {
  const highlighted = items[0];
  const top = [items[1], items[2]];
  const bottom = items[3];

  return (
    <div className="grid md:grid-cols-11 gap-4 md:gap-6">
      <div className="md:col-span-5">
        <FeaturedProductCard
          product={highlighted}
          key={highlighted.name}
          onClick={onClick}
          onTrain={onTrain}
          style="wide"
        />
      </div>
      <div className="md:col-span-6 grid md:grid-cols-2 gap-4 md:gap-6">
        {top.slice(0, 2).map((product) => (
          <ProductCard key={product.name} product={product} onClick={onClick} onTrain={onTrain} />
        ))}
        {!!bottom && (
          <ProductCard
            className="md:col-span-2"
            product={bottom}
            key={bottom.name}
            onClick={onClick}
            onTrain={onTrain}
          />
        )}
      </div>
    </div>
  );
};

FourCols2.propTypes = defaultPropTypes;

const FiveCols = ({ items = [], onClick, onTrain }) => {
  return (
    <div className="grid md:grid-cols-11 gap-4 md:gap-6">
      <div className="md:col-span-5">
        {[items[0]].map((product) => (
          <FeaturedProductCard product={product} key={product.name} onClick={onClick} onTrain={onTrain} style="wide" />
        ))}
      </div>
      <div className="md:col-span-6 grid md:grid-cols-2 gap-4 md:gap-6">
        {items.slice(1, 5).map((product) => (
          <ProductCard product={product} key={product.name} onClick={onClick} onTrain={onTrain} />
        ))}
      </div>
    </div>
  );
};

FiveCols.propTypes = defaultPropTypes;

const ProductCard = ({ product, onClick, onTrain, style = 'normal', className }) => {
  const getIconSize = () => {
    if (style === 'normal') return 44;
    if (style === 'wide') return 90;
    if (style === 'tall') return 52;
  };

  return (
    <Hover className={className}>
      {(hovered) => (
        <Card
          onClick={product.type !== 'document' ? () => onClick(product) : null}
          className={classNames(
            'rounded-2xl transition-all h-full relative overflow-hidden hover:-translate-y-1 hover:shadow-md cursor-pointer',
            { 'px-10 py-8 space-y-4': style === 'normal' },
            { 'px-10 py-20 space-y-10': style === 'wide' },
            { 'px-10 py-20 space-y-6': style === 'tall' }
          )}
        >
          <div>
            <div className={classNames('rounded-2xl justify-center', product.textColor)}>
              {createElement(product.icon, { size: getIconSize() })}
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <h4
                className={classNames(
                  'font-medium',
                  { 'text-[1.06rem]': style === 'normal' },
                  { 'text-xl mb-1': style === 'wide' },
                  { 'text-lg': style === 'tall' }
                )}
              >
                {product.name}
              </h4>
              {product.status === 'coming-soon' && (
                <div className="absolute top-0 right-0 px-3 py-1 ml-2 leading-none bg-slate-100 text-slate-500 rounded-bl-lg text-xs inline-flex">
                  Coming soon
                </div>
              )}
            </div>
            <p className="text-md leading-tight opacity-80 mt-1">{product.description}</p>
            {product.type === 'document' && (
              <div
                className={classNames('absolute inset-0 inset-x-0 z-[2] p-4 transition-all duration-300', {
                  'scale-75 opacity-0': !hovered,
                  'scale-100 opacity-1': hovered,
                })}
              >
                <div className="h-full flex flex-col items-center justify-center space-y-2 px-4 py-6 rounded-3xl bg-white/95 backdrop-blur-sm">
                  <Button onPress={() => onClick(product)} variant="outlined" color="black">
                    Preview
                  </Button>
                  <Button
                    onPress={() => onTrain?.(product)}
                    variant="outlined"
                    leftIcon={<IconRobot size="20" />}
                    color="black"
                  >
                    Train model
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </Hover>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onTrain: PropTypes.func,
  style: PropTypes.string,
  className: PropTypes.string,
};

const FeaturedProductCard = ({ product, onClick, onTrain, gradient = false, className }) => {
  return (
    <Hover className={classNames('h-full', className)}>
      {(hovered) => (
        <Card
          onClick={product.type === 'document' ? null : () => onClick(product)}
          className={classNames(
            'relative rounded-2xl transition-all h-full border-0 !shadow-none text-white hover:-translate-y-1 cursor-pointer flex flex-col justify-center overflow-hidden',
            product.backgroundColor
          )}
        >
          {gradient && (
            <img
              src="/images/bg.png"
              alt=""
              className="absolute top-0 scale-125 -rotate-90 left-0 w-full z-[1] h-full object-cover pointer-events-none"
            />
          )}
          <div className="px-10 py-8 relative z-[2]">
            <div>
              <div className="rounded-2xl justify-center text-white">{createElement(product.icon, { size: 100 })}</div>
            </div>
            <div className="mt-12">
              <div className="flex items-center">
                <h4 className="font-medium text-[1.3rem]">{product.name}</h4>
              </div>
              <p className="leading-snug mt-2 opacity-80 max-w-[200px]">{product.description}</p>
            </div>
          </div>
          {product.type === 'document' && (
            <div
              className={classNames('absolute inset-0 h-full inset-x-0 z-[2] transition-all duration-300', {
                'opacity-0': !hovered,
                'opacity-1': hovered,
              })}
            >
              <div className="h-full flex flex-col items-center justify-center space-y-2 px-4 py-6 rounded-3xl bg-black/20">
                <Button onPress={() => onClick(product)} color="white">
                  Preview
                </Button>
                <Button onPress={() => onTrain?.(product)} color="white" leftIcon={<IconRobot size="20" />}>
                  Train model
                </Button>
              </div>
            </div>
          )}
          {product.status === 'coming-soon' && (
            <div className="absolute top-0 right-0 z-[2] px-3 py-1 ml-2 leading-none bg-slate-100/20 text-white rounded-bl-lg text-xs inline-flex">
              Coming soon
            </div>
          )}
        </Card>
      )}
    </Hover>
  );
};

FeaturedProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onTrain: PropTypes.func,
  gradient: PropTypes.bool,
  className: PropTypes.string,
};
