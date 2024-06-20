/* eslint-disable react/prop-types */
// src/DoughnutChart.js
import classNames from 'classnames';
import  { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';



const COLORS = ['#03bcc2', '#2296f3', '#f8fafd'];

const DoughnutChart = ({data}) => {
const [activeIndex, setActiveIndex] = useState(data[0])




  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className='flex flex-col gap-2 -translate-x-5'>
        {
          payload.map((entry, index) => (
            <div className='flex border rounded p-2 gap-2 items-center' key={`item-${index}`}>
                <div className={
                    classNames('w-2 h-2 rounded-full', 
                    entry.value === 'United States' && 'bg-[#03bcc2]',
                    entry.value === 'United Kingdom' && 'bg-[#2296f3]',
                    entry.value === 'Germany' && 'bg-[#f8fafd]'
                )}></div>

                <span className='text-gray-500'> {entry.value}</span>
               
            </div>
          ))
        }
      </div>
    );
  }

  const onPieClick = (_, index) => {
        setActiveIndex(data[index])
  };



  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          onClick={onPieClick}
        >
             <Label 
                value={`${activeIndex?.value}%`} position="centerBottom" className=' -translate-y-2 !mb-2 font-semibold' fontSize='27px '
                />
             
            <Label 
                value={activeIndex?.name?.toLocaleUpperCase()} position="centerTop" className='text-xs mt-1 translate-y-2 '
                />

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" content={renderLegend}  />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DoughnutChart;
