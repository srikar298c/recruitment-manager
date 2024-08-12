// Utility Functions
function updateActiveLinks(links, pathSegment, currentPath) {
  links.forEach(link => {
    const linkFolder = link.getAttribute('href').split('/').slice(-2, -1)[0];
    if (linkFolder === pathSegment || link.getAttribute('href').includes(currentPath)) {
      link.parentElement.classList.add('active');
    }
  });
}

function togglePopup(event, jobCard) {
  event.preventDefault();
  jobCard.querySelector('.popup').classList.toggle('hidden');
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop();
  const currentFolder = window.location.pathname.split('/').slice(-2, -1)[0];

  // Update sidebar and form navigation links
  updateActiveLinks(document.querySelectorAll('.sidebar-item a'), currentFolder, currentPath);
  updateActiveLinks(document.querySelectorAll('.nav-button a'), currentFolder, currentPath);

  const jobCardsContainer = document.querySelector('.job-cards');
  const countryFilters = document.querySelectorAll('.country-filter');

  fetch('./job_cards.json')
    .then(response => response.json())
    .then(data => {
      renderJobCards(data);
      setupFilters(data, countryFilters);
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
          <div class="job-detail job-location">${job.location}</div>
          <div class="job-detail job-date">${job.date}</div>
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
            </div> 
          </div>
        </div>
      `;

      jobCard.querySelector('.know-more').addEventListener('click', (e) => togglePopup(e, jobCard));
      jobCard.querySelector('.close-popup').addEventListener('click', () => jobCard.querySelector('.popup').classList.add('hidden'));

      jobCardsContainer.appendChild(jobCard);
    });
  }

  function setupFilters(jobs, filters) {
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        document.querySelector('.country-filter.active').classList.remove('active');
        filter.classList.add('active');
        const filterCountry = filter.getAttribute('data-country');
        renderJobCards(jobs, filterCountry);
      });
    });
  }

  // Form Navigation
  const navButtons = document.querySelectorAll('.nav-button');
  const formContent = document.getElementById('formContent');
  let currentPage = 'personal';

  function loadContent(page) {
    currentPage = page;
    updateNavButtons();
    let content = '';

    switch (page) {
      case 'personal':
        content = `
          <div class="form-title-header"><h2>Personal Details</h2></div>
          <div class="form-container">
            <form id="form1" class="form">
                    <div class="form-step">
                        
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName">
                        </div>
                    
                        <div class="form-group phone-inputs">
                            <div class="input-wrapper">
                                <label for="mobileNumber">Mobile Number</label>
                                <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" required>
                            </div>
                        </div>
                            <div class="form-group phone-inputs">
                            <div class="input-wrapper">
                                <label for="whatsAppNumber">WhatsApp Number</label>
                                <input type="tel" id="whatsAppNumber" name="whatsAppNumber" placeholder="Enter your WhatsApp number">
                                <div class="checkbox-wrapper">
                                    <input type="checkbox" id="sameAsMobile" name="sameAsMobile" onchange="copyMobileNumber(this)">
                                    <label for="sameAsMobile">Same as mobile number</label>
                                </div>
                            </div>
                        </div>
                        
                          
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email">
                        </div>

                        <div class="form-group radio">
                            <label for="gender">Gender</label>
                            <div class="radio-group">
                                <div class="radio-option">
                                <input type="radio" id="male" name="gender" value="male">
                                <label for="single">Male</label>
                            </div>
                            <div class="radio-option">
                            <input type="radio" id="female" name="gender" value="female">
                                <label for="married">Female</label>
                            </div>
                        </div>
                        </div>

                        <div class="form-group full-width">
                            <label>Marital Status</label>
                            <div class="radio-group">
                                <div class="radio-option">
                                    <input type="radio" id="single" name="maritalStatus" value="single">
                                    <label for="single">Single</label>
                                </div>
                                <div class="radio-option">
                                    <input type="radio" id="married" name="maritalStatus" value="married">
                                    <label for="married">Married</label>
                                </div>
                                <div class="radio-option">
                                    <input type="radio" id="divorced" name="maritalStatus" value="divorced">
                                    <label for="divorced">Divorced</label>
                                </div>
                                <div class="radio-option">
                                    <input type="radio" id="widowed" name="maritalStatus" value="widowed">
                                    <label for="widowed">Widowed</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="dob">Date of Birth</label>
                            <input type="date" id="dob" name="dob">
                        </div>
                        <div class="form-group">
                            <label for="nationality">Nationality</label>
                            <select id="nationality" name="nationality">
                                <option value="">Select your country</option>
                                <option value="us">United States</option>
                                <option value="ca">Canada</option>
                                <option value="uk">United Kingdom</option>
                                <!-- Add more options as needed -->
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="passportNumber">Passport Number</label>
                            <input type="text" id="passportNumber" name="passportNumber">
                        </div>
                        <div class="form-group">
                            <label for="dateOfExpiry">Date of Expiry</label>
                            <input type="date" id="dateOfExpiry" name="dateOfExpiry">
                        </div>
                        <div class="form-group">
                            <label for="highestQualification">Highest Qualification</label>
                            <select id="highestQualification" name="highestQualification">
                                <option value="">Select</option>
                                <option value="highschool">High School</option>
                                <option value="bachelors">Bachelor's</option>
                                <option value="masters">Master's</option>
                                <option value="phd">PhD</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="yearOfPassing">Year of Passing</label>
                            <select id="yearOfPassing" name="yearOfPassing">
                                <option value="">Select</option>
                                <!-- Add more options as needed -->
                            </select>
                        </div>
                    </div>
                </form>
                 <div class="button-group">
            <button type="button" id="prevButton">Previous</button>
            <button type="button" id="nextButton">Next</button>
        </div>
          </div>`;
        break;
      case 'experience':
        content = `
          <div class="form-title-header"><h2>Experience</h2></div>
         <div class="form-container">
                <form id="experienceForm" class="form">
                    <div class="form-step">
                        <div class="form-group">
                          <label for="registrationCouncil">Current Registration Council*</label>
                          <select id="registrationCouncil" required>
                            <option value="">Select</option>
                            <!-- Add options here -->
                          </select>
                          <button type="button" class="add-button">+ Add Registration</button>
                        </div>
                        <div class="form-group">
                          <label for="department">Department</label>
                          <select id="department">
                            <option value="">Select</option>
                            <!-- Add options here -->
                          </select>
                        </div>
                        <div class="form-group full-width">
                          <label for="employerName">Latest Employer Name</label>
                          <input type="text" id="employerName" placeholder="Enter the Hospital name">
                          <button type="button" class="add-button">+ Add Employment</button>
                        </div>
                        <div class="form-group row-group full-width">
                          <div class="form-group">
                            <label for="fromDate">From</label>
                            <input type="date" id="fromDate">
                          </div>
                          <div class="form-group">
                            <label for="toDate">To</label>
                            <input type="date" id="toDate">
                          </div>
                          <div class="form-group checkbox-group">
                            <input type="checkbox" id="presentCheck">
                            <label for="presentCheck">Present</label>
                          </div>
                        </div>
                        <div class="form-group full-width">
                          <label for="preferredCountry">Preferred Country of Work</label>
                          <input type="text" id="preferredCountry" placeholder="Enter your Preferred Country">
                        </div>
                      </div>
                    </form>
                     <div class="button-group">
            <button type="button" id="prevButton">Previous</button>
            <button type="button" id="nextButton">Next</button>
        </div>
                  </div>`;
        break;
      case 'documents':
        content = `
          <div class="form-title-header"><h2>Documents</h2></div>
          <div class="form-container">
             <table class="document-table">
                    <tr>
                        <td>Curriculum Vitae (CV)*</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="Curriculum Vitae">Upload</button>
                            <button type="button" class="add-more-btn" data-document="Curriculum Vitae">Add More</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Passport</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="Passport">Upload</button>
                            <button type="button" class="add-more-btn" data-document="Passport">Add More</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Degree</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="Degree">Upload</button>
                            <button type="button" class="add-more-btn" data-document="Degree">Add More</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Transactions</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="Transactions">Upload</button>
                            <button type="button" class="add-more-btn" data-document="Transactions">Add More</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Registration</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="Registrations">Upload</button>
                            <button type="button" class="add-more-btn" data-document="Registrations">Add More</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Work Experience</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="Work Experience">Upload</button>
                            <button type="button" class="add-more-btn" data-document="Work Experience">Add More</button>
                        </td>
                    </tr>
                    <tr>
                        <td>DataFlow</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="DataFlow">Upload</button>
                            <button type="button" class="add-more-btn" data-document="DataFlow">Add More</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Prometric/DHA</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="Prometric/DHA">Upload</button>
                            <button type="button" class="add-more-btn" data-document="Prometric/DHA">Add More</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Others(if any)</td>
                        <td class="file-input">
                            <input type="file" id="cv-file" accept=".pdf" style="display: none;">
                            <span>Choose File( pdf or document, upto 2MB)</span>
                        </td>
                        <td>
                            <button type="button" class="upload-btn" data-document="Others">Upload</button>
                            <button type="button" class="add-more-btn" data-document="Others">Add More</button>
                        </td>
                    </tr>
                </table>
                 <div class="button-group">
            <button type="button" id="prevButton">Previous</button>
            <button type="button" id="nextButton">Next</button>
        </div>
          </div>`;
        break;
      case 'review':
        content = `
          <div class="formm-title-header"><h2>Review</h2></div>
          <div class="form-container">
              <form id="personalDetailsForm" class="form">
                    <div class="form-step">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group radio">
                        <label for="gender">Gender</label>
                        <div class="radio-group">
                            <div class="radio-option">
                            <input type="radio" id="male" name="gender" value="male">
                            <label for="single">Male</label>
                        </div>
                        <div class="radio-option">
                        <input type="radio" id="female" name="gender" value="female">
                            <label for="married">Female</label>
                        </div>
                
                    </div>
                    </div>
                    <div class="form-group">
                        <label for="mobile">Mobile</label>
                        <input type="tel" id="mobile" name="mobile" required>
                    </div>
                    <div class="form-group">
                        <label for="whatsapp">WhatsApp</label>
                        <input type="tel" id="whatsapp" name="whatsapp">
                    </div>
                    <div class="form-group">
                        <label for="dob">Date of Birth</label>
                        <input type="date" id="dob" name="dob" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="nationality">Nationality</label>
                        <input type="text" id="nationality" name="nationality" required>
                    </div>
                    <div class="form-group">
                        <label for="maritalStatus">Marital Status</label>
                        <select id="maritalStatus" name="maritalStatus" required>
                            <option value="">Select</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="highestDegree">Highest Degree</label>
                        <input type="text" id="highestDegree" name="highestDegree" required>
                    </div>
                    <div class="form-group">
                        <label for="yearOfPassing">Year of Passing</label>
                        <input type="number" id="yearOfPassing" name="yearOfPassing" required>
                    </div>
                    <div class="form-group">
                        <label for="passport">Passport</label>
                        <input type="text" id="passport" name="passport" required>
                    </div>
                    <div class="form-group">
                        <label for="expiresOn">Expires On</label>
                        <input type="date" id="expiresOn" name="expiresOn" required>
                    </div>
                </div>
                <h2 class="section-title">Experience</h2>
            <div class="form-step">
            <div class="form-group full-width">
                <label for="currentDesignation">Current Designation</label>
                <input type="text" id="currentDesignation" name="currentDesignation" required>
            </div>
            <div class="form-group full-width">
                <label for="employerName">Employer Name</label>
                <input type="text" id="employerName" name="employerName" required>
            </div>
            <div class="form-group row-group full-width">
            <div class="form-group">
                <label for="from">From</label>
                <input type="date" id="from" name="from" required>
            </div>
            <div class="form-group">
                <label for="to">To</label>
                <input type="date" id="to" name="to" required>
            </div>
        </div>
        </div>
                    
                   <div class="documents">
                <h2 class="section-title">Documents</h2>
                <div class="document-item">
                    <span>Resume</span>
                    <div class="document-actions">
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                        </button>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                        </button>
                    </div>
                </div>
                <div class="document-item">
                    <span>Prometric</span>
                    <div class="document-actions">
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                        </button>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                        </button>
                    </div>
                </div>
                <div class="document-item">
                    <span>Transcripts</span>
                    <div class="document-actions">
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                        </button>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                        </button>
                    </div>
                </div>
                <div class="document-item">
                    <span>Registration</span>
                    <div class="document-actions">
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                        </button>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                        </button>
                    </div>
                </div>
                <div class="document-item">
                    <span>Dataflow</span>
                    <div class="document-actions">
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                        </button>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                        </button>
                    </div>
                </div>
                <div class="document-item">
                    <span>Passport</span>
                    <div class="document-actions">
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                        </button>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                        </button>
                    </div>
                </div>
                <div class="document-item">
                    <span>BSc Degree</span>
                    <div class="document-actions">
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                        </button>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                            </button>

                    </div>
                </div>
            </form>
          <button class="submit-btn">Submit</button>`;
        break;
      default:
        content = '<p>Page not found</p>';
    }

    formContent.innerHTML = content;
 if (page === 'documents') {
      setupDocumentHandlers();
    }
  }

  function updateNavButtons() {
    navButtons.forEach(button => {
      button.classList.remove('active');
      if (button.getAttribute('data-page') === currentPage) {
        button.classList.add('active');
      }
    });
  }

  navButtons.forEach(button => {
    button.addEventListener('click', function () {
      const page = this.getAttribute('data-page');
      loadContent(page);
    });
  });

  document.getElementById('prevButton').addEventListener('click', () => {
    const pages = ['personal', 'experience', 'documents', 'review'];
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex > 0) loadContent(pages[currentIndex - 1]);
  });

  document.getElementById('nextButton').addEventListener('click', () => {
    const pages = ['personal', 'experience', 'documents', 'review'];
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex < pages.length - 1) loadContent(pages[currentIndex + 1]);
  });

  function setupDocumentHandlers() {
    const table = document.querySelector('.document-table');

    table.addEventListener('click', (e) => {
      if (e.target.classList.contains('upload-btn')) {
        handleUploadButtonClick(e.target);
      } else if (e.target.classList.contains('add-more-btn')) {
        handleAddMoreButtonClick(e.target);
      }
    });

    table.addEventListener('change', (e) => {
      if (e.target.type === 'file') {
        handleFileInputChange(e.target);
      }
    });
  }

  function handleUploadButtonClick(button) {
    const documentType = button.getAttribute('data-document');
    const fileInput = document.querySelector(`#${documentType.toLowerCase().replace(/\s+/g, '-')}-file`);
    fileInput.click();
  }

  function handleAddMoreButtonClick(button) {
    const documentType = button.getAttribute('data-document');
    addMoreDocuments(documentType);
  }

  function handleFileInputChange(input) {
    const file = input.files[0];
    if (file) {
      if (!isValidFile(file)) {
        alert('Please upload a .pdf, .doc, or .docx file not exceeding 2MB.');
        return;
      }
      uploadFile(file, input.id.replace('-file', ''));
    }
  }

  function isValidFile(file) {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return validTypes.includes(file.type) && file.size <= 2 * 1024 * 1024;
  }

  function uploadFile(file, documentType) {
    console.log(`Uploading ${file.name} for ${documentType}`);
    setTimeout(() => {
      alert(`${file.name} uploaded successfully for ${documentType}`);
    }, 1000);
  }

  function addMoreDocuments(documentType) {
    const newRow = document.createElement('tr');
    const additionalDocumentType = `${documentType}-additional`;
    newRow.innerHTML = `
      <td>${documentType} (Additional)</td>
      <td class="file-input">
        <input type="file" id="${additionalDocumentType.toLowerCase().replace(/\s+/g, '-')}-file" accept=".pdf,.doc,.docx" style="display: none;">
        <span>Choose File (pdf, doc, docx, up to 2MB)</span>
      </td>
      <td>
        <button type="button" class="upload-btn" data-document="${additionalDocumentType}">Upload</button>
      </td>`;
    document.querySelector(`[data-document="${documentType}"]`).closest('tr').after(newRow);
  }

  // Copy Mobile Number Function
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

  loadContent('personal');  // Initial load
});