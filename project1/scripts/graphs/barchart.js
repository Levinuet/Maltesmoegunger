function createBarChart(data, yAxis, xAxis, svg, styling) {
  const { width, height, marginTop, marginRight, marginBottom, marginLeft } =
    styling;
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.year)) // Adjust based on your data structure
    .range([marginLeft, width - marginRight])
    .padding(0.1);

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
    .attr("x", (d) => xScale(d.year))
    .attr("y", height - marginBottom) // Start the bars at the baseline
    .attr("width", xScale.bandwidth())
    .attr("height", 0) // Start the bars with height 0
    .attr("fill", (d, i) => colorScale(i))
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
        .attr("x", xScale(d.year) + xScale.bandwidth() / 8)
        .attr("y", (d) => yScale(d[yAxis])) // Adjust the offset for the top position inside the bar
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "black"); // Change text color to white or another suitable color
    });

  // Make bars fill the whole container
  const barWidth = width / data.length;

  // Add X axis
  svg
    .append("g")
    .attr("transform", `translate(0, ${height - marginBottom})`)
    .call(d3.axisBottom(xScale));
  // Add Y axis
  const yAxisG = svg
    .append("g")
    .attr("transform", `translate(${marginLeft}, 0)`)
    .call(d3.axisLeft(yScale));

  yAxisG.selectAll("text").style("text-anchor", "end");

  // Add Y axis label
  yAxisG
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 15 - marginLeft) // Adjust the position based on your margins
    .attr("x", 0 - height / 2)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Brand i 1000 hektar");
}
