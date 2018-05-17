anychart.onDocumentLoad(function(){
    //prep data
    var tableData = anychart.data.parseHtmlTable('#tableWithData');  
    var chart = anychart.bar(); 
    chart.data(tableData); 
    chart.yScale().stackMode('percent'); 
    chart.legend(true);
    chart.xAxis().title('Products'); 
    chart.label({text: 'Classified'});
    chart.container('container'); 
    chart.draw(); 
});