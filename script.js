const form = document.querySelector('form');

const emailElement = document.querySelector('#email');
const emailErrorElement = document.querySelector('.email-error');
const passwordInputElement = document.querySelector('#password');
const passwordConfirmInputElement = document.querySelector(
  '#password-confirmation',
);
const passwordErrorElement = document.querySelector('.password-error');

const showEmailError = () => {
  if (emailElement.validity.valueMissing) {
    emailErrorElement.textContent = 'Please enter an email address';
  } else if (emailElement.validity.typeMismatch) {
    emailErrorElement.textContent = 'Please enter a valid email address';
  }
  emailErrorElement.className = 'email-error active';
};

const showPasswordError = () => {
  if (passwordInputElement.validity.valueMissing) {
    passwordErrorElement.textContent = 'Please enter a password';
  } else if (passwordInputElement.validity.patternMismatch) {
    passwordErrorElement.textContent =
      'Your password must contain an uppercase letter, a number, and be between 8 and 15 characters max ';
  }

  passwordErrorElement.className = 'password-error active';
};

passwordErrorElement.addEventListener('input', (e) => {
  if (passwordInputElement.validity.valid) {
    passwordInputElement.textContent = '';
    passwordInputElement.className = 'password-error';
  } else {
    showPasswordError();
    e.preventDefault();
  }
});

passwordConfirmInputElement.addEventListener('input', (e) => {
  if (passwordConfirmInputElement.validity.valid) {
    passwordConfirmInputElement.textContent = '';
    passwordConfirmInputElement.className = 'password-error';
  } else if (passwordInputElement.value !== passwordConfirmInputElement.value) {
    passwordConfirmInputElement.textContent = 'Passwords must match';
    passwordErrorElement.className = 'password-error active';
    e.preventDefault();
  }
});

emailElement.addEventListener('submit', (e) => {
  if (emailElement.validity.valid) {
    emailErrorElement.textContent = '';
    emailErrorElement.className = 'email-error';
  } else {
    showEmailError();
    e.preventDefault();
  }
});

form.addEventListener('submit', (e) => {
  if (!emailElement.validity.valid) {
    showEmailError();
    e.preventDefault();
  } else if (!passwordConfirmInputElement.validity.valid) {
    showPasswordError();
    e.preventDefault();
  } else if (passwordConfirmInputElement.value !== passwordInputElement.value) {
    passwordConfirmInputElement.textContent = 'Passwords must match';
    passwordErrorElement.className = 'password-error active';
    e.preventDefault();
  }
});
