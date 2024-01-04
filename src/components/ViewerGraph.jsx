import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ViewerGraph() {
  const data = [
    { visitor: 79, day: "Mon" },
    { visitor: 48, day: "Tue" },
    { visitor: 35, day: "Wed" },
    { visitor: 50, day: "Thu" },
    { visitor: 33, day: "Fri" },
    { visitor: 19, day: "Sat" },
    { visitor: 95, day: "Sun" },
  ];

  return (
    <>
      <BarChart
        margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
        width={360}
        height={250}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis axisLine={false} tickLine={false} dataKey="day" />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />

        <Bar dataKey="visitor" barSize={7} fill="#8884d8" />
      </BarChart>
    </>
  );
}
