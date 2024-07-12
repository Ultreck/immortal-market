import { IconFileAnalytics, IconFileInvoice, IconLayout, IconMessageChatbot, IconReceipt } from '@tabler/icons-react';
import { createElement, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Loader from '@/components/ui/Loader.jsx';
import AppDashboardLayout from '@/components/core/shared/AppDashboardLayout.jsx';
import ProductOnboarding from '@/components/core/shared/ProductOnboarding.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import classNames from 'classnames';
import { categories } from '@/lib/products.js';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { useCreateDocumentSettings, useGetDocumentSettings } from '@/api/document.js';
import useBusiness from '@/hooks/use-business.js';

const product = categories.find((p) => p.slug === 'documents');

const links = [
  { name: 'Overview', href: `/${product.slug}/overview`, icon: <IconLayout size="20" /> },
  { name: 'Custom', href: `/${product.slug}/custom`, icon: <IconFileAnalytics size="20" /> },
  { name: 'Receipts', href: `/${product.slug}/receipts`, icon: <IconReceipt size="20" /> },
  { name: 'Invoices', href: `/${product.slug}/invoices`, icon: <IconFileInvoice size="20" /> },
  { name: 'Conversation', href: `/${product.slug}/conversation`, icon: <IconMessageChatbot size="20" /> },
];

const Logo = ({ className }) => (
  <div className={className}>
    <div className="text-[1.05rem] font-medium flex items-center">
      <div className={classNames('w-10 h-10 rounded-full mr-3 flex items-center justify-center', product.colors.bg)}>
        {createElement(product.icon, { size: 22, className: `text-white` })}
      </div>
      {product.name}
    </div>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
};

const DocumentLayout = () => {
  const toast = useToast();
  const qc = useQueryClient();
  const [isFetching, setIsFetching] = useState(false);
  const { business } = useBusiness();
  const { data: { settings } = {}, isLoading: isSettingsLoading } = useGetDocumentSettings(business._id);
  const { mutateAsync: createSettings, isPending: isCreateSettingsLoading } = useCreateDocumentSettings(business._id);

  const start = async () => {
    try {
      await createSettings(null);
      setIsFetching(true);
      await qc.invalidateQueries({
        queryKey: ['document', 'settings'],
      });
      setIsFetching(false);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      {isSettingsLoading ? (
        <div className="h-screen w-full flex flex-col justify-center items-center text-center">
          <Loader />
          <p className="mt-6">Just a moment..</p>
        </div>
      ) : (
        <>
          {settings && product.status === 'active' ? (
            <AppDashboardLayout logo={Logo} links={links}>
              <Outlet />
            </AppDashboardLayout>
          ) : (
            <ProductOnboarding product={product} isLoading={isCreateSettingsLoading || isFetching} onStart={start} />
          )}
        </>
      )}
    </>
  );
};

export default DocumentLayout;
