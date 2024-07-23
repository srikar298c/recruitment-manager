const currentFolder = window.location.pathname.split('/').slice(-2, -1)[0];

// Get all sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar-item a');

// Loop through the links and add the active class to the matching link
sidebarLinks.forEach(link => {
  const linkFolder = link.getAttribute('href').split('/').slice(-2, -1)[0];
  if (linkFolder === currentFolder) {
    link.parentElement.classList.add('active');
  }
});// Sample data - replace with your dynamic data loading mechanism
const chartData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    submitted: [0, 200, 250, 300, 350, 500, 600, 620, 650, 700, 750, 800],
    travelled: [100, 250, 300, 350, 450, 500, 550, 570, 580, 600, 700, 780],
    vacancies: [200, 250, 300, 480, 390, 490, 590, 590, 390, 290, 390, 290]
  };
  
  // Create Growth Chart
  const growthCtx = document.getElementById('growthChart').getContext('2d');
  const growthChart = new Chart(growthCtx, {
    type: 'line',
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Submitted',
          data: chartData.submitted,
          borderColor: 'rgb(0, 0, 0)',
          tension: 0.1
        },
        {
          label: 'Travelled',
          data: chartData.travelled,
          borderColor: 'rgb(255, 165, 0)',
          tension: 0.1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Global Placements - Growth over time'
        },
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Placements'
          }
        }
      }
    }
  });
  
  // Create Vacancies Chart
  const vacanciesCtx = document.getElementById('vacanciesChart').getContext('2d');
  const vacanciesChart = new Chart(vacanciesCtx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: [{
        label: 'Vacancies',
        data: chartData.vacancies,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Vacancies Posted by Global Placements'
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Vacancies'
          }
        }
      }
    }
  });
  
  // Filter functionality
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const period = this.dataset.period;
      filterData(period);
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  function filterData(period) {
    let filteredLabels, filteredSubmitted, filteredTravelled, filteredVacancies;
    
    switch(period) {
      case '1M':
        filteredLabels = chartData.labels.slice(-1);
        filteredSubmitted = chartData.submitted.slice(-1);
        filteredTravelled = chartData.travelled.slice(-1);
        filteredVacancies = chartData.vacancies.slice(-1);
        break;
      case '6M':
        filteredLabels = chartData.labels.slice(-6);
        filteredSubmitted = chartData.submitted.slice(-6);
        filteredTravelled = chartData.travelled.slice(-6);
        filteredVacancies = chartData.vacancies.slice(-6);
        break;
      case '1Y':
      case 'Max':
      default:
        filteredLabels = chartData.labels;
        filteredSubmitted = chartData.submitted;
        filteredTravelled = chartData.travelled;
        filteredVacancies = chartData.vacancies;
    }
  
    updateCharts(filteredLabels, filteredSubmitted, filteredTravelled, filteredVacancies);
  }
  
  function updateCharts(labels, submitted, travelled, vacancies) {
    growthChart.data.labels = labels;
    growthChart.data.datasets[0].data = submitted;
    growthChart.data.datasets[1].data = travelled;
    growthChart.update();
  
    vacanciesChart.data.labels = labels;
    vacanciesChart.data.datasets[0].data = vacancies;
    vacanciesChart.update();
  }