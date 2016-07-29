var dataset = [];
for (var i = 0; i < 25; i++) {
    var num = Math.random() * 30;
    dataset.push(num);
}

d3.select('body').selectAll('p')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function(d) { return d*5 + 'px';});
