/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
d3.json('data/buildings.json').then(data => {
    const svg = d3.select("#chart-area").append('svg')
        .attr("width", 500)
        .attr("height", 500);
    const rects = svg.selectAll("rect").data(data);

    rects.enter()
        .append("rect")
        .attr("x", (d, i) => i * 30 + 20)
        .attr("y", 20)
        .attr("width", 20)
        .attr("height", d => Number(d.height))
        .attr("fill", 'grey')

})