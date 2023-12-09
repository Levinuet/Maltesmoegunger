// Wrap your code in a document ready function
document.addEventListener("DOMContentLoaded", function () {
  // Example usage
  const svgContainerSelector = "#chart-container"; // Use the selector for your SVG container
  const styling = { width: 800, height: 500, marginLeft: 10, marginBottom: 10, marginRight: 10, marginTop: 10 }; // Adjust dimensions as needed
  createMapChart(null, svgContainerSelector, styling);
});

function createMapChart(data, svgSelector, styling) {
  // Convert svg to D3 selection if not already
  const svg = d3.select(svgSelector);

  // Destructure styling object
  const { width, height, marginLeft, marginBottom, marginRight, marginTop } =
    styling;

  // Fetch world map data
  d3.json(
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
  ).then((worldData) => {
    // Check if world map data is valid
    if (worldData && worldData.objects && worldData.objects.countries) {
      // Convert raw data to features
      const countries = topojson.feature(
        worldData,
        worldData.objects.countries
      );

      // Create a projection
      const projection = d3.geoMercator().fitSize([width, height], countries);

      // Create a path generator
      const path = d3.geoPath().projection(projection);

      // Remove previous paths
      svg.selectAll("path").remove();

      // Append a path for each country
      svg
        .selectAll("path")
        .data(countries.features)
        .join("path") // Use join instead of enter() to handle both enter and update selections
        .attr("d", path)
        .attr("fill", "lightgray")
        .attr("stroke", "white")
        .attr("stroke-width", 0.5);

      // Add styling or additional features as needed
      // ...

      // Log information for debugging
      console.log("World Map Data:", worldData);
      console.log("Countries Features:", countries);
      console.log("SVG Container:", svg.node());
      console.log("SVG Width:", width);
      console.log("SVG Height:", height);
    }
  });
}

// Example usage
const svgContainerSelector = "#chart-container"; // Use the selector for your SVG container

}; // Adjust dimensions as needed
createMapChart(null, svgContainerSelector, styling); // Pass null for data parameter since it's not used in the function
