import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function SimpleLineChart(props) {
  const { sessions } = props;

  const data = sessions.map(session => ({
    day: session.day,
    sessionLength: session.sessionLength,
  }));

  return (
    <LineChart 
      width={800}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line dataKey="sessionLength" fill="#8884d8" />
    </LineChart>
  );
}
