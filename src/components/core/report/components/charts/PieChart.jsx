import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from '@/components/ui/Card.jsx';

const google = window['google'];

const PieChart = ({ title, caption, data }) => {
  const pieChartRef = useRef();

  useEffect(() => {
    if (google) {
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        const _data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ...data.map((i) => [i.label, +i.value]),
        ]);
        const options = {
          legend: 'none',
          pieSliceText: 'label',
          slices: {
            1: { offset: 0.06 },
            3: { offset: 0.06 },
          },
          backgroundColor: 'transparent',
          chartArea: {
            left: 20,
            top: 20,
            bottom: 20,
            width: '100%',
            height: '100%',
          },
        };
        const chart = new google.visualization.PieChart(pieChartRef.current);
        chart.draw(_data, options);
      }
    }
  }, [data]);

  return (
    <Card className="overflow-hidden w-full">
      <h3 className="text-2xl font-semibold mb-10 w-10/12">{title}</h3>
      <div
        className="h-[300px] md:h-[400px] w-[300px] md:w-[400px] flex justify-start overflow-hidden"
        ref={pieChartRef}
      ></div>
      <p className="text-md opacity-75 mt-10">{caption}</p>
    </Card>
  );
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default PieChart;
