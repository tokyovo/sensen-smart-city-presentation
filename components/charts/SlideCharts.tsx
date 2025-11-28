import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { StatData } from '../types';

interface ChartProps {
  data: StatData;
}

export const SlideChart: React.FC<ChartProps> = ({ data }) => {
  if (!data.chartData) return null;

  const renderChart = () => {
    switch (data.chartType) {
      case 'bar':
        return (
          <BarChart data={data.chartData}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis hide />
            <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data.chartData}
              innerRadius={40}
              outerRadius={60}
              paddingAngle={5}
              dataKey="value"
            >
              {data.chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill || '#0ea5e9'} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      case 'area':
        return (
          <AreaChart data={data.chartData}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#0ea5e9" fill="#e0f2fe" />
          </AreaChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-40 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart() || <div />}
      </ResponsiveContainer>
    </div>
  );
};