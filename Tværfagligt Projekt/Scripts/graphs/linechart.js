function createLineChart(data, xAxis, yAxis, container) {
  const width = 928;
  const height = 500;
  const marginTop = 20;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 40;

  // Declare the x (horizontal position) scale.
  const x = d3
    .scaleUtc()
    .domain(d3.extent(skovData, (d) => d.year))
    .range([marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(skovData, (d) => d.Brand)])
    .range([height - marginBottom, marginTop]);

  const colorScale = d3
    .scaleOrdinal()
    .domain(data.map((d, i) => i))
    .range([
      "#1b5e20",
      "#2e7d32",
      "#388e3c",
      "#43a047",
      "#1565c0",
      "#1976d2",
      "#1e88e5",
      "#2196f3",
      "#8d6e63",
      "#bf360c",
      "#ff9800",
    ]); // Greens, Blues, Browns, Gold

  // Declare the line generator.
  const line = d3
    .line()
    .x((d) => x(d.year))
    .y((d) => y(d.Brand));

  // Create the SVG container.
  const svgContainer = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // Add the x-axis.
  svgContainer
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(
      d3
        .axisBottom(xAxis)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

  // Add the y-axis, remove the domain line, add grid lines and a label.
  svgContainer
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
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
        .text("↑ Daily close ($)")
    );

  // Append a path for the line.
  svgContainer
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line(data));

  return svgContainer.node();
}
