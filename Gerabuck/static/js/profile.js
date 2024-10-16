function displayUserData() {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    const subscriptionPlan = localStorage.getItem('subscriptionPlan');

    if (storedProfile) {
        document.getElementById("profile-name").innerText = storedProfile.name;
        document.getElementById("profile-email").innerText = storedProfile.email;
        document.getElementById("profile-contact").innerText = storedProfile.phone;
        document.getElementById("profile-gender").innerText = storedProfile.gender;
        document.getElementById("profile-dob").innerText = storedProfile.dob;
        document.getElementById("profile-subscription").innerText = subscriptionPlan;
    }
}

document.addEventListener('DOMContentLoaded', displayUserData);

function openEditProfileModal() {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
        document.getElementById('edit-name').value = storedProfile.name;
        document.getElementById('edit-email').value = storedProfile.email;
        document.getElementById('edit-contact').value = storedProfile.phone;
        document.getElementById('edit-gender').value = storedProfile.gender;
        document.getElementById('edit-dob').value = storedProfile.dob;
        document.getElementById('edit-subscription').value = localStorage.getItem('subscriptionPlan');
    }
    document.getElementById('editProfileModal').style.display = 'block';
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').style.display = 'none';
}

document.getElementById('editProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const updatedProfile = {
        name: document.getElementById('edit-name').value,
        email: document.getElementById('edit-email').value,
        phone: document.getElementById('edit-contact').value,
        gender: document.getElementById('edit-gender').value,
        dob: document.getElementById('edit-dob').value,
        subscription: document.getElementById('edit-subscription').value
    };
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
    displayUserData();
    closeEditProfileModal();
});

function openChangePasswordModal() {
    document.getElementById('changePasswordModal').style.display = 'block';
}

function closeChangePasswordModal() {
    document.getElementById('changePasswordModal').style.display = 'none';
}

document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (storedProfile.password !== currentPassword) {
        alert('Current password is incorrect.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('New passwords do not match.');
        return;
    }

    storedProfile.password = newPassword;
    localStorage.setItem('userProfile', JSON.stringify(storedProfile));
    alert('Password changed successfully.');
    closeChangePasswordModal();
});

function toggleProfileMenu() {
    const profileMenu = document.getElementById('profile-menu');
    profileMenu.style.display = (profileMenu.style.display === 'block') ? 'none' : 'block';
}

// function logout() {
//     localStorage.removeItem('userProfile');
//     localStorage.removeItem('subscriptionPlan');
//     navigateTo('homepage.html');
// }

document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profile-menu');
    if (!event.target.closest('.profile-icon')) {
        profileMenu.style.display = 'none';
    }
});