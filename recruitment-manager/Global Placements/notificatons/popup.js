document.addEventListener("DOMContentLoaded", function() {
    fetch('notification-popup/notifications.json')
        .then(response => response.json())
        .then(data => populateNotifications(data));
});

function openPopup() {
    document.getElementById('notificationPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('notificationPopup').style.display = 'none';
}

function populateNotifications(notifications) {
    const popupContent = document.getElementById('popupContent');
    notifications.forEach(notification => {
        const p = document.createElement('p');
        p.innerHTML = `${notification.message} <a href="${notification.link}">View more</a>`;
        popupContent.appendChild(p);
    });
}

function viewAllNotifications() {
    // Implement your logic here to view all notifications
    alert("Viewing all notifications");
}
