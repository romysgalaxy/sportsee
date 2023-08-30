import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis
} from "recharts";

export default function SimpleRadarChart(props) {
  const { performance, kind } = props;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const data = performance.map(performance => ({
    value: performance.value,
    kindName: capitalizeFirstLetter(kind[performance.kind]),
  }));

  return (
    <RadarChart
      cx={130}
      cy={130}
      outerRadius={90}
      width={260}
      height={260}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis 
        dataKey="kindName"
        tick={{
          fontSize: 10,
          fill: "#fff",
        }}
        tickLine={false}
      />
      <PolarRadiusAxis tick={false} axisLine={false}/>
      <Radar name="Performance" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  );
}
