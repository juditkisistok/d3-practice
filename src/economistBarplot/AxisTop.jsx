export default function AxisTop({ axisX, innerWidth, innerHeight }) {
  const ticks = axisX.ticks(10);
  return (
    <g>
      {ticks.map((tick) => (
        <g key={tick} transform={`translate(${axisX(tick)}, 0)`}>
          <line
            y1={14}
            y2={innerHeight - 14}
            stroke={tick === 0 ? "#000" : "#808080"}
            opacity={tick === 0 ? 1 : 0.2}
          />
          <text y={7} textAnchor="middle" fontSize="12px" fill="#808080">
            {tick}
          </text>
        </g>
      ))}
    </g>
  );
}
