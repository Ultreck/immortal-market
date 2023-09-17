import { createElement } from 'react';
import classNames from "classnames";
import Button from "@/components/global/Button.jsx";
import Card from "@/components/global/Card.jsx";
import PropTypes from "prop-types";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";

const ProductOnboarding = ({ product, onStart, isLoading }) => {
  return (
    <div className="bg-slate-50">
      <div
        className={ classNames("fixed z-[1] bottom-0 w-1/4 h-full rounded-tr-[300px] opacity-5", product.backgroundColor) }
      />
      <div className="container !max-w-6xl relative z-[2]">
        <div className="h-screen grid grid-cols-12 gap-16 items-center py-12">
          <Card className="col-span-7 overflow-hidden">
            <img src={ `/images/${ product.slug }.png` } alt={ product.name }/>
          </Card>
          <div className="col-span-5">
            <div className="flex items-center">
              <div
                className={ classNames('w-10 h-10 rounded-3xl flex items-center justify-center text-white', product.backgroundColor) }
              >
                { createElement(product.icon, { size: 24 }) }
              </div>
              <div className="ml-4 flex items-center">
                <p className="font-semibold text-lg">{ product.name }</p>
                {
                  product.status === 'coming-soon' && (
                    <div className="px-2 py-0.5 rounded-full text-xs bg-gray-500 text-white w-max ml-3">
                      Coming soon
                    </div>
                  )
                }
              </div>
            </div>
            <p className="mt-6 max-w-lg text-[1.04rem]">{ product.summary }</p>
            <ul className="mt-8 space-y-1">
              {
                product.features.map(f => (
                  <li key={ f } className="flex items-center">
                    <IconCheck size="20" className="mr-3"/>{ f }
                  </li>
                ))
              }
            </ul>
            {
              (!!onStart && product.status !== 'coming-soon') && (
                <Button
                  onClick={ onStart } className="mt-8" loading={ isLoading }
                  rightIcon={ <IconArrowRight size="20"/> }
                >
                  Start
                </Button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

ProductOnboarding.propTypes = {
  product: PropTypes.object,
  onStart: PropTypes.func,
  isLoading: PropTypes.bool
}

export default ProductOnboarding;
