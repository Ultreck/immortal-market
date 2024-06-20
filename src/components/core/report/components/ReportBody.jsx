import React from 'react';
import TenSquares from './charts/10Squares';
import TenCircles from './charts/10Circles';
import PercentageAlone from './charts/PercentageAlone';
import { Card } from '@nextui-org/react';
import { register } from 'swiper/element/bundle';
import NewVerticalBar from './charts/NewVerticalBar';
import CircleIcons from './charts/CircleIcons';
import Infographics from './charts/Infographics';
import MultipleBars from './charts/MultipleBars';
register();

const data = [
  { id: 1, label: 'Bubble 1', value: 30, color: '#FF6384', icon: 'fa-solid fa-user' },
  { id: 2, label: 'Bubble 2', value: 50, color: '#36A2EB' },
  { id: 3, label: 'Bubble 3', value: 20, color: '#FFCE56' },
  { id: 4, label: 'Bubble 4', value: 40, color: '#9966FF' },
  { id: 5, label: 'Bubble 5', value: 60, color: '#4BC0C0' },
  { id: 5, label: 'Bubble 5', value: 10, color: '#4BC0C0' },
  { id: 5, label: 'Bubble 5', value: 70, color: '#4BC0C0' },
  { id: 5, label: 'Bubble 5', value: 15, color: '#4BC0C0' },
];

const ReportBody = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <PercentageAlone />
              <Card className="space-y-6 w-full bg-default-50 px-8 py-6 h-[200px] mt-5"></Card>
              <Card className="space-y-6 w-full bg-default-50 px-8 py-6 h-[200px] mt-5"></Card>
            </div>
            <div className="space-y-4">
              <TenSquares percentage={65} />
              <TenCircles percentage={35} />
            </div>
          </div>
        <MultipleBars />
        </div>
        <div>
          <Card className="space-y-6 w-full bg-default-50 px-8 py-6">
            <p className="text-4xl font-bold">Top 25 result</p>
            <div className="w-full">
              <swiper-container slides-per-view="1.1" space-between="10" loop="true">
                <swiper-slide>
                  <NewVerticalBar title="Top 25 result" caption="Top 25 result" data={data} unit="%" />
                </swiper-slide>
                <swiper-slide>
                  {' '}
                  <CircleIcons data={data} />{' '}
                </swiper-slide>
                <swiper-slide>
                  <NewVerticalBar title="Top 25 result" caption="Top 25 result" data={data} unit="%" />
                </swiper-slide>
              </swiper-container>
            </div>
          </Card>
          <Infographics />
        </div>
      </div>
    </div>
  );
};

export default ReportBody;

