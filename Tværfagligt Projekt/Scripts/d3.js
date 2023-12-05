// d3.js - JavaScript file for fetching data and rendering a bar chart using D3.js

// Fetch data from the API
fetch("http://localhost:3000/skov")
  .then((response) => response.json())
  .then((data) => {
    // Data is available here
    console.log(data);
    // Call a function to render the chart with the data
    renderBarChart(data.skovData);
  })
  .catch((error) => console.error("Error fetching data:", error));

// Render Bar Chart with D3.js
function renderBarChart(data) {
  const width = 500;
  const height = 300;

  const svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (width / data.length))
    .attr("y", (d) => height - d.value)
    .attr("width", width / data.length - 2)
    .attr("height", (d) => d.value)
    .attr("fill", "blue");
}
