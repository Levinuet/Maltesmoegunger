function createStackedChart(data, yAxisLabel, xAxisLabel, svg, styling) {
  const { width, height, marginTop, marginRight, marginBottom, marginLeft } =
    styling;

  // Sets up the keys for the series that is going to be stacked
  const keys = Object.keys(data[0]).filter(
    (key) => !["name", "iso3", "year"].includes(key)
  );

  // Configure the D3 stack layout with the specified keys
  const series = d3.stack().keys(keys).offset(d3.stackOffsetExpand)(data);

  // Prepare the scales for positional and color encodings.
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.year))
    .range([marginLeft, width - marginRight])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([height - marginBottom, marginTop]);

  const color = d3.scaleOrdinal().domain(keys).range(d3.schemeSet1);

  // Construct an area shape.
  const area = d3
    .area()
    .x((d) => xScale(d.data.year))
    .y0((d) => yScale(d[0]))
    .y1((d) => yScale(d[1]));

  // Create new SVG
  svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Append a path for each series.
  svg
    .append("g")
    .selectAll()
    .data(series)
    .join("path")
    .attr("fill", (d) => color(d.key))
    .attr("d", area)
    .append("title")
    .text((d) => d.key);

  // Axes
  const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 80, "%");

  // Append the x-axis
  svg
    .append("g")
    .attr("transform", `translate(-56,${height - marginBottom})`)
    .call(xAxis)
    .call((g) => g.select(".domain").remove())
    .append("text")
    .attr("x", width - marginRight)
    .attr("y", -6)
    .attr("text-anchor", "start")
    .attr("fill", "currentColor");

  // Append the y-axis
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .append("text")
    .attr("x", 6)
    .attr("y", marginTop)
    .attr("text-anchor", "start")
    .attr("fill", "currentColor");

  // Legend setup
  const legend = svg
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "start") // Change text-anchor to start
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(0,${i * 20})`);

  legend
    .append("rect")
    .attr("x", width - 135)
    .attr("width", 25)
    .attr("height", 25)
    .attr("fill", color);

  legend
    .append("text")
    .attr("x", width - 110) // Adjust x position to be to the right of the square
    .attr("y", 12.5)
    .attr("dy", "0.32em")
    .style("font-size", "16px") // Change the font size as needed
    .text((d) => d);

  // Return the chart with the color scale as a property (for the legend).
  return Object.assign(svg.node(), { scales: { color } });
}
