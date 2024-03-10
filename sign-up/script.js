const form = document.getElementById('registration-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', (event) => {
  // Check for empty fields
  if (fullName.value === '' || email.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
    alert('Please fill in all required fields!');
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Check password match
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match!');
    event.preventDefault();
    return;
  }

  // Basic password strength check (optional)
  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*[^\s]).{7,}/.test(passwordInput.value)) {
    alert('Password must be at least 7 characters and include uppercase, lowercase, digits, and special characters!');
    event.preventDefault();
    return;
  }

  // Submit the form if all validations pass
  // (Implement logic to send data to the server)
  event.preventDefault(); // Not sending data here for demonstration
  console.log('Form submitted successfully!');
});
