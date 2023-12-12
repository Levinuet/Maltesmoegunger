document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("display", "none")
    .style("background", "rgba(255,255,255,0.8)")
    .style("padding", "5px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "5px");
  let width = 1400;
  let height = 800;

  // Select the map container and append an SVG element
  const svg = d3
    .select(".map-container") // Use ".map-container" to select by class
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Your existing code...

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

          // Initialize an empty dataMap object
          const dataMap = {};

          // Populate dataMap using country names as keys
          apiData.forEach((entry) => {
            // Convert "net ændringer" to numeric format
            entry["netChanges"] = parseFloat(entry["netChanges"]);

            // Use the updated property name as the key (assuming it's now "name")
            dataMap[entry.name] = dataMap[entry.name] || {
              name: entry.name,
              netChanges: 0,
              year: entry.year, // Keep year translation
            };

            // Sum up netChanges values for the combined years
            if (entry.year === "2010-2015" || entry.year === "2015-2020") {
              dataMap[entry.name].netChanges += entry["netChanges"];
            }
          });

          // Extract an array of netChanges values
          const netChangesValues = Object.values(dataMap).map(
            (entry) => entry.netChanges
          );

          // Calculate the midpoint value to separate green and red shades
          const midpoint = d3.mean(netChangesValues);

          // Define a color scale with 12 steps from green to yellow to red
          const defaultColorScale = d3
            .scaleLinear()
            .domain([
              d3.min(netChangesValues),
              midpoint,
              d3.max(netChangesValues),
            ])
            .range(["green", "yellow", "red"]);

          const uniqueYears = [...new Set(apiData.map((entry) => entry.year))];

          uniqueYears.forEach((year) => {
            const netAendringerValues = apiData
              .filter((entry) => entry.year === year)
              .map((entry) => entry["netChanges"]);

            defaultColorScale[year] = d3
              .scaleLinear()
              .domain([
                d3.min(netAendringerValues),
                d3.max(netAendringerValues),
              ])
              .range(["green", "red"]);
          });

          // Create a dictionary to map country codes to API data
          const projection = d3
            .geoMercator()
            .scale(200)
            .translate([width / 2.3, height / 1.4]);
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
              const countryName = d.properties.name;
              const countryData = dataMap[countryName];

              // Use the color scale to determine the fill color
              if (
                countryData &&
                countryData["netChanges"] !== undefined &&
                !isNaN(countryData["netChanges"])
              ) {
                return defaultColorScale(countryData["netChanges"]);
              } // Replace the existing else condition
              else {
                return "#78909C"; // Subtle greyish-blue color for countries with no data
              }
            })

            .on("mouseover", function (event, d) {
              // Show tooltip on hover
              const countryName = d.properties.name;
              const countryData = dataMap[countryName];

              let afskovningText =
                countryData && !isNaN(countryData["netChanges"])
                  ? `Afskovning i 1000 hektar: ${countryData["netChanges"]}`
                  : "Afskovning data er ikke reporteret";

              // Modify the year text to display "2010-2020" when not reported
              let yearText =
                countryData && countryData.year
                  ? countryData.year
                  : "2010-2020";

              // Highlight the border on hover with a black color
              d3.select(this).style("stroke", "black").style("stroke-width", 2);

              tooltip
                .style("display", "block")
                .html(
                  `<strong>${countryName}</strong><br>År: ${"2010 - 2020"}<br>${afskovningText}`
                )
                .style("left", event.pageX + "px")
                .style("top", event.pageY + "px");
            })
            .on("mouseout", function () {
              // Remove border highlight on mouseout
              d3.select(this).style("stroke", "none");

              // Hide tooltip on mouseout
              tooltip.style("display", "none");
            });
        }
      });
    }
  });
});
