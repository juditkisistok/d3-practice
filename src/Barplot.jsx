import AxisBottom from "./assets/AxisBottom";
import { useState } from "react";

export default function Barplot({ data, width, height, axisY, axisX, margin }) {
  const [hovered, setHovered] = useState(null);
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          axisX={axisX}
          innerWidth={width - margin.left - margin.right}
          innerHeight={height - margin.top - margin.bottom}
        />

        {data.map((d) => (
          <g
            key={d.country}
            onMouseEnter={() => setHovered(d.country)}
            onMouseLeave={() => setHovered(null)}
          >
            <text
              x={-12}
              y={axisY(d.country) + axisY.bandwidth() / 2}
              textAnchor="end"
              dominantBaseline="middle"
            >
              {d.country}
            </text>
            <rect
              key={d.country}
              x={0}
              y={axisY(d.country)}
              width={axisX(d.students)}
              height={axisY.bandwidth()}
              fill="#96929c"
              rx={3}
            />
          </g>
        ))}
        {hovered &&
          (() => {
            const d = data.find((d) => d.country === hovered);
            const x = axisX(d.students);
            const y = axisY(hovered) + axisY.bandwidth() / 2;
            return (
              <g>
                <path
                  d={`M ${x + 4} ${y} C ${x + 15} ${y - 12}, ${x + 15} ${y + 12}, ${x + 28} ${y}`}
                  fill="none"
                  className="tooltip-line"
                />
                <text x={x + 32} y={y} className="tooltip">
                  {d.students}
                </text>
              </g>
            );
          })()}
      </g>
    </svg>
  );
}
