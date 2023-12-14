function createLineChart(data, xAxis, yAxis, svg, styling) {
  const legendWidth = 200;
  const { width, height, marginLeft, marginBottom, marginRight, marginTop } =
    styling;
  const totalWidth = width + legendWidth; // Samlet bredde inklusive legende

  // Sorter data baseret på X-aksen
  data.sort((a, b) => a[xAxis] - b[xAxis]);

  // Gruppér data efter egenskaben 'name'
  const sumstat = d3.group(data, (d) => d.name);

  // Farveskala
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Definer skalaen for X-aksen (horisontal position)
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d[xAxis]))
    .range([marginLeft, width - marginRight]);

  // Definer skalaen for Y-aksen (vertikal position)
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[yAxis])])
    .range([height - marginBottom, marginTop]);

  // Opret eller vælg SVG med den nye samlede bredde
  svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", totalWidth) // Brug totalWidth her
    .attr("height", height);

  // Tegn og animer linjerne for hver gruppe
  sumstat.forEach((values, name) => {
    const line = d3
      .line()
      .x((d) => xScale(d[xAxis]))
      .y((d) => yScale(d[yAxis]));

    // Tegn linjerne
    const path = svg
      .append("path")
      .datum(values)
      .attr("fill", "none")
      .attr("stroke", color(name)) // Brug farveskalaen for stregerne
      .attr("stroke-width", 3)
      .attr("d", line);

    // Beregn den samlede længde af stien for animationen
    const totalLength = path.node().getTotalLength();

    // Animer linjerne
    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(3000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);

    // Tilføj X-aksen med brugerdefineret format til at fjerne kommaer
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(width / 100)
          .tickSizeOuter(0)
          .tickFormat(d3.format("d"))
      );

    // Tilføj Y-aksen, fjern domænelinjen, tilføj gitterlinjer og etiket
    svg
      .append("g")
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

    // Tilføj legenden
    const legend = svg
      .selectAll(".legend")
      .data(sumstat.keys())
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", function (d, i) {
        return "translate(" + (width + 50) + "," + (i * 20 + marginTop) + ")";
      });

    // Tegn legendens farvede rektangler
    legend
      .append("rect")
      .attr("x", 0)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", (name) => color(name));

    // Tegn legendens tekst
    legend
      .append("text")
      .attr("x", 20) // Positioner teksten til højre for de farvede rektangler
      .attr("y", 5)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text((name) => name);
  });
}
