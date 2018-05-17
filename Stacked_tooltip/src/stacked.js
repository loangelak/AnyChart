anychart.onDocumentLoad(function() {
    anychart.theme(anychart.themes.wines);
    var tableData = anychart.data.parseHtmlTable('#tableWithData');
    var chart = anychart.bar();
    chart.data(tableData);
    chart.yScale().stackMode('percent');
    chart.legend(true);
    var tooltip  = chart.tooltip();
    tooltip.displayMode('union');
    tooltip.format('{%SeriesName}: {%Value} ({%YPercentOfCategory}%)');//update from tooltip.textFormatter
    chart.container('container');
    chart.draw();
});