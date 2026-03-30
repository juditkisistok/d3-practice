import Barplot from "./Barplot";
import * as d3 from "d3";
import "../App.css";
import {
  innerWidth,
  innerHeight,
  width,
  height,
  data,
  margin,
} from "./Constants";

export default function StudentBarplot() {
  const axisY = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, innerHeight])
    .padding(0.1);

  const axisX = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students)])
    .range([0, innerWidth])
    .nice();
  return (
    <div>
      <h1>
        D3{" "}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          style={{
            display: "inline",
            verticalAlign: "middle",
            marginBottom: "3px",
          }}
        >
          <path
            fill="#c26b5a"
            d="M12 21.6C6.4 16 1 11.3 1 7.2 1 3.4 4.1 2 6.3 2c1.3 0 4.2.5 5.7 4.5C13.6 2.5 16.5 2 17.7 2c2.5 0
  5.3 1.6 5.3 5.2 0 4.1-5.1 8.6-11 14.4z"
          />
        </svg>{" "}
        React students around the world
      </h1>
      <Barplot
        data={data}
        axisY={axisY}
        axisX={axisX}
        width={width}
        height={height}
        margin={margin}
      />
    </div>
  );
}
