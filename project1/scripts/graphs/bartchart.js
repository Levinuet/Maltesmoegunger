function createBartChart(data, yAxis, xAxis, svg, styling) {
  const { width, height, marginTop, marginRight, marginBottom, marginLeft } =
    styling;
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name)) // Assuming 'name' is the property for x-axis categories
    .range([marginLeft, width - marginRight])
    .padding(0.1);

  console.log(xScale);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[yAxis])])
    .range([height - marginBottom, marginTop]);

  const colorScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[yAxis])]) // Assuming yAxis is your variable for bar height
    .range(["#2e7d32", "#bf360c"]); // Example: color range from orange to green

  // Remove existing SVG elements
  d3.select("#chart-container").selectAll("svg").remove();

  // Create new SVG
  svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create bars with updated color scale and sequential bouncing animation
  const bars = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.name))
    .attr("y", height - marginBottom) // Start the bars at the baseline
    .attr("width", xScale.bandwidth())
    .attr("height", 0) // Start the bars with height 0
    .attr("fill", (d) => colorScale(d[yAxis]))
    .transition() // Apply the transition
    .duration(1000) // Set the duration of the animation in milliseconds
    .ease(d3.easeElasticOut) // Use the "elastic" easing function
    .delay((d, i) => i * 100) // Introduce a delay for each bar
    .attr("y", (d) => yScale(d[yAxis]))
    .attr("height", (d) => height - yScale(d[yAxis]) - marginBottom)
    .on("end", function (d, i) {
      // Add labels after the animation ends for each bar
      const bar = d3.select(this);
      bar
        .append("text")
        .text((d) => d[yAxis])
        .attr("x", xScale(d.name) + xScale.bandwidth() / 8)
        .attr("y", (d) => yScale(d[yAxis])) // Adjust the offset for the top position inside the bar
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "black"); // Change text color to white or another suitable color
    });

  // Add X axis
  svg
    .append("g")
    .attr("transform", `translate(0, ${height - marginBottom})`)
    .call(d3.axisBottom(xScale));
  // Add Y axis
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft}, 0)`)
    .call(d3.axisLeft(yScale))
    .selectAll("text")
    .style("text-anchor", "end"); // Adjust text anchor as needed
}
