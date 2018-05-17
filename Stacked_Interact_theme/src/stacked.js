anychart.onDocumentLoad(function(){
    anychart.theme(anychart.themes.wines); 
    var tableData = anychart.data.parseHtmlTable('#tableWithData'); 
    var chart = anychart.bar(); 
    chart.data(tableData); 
    chart.yScale().stackMode('percent');
    chart.legend(true); 
    chart.container('container'); 
    chart.draw(); 
});