anychart.onDocumentLoad(function(){
    //prep data
    var tableData = anychart.data.parseHtmlTable('#tableWithData');  
    //type of chart
    var chart = anychart.bar(); 
    //select data
    chart.data(tableData);
    //select series
    chart.yScale().stackMode('percent');
    chart.legend(true); 
    chart.container('container'); 
    chart.draw();
});
