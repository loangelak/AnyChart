anychart.onDocumentLoad(function(){
    var chart = anychart.pie(); 
    
    chart.data([
        {x: 'Cheetos', y: 25},
        {x: 'Deli Turkey', y: 25},
        {x: 'Jalapeno Chips', y: 25},
        {x: 'Sushi', y: 25},
        {x: 'Cat Food', y: 1}  
    ]); 
    
    
    chart.title("Hannibal's favorites"); 
    chart.container('container'); 
    chart.draw(); 
}); 