import { Navigate, Route, Routes } from 'react-router-dom';
import 'swiper/css/bundle';
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
import { useEffect } from 'react';
import { useTernaryDarkMode } from 'usehooks-ts';
import GlobalModals from '@/components/core/GlobalModals.jsx';
import EditDesignPage from '@/pages/designs/EditDesignPage.jsx';
import TemplatesPage from './pages/designs/TemplatesPage.jsx';
import ReportPage from './pages/ReportPage.jsx';
import TeamPage from '@/pages/TeamPage.jsx';
import ProjectDashboardPage from './pages/ProjectDashboard.jsx';
import PlanPage from './pages/PlanPage.jsx';
import SettingsLayout from '@/pages/settings/SettingsLayout.jsx';
import BusinessSettingsPage from '@/pages/settings/BusinessSettingsPage.jsx';
import AppearanceSettingsPage from '@/pages/settings/AppearanceSettingsPage.jsx';
import InvitationPage from '@/pages/InvitationPage.jsx';
import PresentDesignPage from '@/pages/designs/PresentDesignPage.jsx';
import SvgShapes from '@/components/core/SvgShapes.jsx';
import ProjectsPage from '@/pages/ProjectsPage.jsx';
import AppsPage from '@/pages/AppsPage.jsx';
import ChatWidget from '@/components/core/templates/create/ChatWidget.jsx';

const App = () => {
  const { isDarkMode } = useTernaryDarkMode();

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
          <Route path="" element={<OverviewPage />} />
          <Route path="apps" element={<AppsPage />} />
          <Route path="/overview" element={<Navigate to="/" replace />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="dashboards" element={<ProjectDashboardPage />} />
          <Route path="plans" element={<PlanPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="reports" element={<ReportPage />} />
          <Route path="settings" element={<SettingsLayout />}>
            <Route path="" element={<Navigate to="/settings/business" replace />} />
            <Route path="business" element={<BusinessSettingsPage />} />
            <Route path="appearance" element={<AppearanceSettingsPage />} />
            <Route path="notifications" element={<></>} />
            <Route path="security" element={<></>} />
          </Route>
        </Route>
        <Route
          path="designs/:id/edit"
          element={
            <RequireAuthBusiness>
              <EditDesignPage />
            </RequireAuthBusiness>
          }
        />
        <Route
          path="designs/:id/present"
          element={
            <RequireAuthBusiness>
              <PresentDesignPage />
            </RequireAuthBusiness>
          }
        />
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
      <SvgShapes />
      <ChatWidget />
    </>
  );
};

export default App;
