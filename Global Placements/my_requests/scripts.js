const currentFolder = window.location.pathname.split('/').slice(-2, -1)[0];

// Get all sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar-item a');

// Loop through the links and add the active class to the matching link
sidebarLinks.forEach(link => {
  const linkFolder = link.getAttribute('href').split('/').slice(-2, -1)[0];
  if (linkFolder === currentFolder) {
    link.parentElement.classList.add('active');
  }
});
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const requests = data;

        // Get references to important DOM elements
        const table = document.getElementById('requestsTable');
        const tbody = table.querySelector('tbody');
        const countryFilter = document.getElementById('countryFilter');
        const statusFilter = document.getElementById('statusFilter');

        const countries = [...new Set(requests.map(r => r.country))];
        const statuses = [...new Set(requests.map(r => r.status))];

        populateFilter(countryFilter, countries);
        populateFilter(statusFilter, statuses);

        // Function to populate filter dropdowns
        function populateFilter(select, options) {
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
        }

        // Function to render the table with given data
        function renderTable() {
            const selectedCountry = countryFilter.value;
            const selectedStatus = statusFilter.value;

            const filteredRequests = requests.filter(request => 
                (selectedCountry === '' || request.country === selectedCountry) &&
                (selectedStatus === '' || request.status === selectedStatus)
            );

            tbody.innerHTML = '';
            filteredRequests.forEach(request => {
                const row = tbody.insertRow();
                row.innerHTML = `
                    <td>${request.serviceNo}</td>
                    <td>${request.country}</td>
                    <td>${request.candidateName}</td>
                    <td>${request.status}</td>
                    <td>${request.createdOn}</td>
                `;
            });
        }

        // Function to sort the table by a given column
        function sortTable(column) {
            requests.sort((a, b) => a[column].localeCompare(b[column]));
            renderTable();
        }

        // Add event listeners for filters
        countryFilter.addEventListener('change', renderTable);
        statusFilter.addEventListener('change', renderTable);

        // Add click event listeners to sortable column headers
        document.querySelectorAll('th.sortable').forEach(th => {
            th.addEventListener('click', () => {
                const column = th.dataset.sort;
                sortTable(column);
            });
        });

        // Initial render
        renderTable();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});





document.getElementById('serviceRequestBtn').addEventListener('click', () => {
    window.location.href = 'service-request.html'; // Navigate to the service request page
});



document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the candidate data from localStorage
    const candidateData = JSON.parse(localStorage.getItem('candidateData'));

    if (candidateData) {
        // Populate the form fields
        document.getElementById('title').value = `Service Request for ${candidateData.name}`;
        document.getElementById('country').value = candidateData.project.replace('Project ', '');
        document.getElementById('service-id').value = candidateData.phone;
        document.getElementById('description').value = `Client: ${candidateData.client}\nStatus: ${candidateData.status}`;

        // Clear the stored data
        localStorage.removeItem('candidateData');
    }
});