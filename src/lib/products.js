import {
  IconAssembly,
  IconBasketFilled,
  IconBooks,
  IconBrain,
  IconBriefcase,
  IconBuildingHospital,
  IconCashBanknote,
  IconChartHistogram,
  IconChecklist,
  IconClipboardText,
  IconCreditCard,
  IconCurrencyNaira,
  IconDatabasePlus,
  IconEditCircle,
  IconFileText,
  IconFlag,
  IconForms,
  IconId,
  IconMap,
  IconMasksTheater,
  IconMessageChatbot,
  IconReportMoney,
  IconSocial,
  IconUserCircle,
  IconUserQuestion,
  IconWorld
} from "@tabler/icons-react";

const general = [
  {
    name: 'Custom report',
    slug: 'custom-report',
    description: `Analyze customs reports in seconds`,
    backgroundColor: '!bg-red-700',
    textColor: '!text-red-700',
    icon: IconEditCircle,
    homeLink: '/custom-report',
    dashboardLink: '/custom-report',
    status: 'coming-soon',
    categories: ['general', 'featured'],
    type: 'document',
    summary: 'N/A',
    features: [
      `Custom Insights`,
      `Report Parsing`,
      `Visual Summaries`,
      `Predictive Trends`,
      `Data Mapping`,
      `Anomaly Detection`,
    ],
    flow: [
      `Upload your custom report.`,
      `Our extraction and analysis model takes over`,
      `Engage with result via chat, infographics or API`,
      `Bambi can also help with decisioning.`,
    ]
  },
  {
    name: 'Data assistant',
    slug: 'assistant',
    description: `An advanced embedded AI assistant`,
    backgroundColor: '!bg-blue-700',
    textColor: '!text-blue-700',
    icon: IconMessageChatbot,
    homeLink: '/assistant',
    dashboardLink: '/assistant',
    status: 'coming-soon',
    categories: ['general']
  },
];

const lending = [
  {
    name: 'Bank statement',
    slug: 'statement',
    description: `Analyze any bank statement in seconds`,
    backgroundColor: '!bg-sky-700',
    textColor: '!text-sky-700',
    icon: IconFileText,
    homeLink: '/statement',
    dashboardLink: '/statement',
    status: 'coming-soon',
    categories: ['featured', 'lending'],
    type: 'document',
    summary: `Analyze customer's financial behavior for lending decisioning in a few seconds. All bank statement formats supported`,
    features: [
      `Pattern analysis`,
      `Decision discovery`,
      `Every statement format`,
      `Visualized result.`,
      `Tap AI Models`,
      `APIs for integration`,
    ],
    flow: [
      `Upload or connect statement directly from bank`,
      `Our extraction and analysis model takes over`,
      `Engage with result via chat, infographics or API`,
      `Bambi can also help with decisioning.`,
    ]
  },
  {
    name: 'Credit Portfolio',
    slug: 'credit-portfolio',
    description: `Maintain your credit portfolio`,
    backgroundColor: '!bg-red-700',
    textColor: '!text-red-700',
    icon: IconCreditCard,
    homeLink: '/credit-portfolio',
    dashboardLink: '/credit-portfolio',
    status: 'coming-soon',
    categories: ['lending'],
    summary: `Effectively manage your credit portfolio using our AI-powered dashboard, optimizing risk assessment and strategic decision-making`,
    features: [
      `Risk Assessment`,
      `Portfolio Overview`,
      `Credit Scoring`,
      `Payment Trends`,
      `Client Profiles`,
      `Default Prediction.`,
      `Performance Analysis`,
    ],
    flow: [
      `The dashboard compiles diverse data sources.`,
      `Evaluates risks`,
      `Tracks customer’s behavior over time.`,
      `Sends alerts about significant changes in customer behavior.`,
    ]
  },
  {
    name: 'Customer profile',
    slug: 'customer-profile',
    description: `Understand your customers`,
    backgroundColor: '!bg-yellow-700',
    textColor: '!text-yellow-700',
    icon: IconUserCircle,
    homeLink: '/customer-profile',
    dashboardLink: '/customer-profile',
    status: 'coming-soon',
    categories: ['investment', 'lending', 'insurance'],
    summary: `Unlock customer insights and drive personalized strategies with our AI-powered customer understanding dashboard.`,
    features: [
      `Customer Segmentation`,
      `Behavior Analysis`,
      `Demographic Insights`,
      `Purchase Patterns`,
      `Visualized result`,
      `APIs for integration`,
    ],
    flow: [
      `Compiles data from various sources`,
      `Examines historical behavior, generating insights into purchasing patterns and interactions.`,
      `Engage with the result via chat, infographics or API`,
    ]
  },
  {
    name: 'Credit Modelling',
    slug: 'credit-modelling',
    description: `Model your credit score`,
    backgroundColor: '!bg-orange-700',
    textColor: '!text-orange-700',
    icon: IconChartHistogram,
    homeLink: '/credit-modelling',
    dashboardLink: '/credit-modelling',
    status: 'coming-soon',
    categories: ['lending'],
    summary: `Optimize lending decisions with our AI credit score modeling dashboard, empowering accurate risk assessment and informed credit approvals.`,
    features: [
      `Credit Analysis`,
      `Risk Evaluation`,
      `Payment History`,
      `Debt Utilization`,
      `Financial Health`,
      `Predictive Power`,
      `Trend Tracking`,
    ],
    flow: [
      `Data gathering from various sources, to build a comprehensive credit profile.`,
      `Extracts key features and identifies patterns that contribute to creditworthiness.`,
      `Calculates credit scores based on analyzed data`,
      `Continuously updates the credit scoring model with new data.`,
    ]
  },
];

const payments = [
  {
    name: 'Invoices & Receipts',
    slug: 'invoice',
    description: `Get insights on your invoices`,
    backgroundColor: '!bg-amber-700',
    textColor: '!text-amber-700',
    icon: IconClipboardText,
    homeLink: '/invoice',
    dashboardLink: '/invoice',
    status: 'coming-soon',
    categories: ['payments', 'featured'],
    type: 'document',
    summary: 'N/A',
    features: [
      `Receipt Extraction`,
      `Expense Tracking`,
      `Item Categorization`,
      `Accuracy Check`,
      `Payment Verification`,
      `Automated Auditing`,
      `Fraud Detection.`,
    ],
    flow: [
      `Upload documents`,
      `Our analysis model extracts key information like date, amount, and vendor details`,
      `Validation of extracted data`,
      `The dashboard intelligently categorizes items on receipts and invoices.`,
      `Engage with result via infographics or API`,
    ]
  },
  {
    name: 'Fraud',
    slug: 'fraud',
    description: `Detect fraudulent transactions`,
    backgroundColor: '!bg-red-700',
    textColor: '!text-red-700',
    icon: IconMasksTheater,
    homeLink: '/fraud',
    dashboardLink: '/fraud',
    status: 'coming-soon',
    categories: ['payments'],
    summary: `Protect your business from fraud, swiftly identify suspicious patterns and transactions, enhancing security and minimizing risks`,
    features: [
      `Real-time alerts`,
      `Anomaly detection`,
      `Pattern recognition`,
      `Risk assessment`,
      `Transaction monitoring`,
      `Behavioral analysis`,
      `Predictive modeling`,
    ],
    flow: [
      `Collects data from multiple sources, to create a comprehensive view for fraud analysis.`,
      `Identifies deviations from normal patterns in real-time, flagging potentially fraudulent activities.`,
      `Examines user actions over time for potential signs of fraud.`,
      `Spots recurring patterns indicative of fraud schemes`,
      `Triggers alerts and recommendations when suspicious activities are identified.`,
    ]
  },
];

const identity = [
  {
    name: 'Government IDs',
    slug: 'govt-id',
    description: `Analyze government ids in seconds`,
    backgroundColor: '!bg-teal-700',
    textColor: '!text-teal-700',
    icon: IconId,
    homeLink: '/govt-id',
    dashboardLink: '/govt-id',
    status: 'coming-soon',
    categories: ['identity'],
    type: 'document'
  },
  {
    name: 'Social analytics',
    slug: 'social-analytics',
    description: `Get insights on your social media`,
    backgroundColor: '!bg-blue-700',
    textColor: '!text-blue-700',
    icon: IconSocial,
    homeLink: '/social-analytics',
    dashboardLink: '/social-analytics',
    status: 'coming-soon',
    categories: ['identity']
  },
  {
    name: 'Psychometric',
    slug: 'profile',
    description: `Profile your customers`,
    backgroundColor: '!bg-yellow-700',
    textColor: '!text-yellow-700',
    icon: IconBrain,
    homeLink: '/profile',
    dashboardLink: '/profile',
    status: 'coming-soon',
    categories: ['identity']
  },
  {
    name: 'Alternative data',
    slug: 'alternative-data',
    description: `Get insights from alternative data`,
    backgroundColor: '!bg-orange-700',
    textColor: '!text-orange-700',
    icon: IconDatabasePlus,
    homeLink: '/alternative-data',
    dashboardLink: '/alternative-data',
    status: 'coming-soon',
    categories: ['identity']
  },
];

const digital = [
  {
    name: 'Survey',
    slug: 'survey',
    description: `Generate and analyze surveys`,
    backgroundColor: '!bg-blue-700',
    textColor: '!text-blue-700',
    icon: IconUserQuestion,
    homeLink: '/survey',
    dashboardLink: '/survey',
    status: 'coming-soon',
    categories: ['digital-forms']
  },
  {
    name: 'Digital forms',
    slug: 'digital-forms',
    description: `Generate, fill, approve, analyze`,
    backgroundColor: '!bg-cyan-700',
    textColor: '!text-cyan-700',
    icon: IconForms,
    homeLink: '/digital-forms',
    dashboardLink: '/digital-forms',
    status: 'coming-soon',
    categories: ['digital-forms']
  },
  {
    name: 'Polls',
    slug: 'polls',
    description: `Generate and analyze polls`,
    backgroundColor: '!bg-purple-700',
    textColor: '!text-purple-700',
    icon: IconChecklist,
    homeLink: '/polls',
    dashboardLink: '/polls',
    status: 'coming-soon',
    categories: ['digital-forms']
  },
];

const macroeconomics = [
  {
    name: 'Nigeria',
    slug: 'nigeria',
    description: `Lorem ipsum dolor sit amet`,
    backgroundColor: '!bg-green-700',
    textColor: '!text-green-700',
    icon: IconFlag,
    homeLink: '/nigeria',
    dashboardLink: '/nigeria',
    status: 'coming-soon',
    categories: ['government']
  },
  {
    name: 'Africa',
    slug: 'africa',
    description: `Lorem ipsum dolor sit amet`,
    backgroundColor: '!bg-red-700',
    textColor: '!text-red-700',
    icon: IconMap,
    homeLink: '/africa',
    dashboardLink: '/africa',
    status: 'coming-soon',
    categories: ['government']
  },
  {
    name: 'World',
    slug: 'world',
    description: `Lorem ipsum dolor sit amet`,
    backgroundColor: '!bg-blue-700',
    textColor: '!text-blue-700',
    icon: IconWorld,
    homeLink: '/world',
    dashboardLink: '/world',
    status: 'coming-soon',
    categories: ['government']
  },
];

const investments = [
  {
    name: 'Investment Portfolio',
    slug: 'investment-portfolio',
    description: `Track your investments`,
    backgroundColor: '!bg-sky-700',
    textColor: '!text-sky-700',
    icon: IconBriefcase,
    homeLink: '/investment-portfolio',
    dashboardLink: '/investment-portfolio',
    status: 'coming-soon',
    categories: ['investment']
  },
  {
    name: 'Saving portfolio',
    slug: 'saving-portfolio',
    description: `Monitor your savings`,
    backgroundColor: '!bg-indigo-700',
    textColor: '!text-indigo-700',
    icon: IconReportMoney,
    homeLink: '/saving-portfolio',
    dashboardLink: '/saving-portfolio',
    status: 'coming-soon',
    categories: ['investment']
  },
];

const markets = [
  {
    name: 'Capital',
    slug: 'capital',
    description: `Get insights on your trades`,
    backgroundColor: '!bg-blue-700',
    textColor: '!text-blue-700',
    icon: IconCashBanknote,
    homeLink: '/capital',
    dashboardLink: '/capital',
    status: 'coming-soon',
    categories: ['markets']
  },
  {
    name: 'Money',
    slug: 'money',
    description: `Get insights on your trades`,
    backgroundColor: '!bg-green-700',
    textColor: '!text-green-700',
    icon: IconCurrencyNaira,
    homeLink: '/money',
    dashboardLink: '/money',
    status: 'coming-soon',
    categories: ['markets']
  },
  {
    name: 'Commodities',
    slug: 'commodities',
    description: `Get insights on your trades`,
    backgroundColor: '!bg-red-700',
    textColor: '!text-red-700',
    icon: IconBasketFilled,
    homeLink: '/commodities',
    dashboardLink: '/commodities',
    status: 'coming-soon',
    categories: ['markets']
  },
];

const insurance = [
  {
    name: 'Hospital distribution',
    slug: 'hospital-distribution',
    description: `Manage hospital distributions`,
    backgroundColor: '!bg-purple-700',
    textColor: '!text-purple-700',
    icon: IconBuildingHospital,
    homeLink: '/hospital-distribution',
    dashboardLink: '/hospital-distribution',
    status: 'coming-soon',
    categories: ['insurance']
  },
  {
    name: 'Risk assessment',
    slug: 'risk-assessment',
    description: `Perform risk assessments`,
    backgroundColor: '!bg-orange-700',
    textColor: '!text-orange-700',
    icon: IconAssembly,
    homeLink: '/risk-assessment',
    dashboardLink: '/risk-assessment',
    status: 'coming-soon',
    categories: ['insurance']
  },
];

const products = [
  ...general,
  ...lending,
  ...payments,
  ...identity,
  ...digital,
  ...macroeconomics,
  ...investments,
  ...markets,
  ...insurance,
  {
    name: 'Financial report',
    slug: 'financial-report',
    description: `Analyze financial reports in seconds`,
    backgroundColor: '!bg-indigo-700',
    textColor: '!text-indigo-700',
    icon: IconBooks,
    homeLink: '/financial-report',
    dashboardLink: '/financial-report',
    status: 'coming-soon',
    categories: ['featured'],
    type: 'document',
    summary: `Streamline decision-making and track key metrics through intuitive visualizations for smarter financial strategies`,
    features: [
      `Performance Overview`,
      `Trend Analysis`,
      `Risk Assessment`,
      `Forecast Accuracy`,
      `Profit Insights`,
      `Cost Tracking`,
      `Portfolio Health`,
    ],
    flow: [
      `Upload your financial report.`,
      `Our extraction and analysis model takes over`,
      `Engage with result via chat, infographics or API`,
      `Bambi can also help with decisioning.`,
    ]
  },
];

export const categories = [
  { id: 'featured', name: "Featured" },
  { id: 'general', name: "General" },
  { id: 'lending', name: "Lending" },
  { id: 'payments', name: "Payments" },
  { id: 'identity', name: "Identity" },
  { id: 'digital-forms', name: "Digital forms" },
  { id: 'government', name: "Government" },
  { id: 'investment', name: "Investments" },
  { id: 'markets', name: "Markets" },
  { id: 'insurance', name: "Insurance & HMO" },
];

export default products;
