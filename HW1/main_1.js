let myGraph_line = document.getElementById('myGraph_line');

let trace1_line = {};
trace1_line.mode = "markers+text";
trace1_line.type = "scatter";
trace1_line.name = "台北市";
trace1_line.marker = {
    size:10
};
trace1_line.visible = true;
trace1_line.x = [];
trace1_line.y = [];
trace1_line.text = [];
trace1_line.textposition = "bottom conter";
trace1_line.textfont = {
    family:"Raleway, sans-serif",
    size:10,
    color:"black"
};

let trace2_line = {};
trace2_line.visible = false;
trace2_line.mode = "lines";
trace2_line.line = {
    color: 'red'
};
trace2_line.type = "scatter";
trace2_line.name = "桃園市";
trace2_line.x = [];
trace2_line.y = [];
trace2_line.text = [];

let trace3_line = {};
trace3_line.visible = false;
trace3_line.mode = "Lines + markers";
trace3_line.line = {
    color:'green'
};

trace3_line.type = "scatter";
trace3_line.name = "台南市";
trace3_line.marker = {
    size:10
};
trace3_line.x = [];
trace3_line.y = [];
trace3_line.text = [];


for(let i=0;i<set1.length;i++){
    trace1_line.x[i] = set1[i][0];
    trace1_line.y[i] = set1[i][1];
    trace1_line.text[i] = set1[i][2];
}

for(let i=0;i<set2.length;i++){
    trace2_line.x[i] = set2[i][0];
    trace2_line.y[i] = set2[i][1];
    trace2_line.text[i] = set2[i][2];
}

for(let i=0;i<set3.length;i++){
    trace3_line.x[i] = set3[i][0];
    trace3_line.y[i] = set3[i][1];
    trace3_line.text[i] = set3[i][2];
}

let data_line = [];
data_line.push(trace1_line);
data_line.push(trace2_line);
data_line.push(trace3_line);

let layout_line = {
    margin:{
        t:50
    },
    xaxis:{
        range:[0,4]
    },
    yaxis:{
        range:[0,2000000]
    },
    title:'Scatter & Line',
    updatemenus:[
        {
            y:1.2,
            x:0.3,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true,false,false]],
                    label:'台北市'
                },
                {
                    method:'restyle',
                    args: ['visible',[false,true,false]],
                    label: '桃園市'
                },
                {
                    method:'restyle',
                    args: ['visible',[false,false,true]],
                    label: '台南市'
                },
                {
                    method:'restyle',
                    args: ['visible',[true,true,true]],
                    label: 'Display All'
                }
            ]
        }
    ]
};

Plotly.newPlot(myGraph_line, data_line, layout_line);