'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'JSS1', score: 65 },
  { name: 'JSS2', score: 72 },
  { name: 'SS1', score: 84 },
  { name: 'SS2', score: 79 },
];

const Barchart = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full md:w-[500px]">
      <h3 className="text-lg font-bold mb-4 text-center">
        Student Performance Overview
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
