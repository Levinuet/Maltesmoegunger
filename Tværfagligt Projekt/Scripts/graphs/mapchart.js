document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here

  let width = 1600;
  let height = 503;

  // Select the map container and append an SVG element
  const svg = d3
    .select(".map-container") // Use ".map-container" to select by class
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Fetch world map data
  d3.json(
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
  ).then((worldData) => {
    console.log("World map data:", worldData);

    // Check if world map data is valid
    if (worldData && worldData.objects && worldData.objects.countries) {
      // Convert raw data to features
      const countries = topojson.feature(
        worldData,
        worldData.objects.countries
      );
      console.log("Processed countries data:", countries);

      // Define your API endpoint for the 'changes' view
      const apiEndpoint = "http://localhost:8080/changes"; // Adjust the URL accordingly

      // Fetch data from the API
      d3.json(apiEndpoint).then((response) => {
        console.log("API response:", response);

        // Check if the response is successful
        if (response.ok) {
          const apiData = response.skovData;

          // Convert "net ændringer" to numeric format
          apiData.forEach((entry) => {
            entry["net ændringer"] = parseFloat(entry["net ændringer"]);
          });

          // Extract an array of net_ændringer values
          const netAendringerValues = apiData.map(
            (entry) => entry["net ændringer"]
          );

          const uniqueYears = [...new Set(apiData.map((entry) => entry.år))];
          const colorScales = {};

          uniqueYears.forEach((year) => {
            const netAendringerValues = apiData
              .filter((entry) => entry.år === year)
              .map((entry) => entry["net ændringer"]);

            colorScales[year] = d3
              .scaleLinear()
              .domain([
                d3.min(netAendringerValues),
                d3.max(netAendringerValues),
              ])
              .range(["green", "red"]);
          });

          // Define a default color scale (you can choose a specific year or average values)
          const defaultColorScale = colorScales[uniqueYears[0]]; // Adjust this as needed

          // Create a dictionary to map country codes to API data
          const dataMap = {};
          apiData.forEach((entry) => {
            dataMap[entry.country_code] = entry;
          });

          const projection = d3
            .geoMercator()
            .scale(140)
            .translate([width / 2, height / 2]);
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
            .attr("d", path)
            .style("fill", (d) => {
              // Use the dataMap to determine the color based on API data
              const countryData = dataMap[d.id];
              return countryData
                ? colorScale(countryData["net ændringer"])
                : "#ccc";
            });

          // Add a color legend
          addColorLegend(colorScale);
        } else {
          console.error("API request failed:", response.message);
        }
      });
    }
  });

  // Function to add a color legend
  function addColorLegend(colorScale) {
    const legendWidth = 200;
    const legendHeight = 20;

    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        `translate(${width - legendWidth}, ${height - 2 * legendHeight})`
      );

    const legendScale = d3
      .scaleLinear()
      .range([0, legendWidth])
      .domain(colorScale.domain());

    const axis = d3.axisBottom(legendScale).tickSize(13).ticks(5);

    legend.append("g").call(axis);

    legend
      .append("rect")
      .attr("width", legendWidth)
      .attr("height", legendHeight)
      .style("fill", "url(#gradient)")
      .style("stroke", "black");
  }
});
