const form = document.getElementById('registrationForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
    return;
  }

  // Example: send data to backend API
  alert("Registration successful for " + username + "!");
  errorMessage.textContent = "";
  form.reset();
});
