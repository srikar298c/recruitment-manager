document.addEventListener('DOMContentLoaded', function() {
    const companyTab = document.getElementById('companyTab');
    const freelancerTab = document.getElementById('freelancerTab');
    const companyForm = document.getElementById('companyForm');
    const freelancerForm = document.getElementById('freelancerForm');

    companyTab.addEventListener('click', function() {
        companyTab.classList.add('active');
        freelancerTab.classList.remove('active');
        companyForm.style.display = 'flex';
        freelancerForm.style.display = 'none';
    });

    freelancerTab.addEventListener('click', function() {
        freelancerTab.classList.add('active');
        companyTab.classList.remove('active');
        freelancerForm.style.display = 'flex';
        companyForm.style.display = 'none';
    });
});