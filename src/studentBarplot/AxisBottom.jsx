export default function AxisBottom({ axisX, innerWidth, innerHeight }) {
  const ticks = axisX.ticks(5);
  return (
    <g transform={`translate(0, ${innerHeight})`}>
      <line x1={0} x2={innerWidth} stroke="black" />
      {ticks.map((tick) => (
        <g key={tick} transform={`translate(${axisX(tick)}, 0)`}>
          <line y2={6} stroke="black" />
          <text y={9} dy="0.71em" textAnchor="middle" fontSize="10px">
            {tick}
          </text>
        </g>
      ))}
    </g>
  );
}
