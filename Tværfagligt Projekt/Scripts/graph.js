// Assume you have a container with id "chart-container"
const container = document.getElementById("chart-container");

// Get the width and height of the container
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

// Adjust the margin based on your requirements
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

function fetchDataAndCreateVisualization(url, yAxis, xAxis, svg) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Data is available here
            // Call a function to create the D3 visualization with the data
            createD3Visualization(data.skovData, yAxis, xAxis, svg);
        })
        .catch((error) => console.error("Error fetching data:", error));
};

function createD3Visualization(data, yAxis, xAxis, svg) {
    // Check if data has the 'skovData' property and it is an array
    if (!data || !Array.isArray(data)) {
        console.error(
            "Invalid data format. Expected an object with 'skovData' property as an array."
        );
        return;
    }

    // Check if data array is empty
    if (data.length === 0) {
        console.error("Empty skovData array. Cannot create visualization.");
        return;
    }

    // Dynamic sizing based on data length
    const width = 780;
    const height = 503;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // Use scales to map data to visual representation
    const xScale = d3
        .scaleBand()
        .domain(data.map((d, i) => i))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d[yAxis])])
        .range([height - margin.bottom, margin.top]);

    // Color scale configuration
    const colorScale = d3
        .scaleOrdinal()
        .domain(data.map((d, i) => i))
        .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"]);

    // Remove existing SVG elements
    d3.select("#chart-container").selectAll("svg").remove();

    // Create new SVG
    svg = d3
        .select("#chart-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Create bars
    svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(i))
        .attr("y", (d) => yScale(d[yAxis]))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - yScale(d[yAxis]))
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
    const barWidth = width / data.length;

    svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * barWidth)
        .attr("y", (d) => yScale(d[yAxis]))
        .attr("width", barWidth)
        .attr("height", (d) => height - yScale(d[yAxis]))
        .attr("fill", (d, i) => colorScale(i));

    // Add labels to the bars
    svg
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d[yAxis])
        .attr("x", (d, i) => i * barWidth + barWidth)
        .attr("y", (d) => yScale(d[yAxis]))
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white"); // Optional: Change the color of the labels
    return svg;
};