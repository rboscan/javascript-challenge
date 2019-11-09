console.log(data);
var tbody = d3.select("tbody");

let reset = d3.select("#reset-btn");

data.forEach((ufosighting) => {

    const tr = tbody.append("tr");

    Object.entries(ufosighting).forEach(([key, value]) => {

        tr.append("td").text(value);
    });
});

reset.on("click", function () {
    
    data.forEach((ufosighting) => {

        const tr = tbody.append("tr");

        Object.entries(ufosighting).forEach(([key, value]) => {

            tr.append("td").text(value);
        });
    });
});

let ufo_button = d3.select("#filter-btn")

ufo_button.on("click", function () {

    let inputElement = d3.select(".form-control");

    let inputValue = inputElement.property("value");

    console.log(inputValue);

    let filter = data.filter(sighting => sighting.datetime === inputValue);

    console.log(filter);

    tbody.html("");


    filter.forEach((ufosighting) => {

        const tr = tbody.append("tr");

        Object.entries(ufosighting).forEach(([key, value]) => {

            tr.append("td").text(value);
        });
    });
});