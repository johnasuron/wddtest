// form.js

document.addEventListener('DOMContentLoaded', function () {
    // Password Confirmation Validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const userForm = document.getElementById('userForm');

    userForm.addEventListener('submit', function (event) {
        if (password.value !== confirmPassword.value) {
            passwordError.textContent = 'Passwords do not match.';
            event.preventDefault(); // Prevent form submission
        } else {
            passwordError.textContent = '';
        }
    });

    // Display Range Value
    const rating = document.getElementById('rating');
    const ratingValue = document.getElementById('ratingValue');
    rating.addEventListener('input', () => {
        ratingValue.textContent = rating.value;
    });
});