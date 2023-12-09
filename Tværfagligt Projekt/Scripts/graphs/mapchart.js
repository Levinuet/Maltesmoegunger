let width = 1600;
let height = 503;

// Select the map container and append an SVG element
const svg = d3
  .select(".map-container") // Use ".map-container" to select by class
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Fetch world map data
d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(
  (data) => {
    console.log("World map data:", data);

    // Check if world map data is valid
    if (data && data.objects && data.objects.countries) {
      // Convert raw data to features
      const countries = topojson.feature(data, data.objects.countries);
      console.log("Processed countries data:", countries);

      // Set up projection and path
      const projection = d3.geoMercator().fitSize([width, height], countries);
      const path = d3.geoPath().projection(projection);

      // Append a group element to the SVG
      const g = svg.append("g");

      // Remove existing paths
      g.selectAll("path").remove();

      // Append new paths based on the country features
      g.selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path);
    }
  }
);
