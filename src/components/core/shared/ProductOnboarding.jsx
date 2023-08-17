import { createElement, useState } from 'react';
import classNames from "classnames";
import Checkbox from "@/components/global/Checkbox.jsx";
import Button from "@/components/global/Button.jsx";
import { useToast } from "@/hooks/use-toast.jsx";
import Card from "@/components/global/Card.jsx";
import PropTypes from "prop-types";

const ProductOnboarding = ({ product, onSubmit, isLoading }) => {
  const toast = useToast();
  const [accepted, setAccepted] = useState(false);

  const handleContinue = () => {
    if (!accepted) return toast.error('Kindly accept terms and conditions before proceeding');
    onSubmit();
  };

  return (
    <div className="bg-slate-50 px-6">
      <div className="max-w-[600px] mx-auto py-12">
        <div className="flex items-center">
          <div
            className={ classNames('w-16 h-16 rounded-3xl flex items-center justify-center text-white', product.backgroundColor) }
          >
            { createElement(product.icon, { size: 36 }) }
          </div>
          <div className="ml-4">
            <p className="font-semibold text-lg">{ product.name }</p>
            <p>{ product.description }</p>
          </div>
        </div>
        <Card className="p-8 md:p-12 mt-10">
          <h2 className="mb-6 font-medium">
            Kindly accept the terms and conditions before proceeding
          </h2>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium alias amet
              consequatur et illum inventore modi nostrum nulla quia rem, repellat repellendus sapiente sequi
              suscipit vel voluptatem! Ad asperiores cupiditate dolorum ducimus eius eligendi, est harum
              impedit
              iste maiores modi odit, officia, pariatur quae ullam vel voluptatum? Accusantium eum
              exercitationem modi non odit quas, reprehenderit? Animi dolor ducimus ea molestias
              necessitatibus
              pariatur quas repellendus? Et illo iusto modi nostrum. Corporis dicta distinctio illum
              laboriosam
              libero natus quidem voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium alias amet
              consequatur et illum inventore modi nostrum nulla quia rem, repellat repellendus sapiente sequi
              suscipit vel voluptatem! Ad asperiores cupiditate dolorum ducimus eius eligendi, est harum
              impedit
              iste maiores modi odit, officia, pariatur quae ullam vel voluptatum? Accusantium eum
              exercitationem modi non odit quas, reprehenderit? Animi dolor ducimus ea molestias
              necessitatibus
              pariatur quas repellendus? Et illo iusto modi nostrum. Corporis dicta distinctio illum
              laboriosam
              libero natus quidem voluptatum.
            </p>
          </div>
          <Checkbox
            value={ accepted } onChange={ e => setAccepted(e.target.checked) }
            disabled={ isLoading } className="mt-6"
          >
            I agree to the terms and conditions
          </Checkbox>
          <Button
            onClick={ handleContinue } className="mt-10"
            loading={ isLoading }
          >
            Continue
          </Button>
        </Card>
      </div>
    </div>
  );
};

ProductOnboarding.propTypes = {
  product: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default ProductOnboarding;
