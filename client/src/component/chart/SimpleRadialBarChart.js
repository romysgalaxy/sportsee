import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

const data = [
    {
      name: "Score",
      uv: 0, // Placeholder value, will be updated
      fill: "#8884d8"
    },
    {
      name: "Base",
      uv: 100,
      fill: "#8884d8"
    }
  ];

export default function SimpleRadialBarChart(props) {
    const { score } = props;
    const todayScorePercentage = score.todayScore * 100;
    console.log('score', score)
    console.log('todayScorePercentage', todayScorePercentage)
    data[0].uv = todayScorePercentage;

  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={50}
      outerRadius={80}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
