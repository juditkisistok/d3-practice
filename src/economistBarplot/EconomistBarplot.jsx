import * as d3 from "d3";
import "./economistBarplot.css";
import { data, width, height, barColor } from "./Constants";
import AxisTop from "./AxisTop";

export default function EconomistBarplot() {
  // sort data by count in descending order
  // if two diseases have the same count, sort them alphabetically by name

  data.sort((a, b) => {
    if (b.count !== a.count) {
      return b.count - a.count;
    }
    return d3.ascending(a.name, b.name);
  });

  // set up scales
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.count)])
    .range([0, width])
    .nice();

  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, height])
    .padding(0.4);

  // create bars
  const allBars = data.map((d, i) => (
    <rect
      key={i}
      x={0}
      y={yScale(d.name)}
      width={xScale(d.count)}
      height={yScale.bandwidth()}
      fill={barColor}
    />
  ));

  const allLabels = data.map((d, i) => (
    <text
      key={i}
      x={d.count > 7 ? 5 : xScale(d.count) + 5}
      y={yScale(d.name) + yScale.bandwidth() / 2}
      alignmentBaseline="middle"
      fontSize="14px"
      fill={d.count > 7 ? "#fff" : barColor}
    >
      {d.name}
    </text>
  ));

  const topLine = (
    <line
      x1={0}
      y1={0}
      x2={width - 50}
      y2={0}
      stroke="rgb(229, 1, 28)"
      strokeWidth={1}
    />
  );

  const topBox = (
    <rect x={0} y={0} width={40} height={10} fill="rgb(229, 1, 28)" />
  );

  return (
    <div className="economist-barplot">
      <svg width={width} height={10} overflow={"visible"}>
        <g>
          {topLine}
          {topBox}
        </g>
      </svg>
      <h1>Escape artists</h1>
      <p>Number of laboratory-acquired infections, 1970-2021</p>
      <svg width={width} height={height} overflow={"visible"}>
        <g>
          <AxisTop axisX={xScale} innerWidth={width} innerHeight={height} />
          {allBars}
          {allLabels}
        </g>
      </svg>
      <div className="source-box">
        <p className="source">
          Sources: Laboratory-Acquired Infection Database; American Biological
          Safety Association
        </p>
        <p className="source">The Economist</p>
      </div>
    </div>
  );
}
