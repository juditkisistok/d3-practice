import * as d3 from "d3";

export default function Barplot({ data, width, height, axisY, axisX, margin }) {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
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
      </g>
    </svg>
  );
}
