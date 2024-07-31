const currentFolder = window.location.pathname.split('/').slice(-2, -1)[0];

// Get all sidebar links
const profileIcon = document.querySelectorAll('.profile-icon a');



// Loop through the links and add the active class to the matching link
profileIcon.forEach(link => {
  const linkFolder = link.getAttribute('href').split('/').slice(-2, -1)[0];
  if (linkFolder === currentFolder) {
    link.parentElement.classList.add('active');
  }
});

