import React from 'react';
import { scaleTime, scaleLinear, scaleBand } from "@vx/scale";
import { extent, max } from "d3-array";
import { LinePath } from "@vx/shape";

const LineGraph = ({posts}) => {
  console.log('LineGraph',posts)

  const width = 750;
  const height = 500;
  
  
  const padding = 20;
  const xMax = width - padding;
  const yMax = height - padding;
  
  const xSelector = d => d.date;
  const ySelector = d => d.posts;

  //TODO: WHERE ISSUE LIES?
  // const xScale = scaleTime({
  //   range: [padding, xMax],
  //   domain: extent(posts, xSelector),
  // });
  const xScale = scaleBand({
    range: [padding, xMax],
    domain: posts.map(xSelector),
    padding: 0.4,
  });

  const dataMax = max(posts, ySelector);
  const yScale = scaleLinear({
    range: [yMax, padding],
    domain: [0, dataMax + (dataMax / 3)],
  });

  return (
    <div>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="#eaedff" />
        <LinePath
          data={posts}
          xScale={xScale}
          yScale={yScale}
          x={d => xScale(xSelector(d))}
          y={d => yScale(ySelector(d))}
          strokeWidth={5}
          stroke="#000"
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
    </div>
  )

};

export default LineGraph;