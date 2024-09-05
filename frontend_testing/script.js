/* const ctx = document.querySelector('#pie-chart')

const data = {
    labels: [
      'Housing',
      'Blue',
      'Yellow',
      "test"
    ],
    datasets: [{
      // label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        '#FF0000',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        '#00FFFF'
      ],
      hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        legend:{
          display:false
        },
        tooltip: {
          enabled:false
      }
  }
}
};

new Chart(ctx,config) */

/* document.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".dropdown-trigger").dropdown();
}) */
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });