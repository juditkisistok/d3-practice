export default function AxisTop({ axisX, innerHeight }) {
  const ticks = axisX.ticks(10);
  return (
    <g>
      {ticks.map((tick) => (
        <g key={tick} transform={`translate(${axisX(tick)}, 0)`}>
          <line
            y1={0}
            y2={innerHeight}
            stroke={tick === 0 ? "#000" : "#808080"}
            opacity={tick === 0 ? 1 : 0.2}
          />
          <text y={-10} textAnchor="middle" fontSize="12px" fill="#808080">
            {tick}
          </text>
        </g>
      ))}
    </g>
  );
}
