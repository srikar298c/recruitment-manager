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
document.addEventListener('DOMContentLoaded', function() {
    const notificationsList = document.getElementById('notificationsList');

    // Fetch the notifications data
    fetch('notifications.json')
        .then(response => response.json())
        .then(data => {
            // Populate the notifications
            data.notifications.forEach(notification => {
                const li = document.createElement('li');
                
                const contentSpan = document.createElement('span');
                contentSpan.className = 'notification-content';
                contentSpan.textContent = notification.content;
                
                const timeSpan = document.createElement('span');
                timeSpan.className = 'notification-time';
                const notificationTime = new Date(notification.timestamp);
                timeSpan.textContent = notificationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                
                li.appendChild(contentSpan);
                li.appendChild(timeSpan);
                
                notificationsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching notifications:', error);
            notificationsList.innerHTML = '<li>Error loading notifications</li>';
        });
});