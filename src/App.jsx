import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardLayout from "./components/core/shared/DashboardLayout.jsx";
import RequireAuth from "./components/core/shared/RequireAuth.jsx";
import RequireNoAuth from "./components/core/shared/RequireNoAuth.jsx";
import AuthLayout from "./components/core/auth/AuthLayout.jsx";
import Verification from "./pages/Verification.jsx";
import RequireAuthUnverified from "./components/core/shared/RequireAuthUnverified.jsx";
import StatementLayout from "./components/core/statement/StatementLayout.jsx";
import RequireAuthBusiness from "./components/core/shared/RequireAuthBusiness.jsx";
import StatementOverview from "./pages/statement/Overview.jsx";
import SetupBusiness from "./pages/SetupBusiness.jsx";
import StatementAnalysis from "./pages/statement/Analysis.jsx";
import StatementSettings from "./pages/statement/Settings.jsx";
import StatementDetails from "./pages/statement/StatementDetails.jsx";
import InvoiceLayout from "./components/core/invoice/InvoiceLayout.jsx";
import InvoicesOverview from "./pages/invoice/Overview.jsx";
import Receipts from "./pages/invoice/Receipts.jsx";
import ReceiptDetails from "./pages/invoice/ReceiptDetails.jsx";
import Invoices from "./pages/invoice/Invoices.jsx";
import InvoiceDetails from "./pages/invoice/InvoiceDetails.jsx";
import CustomReportLayout from "./components/core/custom-report/CustomReportLayout.jsx";
import CustomReportOverview from "./pages/custom-report/Overview.jsx";
import CustomReports from "./pages/custom-report/Reports.jsx";
import AssistantConversations from "./pages/assistant/Conversations.jsx";
import AssistantLayout from "./components/core/assistant/AssistantLayout.jsx";
import AssistantOverview from "./pages/assistant/Overview.jsx";
import FinancialReportLayout from "./components/core/financial-report/FinancialReportLayout.jsx";
import FinancialReportOverview from "./pages/financial-report/Overview.jsx";
import FinancialReports from "./pages/financial-report/Reports.jsx";
import AccountSetting from "./pages/AccountSetting.jsx";
import Wallet from "./pages/Wallet.jsx";

const App = () => (
  <>
    <Routes>
      <Route
        path="/login"
        element={
          <RequireNoAuth>
            <AuthLayout>
              <Login/>
            </AuthLayout>
          </RequireNoAuth>
        }
      />
      <Route
        path="/register"
        element={
          <RequireNoAuth>
            <AuthLayout>
              <Register/>
            </AuthLayout>
          </RequireNoAuth>
        }
      />
      <Route
        path="/verification"
        element={
          <RequireAuthUnverified>
            <AuthLayout>
              <Verification/>
            </AuthLayout>
          </RequireAuthUnverified>
        }
      />
      <Route
        path="/business"
        element={
          <RequireAuth>
            <AuthLayout>
              <SetupBusiness/>
            </AuthLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <DashboardLayout>
              <Dashboard/>
            </DashboardLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/account"
        element={
          <RequireAuth>
            <DashboardLayout>
              <AccountSetting/>
            </DashboardLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/wallet"
        element={
          <RequireAuth>
            <DashboardLayout>
              <Wallet/>
            </DashboardLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/statement"
        element={
          <RequireAuthBusiness>
            <StatementLayout/>
          </RequireAuthBusiness>
        }
      >
        <Route path="" element={ <StatementOverview/> }/>
        <Route path="analysis" element={ <StatementAnalysis/> }/>
        <Route path="analysis/:id" element={ <StatementDetails/> }/>
        <Route path="settings" element={ <StatementSettings/> }/>
      </Route>
      <Route
        path="/invoice"
        element={
          <RequireAuthBusiness>
            <InvoiceLayout/>
          </RequireAuthBusiness>
        }
      >
        <Route path="" element={ <InvoicesOverview/> }/>
        <Route path="receipts" element={ <Receipts/> }/>
        <Route path="receipts/:id" element={ <ReceiptDetails/> }/>
        <Route path="invoices" element={ <Invoices/> }/>
        <Route path="invoices/:id" element={ <InvoiceDetails/> }/>
      </Route>
      <Route
        path="/custom-report"
        element={
          <RequireAuthBusiness>
            <CustomReportLayout/>
          </RequireAuthBusiness>
        }
      >
        <Route path="" element={ <CustomReportOverview/> }/>
        <Route path="reports" element={ <CustomReports/> }/>
        <Route path="conversations" element={ <AssistantConversations/> }/>
      </Route>
      <Route
        path="/assistant"
        element={
          <RequireAuthBusiness>
            <AssistantLayout/>
          </RequireAuthBusiness>
        }
      >
        <Route path="" element={ <AssistantOverview/> }/>
        <Route path="conversations" element={ <AssistantConversations/> }/>
      </Route>
      <Route
        path="/financial-report"
        element={
          <RequireAuthBusiness>
            <FinancialReportLayout/>
          </RequireAuthBusiness>
        }
      >
        <Route path="" element={ <FinancialReportOverview/> }/>
        <Route path="reports" element={ <FinancialReports/> }/>
      </Route>
    </Routes>
  </>
);

export default App;
