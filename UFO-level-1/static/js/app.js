console.log(data);
var tbody = d3.select("tbody");

data.forEach((ufosighting) => {
    
    console.log(ufosighting);
    
    const tr = tbody.append("tr");
    
    Object.entries(ufosighting).forEach(([key,value]) => {
    
        console.log(`${key}: ${value}`);
    
        tr.append("td").text(value);
    });
});
