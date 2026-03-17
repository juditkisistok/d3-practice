import Barplot from "./Barplot";
import * as d3 from "d3";
import { width, height, data } from "./Constants";

export default function App() {
  const axisY = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, height])
    .padding(0.1);

  const axisX = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students)])
    .range([0, width]);
  return (
    <div>
      <Barplot
        data={data}
        axisY={axisY}
        axisX={axisX}
        width={width}
        height={height}
      />
    </div>
  );
}
