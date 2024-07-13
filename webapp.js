// Initialize charts using Chart.js

window.onload = function() {
    var ctxLine = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'March', 'May', 'July', 'September', 'November'],
            datasets: [{
                label: 'Viability',
                data: [55, 60, 80, 65, 75, 70],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }, {
                label: 'Sales',
                data: [60, 70, 100, 70, 90, 75],
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
            labels: ['Occupied', 'Free'],
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
}

// Handle menu button clicks
document.getElementById('dashboardBtn').addEventListener('click', function() {
    setActiveSection('overview');
    setActiveMenu(this);
});

document.getElementById('storageBtn').addEventListener('click', function() {
    setActiveSection('storage');
    setActiveMenu(this);
});

document.getElementById('reportsBtn').addEventListener('click', function() {
    setActiveSection('reports');
    setActiveMenu(this);
});

document.getElementById('settingsBtn').addEventListener('click', function() {
    setActiveSection('settings');
    setActiveMenu(this);
});

function setActiveSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

function setActiveMenu(menuItem) {
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    menuItem.classList.add('active');
}

//Handles the logout button
function logoutAndClose() {
    if (window.opener && !window.opener.closed) {
        window.opener.location.href = 'website.html'
    }
    window.close();
}