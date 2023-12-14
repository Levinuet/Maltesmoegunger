function createLineChart(data, xAxis, yAxis, svg, styling) {
  // Increase overall SVG width to accommodate the legend
  const legendWidth = 200; // Increase this as needed
  const { width, height, marginLeft, marginBottom, marginRight, marginTop } =
    styling;
  const totalWidth = width + legendWidth; // Total width including legend

  data.sort((a, b) => a[xAxis] - b[xAxis]);

  // Group data by the 'name' property
  const sumstat = d3.group(data, (d) => d.name);
  // Color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

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

  // Create or select SVG with the new totalWidth
  svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", totalWidth) // Use totalWidth here
    .attr("height", height);

  // Loop through each name / key to draw and animate the lines
  sumstat.forEach((values, name) => {
    // Declare the line generator for each group
    const line = d3
      .line()
      .x((d) => xScale(d[xAxis]))
      .y((d) => yScale(d[yAxis]));

    const path = svg
      .append("path")
      .datum(values)
      .attr("fill", "none")
      .attr("stroke", color(name)) // Use the color scale for the stroke
      .attr("stroke-width", 3) // Increased stroke width for thicker lines
      .attr("d", line);

    // Calculate the total length of the path for the animation
    const totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(3000) // Set the duration of the animation
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
          .text("Skovudvidelse i 1000 hektar")
      );

    // Adding the legend
    const legend = svg
      .selectAll(".legend")
      .data(sumstat.keys())
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", function (d, i) {
        return "translate(" + (width + 50) + "," + (i * 20 + marginTop) + ")";
      });

    // Draw the legend's colored rectangles
    legend
      .append("rect")
      .attr("x", 0)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", (name) => color(name));

    // Draw the legend's text
    legend
      .append("text")
      .attr("x", 20) // Position the text right of the colored rectangles
      .attr("y", 5)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text((name) => name);
    return svg.node();
  });
}
