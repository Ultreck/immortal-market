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
    backgroundColor: '!bg-red-600',
    textColor: '!text-red-600',
    icon: IconEditCircle,
    homeLink: '/custom-report',
    dashboardLink: '/custom-report',
    status: 'active',
    categories: ['general', 'featured']
  },
  {
    name: 'Data assistant',
    slug: 'assistant',
    description: `An advanced embedded AI assistant`,
    backgroundColor: '!bg-blue-600',
    textColor: '!text-blue-600',
    icon: IconMessageChatbot,
    homeLink: '/assistant',
    dashboardLink: '/assistant',
    status: 'active',
    categories: ['general']
  },
];

const lending = [
  {
    name: 'Bank statement',
    slug: 'bank-statement',
    description: `Analyze any bank statement in seconds`,
    backgroundColor: '!bg-sky-600',
    textColor: '!text-sky-600',
    icon: IconFileText,
    homeLink: '/statement',
    dashboardLink: '/statement',
    status: 'active',
    categories: ['featured', 'lending']
  },
  {
    name: 'Credit Portfolio',
    slug: 'credit-portfolio',
    description: `Maintain your credit portfolio`,
    backgroundColor: '!bg-red-600',
    textColor: '!text-red-600',
    icon: IconCreditCard,
    homeLink: '/credit-portfolio',
    dashboardLink: '/credit-portfolio',
    status: 'coming-soon',
    categories: ['lending']
  },
  {
    name: 'Customer profile',
    slug: 'customer-profile',
    description: `Understand your customers`,
    backgroundColor: '!bg-yellow-600',
    textColor: '!text-yellow-600',
    icon: IconUserCircle,
    homeLink: '/customer-profile',
    dashboardLink: '/customer-profile',
    status: 'coming-soon',
    categories: ['investment', 'lending', 'insurance']
  },
  {
    name: 'Credit Modelling',
    slug: 'credit-modelling',
    description: `Model your credit score`,
    backgroundColor: '!bg-orange-600',
    textColor: '!text-orange-600',
    icon: IconChartHistogram,
    homeLink: '/credit-modelling',
    dashboardLink: '/credit-modelling',
    status: 'coming-soon',
    categories: ['lending']
  },
];

const payments = [
  {
    name: 'Invoices & Receipts',
    slug: 'invoice',
    description: `Get insights on your invoices`,
    backgroundColor: '!bg-amber-600',
    textColor: '!text-amber-600',
    icon: IconClipboardText,
    homeLink: '/invoice',
    dashboardLink: '/invoice',
    status: 'active',
    categories: ['payments', 'featured']
  },
  {
    name: 'Fraud',
    slug: 'fraud',
    description: `Detect fraudulent transactions`,
    backgroundColor: '!bg-red-600',
    textColor: '!text-red-600',
    icon: IconMasksTheater,
    homeLink: '/fraud',
    dashboardLink: '/fraud',
    status: 'coming-soon',
    categories: ['payments']
  },
];

const identity = [
  {
    name: 'Government IDs',
    slug: 'govt-id',
    description: `Analyze government ids in seconds`,
    backgroundColor: '!bg-teal-600',
    textColor: '!text-teal-600',
    icon: IconId,
    homeLink: '/govt-id',
    dashboardLink: '/govt-id',
    status: 'coming-soon',
    categories: ['identity']
  },
  {
    name: 'Social analytics',
    slug: 'social-analytics',
    description: `Get insights on your social media`,
    backgroundColor: '!bg-blue-600',
    textColor: '!text-blue-600',
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
    backgroundColor: '!bg-yellow-600',
    textColor: '!text-yellow-600',
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
    backgroundColor: '!bg-orange-600',
    textColor: '!text-orange-600',
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
    backgroundColor: '!bg-blue-600',
    textColor: '!text-blue-600',
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
    backgroundColor: '!bg-cyan-600',
    textColor: '!text-cyan-600',
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
    backgroundColor: '!bg-purple-600',
    textColor: '!text-purple-600',
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
    backgroundColor: '!bg-green-600',
    textColor: '!text-green-600',
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
    backgroundColor: '!bg-red-600',
    textColor: '!text-red-600',
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
    backgroundColor: '!bg-blue-600',
    textColor: '!text-blue-600',
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
    backgroundColor: '!bg-sky-600',
    textColor: '!text-sky-600',
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
    backgroundColor: '!bg-indigo-600',
    textColor: '!text-indigo-600',
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
    backgroundColor: '!bg-blue-600',
    textColor: '!text-blue-600',
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
    backgroundColor: '!bg-green-600',
    textColor: '!text-green-600',
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
    backgroundColor: '!bg-red-600',
    textColor: '!text-red-600',
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
    backgroundColor: '!bg-purple-600',
    textColor: '!text-purple-600',
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
    backgroundColor: '!bg-orange-600',
    textColor: '!text-orange-600',
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
    backgroundColor: '!bg-indigo-600',
    textColor: '!text-indigo-600',
    icon: IconBooks,
    homeLink: '/financial-report',
    dashboardLink: '/financial-report',
    status: 'active',
    categories: ['featured']
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
