// Form validation and submission for register form
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const dobDay = document.getElementById('dob-day').value;
    const dobMonth = document.getElementById('dob-month').value;
    const dobYear = document.getElementById('dob-year').value;
    const dob = `${dobYear}-${dobMonth}-${dobDay}`;
    const tnc = document.getElementById('tnc').checked;
    let isValid = true;

    if (name === '') {
        document.getElementById('name-error').innerText = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('name-error').innerText = '';
    }

    if (email === '') {
        document.getElementById('email-error').innerText = 'Email is required.';
        isValid = false;
    } else {
        document.getElementById('email-error').innerText = '';
    }

    if (password === '') {
        document.getElementById('password-error').innerText = 'Password is required.';
        isValid = false;
    } else {
        document.getElementById('password-error').innerText = '';
    }

    if (!tnc) {
        document.getElementById('tnc-error').innerText = 'You must agree to the terms and conditions.';
        isValid = false;
    } else {
        document.getElementById('tnc-error').innerText = '';
    }

    if (isValid) {
        const userProfile = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            gender: gender,
            dob: dob
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        navigateTo('profile.html');
    }
});

// Form validation and submission for login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    let isValid = true;

    if (email === '') {
        isValid = false;
    }

    if (password === '') {
        isValid = false;
    }

    if (isValid) {
        const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (storedProfile && storedProfile.email === email && storedProfile.password === password) {
            navigateTo('profile.html');
        } else {
            alert('Invalid email or password');
        }
    }
});

// Form validation for forgot password form
document.getElementById('forgotForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('forgot-email').value;

    if (email === '') {
        document.getElementById('forgot-email-error').innerText = 'Email is required.';
    } else {
        document.getElementById('forgot-email-error').innerText = '';
        alert('Password reset link sent to your email!');
        // Add your password reset logic here
    }
});