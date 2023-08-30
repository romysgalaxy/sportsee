import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

export default function SimpleRadialBarChart(props) {
  const data = [
    {
      name: "Score",
      uv: 0, // Placeholder value, will be updated
      fill: "#FF0000",
    },
    {
      name: "Base",
      uv: 100,
      fill: "rgba(0, 0, 0, 0)",
    },
  ];

  const { score } = props;
  const todayScorePercentage = score.todayScore * 100;
  data[0].uv = todayScorePercentage;

  const middleX = 80; // X-coordinate of the center
  const middleY = 80; // Y-coordinate of the center

  return (
    <div>
      <RadialBarChart
        width={160}
        height={160}
        cx={middleX}
        cy={middleY}
        innerRadius={150}
        outerRadius={0}
        barSize={10}
        startAngle={180}
        endAngle={-180}
        data={data}
      >
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="uv"
        />
      </RadialBarChart>
      <p className="score_pourcentage">{todayScorePercentage}%</p>
      <p className="score_text">
        de votre
        <br />
        objectif
      </p>
    </div>
  );
}
