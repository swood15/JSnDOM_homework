// from data.js
var tableData = data;
var tbody = d3.select("tbody");

console.log(data);

data.forEach(element => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

var filter = d3.select("#filter-btn");

filter.on("click", function() {
    d3.event.preventDefault();
    var input = d3.select(".form-control").property("value");

    console.log(input)

    var filtData = data.filter(ufo => ufo.datetime == input)
    console.log(filtData)

    if (input != '') {
        tbody.selectAll('td').remove();
        tbody.selectAll('tr').remove();

        filtData.forEach(element => {
            var row = tbody.append("tr");
            Object.entries(element).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
            });
        });
    } else {
        tbody.selectAll('td').remove();
        tbody.selectAll('tr').remove();

        data.forEach(element => {
            var row = tbody.append("tr");
            Object.entries(element).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
            });
        });
    }
})