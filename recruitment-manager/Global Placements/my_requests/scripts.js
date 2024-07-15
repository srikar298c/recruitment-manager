let allRequests = [];

async function fetchData() {
    const response = await fetch('data.json');
    allRequests = await response.json();
    populateFilters();
    renderTable(allRequests);
}

function populateFilters() {
    const countries = [...new Set(allRequests.map(req => req.country))];
    const severities = [...new Set(allRequests.map(req => req.severity))];
    const statuses = [...new Set(allRequests.map(req => req.status))];

    populateFilter('countryFilter', countries);
    populateFilter('severityFilter', severities);
    populateFilter('statusFilter', statuses);
}

function populateFilter(id, options) {
    const select = document.getElementById(id);
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

function renderTable(data) {
    const tbody = document.querySelector('#requestsTable tbody');
    tbody.innerHTML = '';
    data.forEach(req => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${req.serviceNo}</td>
            <td>${req.country}</td>
            <td>${req.candidateName}</td>
            <td><span class="severity ${req.severity.toLowerCase()}">${req.severity}</span></td>
            <td>${req.status}</td>
            <td>${req.createdOn}</td>
        `;
    });
}

function filterData() {
    const selectedCountries = getSelectedValues('countryFilter');
    const selectedSeverities = getSelectedValues('severityFilter');
    const selectedStatuses = getSelectedValues('statusFilter');

    const filteredData = allRequests.filter(req => 
        (selectedCountries.length === 0 || selectedCountries.includes(req.country)) &&
        (selectedSeverities.length === 0 || selectedSeverities.includes(req.severity)) &&
        (selectedStatuses.length === 0 || selectedStatuses.includes(req.status))
    );

    renderTable(filteredData);
}

function getSelectedValues(id) {
    return Array.from(document.getElementById(id).selectedOptions).map(option => option.value);
}

document.getElementById('countryFilter').addEventListener('change', filterData);
document.getElementById('severityFilter').addEventListener('change', filterData);
document.getElementById('statusFilter').addEventListener('change', filterData);

document.getElementById('serviceRequestBtn').addEventListener('click', () => {
    window.location.href = 'service-request.html'; // Navigate to the service request page
});

fetchData();