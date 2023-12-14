function createBubbleChart(data, xAxis, yAxis, svg, styling) {
  const width = 928;
  const height = width;
  const margin = 1;

  data = data.filter((item) => item != null && item.netChanges != null);

  const name = (d) => d.name || "";
  const group = (d) => d.name || "default";

  const format = d3.format(",d");
  const color = d3.scaleOrdinal(d3.schemeTableau10);

  const pack = d3
    .pack()
    .size([width - margin * 2, height - margin * 2])
    .padding(3);

  data.forEach((item) => {
    if (typeof item.netChanges !== "number" || isNaN(item.netChanges)) {
      console.error("Invalid value found in data item:", item);
    }
  });

  const radiusScale = d3
    .scaleSqrt()
    .domain([0, d3.max(data, (d) => d.netChanges)])
    .range([0, 20]); // Reduced maximum radius

  const simulation = d3
    .forceSimulation(data)
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force(
      "collision",
      d3.forceCollide().radius((d) => radiusScale(d.netChanges))
    )
    .stop();

  for (let i = 0; i < 100; i++) simulation.tick();

  const node = svg
    .append("g")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  node
    .append("circle")
    .attr("fill-opacity", 0.7)
    .attr("fill", (d) => color(group(d)))
    .attr("r", (d) => radiusScale(d.netChanges));

  const text = node
    .append("text")
    .attr("clip-path", (d) => `circle(${radiusScale(d.netChanges)})`);

  text
    .append("tspan")
    .attr("x", 0)
    .attr("y", "-0.5em")
    .text((d) => d.name);

  text
    .append("tspan")
    .attr("x", 0)
    .attr("y", "0.5em")
    .text((d) => `Change: ${format(d.netChanges)}`);

  console.log("Nodes after creation:", svg.selectAll("g").nodes());

  return { scales: { color } };
}
