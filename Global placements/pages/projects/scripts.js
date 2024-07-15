const knowMoreButtons = document.querySelectorAll('.know-more');
const closePopupButtons = document.querySelectorAll('.close-popup');
const uploadButtons = document.querySelectorAll('.upload-btn');
const uploadForm = document.querySelector('.upload-form');
const formSections = document.querySelectorAll('.form-section');
const navButtons = document.querySelectorAll('.nav-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');


document.addEventListener('DOMContentLoaded', function() {
 

    knowMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = document.querySelector('.popup');
            popup.classList.remove('hidden');
        });
    });

    closePopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = this.closest('.popup');
            popup.classList.add('hidden');
        });
    });
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
    
