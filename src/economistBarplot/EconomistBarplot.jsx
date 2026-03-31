import * as d3 from "d3";
import "../App.css";
import { data, width, height, barColor } from "./Constants";

export default function EconomistBarplot() {
  // sort data by count in descending order
  data.sort((a, b) => b.count - a.count);

  // set up scales
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.count)])
    .range([0, width]);

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

  return (
    <svg width={width} height={height}>
      {allBars}
    </svg>
  );
}
