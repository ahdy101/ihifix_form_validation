const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const nameSuccess = document.getElementById('name-success');
const emailSuccess = document.getElementById('email-success');
const passwordSuccess = document.getElementById('password-success');
const confirmPasswordSuccess = document.getElementById('confirm-password-success');
const successMessage = document.getElementById('success-message');

const validateName = name => /^[A-Za-z]{2,}$/.test(name);

const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePassword = password => /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password);

form.addEventListener('submit', event => {
  event.preventDefault();
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameSuccess.textContent = '';
    nameInput.classList.add('input-error');
    isValid = false;
  } else if (!validateName(nameInput.value)) {
    nameSuccess.textContent = 'Name must contain at least 2 letters.';
    nameInput.classList.add('input-error');
    isValid = false;
  } else {
    nameSuccess.textContent = 'Valid!';
    nameInput.classList.remove('input-error');
  }

  if (emailInput.value.trim() === '') {
    emailSuccess.textContent = '';
    emailInput.classList.add('input-error');
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailSuccess.textContent = 'Email is not valid.';
    emailInput.classList.add('input-error');
    isValid = false;
  } else {
    emailSuccess.textContent = 'Valid!';
    emailInput.classList.remove('input-error');
  }

  if (passwordInput.value === '') {
    passwordSuccess.textContent = '';
    passwordInput.classList.add('input-error');
    isValid = false;
  } else if (!validatePassword(passwordInput.value)) {
    passwordSuccess.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter and one number or symbol.';
    passwordInput.classList.add('input-error');
    isValid = false;
  } else {
    passwordSuccess.textContent = 'Valid!';
    passwordInput.classList.remove('input-error');
  }

  if (confirmPasswordInput.value === '') {
    confirmPasswordSuccess.textContent = '';
    confirmPasswordInput.classList.add('input-error');
    isValid = false;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordSuccess.textContent = 'Passwords do not match.';
    confirmPasswordInput.classList.add('input-error');
    isValid = false;
  } else {
    confirmPasswordSuccess.textContent = 'Valid!';
    confirmPasswordInput.classList.remove('input-error');
  }
});
