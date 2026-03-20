import AxisBottom from "./assets/AxisBottom";
import AxisLeft from "./AxisLeft";

export default function Barplot({ data, width, height, axisY, axisX, margin }) {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          axisX={axisX}
          innerWidth={width - margin.left - margin.right}
        />
        <AxisLeft axisY={axisY} />
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
