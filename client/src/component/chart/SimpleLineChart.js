import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default function SimpleLineChart(props) {
  const { sessions } = props;

  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  const data = sessions.map(session => ({
    day: daysOfWeek[session.day - 1],
    sessionLength: session.sessionLength,
  }));

  return (
    <LineChart 
      width={260}
      height={180}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid 
        strokeDasharray="3 3" 
        style={{ display: "none" }}
      />
      <XAxis 
        dataKey="day" 
        axisLine={false} 
        tickLine={false} 
        tick={{ fill: "#fff", fontSize: 12 }} 
      />
      <YAxis 
        domain={[-10, 60]} 
        axisLine={false} 
        tickLine={false} 
        tick={false} 
        width={0}
      />
      <Tooltip
        cursor={{ stroke: "transparent" }}
        content={({ payload }) => {
          if (payload && payload.length) {
            const data = payload[0].payload;
            return (
              <div className="session_tooltip">
                <p>{data.sessionLength} min</p>
              </div>
            );
          }
          return null;
        }}
      />
      <Line 
        dataKey="sessionLength" 
        type="bumpX" 
        stroke="#fff" 
        fill="#fff" 
        dot={false}
      />
    </LineChart>
  );
}
