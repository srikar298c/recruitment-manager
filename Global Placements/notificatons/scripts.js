document.addEventListener('DOMContentLoaded', function() {
    const notificationsList = document.getElementById('notificationsList');

    // Fetch the notifications data
    fetch('notifications.json')
        .then(response => response.json())
        .then(data => {
            // Populate the notifications
            data.notifications.forEach(notification => {
                const li = document.createElement('li');
                li.className = 'notification-item';

                const contentSpan = document.createElement('span');
                contentSpan.className = 'notification-content';
                contentSpan.textContent = notification.content;

                const timeSpan = document.createElement('span');
                timeSpan.className = 'notification-time';
                const notificationTime = new Date(notification.timestamp);
                timeSpan.textContent = notificationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                const closeBtn = document.createElement('span');
                closeBtn.className = 'notification-close';
                closeBtn.textContent = '❌';
                closeBtn.addEventListener('click', function() {
                    li.remove(); // Remove the notification when clicked
                });

                li.appendChild(contentSpan);
                li.appendChild(timeSpan);
                li.appendChild(closeBtn);
                
                notificationsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching notifications:', error);
            notificationsList.innerHTML = '<li>Error loading notifications</li>';
        });
});
