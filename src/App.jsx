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
import DashboardLayout from '@/components/core/shared/DashboardLayout.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import BusinessLayout from './components/core/business/BusinessLayout.jsx';
import BusinessOverview from './pages/business/Overview.jsx';
import BusinessProject from './pages/business/Project.jsx';

const App = () => (
  <>
    <Routes>
      <Route
        path="/business"
        element={
          <RequireAuth>
            <OldDashboardLayout>
              <SetupBusiness />
            </OldDashboardLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
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
        path="/business"
        element={
            <BusinessLayout />
        }
      >
        <Route path="" element={<Navigate to="/business/overview" replace />} />
        <Route path="overview" element={<BusinessOverview/>} />
        <Route path="projects" element={<BusinessProject/>} />
        <Route path="templates" element={<div>Hello layout test</div>} />
        <Route path="invitations" element={<div>Hello layout test</div>} />
        <Route path="messages" element={<div>Hello layout test</div>} />

        <Route path="free-plan" element={<div>Hello layout test</div>} />
        <Route path="preferences" element={<div>Hello layout test</div>} />
        <Route path="my-account" element={<div>Hello layout test</div>} />

      </Route>




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
          // <RequireAuthBusiness>
            <BankingLayout />
          // </RequireAuthBusiness>
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
  </>
);

export default App;
