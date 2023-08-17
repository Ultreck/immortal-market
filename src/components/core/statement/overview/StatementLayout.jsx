import products from "@/lib/products.js";
import { createElement, useState } from "react";
import classNames from "classnames";
import { IconFileText, IconLayout, IconSettings2 } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "@/components/global/Loader.jsx";
import AppDashboardLayout from "@/components/core/shared/AppDashboardLayout.jsx";
import DashboardContent from "@/components/core/shared/DashboardContent.jsx";
import ProductOnboarding from "@/components/core/shared/ProductOnboarding.jsx";
import { useToast } from "@/hooks/use-toast.jsx";
import { useGetUserBusiness } from "@/api/business.js";
import { useCreateStatementSettings, useGetStatementSettings } from "@/api/statement.js";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const links = [
  { name: 'Overview', href: '/statement', icon: <IconLayout size="20"/> },
  { name: 'Analysis', href: '/statement/analysis', icon: <IconFileText size="20"/> },
  { name: 'Settings', href: '/statement/settings', icon: <IconSettings2 size="20"/> },
];

const product = products.find(p => p.slug === 'bank-statement');

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

const StatementLayout = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const [isFetching, setIsFetching] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data: { settings } = {}, isLoading: isSettingsLoading } = useGetStatementSettings(business._id);
  const { mutateAsync: createSettings, isLoading: isCreateSettingsLoading } = useCreateStatementSettings(business._id);

  const start = async () => {
    try {
      await createSettings(null);
      setIsFetching(true)
      await qc.invalidateQueries(['statement', 'settings']);
      setIsFetching(false)
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      {
        isSettingsLoading ? (
          <div className="h-screen w-full flex flex-col justify-center items-center text-center">
            <Loader/>
            <p className="mt-6">Just a moment..</p>
          </div>
        ) : (
          <>
            {
              settings ? (
                <AppDashboardLayout logo={ Logo } links={ links }>
                  <DashboardContent>
                    <Outlet/>
                  </DashboardContent>
                </AppDashboardLayout>
              ) : (
                <ProductOnboarding
                  product={ product }
                  onSubmit={ start }
                  isLoading={ isCreateSettingsLoading || isFetching }
                />
              )
            }
          </>
        )
      }
    </>
  );
};

export default StatementLayout;
