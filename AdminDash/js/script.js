const ctx = document.getElementById('line-chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
            data: [10000,20000,15000,30000,14500,25000,19000],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctz = document.getElementById('bar-chart');

new Chart(ctz, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
            data: [12000,17000,19000,15000,12000,20000,25000],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

