const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    // Example: send login request to backend API
    alert("Login successful for " + email + "!");
    loginError.textContent = "";
    loginForm.reset();
    // Redirect to dashboard page
    window.location.href = "dashboard.html";
  } catch (err) {
    loginError.textContent = "Server error: " + err.message;
  }
});
