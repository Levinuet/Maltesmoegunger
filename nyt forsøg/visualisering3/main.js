// Assume you have a container with id "chart-container"
const container = document.getElementById("chart-container");

// Get the width and height of the container
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

// Adjust the margin based on your requirements
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

// Calculate the dynamic width and height
const width = containerWidth - margin.left - margin.right;
const height = containerHeight - margin.top - margin.bottom;

function fetchDataAndCreateVisualization() {
  // Fetch data
  fetch("http://localhost:8080/changes")
    .then((response) => response.json())
    .then((data) => {
      // Data is available here
      console.log(data);
      // Call a function to create the D3 visualization with the data
      createD3Visualization(data.skovData);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function createD3Visualization(data) {
  // Check if data is an object
  if (!data || typeof data !== "object") {
    console.error("Invalid data format. Expected an object.");
    return;
  }

  // Check if data has the 'skovData' property and it is an array
  if (!data.skovData || !Array.isArray(data.skovData)) {
    console.error(
      "Invalid data format. Expected an object with 'skovData' property as an array."
    );
    return;
  }

  const skovData = data.skovData;

  // Check if skovData array is empty
  if (skovData.length === 0) {
    console.error("Empty skovData array. Cannot create visualization.");
    return;
  }

  // Dynamic sizing based on data length
  const width = 500;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // Use scales to map data to visual representation
  const xScale = d3
    .scaleBand()
    .domain(skovData.map((d, i) => i))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(skovData, (d) => d["Net Ændringer"])])
    .range([height - margin.bottom, margin.top]);

  // Color scale configuration
  const colorScale = d3
    .scaleOrdinal()
    .domain(skovData.map((d, i) => i))
    .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"]);

  // Remove existing SVG elements
  d3.select("#chart-container").selectAll("svg").remove();

  // Create new SVG
  const svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create bars
  svg
    .selectAll("rect")
    .data(skovData)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", (d) => yScale(d["Net Ændringer"]))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => height - yScale(d["Net Ændringer"]))
    .attr("fill", (d, i) => colorScale(i));

  // Add X axis
  svg
    .append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(xScale));

  // Add Y axis
  svg
    .append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale));

  // Make bars fill the whole container
  const barWidth = width / skovData.length;

  svg
    .selectAll("rect")
    .data(skovData)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * barWidth)
    .attr("y", (d) => yScale(d["Net Ændringer"]))
    .attr("width", barWidth)
    .attr("height", (d) => height - yScale(d["Net Ændringer"]))
    .attr("fill", (d, i) => colorScale(i));

  // Add labels to the bars
  svg
    .selectAll("text")
    .data(skovData)
    .enter()
    .append("text")
    .text((d) => d["Net Ændringer"])
    .attr("x", (d, i) => i * barWidth + barWidth)
    .attr("y", (d) => yScale(d["Net Ændringer"]))
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill", "white"); // Optional: Change the color of the labels
  return svg;
}
