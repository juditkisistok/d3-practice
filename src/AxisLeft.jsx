export default function AxisLeft({ axisY }) {
  const countryNames = axisY.domain();
  return (
    <>
      {countryNames.map((country) => (
        <text
          key={country}
          y={axisY(country) + axisY.bandwidth() / 2}
          x={-12}
          textAnchor="end"
          dominantBaseline="middle"
        >
          {country}
        </text>
      ))}
    </>
  );
}
