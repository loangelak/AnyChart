anychart.onDocumentLoad(function(){
    //data prep
    var tableData = anychart.data.parseHtmlTable('#tableWithData'); 
    //type of chart
    var chart = anychart.bar();
    //data source
    chart.data(tableData);
    //create series
    chart.yScale().stackMode('values'); 
    chart.legend(true); 
    chart.container('container'); 
    chart.draw(); 
}); 