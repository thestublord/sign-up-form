document.getElementById('create-account').addEventListener('click', function () {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!firstName) {
        alert('First name is required.');
        return;
    }

    if (!lastName) {
        alert('Last name is required.');
        return;
    }

    if (!email) {
        alert('Email is required.');
        return;
    }

    if (!phoneNumber) {
        alert('Phone number is required.');
        return;
    }

    if (!password) {
        alert('Password is required.');
        return;
    }

    if (!confirmPassword) {
        alert('Confirm password is required.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Add any other form submission logic here.
    alert('Form submitted successfully!');
});
