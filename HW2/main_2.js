let myGraph_bar = document.getElementById('myGraph_bar');

let trace1_bar = {};
trace1_bar.type = "bar";
trace1_bar.name = "家長填寫輔導需求調查表";
trace1_bar.x = ["echelon 237","echelon 238","echelon 239"];
trace1_bar.y = [echelon_237[0]["count"],echelon_238[0]["count"],echelon_239[0]["count"]];
trace1_bar.text = trace1_bar.y;

let trace2_bar = {};
trace2_bar.name = "身心狀況電腦適性測驗";
trace2_bar.type = "bar";
trace2_bar.x = ["echelon 237","echelon 238","echelon 239"];
trace2_bar.y = [echelon_237[1]["count"],echelon_238[1]["count"],echelon_239[1]['count']];
trace2_bar.text = trace2_bar.y;
trace2_bar.textfont = {
    color: "white"
};

let trace3_bar = {};
trace3_bar.name = "主動求助";
trace3_bar.type = "bar";
trace3_bar.x = ["echelon 237","echelon 238","echelon 239"];
trace3_bar.y = [echelon_237[2]["count"],echelon_238[2]["count"],echelon_239[2]['count']];
trace3_bar.text = trace3_bar.y;

let data_bar = [];
data_bar.push(trace1_bar);
data_bar.push(trace2_bar);
data_bar.push(trace3_bar);

let layout_bar = {
    margin:{
        t:50
    },
    barmode : "stack",
    title : ""
};

Plotly.newPlot(myGraph_bar, data_bar, layout_bar);