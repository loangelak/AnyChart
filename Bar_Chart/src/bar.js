anychart.onDocumentLoad(function(){
    //data
    var data = [
        {x: 'DVD Player', y:19},
        {x: 'Home Theater System', y: 24}, 
        {x: 'Karaoke Player', y: 30}, 
        {x: 'Projector', y: 34}, 
        {x: 'TV Receiver', y: 42}
    ];
    //constructor function - type of chart
    var chart = anychart.bar(); 
    //chart title
    chart.title('Product Sales'); 
    //create series
    chart.addSeries(data); 
    //where to place chart
    chart.container('container'); 
    //make it
    chart.draw(); 
}); 