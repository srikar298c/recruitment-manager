const currentFolder = window.location.pathname.split('/').slice(-2, -1)[0];

// Get all sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar-item a');

// Loop through the links and add the active class to the matching link
sidebarLinks.forEach(link => {
  const linkFolder = link.getAttribute('href').split('/').slice(-3, -2)[0];
  if (linkFolder === currentFolder) {
    link.parentElement.classList.add('active');
  }
});
const candidateData = [
    { name: "Aimee Schwartz", phone: "968-832-1448", country: "Cambridgeshire", client: "Client ABD", travelled: "September", deployed: "Peru" },
    { name: "Kent Myers", phone: "497-725-6661", country: "Cambridgeshire", client: "Client XYS", travelled: "February", deployed: "Malaysia" },
    { name: "Erik Tucker", phone: "665-823-8994", country: "Borders", client: "Client ABD", travelled: "February", deployed: "Micronesia" },
    { name: "Caleb Rojas", phone: "680-784-3360", country: "Berkshire", client: "Client ABD", travelled: "August", deployed: "Liberia" },
    { name: "Virginia Alvarado", phone: "849-907-1314", country: "Berkshire", client: "Client ABD", travelled: "December", deployed: "El Salvador" },
    { name: "Jennifer Cohen", phone: "661-881-3343", country: "Cambridgeshire", client: "Client XYS", travelled: "May", deployed: "Georgia" },
    { name: "Kara Dominguez", phone: "426-392-9984", country: "Berkshire", client: "Client XYS", travelled: "July", deployed: "Isle of Man" },
    { name: "Clifton Beck", phone: "393-566-7228", country: "Buckinghamshire", client: "Client XYS", travelled: "February", deployed: "Georgia" },
    { name: "Anna Neal", phone: "881-340-3880", country: "Cambridgeshire", client: "Client XYS", travelled: "November", deployed: "Netherlands" },
    { name: "Alicia Taylor", phone: "902-693-0629", country: "Bedfordshire", client: "Client XYS", travelled: "April", deployed: "Zambia" }
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
            <td>${candidate.country}</td>
            <td>${candidate.client}</td>
            <td>${candidate.travelled}</td>
            <td>${candidate.deployed}</td>
            <td class="actions">
                <button class="download"></button>
                <button class="upload"></button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to sort the table by a given column
function sortTable(column) {
    candidateData.sort((a, b) => a[column].localeCompare(b[column]));
    renderTable(candidateData);
}

// Function to filter the table by country
function filterTable(country) {
    const filteredData = country === 'ALL' ? 
        candidateData : 
        candidateData.filter(candidate => candidate.country === country);
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
