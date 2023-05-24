import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PortfolioValueLineChart = ({ portfolioValuePerDay }) => {
  const data = portfolioValuePerDay.map(({ date, total }) => ({
    date,
    total: parseFloat(total),
  }));

  const lowestValue = Math.min(...data.map((entry) => entry.total));
  const yAxisDomain = [lowestValue - 100, 'auto'];

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis domain={yAxisDomain} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="total" name="Portfolio Value" stroke="#8884d8" />
    </LineChart>
  );
};

export default PortfolioValueLineChart;
