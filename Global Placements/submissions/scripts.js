// This array holds all the candidate data
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
const candidateData = [
    { name: "John Doe", phone: "+4652900543930", project: "Project Saudi Arabia", client: "ABC", status: "On Hold" },
    { name: "Stephen Parsons", phone: "+6388769949189", project: "Project Oman", client: "XYZ", status: "Interview Failed" },
    { name: "Charles Clark", phone: "+5059527991537", project: "Project Oman", client: "XYZ", status: "On Hold" },
    { name: "Joyce Patterson", phone: "+2045758142184", project: "Project Saudi Arabia", client: "ABC", status: "On Hold" },
    { name: "Bruce Walsh", phone: "+6353511514946", project: "Project Oman", client: "XYZ", status: "In Progress" },
    { name: "Julius Evans", phone: "+2921811932949", project: "Project Saudi Arabia", client: "ABC", status: "Documentation" },
    { name: "Phyllis Long", phone: "+5928285085544", project: "Project Oman", client: "POC", status: "In Progress" },
    { name: "Edith Jones", phone: "+7505951604858", project: "Project Oman", client: "XYZ", status: "Awaiting Documents" },
    { name: "Nichole Burke", phone: "+9252504867058", project: "Project Saudi Arabia", client: "ABC", status: "Declined the Offer" },
    { name: "Antonio Leonard", phone: "+5707580355390", project: "Project Oman", client: "POC", status: "Interview Failed" }
  ];
// Get references to important DOM elements
const table = document.getElementById('candidateTable');
const tbody = table.querySelector('tbody');
const filterButtons = document.querySelectorAll('.filter-btn');

// Function to render the table with given data
function renderTable(data) {
    tbody.innerHTML = ''; // Clear existing table content
    data.forEach(candidate => {
        const row = document.createElement('tr');
        row.innerHTML = `
         
            <td>${candidate.name}</td>
            <td>${candidate.phone}</td>
            <td>${candidate.project}</td>
            <td>${candidate.client}</td>
            <td>${candidate.status}</td>
            <td><button class="submissions-actions"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 9h5V4h6v5h5v6h-5v5H9v-5H4zm7 4v5h2v-5h5v-2h-5V6h-2v5H6v2z"/></svg></button></td>
        `;
        tbody.appendChild(row);

        // Add click event listener to the action button
        const actionButton = row.querySelector('.submissions-actions');
        actionButton.addEventListener('click', () => openServiceRequest(candidate));
    });
}function openServiceRequest(candidate) {
    // Store the candidate data in localStorage
    localStorage.setItem('candidateData', JSON.stringify(candidate));

    // Redirect to the forms page
    window.location.href = '../../Global Placements/my_requests/open_service_request.html';
}

// Function to sort the table by a given column
function sortTable(column) {
    candidateData.sort((a, b) => a[column].localeCompare(b[column]));
    renderTable(candidateData);
}

// Function to filter the table by status
function filterTable(status) {
    const filteredData = status === 'ALL' ? 
        candidateData : 
        candidateData.filter(candidate => candidate.status === status);
    renderTable(filteredData);
}

// Add click event listeners to sortable column headers
document.querySelectorAll('th.sortable').forEach(th => {
    th.addEventListener('click', () => {
        const column = th.dataset.sort;
        sortTable(column);
    });
});

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterTable(button.dataset.filter);
    });
});

// Initial render of the table
renderTable(candidateData);