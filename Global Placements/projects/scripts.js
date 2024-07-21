
const formSections = document.querySelectorAll('.form-section');
const navButtons = document.querySelectorAll('.nav-btn');
// Get the current URL path
const currentFolder = window.location.pathname.split('/').slice(-2, -1)[0];

// Get all sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar-item a');

const currentPath = window.location.pathname.split('/').pop();
const formLinks = document.querySelectorAll('.nav-button a');
// Loop through the links and add the active class to the matching link
sidebarLinks.forEach(link => {
  const linkFolder = link.getAttribute('href').split('/').slice(-2, -1)[0];
  if (linkFolder === currentFolder) {
    link.parentElement.classList.add('active');
  }
});

formLinks.forEach(link=>{

  if (link.getAttribute('href').includes(currentPath)) {
    link.parentElement.classList.add('active');
  }
})

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
    
 
    
    
    