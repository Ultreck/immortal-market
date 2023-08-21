import products, { categories } from "@/lib/products.js";
import { createElement, useState } from "react";
import classNames from "classnames";
import Card from "@/components/global/Card.jsx";
import PropTypes from "prop-types";
import ProductSummary from "@/components/core/ProductSummary.jsx";

const featured = products.filter(p => p.categories.includes('featured'));
const highlighted = featured.at(0);
const top = featured.slice(1, featured.length);
const bottom = featured.length > 3 ? featured.at(-1) : null;

const Dashboard = () => {
  const [selected, setSelected] = useState(null);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const handleProductClick = product => {
    setSelected(product);
    setIsSummaryOpen(true);
  };

  return (
    <>
      <div className="bg-[#11161b] text-white pt-12 md:pt-16 pb-12 md:pb-14">
        <div className="container !max-w-5xl">
          <h1
            className="text-[2rem] md:text-4xl leading-[1.3] font-semibold max-w-[300px] md:max-w-lg flex items-center"
          >
            Insights for every business and industry
          </h1>
          <p className="mt-3 md:mt-4 opacity-75">
            Select a product below to continue
          </p>
        </div>
      </div>
      <div className="container py-12 md:py-16 !max-w-5xl min-h-screen flex flex-col space-y-10">
        <div>
          <h3 className="text-xl font-medium mb-8 px-1 border-b pb-6">Featured</h3>
          <div className="grid md:grid-cols-11 gap-4 md:gap-6">
            <div className="md:col-span-5">
              <FeaturedProductCard
                product={ highlighted }
                key={ highlighted.name }
                onClick={ () => handleProductClick(highlighted) }
                gradient
              />
            </div>
            <div className="md:col-span-6 grid md:grid-cols-2 gap-4 md:gap-6">
              {
                top.slice(0, 2).map(product => (
                  <div key={ product.name }>
                    <ProductCard
                      product={ product }
                      onClick={ () => handleProductClick(product) }
                    />
                  </div>
                ))
              }
              {
                !!bottom && (
                  <div className="md:col-span-2">
                    <ProductCard
                      product={ bottom }
                      key={ bottom.name }
                      onClick={ () => handleProductClick(bottom) }
                    />
                  </div>
                )
              }
            </div>
          </div>
        </div>
        {
          categories.filter(c => c.id !== 'featured').map((c, i) => {
            const items = products.filter(p => p.categories.includes(c.id));

            return (
              <div key={ c.id }>
                <h3 className="text-xl font-medium mb-8 px-1 border-b pb-6">{ c.name }</h3>
                {
                  items.length === 2 && (
                    <TwoCols items={ items } onClick={ p => handleProductClick(p) }/>
                  )
                }
                {
                  (items.length === 3 && i % 2 === 0) && (
                    <ThreeCols items={ items } onClick={ p => handleProductClick(p) }/>
                  )
                }
                {
                  (items.length === 3 && i % 2 !== 0) && (
                    <ThreeCols2 items={ items } onClick={ p => handleProductClick(p) }/>
                  )
                }
                {
                  items.length === 4 && (
                    <FourCols items={ items } onClick={ p => handleProductClick(p) }/>
                  )
                }
                {
                  (items.length !== 2 && items.length !== 4 && items.length !== 3) && (
                    <div className={ classNames("grid md:grid-cols-3 gap-4 md:gap-6") }>
                      {
                        items.map(product => (
                          <ProductCard
                            product={ product }
                            key={ product.name }
                            onClick={ () => handleProductClick(product) }
                          />
                        ))
                      }
                    </div>
                  )
                }
              </div>
            );
          })
        }
      </div>

      <ProductSummary
        product={ selected }
        isOpen={ isSummaryOpen }
        onClose={ () => setIsSummaryOpen(false) }
      />
    </>
  );
};

export default Dashboard;

const TwoCols = ({ items = [], onClick }) => {
  return (
    <div className={ classNames("grid md:grid-cols-2 gap-4 md:gap-6") }>
      {
        items.map(product => (
          <ProductCard
            product={ product }
            key={ product.name }
            onClick={ () => onClick(product) }
            style="wide"
          />
        ))
      }
    </div>
  )
}

TwoCols.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

const ThreeCols = ({ items = [], onClick }) => {
  return (
    <div className={ classNames("grid md:grid-cols-3 gap-4 md:gap-6") }>
      {
        items.map(product => (
          <ProductCard
            product={ product }
            key={ product.name }
            onClick={ () => onClick(product) }
            style="tall"
          />
        ))
      }
    </div>
  )
}

ThreeCols.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

const ThreeCols2 = ({ items = [], onClick }) => {
  const left = items[0];
  const right = [items[1], items[2]];

  return (
    <div className="grid md:grid-cols-11 gap-4 md:gap-6">
      <div className="md:col-span-5">
        <FeaturedProductCard
          product={ left }
          key={ left.name }
          onClick={ () => onClick(left) }
          style="wide"
        />
      </div>
      <div className="md:col-span-6 grid md:grid-cols-1 gap-4 md:gap-6">
        {
          right.map(product => (
            <div key={ product.name }>
              <ProductCard
                product={ product }
                onClick={ () => onClick(product) }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

ThreeCols2.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

const FourCols = ({ items = [], onClick }) => {
  const highlighted = items[0];
  const top = [items[1], items[2]];
  const bottom = items[3];

  return (
    <div className="grid md:grid-cols-11 gap-4 md:gap-6">
      <div className="md:col-span-6 grid md:grid-cols-2 gap-4 md:gap-6">
        {
          top.slice(0, 2).map(product => (
            <div key={ product.name }>
              <ProductCard
                product={ product }
                onClick={ () => onClick(product) }
              />
            </div>
          ))
        }
        {
          !!bottom && (
            <div className="md:col-span-2">
              <ProductCard
                product={ bottom }
                key={ bottom.name }
                onClick={ () => onClick(bottom) }
              />
            </div>
          )
        }
      </div>
      <div className="md:col-span-5">
        <FeaturedProductCard
          product={ highlighted }
          key={ highlighted.name }
          onClick={ () => onClick(highlighted) }
          style="wide"
        />
      </div>
    </div>
  )
}

FourCols.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

const ProductCard = ({ product, onClick, style = 'normal' }) => {
  const getIconSize = () => {
    if (style === 'normal') return 44;
    if (style === 'wide') return 90;
    if (style === 'tall') return 52;
  };

  return (
    <Card
      onClick={ onClick }
      className={ classNames(
        'rounded-2xl transition-all h-full relative overflow-hidden hover:-translate-y-1 hover:shadow-md cursor-pointer',
        { 'px-10 py-8 space-y-4': style === 'normal' },
        { 'px-10 py-20 space-y-10': style === 'wide' },
        { 'px-10 py-20 space-y-6': style === 'tall' }
      ) }
    >
      <div>
        <div className={ classNames('rounded-2xl justify-center', product.textColor) }>
          { createElement(product.icon, { size: getIconSize() }) }
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <h4
            className={ classNames("font-medium",
              { 'text-[1.06rem]': style === 'normal' },
              { 'text-xl mb-1': style === 'wide' },
              { 'text-lg': style === 'tall' }
            ) }
          >
            { product.name }
          </h4>
          {
            product.status === 'coming-soon' && (
              <div
                className="absolute top-0 right-0 px-3 py-1 ml-2 leading-none bg-slate-100 text-slate-500 rounded-bl-lg text-xs inline-flex"
              >
                Coming soon
              </div>
            )
          }
        </div>
        <p className="leading-tight opacity-80 mt-1">
          { product.description }
        </p>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.string
};

const FeaturedProductCard = ({ product, onClick, gradient = false }) => {
  return (
    <Card
      onClick={ onClick }
      className={ classNames(
        'relative rounded-2xl transition-all h-full border-0 !shadow-none text-white hover:-translate-y-1 cursor-pointer flex flex-col justify-center overflow-hidden',
        product.backgroundColor,
      ) }
    >
      {
        gradient && (
          <img
            src="/images/bg.png" alt=""
            className="absolute top-0 scale-125 -rotate-90 left-0 w-full z-[1] h-full object-cover pointer-events-none"
          />
        )
      }
      <div className="px-10 py-8 relative z-[2]">
        <div>
          <div className="rounded-2xl justify-center text-white">
            { createElement(product.icon, { size: 100 }) }
          </div>
        </div>
        <div className="mt-12">
          <div className="flex items-center">
            <h4 className="font-medium text-[1.3rem]">{ product.name }</h4>
          </div>
          <p className="text-[1.1rem] leading-snug mt-2 opacity-80 max-w-[200px]">
            { product.description }
          </p>
        </div>
      </div>
      {
        product.status === 'coming-soon' && (
          <div
            className="absolute top-0 right-0 z-[2] px-3 py-1 ml-2 leading-none bg-slate-100/20 text-white rounded-bl-lg text-xs inline-flex"
          >
            Coming soon
          </div>
        )
      }
    </Card>
  );
};

FeaturedProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  gradient: PropTypes.bool
};
