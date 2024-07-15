
const formSections = document.querySelectorAll('.form-section');
const navButtons = document.querySelectorAll('.nav-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');


document.addEventListener('DOMContentLoaded', () => {
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
              <div class="job-detail job-location">${job.location}</div>
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
                      <button class="upload-btn"><a href="person-details.html">UPLOAD</a></button>
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
});


    
    let currentSection = 0;
    
    uploadButtons.forEach(button => {
      button.addEventListener('click', function() {
        uploadForm.classList.remove('hidden');
        // You might want to populate the country here based on the selected job
        document.getElementById('selected-country').textContent = 'OMAN'; // Example
      });
    });
    
    function showSection(index) {
      formSections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
      });
      navButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });
      prevBtn.classList.toggle('hidden', index === 0);
      nextBtn.classList.toggle('hidden', index === formSections.length - 1);
      submitBtn.classList.toggle('hidden', index !== formSections.length - 1);
    }
    
    navButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        currentSection = index;
        showSection(currentSection);
      });
    });
    
    prevBtn.addEventListener('click', () => {
      if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
      }
    });
    
    nextBtn.addEventListener('click', () => {
      if (currentSection < formSections.length - 1) {
        currentSection++;
        showSection(currentSection);
      }
    });
    
    document.getElementById('upload-form').addEventListener('submit', function(e) {
      e.preventDefault();
      // Handle form submission here
      console.log('Form submitted');
    });
    
