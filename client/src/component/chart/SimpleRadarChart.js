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
  console.log('performance', performance)
  console.log('kind', kind)

  const data = performance.map(performance => ({
    value: performance.value,
    kindName:  kind[performance.kind],
  }));


  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kindName" />
      <PolarRadiusAxis />
      <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}
