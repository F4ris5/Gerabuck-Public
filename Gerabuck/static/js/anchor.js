// Toggle profile menu
function toggleProfileMenu() {
    const profileMenu = document.getElementById('profile-menu');
    if (profileMenu.style.display === 'block') {
        profileMenu.style.display = 'none';
    } else {
        profileMenu.style.display = 'block';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('userProfile');
    window.location.href = 'homepage.html';
}

// Close the profile menu when clicking outside of it
document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profile-menu');
    if (!event.target.closest('.profile-icon')) {
        profileMenu.style.display = 'none';
    }
});

// Function to handle page transition
function navigateTo(url) {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = url;
    }, 500); // Match this to the CSS transition duration
}

// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a, .footer-section ul li a, .logo a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.href;
            navigateTo(url);
        });
    });
});