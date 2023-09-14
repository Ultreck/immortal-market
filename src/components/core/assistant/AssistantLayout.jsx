import { IconLayout2, IconMessages } from "@tabler/icons-react";
import { createElement } from "react";
import AppDashboardLayout from "@/components/core/shared/AppDashboardLayout.jsx";
import products from "@/lib/products.js";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import ProductOnboarding from "@/components/core/shared/ProductOnboarding.jsx";

const links = [
  { name: 'Overview', href: '/assistant', icon: <IconLayout2 size="20"/> },
  { name: 'Conversations', href: '/assistant/conversations', icon: <IconMessages size="20"/> },
];

const product = products.find(p => p.slug === 'assistant');

const Logo = ({ className }) => (
  <div className={ className }>
    <div className="text-[1.05rem] font-medium flex items-center">
      <div
        className={ classNames("w-10 h-10 rounded-full mr-3 flex items-center justify-center", product.backgroundColor) }
      >
        { createElement(product.icon, { size: 22, className: `text-white` }) }
      </div>
      { product.name }
    </div>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string
};

const AssistantLayout = () => {
  return (
    <>
      {
        product.status === 'coming-soon' ? (
          <ProductOnboarding
            product={ product }
          />
        ) : (
          <AppDashboardLayout logo={ Logo } links={ links }>
            <Outlet/>
          </AppDashboardLayout>
        )
      }
    </>
  );
};

export default AssistantLayout;
