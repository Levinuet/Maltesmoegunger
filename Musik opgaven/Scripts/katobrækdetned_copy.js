// Width and height for the SVG element
const w = 1400;
const h = 600;
let allData = [];
let xScale, yScale, svg;

// Function to fetch data from the JSON file
async function fetchData() {
    if (allData.length === 0) {
        try {
            const response = await fetch("Scripts/newalbums.json");
            allData = await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    return allData;
}

// Function to create or update the scatter plot
async function updateScatterPlot(xAttr, yAttr) {
    const data = await fetchData();

    // Initialize SVG and scales if not already done
    if (!svg) {
        svg = d3.select("#scatter-plot")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        xScale = d3.scaleLinear().range([50, w - 50]);
        yScale = d3.scaleLinear().range([h - 50, 50]);

        svg.append("g").attr("class", "x-axis").attr("transform", `translate(0,${h - 50})`);
        svg.append("g").attr("class", "y-axis").attr("transform", "translate(50,0)");
    }

    // Update scales based on specified attributes
    xScale.domain([0, d3.max(data, d => d[xAttr])]);
    yScale.domain([0, d3.max(data, d => d[yAttr])]);

    // Update axes
    svg.select(".x-axis").transition().duration(1000).call(d3.axisBottom(xScale));
    svg.select(".y-axis").transition().duration(1000).call(d3.axisLeft(yScale));

    // Update circles
    const circles = svg.selectAll("circle").data(data);
    circles.enter()
        .append("circle")
        .merge(circles)
        .transition().duration(1000)
        .attr("cx", d => xScale(d[xAttr]))
        .attr("cy", d => yScale(d[yAttr]))
        .attr("r", d => d.rating * 5)
        .attr("fill", "#6e6eff");
    circles.exit().remove();

    // Update labels
    const labels = svg.selectAll("text.label").data(data);
    labels.enter()
        .append("text")
        .attr("class", "label")
        .merge(labels)
        .transition().duration(1000)
        .text(d => d.id)
        .attr("x", d => xScale(d[xAttr]) + 5)
        .attr("y", d => yScale(d[yAttr]) - 15)
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");
    labels.exit().remove();
}

// Fetch data initially
fetchData().then(() => {
    // Set up buttons
    document.getElementById('idStream').addEventListener('click', () => {
        updateScatterPlot('id', 'streams');
    });

    document.getElementById('yeartracks').addEventListener('click', () => {
        updateScatterPlot('productionYear', 'd.trackList[d.trackList.length');
    });

    // Add more buttons here as needed

    // Initial scatter plot creation
    updateScatterPlot('id', 'streams');
});
