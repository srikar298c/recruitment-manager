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

        const candidates = [
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
        const countryFilter = document.getElementById('countryFilter');
        const clientFilter = document.getElementById('clientFilter');
        const deployedFilter = document.getElementById('DeployedFilter');

        const countries = [...new Set(candidates.map(c => c.country))];
        const clients = [...new Set(candidates.map(c => c.client))];
        const deploys = [...new Set(candidates.map(c => c.deployed))];

        populateFilter(countryFilter, countries);
        populateFilter(clientFilter, clients);
        populateFilter(deployedFilter, deploys);

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
            const selectedClient = clientFilter.value;
            const selectedDate = deployedFilter.value;

            const filteredCandidates = candidates.filter(candidate =>
                (selectedCountry === '' || candidate.country === selectedCountry) &&
                (selectedClient === '' || candidate.client === selectedClient) &&
                (selectedDate === '' || candidate.deployed === selectedDate)
            );

            tbody.innerHTML = '';
            filteredCandidates.forEach(candidate => {
                const row = tbody.insertRow();
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
            });
        }

        // Function to sort the table by a given column
        function sortTable(column) {
            candidates.sort((a, b) => a[column].localeCompare(b[column]));
            renderTable();
        }

        // Add event listeners for filters
        countryFilter.addEventListener('change', renderTable);
        clientFilter.addEventListener('change', renderTable);
        deployedFilter.addEventListener('change', renderTable);

        // Add click event listeners to sortable column headers
        document.querySelectorAll('th.sortable').forEach(th => {
            th.addEventListener('click', () => {
                const column = th.dataset.sort;
                sortTable(column);
            });
        });

        // Initial render
        renderTable();