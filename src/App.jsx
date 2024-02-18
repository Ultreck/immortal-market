import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import DashboardLayout from './components/core/shared/DashboardLayout.jsx';
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

const App = () => (
  <>
    <Routes>
      <Route
        path="/business"
        element={
          <RequireAuth>
            <DashboardLayout>
              <SetupBusiness />
            </DashboardLayout>
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
        path="/wallet"
        element={
          <RequireAuth>
            <DashboardLayout>
              <Wallet />
            </DashboardLayout>
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
  </>
);

export default App;
