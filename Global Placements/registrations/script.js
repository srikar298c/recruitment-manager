function showForm(formType) {
    const companyForm = document.getElementById('companyForm');
    const tabs = document.getElementsByClassName('tab');

    if (formType === 'company') {
        companyForm.classList.add('active');
    } else {
        companyForm.classList.remove('active');
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    document.querySelector(`.tab[onclick="showForm('${formType}')"]`).classList.add('active');
}

function redirectToFreelancer() {
    window.location.href = 'freelancer.html';
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const createPassword = document.getElementById('createPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (createPassword !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault();
    }
});
