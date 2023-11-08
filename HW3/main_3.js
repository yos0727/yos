let myGraph_pie = document.getElementById("myGraph_pie");
let trace1_pie = {};
trace1_pie.type = "pie";
trace1_pie.title = "Netflix"
trace1_pie.hole = 0.6;
trace1_pie.labels = [];
trace1_pie.values = [];
trace1_pie.domain = {
    row:0,
    column:0
};


for(let x=0; x<evaluation_ratio.length; x++){
    trace1_pie.labels[x] = evaluation_ratio[x]["name"];
    trace1_pie.values[x] = evaluation_ratio[x]["count"];
}

let trace2_pie = {};
trace2_pie.type = "pie";
trace2_pie.title = "Disney+"
trace2_pie.hole = 0.6;
trace2_pie.labels = [];
trace2_pie.values = [];
trace2_pie.domain = {
    row:0,
    column:1
};

for(let x=0; x<evaluation_ratio_2.length; x++){
    trace2_pie.labels[x] = evaluation_ratio_2[x]["name"];
    trace2_pie.values[x] = evaluation_ratio_2[x]["count"];
}

let trace3_pie = {};
trace3_pie.type = "pie";
trace3_pie.title = "Hulu"
trace3_pie.hole = 0.6;
trace3_pie.labels = [];
trace3_pie.values = [];
trace3_pie.domain = {
    row:1,
    column:0
};

for(let x=0; x<evaluation_ratio_3.length; x++){
    trace3_pie.labels[x] = evaluation_ratio_3[x]["name"];
    trace3_pie.values[x] = evaluation_ratio_3[x]["count"];
}

let trace4 = {};
trace4.type = "pie";
trace4.title = "Amazon Prime"
trace4.hole = 0.6;
trace4.labels = [];
trace4.values = [];
trace4.domain = {
    row:1,
    column:1
};

for(let x=0; x<evaluation_ratio_4.length; x++){
    trace4.labels[x] = evaluation_ratio_4[x]["name"];
    trace4.values[x] = evaluation_ratio_4[x]["count"];
}


let data_pie = [];
data_pie.push(trace1_pie);
data_pie.push(trace2_pie);
data_pie.push(trace3_pie);
data_pie.push(trace4);

let layout_pie = {
    margin:{
        t:10,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph_pie,data_pie,layout_pie);