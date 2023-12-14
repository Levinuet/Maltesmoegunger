function createLineChart(data, xAxis, yAxis, svg, styling) {
  const { width, height, marginLeft, marginBottom, marginRight, marginTop } =
    styling;

  // Declare the x (horizontal position) scale
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d[xAxis]))
    .range([marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[yAxis])])
    .range([height - marginBottom, marginTop]);

  // Declare the line generator.
  const line = d3
    .line()
    .x((d) => xScale(d[xAxis]))
    .y((d) => yScale(d[yAxis]));

  // Create or select SVG
  svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Append a path for the line.
  const path = svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line(data));

  // Animation: Drawing the line
  path
    .attr("stroke-dasharray", function () {
      const length = this.getTotalLength();
      return length + " " + length;
    })
    .attr("stroke-dashoffset", function () {
      const length = this.getTotalLength();
      return length;
    })
    .transition()
    .duration(4000) // Animation duration in milliseconds
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);

  // Add the x-axis with custom tick format to remove commas
  svg
    .append("g")
    .attr("class", "x-axis") // Add the class "x-axis"
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(
      d3
        .axisBottom(xScale)
        .ticks(width / 100)
        .tickSizeOuter(0)
        .tickFormat(d3.format("d")) // Use "d" format specifier for integers without commas
    );

  // Add the y-axis, remove the domain line, add grid lines and a label.
  svg
    .append("g")
    .attr("class", "y-axis") // Add the class "y-axis"
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(yScale).ticks(height / 40))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1)
    )
    .call((g) =>
      g
        .append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text(`↑ ${yAxis} values`)
    );

  return svg.node();
}
