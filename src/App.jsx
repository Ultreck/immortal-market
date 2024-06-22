import { Navigate, Route, Routes } from 'react-router-dom';
import OldDashboard from './pages/OldDashboard.jsx';
import OldDashboardLayout from './components/core/shared/OldDashboardLayout.jsx';
import RequireAuth from './components/core/shared/RequireAuth.jsx';
import BankingLayout from './components/core/banking/BankingLayout.jsx';
import RequireAuthBusiness from './components/core/shared/RequireAuthBusiness.jsx';
import BankingOverview from './pages/banking/Overview.jsx';
import SetupBusiness from './pages/SetupBusiness.jsx';
import Statement from './pages/banking/Statement.jsx';
import BankingSettings from './pages/banking/Settings.jsx';
import StatementDetails from './pages/banking/StatementDetails.jsx';
import DocumentLayout from './components/core/document/DocumentLayout.jsx';
import DocumentOverview from './pages/document/Overview.jsx';
import Receipts from './pages/document/Receipts.jsx';
import ReceiptDetails from './pages/document/ReceiptDetails.jsx';
import Invoices from './pages/document/Invoices.jsx';
import InvoiceDetails from './pages/document/InvoiceDetails.jsx';
import Custom from './pages/document/Custom.jsx';
import Wallet from './pages/Wallet.jsx';
import DashboardLayout from '@/components/core/layout/DashboardLayout.jsx';
import OverviewPage from '@/pages/OverviewPage.jsx';
import ProjectPage from '@/pages/ProjectPage.jsx';
import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';
import GlobalModals from '@/components/core/GlobalModals.jsx';
import InvitationPage from '@/pages/InvitationPage.jsx';
import DemoPage from '@/pages/DemoPage.jsx';
import BusinessTemplate from './pages/business/Template.jsx';
import ReportPage from './pages/ReportPage.jsx';

const App = () => {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.add('text-foreground');
      document.body.classList.add('bg-background');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.remove('text-foreground');
      document.body.classList.remove('bg-background');
    }
  }, [isDarkMode]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuthBusiness>
              <DashboardLayout />
            </RequireAuthBusiness>
          }
        >
          <Route path="" element={<Navigate to="/overview" replace />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="templates" element={<BusinessTemplate />} />
          <Route path="team" element={<InvitationPage />} />
          <Route path="reports" element={<ReportPage />} />
          <Route path="templates" element={<></>} />
          <Route path="team" element={<></>} />
          <Route path="upgrade" element={<></>} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="settings" element={<></>} />
        </Route>

        <Route
          path="/invitation/:id"
          element={
            <RequireAuth>
              <InvitationPage />
            </RequireAuth>
          }
        />

        <Route
          path="/business"
          element={
            <RequireAuth>
              <SetupBusiness />
            </RequireAuth>
          }
        />
        <Route
          path="/old"
          element={
            <RequireAuth>
              <OldDashboardLayout>
                <OldDashboard />
              </OldDashboardLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/wallet"
          element={
            <RequireAuth>
              <OldDashboardLayout>
                <Wallet />
              </OldDashboardLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/banking"
          element={
            <RequireAuthBusiness>
              <BankingLayout />
            </RequireAuthBusiness>
          }
        >
          <Route path="" element={<Navigate to="/banking/overview" replace />} />
          <Route path="overview" element={<BankingOverview />} />
          <Route path="statement" element={<Statement />} />
          <Route path="statement/:id" element={<StatementDetails />} />
          <Route path="settings" element={<BankingSettings />} />
        </Route>
        <Route
          path="/documents"
          element={
            <RequireAuthBusiness>
              <DocumentLayout />
            </RequireAuthBusiness>
          }
        >
          <Route path="" element={<Navigate to="/documents/overview" replace />} />
          <Route path="overview" element={<DocumentOverview />} />
          <Route path="receipts" element={<Receipts />} />
          <Route path="receipts/:id" element={<ReceiptDetails />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="invoices/:id" element={<InvoiceDetails />} />
          <Route path="custom" element={<Custom />} />
        </Route>
      </Routes>
      <GlobalModals />
    </>
  );
};

export default App;
