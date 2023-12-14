const container = document.getElementById("chart-container");

// Get the width and height of the container
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

function fetchDataAndCreateVisualization(url, yAxis, xAxis, svg, graphType) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Data is available here
      // Call a function to create the D3 visualization with the data
      createD3Visualization(data.skovData, yAxis, xAxis, svg, graphType);
      console.log(
        "fetchDataAndCreateVisualization function is loaded and called."
      );
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function createD3Visualization(data, yAxis, xAxis, svg, graphType) {
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

  const styling = {
    width: 1920,
    height: 550,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 20,
  };

  switch (graphType) {
    case "bar":
      createBarChart(data, yAxis, xAxis, svg, styling);
      break;
    case "bart":
      createBartChart(data, yAxis, xAxis, svg, styling);
      break;
    case "line":
      createLineChart(data, yAxis, xAxis, svg, styling);
      break;
    case "stacked":
      createStackedChart(data, yAxis, xAxis, svg, styling);

    default:
      break;
  }
}
