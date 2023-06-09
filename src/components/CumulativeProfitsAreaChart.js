"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import randomColor from 'randomcolor';

const CumulativeProfitsAreaChart = ({ portfolioValuePerDay }) => {
  const data = portfolioValuePerDay.map(({ date, profits }) => ({
    date,
    ...profits,
  }));

  const colors = randomColor({
    count: Object.keys(data[0]).filter((key) => key !== 'date').length,
    luminosity: 'bright', // Use 'dark' for darker colors
    format: 'rgb',
  });

  return (
    <AreaChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.keys(data[0])
        .filter((key) => key !== 'date')
        .map((company, index) => (
          <Area
            key={company}
            dataKey={company}
            stackId="profits"
            stroke={colors[index]}
            fill={colors[index]}
          />
        ))}
    </AreaChart>
  );
};

export default CumulativeProfitsAreaChart;
