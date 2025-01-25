import TenSquares from './charts/10Squares';
import TenCircles from './charts/10Circles';
import PercentageAlone from './charts/PercentageAlone';
import { Card } from '@heroui/react';
import { register } from 'swiper/element/bundle';
import NewVerticalBar from './charts/NewVerticalBar';
import CircleIcons from './charts/CircleIcons';
import Infographics from './charts/Infographics';
import MultipleBars from './charts/MultipleBars';
import RosePieChart from './charts/RosePieChart';
import FunnelChart from './charts/FunnelChart';
import TreeMap from './charts/TreeMap';
import ScatterLifeExpectancyChart from './charts/ScatterLifeExpentancy';
import LifeExpectancyChart from './charts/LifeExpentanceChart';
import VerticalStackedBar from './charts/StackedBar';
import SimpleGuageChart from './charts/SimpleGuageChart';
import SpeedometerGauge from './charts/Speedometer';
import GaugeChart from './charts/GuageChart';
import TangentialPolarBarChart from './charts/TangentPolarBarChart';
import SemiCircle from './charts/SemiCircle';
import DoughNuts from './charts/DoughNuts';
import NewPieChart from './charts/NewPieChart';
import AgeDistribution from './charts/AgeDistribution';
import MultiSquare from './charts/Multisquare';
import SeasonalChart from './charts/SeasonalChart';
import PyramidChart from './charts/PyramidChart';
import ComposedCharts from './charts/ComposedChart';
import AreaCharts from './charts/AreaChart';
import CandyBarChart from './charts/CandyBar';
import THreeCircles from './charts/3Circles';
import DynamicSortingChart from './charts/DynamicSortingChart';
import AltPieChart from './charts/AltPieChart';
import GenderStats from './charts/GenderStat';

register();

const data = [
  { id: 1, label: 'Bubble 1', value: 30, color: '#FF6384', icon: 'fa fa-user' },
  { id: 2, label: 'Bubble 2', value: 50, color: '#36A2EB', icon: 'fa fa-house' },
  { id: 3, label: 'Bubble 3', value: 20, color: '#FFCE56', icon: 'fa fa-check' },
  { id: 4, label: 'Bubble 4', value: 40, color: '#9966FF', icon: 'fa fa-bell' },
  { id: 5, label: 'Bubble 5', value: 60, color: '#4BC0C0', icon: 'fa fa-star' },
  { id: 5, label: 'Bubble 5', value: 10, color: '#4BC0C0', icon: 'fa fa-music' },
  { id: 5, label: 'Bubble 5', value: 70, color: '#4BC0C0', icon: 'fa fa-gamepad' },
  { id: 5, label: 'Bubble 5', value: 15, color: '#4BC0C0', icon: 'fa fa-film' },
];

const ReportBody = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <PercentageAlone />
          <div className="space-y-6">
            <TenSquares percentage={65} />
            <TenCircles percentage={35} />
          </div>
          <SpeedometerGauge />
          <TangentialPolarBarChart />
          <VerticalStackedBar />
          <NewPieChart />
          <AltPieChart />
        </div>
        <div className="space-y-6">
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
          <SimpleGuageChart />
          <GaugeChart />
          <SemiCircle />
          <DoughNuts />
        </div>
        <FunnelChart />
        <RosePieChart />
      </div>
      <CircleIcons data={data} />
      <GenderStats />
      <DynamicSortingChart />
      <THreeCircles />
      <MultipleBars />
      <CandyBarChart />
      <AreaCharts />
      {/*<VennDiagramChart />*/}
      {/*<TwoCircleVennDiagram />*/}
      <AgeDistribution />
      <MultiSquare />
      <SeasonalChart />
      <PyramidChart />
      <ComposedCharts />
      <TreeMap />
      <ScatterLifeExpectancyChart />
      <LifeExpectancyChart />
    </>
  );
};

export default ReportBody;
