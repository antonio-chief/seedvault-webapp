import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import './reports.css';

function Reports() {
  useEffect(() => {
    var ctxLine = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: ['January', 'March', 'May', 'July'],
        datasets: [{
          label: 'Products',
          data: [50, 70, 110, 90],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true
        }, {
          label: 'Services',
          data: [30, 50, 70, 60],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    var ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    var doughnutChart = new Chart(ctxDoughnut, {
      type: 'doughnut',
      data: {
        labels: ['Efficient', 'Inefficient'],
        datasets: [{
          data: [70, 30],
          backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, []);

  return (
    <section id="reports" className="section">
      <h1>Reports</h1>
      <div className="reports">
        <div className="recent-reports">
          <h2>Recent Reports</h2>
          <canvas id="lineChart"></canvas>
        </div>
        <div className="chart-by-percent">
          <h2>Distribution by Percentage</h2>
          <canvas id="doughnutChart"></canvas>
        </div>
      </div>
    </section>
  );
}

export default Reports;
