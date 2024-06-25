import { Card } from '@nextui-org/react';
import Infographic from '../../../shared/Infographic';

const data = {
  title: "Apple's Quarterly Revenue Breakdown",
  caption:
    "Apple's revenue performance across key product segments, highlighting the decline in iPhone sales and the growth in services and iPad divisions.",
  source: 'Company financial reports',
  data: [
    {
      label: 'iPhone',
      content:
        'iPhone revenue declined by 10.5% year-over-year, reflecting the ongoing challenges in the smartphone market.',
      icon: 'fa fa-mobile',
      _id: '667453b0571833fd96f4f2fa',
      id: '667453b0571833fd96f4f2fa',
    },
    {
      label: 'Services',
      content:
        "Apple's services segment, including the App Store, Apple Music, and iCloud, saw a double-digit increase in revenue, showcasing the company's efforts to diversify its income streams.",
      icon: 'fa fa-chart-line',
      _id: '667453b0571833fd96f4f2fb',
      id: '667453b0571833fd96f4f2fb',
    },
    {
      label: 'iPad',
      content:
        'iPad sales also experienced a strong double-digit growth, as the company continues to innovate in the tablet market.',
      icon: 'fa fa-tablet',
      _id: '667453b0571833fd96f4f2fc',
      id: '667453b0571833fd96f4f2fc',
    },
    {
      label: 'iPhone',
      content:
        'iPhone revenue declined by 10.5% year-over-year, reflecting the ongoing challenges in the smartphone market.',
      icon: 'fa fa-mobile',
      _id: '667453b0571833fd96f4f2fa',
      id: '667453b0571833fd96f4f2fa',
    },
    {
      label: 'Services',
      content:
        "Apple's services segment, including the App Store, Apple Music, and iCloud, saw a double-digit increase in revenue, showcasing the company's efforts to diversify its income streams.",
      icon: 'fa fa-chart-line',
      _id: '667453b0571833fd96f4f2fb',
      id: '667453b0571833fd96f4f2fb',
    },
    {
      label: 'iPad',
      content:
        'iPad sales also experienced a strong double-digit growth, as the company continues to innovate in the tablet market.',
      icon: 'fa fa-tablet',
      _id: '667453b0571833fd96f4f2fc',
      id: '667453b0571833fd96f4f2fc',
    },
  ],
  _id: '667453b0571833fd96f4f2f9',
  id: '667453b0571833fd96f4f2f9',
};

const Infographics = () => {
  return (
    <Card className="space-y-6 w-full bg-default-50 px-8 py-6">
      <p className="text-4xl font-bold">What did they do?</p>
      <div>
        <Infographic type="htd" data={data} />
      </div>
    </Card>
  );
};

export default Infographics;
