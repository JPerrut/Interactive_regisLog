document.querySelectorAll('.inputUser').forEach((input) => {
	input.addEventListener('keyup', function () {
	  validateField(this);
	});
 });
 
 const form = document.getElementById('register-form');
 
 form.addEventListener('submit', function (e) {
	let isValid = true;
 
	document.querySelectorAll('.inputUser').forEach((input) => {
	  const isFieldValid = validateField(input);
	  if (!isFieldValid) {
		 isValid = false;
	  }
	});
 
	if (!isValid) {
	  e.preventDefault();
	}
 });
 
 function validateField(input) {
	const id = input.id;
	const value = input.value.trim();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let isValid = true;
 
	switch (id) {
	  case 'name':
		 if (!value) {
			displayError('error-name', 'Name is required.');
			isValid = false;
		 } else {
			clearError('error-name');
		 }
		 break;
 
	  case 'email':
		 if (!value) {
			displayError('error-email', 'Email is required.');
			isValid = false;
		 } else if (!emailRegex.test(value)) {
			displayError('error-email', 'Please enter a valid email.');
			isValid = false;
		 } else {
			clearError('error-email');
		 }
		 break;
 
	  case 'password':
		 if (!value) {
			displayError('error-password', 'Password is required.');
			isValid = false;
		 } else {
			clearError('error-password');
		 }
		 break;
 
	  case 'confirm-password':
		 const password = document.getElementById('password').value.trim();
		 if (!value) {
			displayError('error-confirm-password', 'Please confirm your password.');
			isValid = false;
		 } else if (value !== password) {
			displayError('error-confirm-password', 'Passwords do not match.');
			isValid = false;
		 } else {
			clearError('error-confirm-password');
		 }
		 break;
	}
 
	return isValid;
 }
 
 function displayError(elementId, message) {
	const errorElement = document.getElementById(elementId);
	errorElement.textContent = message;
	errorElement.style.opacity = '1';
	errorElement.style.display = 'flex';
 }
 function clearError(elementId) {
	const errorElement = document.getElementById(elementId);
	errorElement.textContent = '';
	errorElement.style.opacity = '0';
 }
 