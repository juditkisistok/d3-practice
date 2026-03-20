import AxisBottom from "./assets/AxisBottom";
import AxisLeft from "./AxisLeft";

export default function Barplot({ data, width, height, axisY, axisX, margin }) {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          axisX={axisX}
          innerWidth={width - margin.left - margin.right}
          innerHeight={height - margin.top - margin.bottom}
        />
        <AxisLeft axisY={axisY} />
        {data.map((d) => (
          <rect
            key={d.country}
            x={0}
            y={axisY(d.country)}
            width={axisX(d.students)}
            height={axisY.bandwidth()}
            fill="#96929c"
            rx={3}
          />
        ))}
      </g>
    </svg>
  );
}
