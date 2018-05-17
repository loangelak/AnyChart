anychart.onDocumentLoad(function(){
    anychart.theme(anychart.themes.wines); 
    var tableData = anychart.data.parseHtmlTable('#tableWithData'); 
    var chart = anychart.bar(); 
    chart.data(tableData); 
    chart.yScale().stackMode('percent'); 
    var legend = chart.legend(); 
    legend.enabled(true); 
    var tooltip = chart.tooltip(); 
    tooltip.displayMode('union'); 
    tooltip.format('{%SeriesName}: {%Value} ({%PercentOfCategory}%)'); 
    chart.container('container'); 
    chart.draw(); 
}); 