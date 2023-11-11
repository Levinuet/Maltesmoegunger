// Width and height for the SVG element
const w = 1700;
const h = 600;

// Function to fetch data from the JSON file
async function fetchData() {
    try {
        const response = await fetch("Scripts/newalbums.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to create the scatter plot
async function createScatterPlot() {
    // Fetch the data
    const data = await fetchData();

    // Create SVG element
    const svg = d3.select("#scatter-plot")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("padding", '50px');

    // Create scales for x and y axes
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.id)])
        .range([30, w - 300])
        .nice();

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.streams / 1000)])
        .range([h - 30, 30])
        .nice();

    // Create x and y axes
    const xAxis = d3.axisBottom().scale(xScale).ticks(10);
    const yAxis = d3.axisLeft().scale(yScale).ticks(5);

    // Add x and y axes to the SVG
    svg.append("g")
        .attr("transform", `translate(60,${h - 30})`)
        .call(xAxis);

    svg.append("g")
        .attr("transform", `translate(90,0)`)
        .call(yAxis);

    // Create groups for each data point
    const groups = svg.selectAll("g.data-point")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "data-point")
        .attr("transform", d => `translate(${xScale(d.id)}, ${yScale(d.streams / 1000)})`);

    // Append circles to each group
    groups.append("circle")
        .attr("r", d => (d.rating * 5))
        .attr("fill", "#6e6eff"); // or any color

    // Append text to each group
    groups.append("text")
        .text(d => d.albumName)
        .attr("x", d => (d.rating * 5))  // Adjust as needed for positioning
        .attr("y", -10) // Adjust as needed for positioning
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");
}

// Call the createScatterPlot function to create the scatter plot
createScatterPlot();
