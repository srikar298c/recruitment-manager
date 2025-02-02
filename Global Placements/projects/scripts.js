document.addEventListener('DOMContentLoaded', () => {
    // Sidebar and navigation active link handling
    const currentFolder = window.location.pathname.split('/').slice(-2, -1)[0];
    const currentPath = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.sidebar-item a');
    const formLinks = document.querySelectorAll('.nav-button a');

    sidebarLinks.forEach(link => {
        const linkFolder = link.getAttribute('href').split('/').slice(-2, -1)[0];
        if (linkFolder === currentFolder) {
            link.parentElement.classList.add('active');
        }
    });

    formLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPath)) {
            link.parentElement.classList.add('active');
        }
    });

    // Job cards handling
    const jobCardsContainer = document.querySelector('.job-cards');
    const countryFilters = document.querySelectorAll('.country-filter');

    fetch('./job_cards.json')
        .then(response => response.json())
        .then(data => {
            renderJobCards(data);
            setupFilters(data);
        })
        .catch(error => console.error('Error fetching job data:', error));

    function renderJobCards(jobs, filterCountry = 'all') {
        jobCardsContainer.innerHTML = '';
        const filteredJobs = filterCountry === 'all' ? jobs : jobs.filter(job => job.details.country === filterCountry);

        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            
            jobCard.innerHTML = `
                <div class="job-title">${job.title}</div>
                <div class="job-detail">Experience: ${job.experience}</div>
                <div class="job-detail">Qualification: ${job.qualification}</div>
                <div class="job-detail">Gender: ${job.gender}</div>
                <div class="job-detail location-date">
                    <div class="job-detail job-location"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#FF941F" d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"/><path fill="#FF941F" d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"/></svg>${job.location}</div>
                    <div class="job-detail job-date"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#FF941F" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2Zm-33.54-92.37l-31-2.4l-11.95-27.61a6 6 0 0 0-11 0l-11.91 27.61l-31 2.4a6 6 0 0 0-3.36 10.61l23.49 19.39l-7.16 28.93a6 6 0 0 0 8.87 6.61L128 165.5l26.62 15.67a6 6 0 0 0 8.87-6.61l-7.16-28.93l23.49-19.39a6 6 0 0 0-3.36-10.61m-30.68 23.15a6 6 0 0 0-2 6.07l4.63 18.74L131 153.37a6 6 0 0 0-6.08 0l-17.37 10.22l4.63-18.74a6 6 0 0 0-2-6.07l-14.9-12.33l19.83-1.53a6 6 0 0 0 5-3.61l7.89-18.17l7.84 18.17a6 6 0 0 0 5 3.61l19.83 1.53Z"/></svg>${job.date}</div>
                </div>
                <a href="#" class="know-more button">Know More</a>
                <button class="button-btn"><a href="person-details.html">UPLOAD</a></button>
                <div class="popup hidden">
                    <div class="popup-content">
                        <h2>DESCRIPTION</h2>
                        <button class="close-popup">×</button>
                        <div class="popup-details">
                            <div class="detail-row"><span class="detail-label">Country:</span><span class="detail-value">${job.details.country}</span></div>
                            <div class="detail-row"><span class="detail-label">Project:</span><span class="detail-value">${job.details.project}</span></div>
                            <div class="detail-row"><span class="detail-label">Qualification:</span><span class="detail-value">${job.details.additional_qualification}</span></div>
                            <div class="detail-row"><span class="detail-label">Experience:</span><span class="detail-value">${job.details.additional_experience}</span></div>
                            <div class="detail-row"><span class="detail-label">Location:</span><span class="detail-value">${job.details.specific_location}</span></div>
                            <div class="detail-row"><span class="detail-label">Contract Period:</span><span class="detail-value">${job.details.contract_period}</span></div>
                            <div class="detail-row"><span class="detail-label">Age:</span><span class="detail-value">${job.details.age_range}</span></div>
                            <div class="detail-row"><span class="detail-label">Vacancies:</span><span class="detail-value">${job.details.vacancies}</span></div>
                            <div class="detail-row"><span class="detail-label">Perks:</span><span class="detail-value">${job.details.perks.join('<br>')}</span></div>
                            <div class="client-name">
            <span class="icon details-icon" data-popup="popup-dubai-007">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                    <g fill="currentColor">
                        <path d="M25 5h-.17v2H25a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h.17V5H7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3" />
                        <path d="M23 3h-3V0h-8v3H9v6h14zm-2 4H11V5h3V2h4v3h3z" />
                        <path d="M10 13h12v2H10zm0 5h12v2H10zm0 5h12v2H10z" class="ouiIcon__fillSecondary" />
                    </g>
                </svg>
            </span>
            Client 1
        </div>
        
                        </div> 
                    </div>
                </div>
            `;

            jobCard.querySelector('.know-more').addEventListener('click', (e) => {
                e.preventDefault();
                jobCard.querySelector('.popup').classList.toggle('hidden');
            });

            jobCard.querySelector('.close-popup').addEventListener('click', () => {
                jobCard.querySelector('.popup').classList.add('hidden');
            });

            jobCardsContainer.appendChild(jobCard);
        });
    }

    function setupFilters(jobs) {
        countryFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                document.querySelector('.country-filter.active').classList.remove('active');
                filter.classList.add('active');
                const filterCountry = filter.getAttribute('data-country');
                renderJobCards(jobs, filterCountry);
            });
        });
    }

    // Form navigation
    const navButtons = document.querySelectorAll('.nav-button');
    const formSections = document.querySelectorAll('.form-section');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const submitButton = document.getElementById('submitButton');
    let currentPage = 'personal';

    function showSection(sectionId) {
        formSections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });

        navButtons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-page') === sectionId);
        });

        currentPage = sectionId;
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        const pages = ['personal', 'experience', 'documents', 'review'];
        const currentIndex = pages.indexOf(currentPage);

        prevButton.style.display = currentIndex > 0 ? 'inline-block' : 'none';
        nextButton.style.display = currentIndex < pages.length - 1 ? 'inline-block' : 'none';
        submitButton.style.display = currentIndex === pages.length - 1 ? 'inline-block' : 'none';
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            showSection(button.getAttribute('data-page'));
        });
    });

    prevButton.addEventListener('click', () => {
        const pages = ['personal', 'experience', 'documents', 'review'];
        const currentIndex = pages.indexOf(currentPage);
        if (currentIndex > 0) showSection(pages[currentIndex - 1]);
    });

    nextButton.addEventListener('click', () => {
        const pages = ['personal', 'experience', 'documents', 'review'];
        const currentIndex = pages.indexOf(currentPage);
        if (currentIndex < pages.length - 1) showSection(pages[currentIndex + 1]);
    });

const documentTable = document.querySelector('.document-table');

    documentTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('upload-btn')) {
            const row = e.target.closest('tr');
            const fileInput = row.querySelector('input[type="file"]');
            fileInput.click();
        } else if (e.target.classList.contains('add-more-btn')) {
            addMoreDocuments(e.target.getAttribute('data-document'));
        } else if (e.target.classList.contains('remove-file')) {
            removeFile(e.target);
        } else if (e.target.classList.contains('edit-filename')) {
            toggleFilenameEdit(e.target);
        }
    });

    documentTable.addEventListener('change', (e) => {
        if (e.target.type === 'file') {
            handleFileUpload(e.target);
        }
    });

    documentTable.addEventListener('keyup', (e) => {
        if (e.target.classList.contains('file-name-input') && e.key === 'Enter') {
            updateFilename(e.target);
        }
    });

    function handleFileUpload(input) {
        const file = input.files[0];
        const row = input.closest('tr');
        const fileNameSpan = row.querySelector('.file-name');
        const fileNameInput = row.querySelector('.file-name-input');
        const removeButton = row.querySelector('.remove-file');
        const editButton = row.querySelector('.edit-filename');

        if (file) {
            if (isValidFile(file)) {
                console.log(`File ${file.name} selected for upload.`);
                fileNameSpan.textContent = file.name;
                fileNameInput.value = file.name;
                removeButton.style.display = 'inline-block';
                editButton.style.display = 'inline-block';
                // Here you would typically handle the file upload to your server
            } else {
                alert('Please upload a .pdf, .doc, or .docx file not exceeding 1MB.');
                input.value = ''; // Clear the input
                fileNameSpan.textContent = 'Choose File (pdf, doc, docx, up to 1MB)';
                removeButton.style.display = 'none';
                editButton.style.display = 'none';
            }
        }
    }

    function isValidFile(file) {
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        return validTypes.includes(file.type) && file.size <= 1 * 1024 * 1024;
    }

    function addMoreDocuments(documentType) {
        const newRow = document.createElement('tr');
        const rowCount = documentTable.querySelectorAll(`[data-document="${documentType}"]`).length;

        newRow.setAttribute('data-document', documentType);
        newRow.innerHTML = `
            <td></td>
            <td class="file-input">
                <input type="file" id="${documentType}-file-${rowCount}" name="${documentType}[]" accept=".pdf,.doc,.docx" style="display: none;">
                <span class="file-name">Choose File (pdf, doc, docx, up to 1MB)</span>
                <input type="text" class="file-name-input">
                <button type="button" class="edit-filename">Edit</button>
                <button type="button" class="remove-file" style="display: none;">X</button>
            </td>
            <td>
                <button type="button" class="upload-btn" data-document="${documentType}">Upload</button>
            </td>
        `;

        // Find the last row that matches the document type and insert the new row after it
        const lastRow = documentTable.querySelector(`[data-document="${documentType}"]:last-of-type`);
        lastRow.parentNode.insertBefore(newRow, lastRow.nextSibling);
    }

    function removeFile(removeButton) {
        const row = removeButton.closest('tr');
        const fileInput = row.querySelector('input[type="file"]');
        const fileNameSpan = row.querySelector('.file-name');
        const fileNameInput = row.querySelector('.file-name-input');
        const editButton = row.querySelector('.edit-filename');

        fileInput.value = ''; // Clear the file input
        fileNameSpan.textContent = 'Choose File (pdf, doc, docx, up to 1MB)';
        fileNameInput.style.display = 'none';
        fileNameSpan.style.display = 'inline';
        removeButton.style.display = 'none';
        editButton.style.display = 'none';
    }

    function toggleFilenameEdit(editButton) {
        const row = editButton.closest('tr');
        const fileNameSpan = row.querySelector('.file-name');
        const fileNameInput = row.querySelector('.file-name-input');

        if (fileNameInput.style.display === 'none') {
            fileNameInput.style.display = 'inline-block';
            fileNameSpan.style.display = 'none';
            fileNameInput.focus();
            editButton.textContent = 'Save';
        } else {
            updateFilename(fileNameInput);
        }
    }

    function updateFilename(input) {
        const row = input.closest('tr');
        const fileNameSpan = row.querySelector('.file-name');
        const editButton = row.querySelector('.edit-filename');

        fileNameSpan.textContent = input.value;
        input.style.display = 'none';
        fileNameSpan.style.display = 'inline';
        editButton.textContent = 'Edit';
    }
// Initialize the form
showSection('personal');

// Copy mobile number functionality
document.getElementById('mobileNumber').addEventListener('input', () => {
    if (document.getElementById('sameAsMobile').checked) {
        copyMobileNumber(document.getElementById('sameAsMobile'));
    }
});


    // Initialize the form
    showSection('personal');

    // Copy mobile number functionality
    document.getElementById('mobileNumber').addEventListener('input', () => {
        if (document.getElementById('sameAsMobile').checked) {
            copyMobileNumber(document.getElementById('sameAsMobile'));
        }
    });

    document.getElementById('sameAsMobile').addEventListener('change', (e) => {
        copyMobileNumber(e.target);
    });

    function copyMobileNumber(checkbox) {
        const mobileNumber = document.getElementById('mobileNumber').value;
        const whatsappNumber = document.getElementById('whatsAppNumber');
        if (checkbox.checked) {
            whatsappNumber.value = mobileNumber;
            whatsappNumber.readOnly = true;
        } else {
            whatsappNumber.value = '';
            whatsappNumber.readOnly = false;
        }
    }
});
    let registrationCount = 0;
        let employmentCount = 0;

        function addRegistration() {
            registrationCount++;
            const fields = document.createElement('div');
            fields.className = 'dynamic-fields';
            
            if (registrationCount > 1) {
                fields.innerHTML = `
                    <div class="form-group full-width">
                        <select>
                            <option value="">Select Registration Council</option>
                            <!-- Add options here -->
                        </select>
                    </div>
                    <div class="date-inputs">
                        <div class="form-group">
                            <label for="fromDate${registrationCount}">From</label>
                            <input type="date" id="fromDate${registrationCount}">
                        </div>
                        <div class="form-group">
                            <label for="toDate${registrationCount}">To</label>
                            <input type="date" id="toDate${registrationCount}">
                        </div>
                    </div>
                `;
            } else {
                fields.innerHTML = `
                    <div class="date-inputs">
                        <div class="form-group">
                            <label for="fromDate${registrationCount}">From</label>
                            <input type="date" id="fromDate${registrationCount}">
                        </div>
                        <div class="form-group">
                            <label for="toDate${registrationCount}">To</label>
                            <input type="date" id="toDate${registrationCount}">
                        </div>
                    </div>
                `;
            }
            
            document.getElementById('registrationFields').appendChild(fields);
        }

        function addEmployment() {
            employmentCount++;
            const fields = document.createElement('div');
            fields.className = 'dynamic-fields';
            
            if (employmentCount > 1) {
                fields.innerHTML = `
                    <div class="form-group full-width">
                        <input type="text" placeholder="Enter Employer Name">
                    </div>
                    <div class="date-inputs">
                        <div class="form-group">
                            <label for="empFromDate${employmentCount}">From</label>
                            <input type="date" id="empFromDate${employmentCount}">
                        </div>
                        <div class="form-group">
                            <label for="empToDate${employmentCount}">To</label>
                            <input type="date" id="empToDate${employmentCount}">
                        </div>
                    </div>
                `;
            } else {
                fields.innerHTML = `
                    <div class="date-inputs">
                        <div class="form-group">
                            <label for="empFromDate${employmentCount}">From</label>
                            <input type="date" id="empFromDate${employmentCount}">
                        </div>
                        <div class="form-group">
                            <label for="empToDate${employmentCount}">To</label>
                            <input type="date" id="empToDate${employmentCount}">
                        </div>
                    </div>
                `;
            }
            
            document.getElementById('employmentFields').appendChild(fields);
        }