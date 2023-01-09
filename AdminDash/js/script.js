var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [10000,16000,22000,12000,9600,7000,
            9800,17000,17000,23000,23000,26000]
    }],
    xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun',
        'Jul','Aug','Sep','Oct','Nov','Dec']
    }
  }
  
var chart = new ApexCharts(document.querySelector("#chart"), options);
  
chart.render();
  
