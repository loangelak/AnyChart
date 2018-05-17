anychart.onDocumentLoad(function() {
    //data prep
    var tableData = anychart.data.parseHtmlTable('#tableWithData');
    //chart type
    var chart = anychart.bar();
    //data source
    chart.data(tableData);
    //legend 
    chart.legend(true);
    var tooltip  = chart.tooltip();
    chart.container('container');
    chart.draw();
});