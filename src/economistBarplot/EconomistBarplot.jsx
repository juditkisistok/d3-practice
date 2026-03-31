import * as d3 from "d3";
import "./economistBarplot.css";
import { data, width, height, barColor } from "./Constants";
import AxisTop from "./AxisTop";
import EconomistHeader from "./EconomistHeader";
import { Link } from "react-router-dom";

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
    .paddingInner(0.4)
    .paddingOuter(0.1);

  // create bars
  const allBars = data.map((d, i) => {
    const y = yScale(d.name);
    if (y === undefined) return null;

    return (
      <g key={i}>
        <rect
          key={i}
          x={0}
          y={y}
          width={xScale(d.count)}
          height={yScale.bandwidth()}
          fill={barColor}
        />

        <text
          key={i}
          x={d.count > 7 ? 7 : xScale(d.count) + 5}
          y={y + yScale.bandwidth() / 2}
          alignmentBaseline="middle"
          fontSize="14px"
          fill={d.count > 7 ? "#fff" : barColor}
          opacity={d.count > 7 ? 0.9 : 1}
        >
          {d.name}
        </text>
      </g>
    );
  });

  return (
    <div className="economist-barplot">
      <svg width={width} height={10} overflow="visible">
        <EconomistHeader width={width} />
      </svg>
      <h1>Escape artists</h1>
      <p>Number of laboratory-acquired infections, 1970-2021</p>
      <svg width={width} height={height} overflow={"visible"}>
        <g>
          <AxisTop axisX={xScale} height={height} />
          {allBars}
        </g>
      </svg>
      <div className="source-box">
        <p className="source">
          Sources: Laboratory-Acquired Infection Database; American Biological
          Safety Association
        </p>
        <p className="source">The Economist</p>
      </div>
      <Link to="/">← back</Link>
    </div>
  );
}
