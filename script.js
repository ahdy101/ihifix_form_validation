  const form = document.getElementById('registration-form');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const passwordError = document.getElementById('password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');

  const validatePassword = password => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password);

  form.addEventListener('submit', event => {
    if (!validatePassword(passwordInput.value)) {
      event.preventDefault();
      passwordError.textContent = "Password must contain at least one number, one symbol, and be 8 characters or longer.";
    } else {
      passwordError.textContent = "";
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      event.preventDefault();
      confirmPasswordError.textContent = "Passwords do not match.";
    } else {
      confirmPasswordError.textContent = "";
    }
  });