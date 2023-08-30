import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function SimpleBarChart(props) {
  const { sessions } = props;

  const data = sessions.map((session, index) => ({
    index: index + 1,
    "Poids (kg)": session.kilogram,
    "Calories": session.calories,
  }));

  const customTickStyle = {
    fontSize: 14,
    color: "#9B9EAC",
  };

  const legendFormatter = (value) => {
    return <span style={{ color: "#74798C", fontSize:"14px"}}>{value}</span>;
  };

  return (
    <BarChart 
      width={800}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barGap={8}
    >
      <CartesianGrid 
        strokeDasharray="3 3"
        vertical={false}
      />
      <XAxis 
        dataKey="index"
        tickLine={false}
        tick={customTickStyle}
      />
      <YAxis 
        orientation="right" 
        tickCount={3}
        axisLine={false} 
        tickLine={false} 
        tick={customTickStyle}
      />
      <Tooltip
        content={({ payload }) => {
          if (payload && payload.length) {
            const data = payload[0].payload;
            return (
              <div className="activity_tooltip">
                <p>{data["Poids (kg)"]}kg</p>
                <p>{data.Calories}Kcal</p>
              </div>
            );
          }
          return null;
        }}
      />
      <Legend 
        align="right" 
        verticalAlign="top" 
        wrapperStyle={{ marginTop: "-40px"}} 
        iconType="circle" 
        iconSize={8}
        formatter={legendFormatter}
      />
      <Bar 
        dataKey="Poids (kg)" 
        fill="#282D30" 
        barSize={7} 
        radius={[8, 8, 0, 0]} 
      />
      <Bar 
        dataKey="Calories" 
        fill="#E60000" 
        barSize={7} 
        radius={[8, 8, 0, 0]}
      />
    </BarChart>
  );
}
