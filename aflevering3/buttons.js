let dim = {
    'width': 780, 
   'height':500, 
   'margin':50   
};

let svg = d3.select('#chart').append('svg')  
     .attrs(dim);

document.querySelector("#chart").classList.add("center");

let processedData = [];
let sortedData = [];
let albums = [];

d3.json("albums.json").then(function (data) {
    // Set the dataset globally
albums = data
console.log("albums",albums)
    changeData("albumName","rating");})

function changeData(valueX,valueY){
sortedData =[]   
processedData = [] 
svg.remove()
svg = d3.select('#chart').append('svg')  
 .attrs(dim);

    for(let i = 0; i < albums.length; i++){

        processedData.push({
            id: albums[i].id,
            data: []
        })


        for(let j=0; j < albums.length; j++){
            processedData[i].data.push({
                [valueX]:albums[j][valueX],
                [valueY]:albums[j][valueY],
        
            })
        }

    }
 console.log("processedData",processedData)        

    sortedData = processedData[0].data.slice().sort((a,b) =>d3.descending(a[valueY], b[valueY]));
draw(sortedData,valueX, valueY)
};

function draw(data, valueX, valueY) {
    console.log(data)
    let t = d3.transition().duration(2000);
    //arrayofNumbers løber hele arrayet igennem og returnere kun valueY//
    let arrayOfNumbers = sortedData.map(d => d[valueY])

    // sætter x-aksen til at starte ved mindste value i arrayet//
    let minValue = Math.min(...arrayOfNumbers)

let scaleX = d3.scaleLinear()
                .domain([minValue,d3.max(processedData[0].data, d =>d[valueY])])         
                .range([130, dim.width-dim.margin])

let axisX = svg.append('g')
                .attr('transform', 'translate(0,50)')
                .attr('id', 'axisX')
                .attr('color', '#fff')
                .call(d3.axisTop(scaleX));    
                axisX.selectAll('.tick:first-child text')
                .attr('fill', 'black');           
           
let scaleY = d3.scaleBand()
               .domain(sortedData.map(d => d[valueX]))
               .range([60, dim.height-dim.margin]);

let axisY = svg.append('g')    
                .attr('transform', 'translate(120,0)')
                .attr('id', 'axisY')
                .attr('color', '#fff')
                .call(d3.axisLeft(scaleY));
    scaleX.domain([minValue,d3.max(data, d =>d[valueY])]).nice();
    axisX
        .transition(t)
        .call(d3.axisTop(scaleX));    

    scaleY.domain(data.map(d => d[valueX]));
    axisY
        .transition(t)
        .call(d3.axisLeft(scaleY));
        update(data,scaleX,scaleY, valueX, valueY, minValue)
        
}
 

const buttonGroup = document.querySelector(".buttonGroup").children;
const aButton = document.querySelector(".buttonGroup button:nth-child(1)");
const bButton = document.querySelector(".buttonGroup button:nth-child(2)");
const cButton = document.querySelector(".buttonGroup button:nth-child(3");

aButton.addEventListener('click', async(e) =>{
console.log("abutton")
    runBoilerPlateColourChange(aButton);
    changeData("albumName","rating")

});
bButton.addEventListener('click', async(e) =>{    
    runBoilerPlateColourChange(bButton);  
   changeData("albumName","streams")
});

cButton.addEventListener('click', async(e) =>{
    runBoilerPlateColourChange(cButton);  
   changeData("albumName","productionYear")
});



async function runBoilerPlateColourChange (button){
    await removeSelected();

    //add the selected class
    button.classList.remove("unselected");
    button.classList.add("selected");
}

function removeSelected() {
    return new Promise(resolve => {
            Array.from(buttonGroup).forEach(item => {

                item.classList.remove("selected");
        
                item.classList.add("unselected");
        
             });
            resolve("Success");
    })
}




function update(data, scaleX, scaleY, valueX, valueY, minValue) {
    let colors = d3.scaleOrdinal()
        .domain(processedData[0].data.map(d => d[valueX]))
        .range(d3.schemePaired);

    let t = d3.transition().duration(2000);

    // Select all existing and new rectangles
    let rects = svg.selectAll('rect')
        .data(data, d => d[valueX]);

    // Update existing rectangles
    rects.transition(t)
        .attr('y', (d) => scaleY(d[valueX]))
        .attr('width', (d) => scaleX(d[valueY]) - scaleX(minValue))
        .attr('x', (d) => scaleX(minX));

    // Create new rectangles
    rects.enter()
        .append('rect')
        .attr('x', (d) => scaleX(minValue))
        .attr('y', (d) => scaleY(d[valueX]))
        .attr('width', 0)  // Start with zero width for entering bars
        .attr('height', 30)
        .attr('fill', (d) => colors(d[valueX]))
        .merge(rects)  // Merge new and existing rectangles
        .transition(t)
        .attr('width', (d) => scaleX(d[valueY]) - scaleX(minValue))
        .attr('x', (d) => scaleX(minValue));

    // Remove old rectangles
    rects.exit()
        .transition(t)
        .attr('width', 0)  // Set width to zero for exiting bars
        .remove();
}
