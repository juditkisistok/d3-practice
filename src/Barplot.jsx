import * as d3 from "d3";
import { width, height, data } from "./Constants";

export default function Barplot({
  data,
  width = 500,
  height = 400,
  axisY,
  axisX,
}) {
  return (
    <svg width={width} height={height}>
      {data.map((d) => (
        <rect
          key={d.country}
          x={0}
          y={axisY(d.country)}
          width={axisX(d.students)}
          height={axisY.bandwidth()}
          fill="steelblue"
        />
      ))}
    </svg>
  );
}
