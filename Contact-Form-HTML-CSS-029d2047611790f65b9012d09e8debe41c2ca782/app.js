const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value.trim();
  let adderess = document.getElementById('adderess').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let email = document.getElementById('email').value.trim();
  let gname = document.getElementById('gname').value.trim();
  let message = document.getElementById('message').value.trim();

  if (!name || !adderess || !phone || !email || !gname || !message) {
      alert('Please fill in all fields.');
      return;
  }

  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // If validation passes, proceed with form submission
  submitForm(name, adderess, phone, email, gname, message);
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function submitForm(name, adderess, phone, email, gname, message) {
  // Integrate EmailJS here
  // Implementation will be shown in the next section
  console.log('Form submitted:', { name, adderess, phone, email, gname, message });

  emailjs.send('service_4ab5suh', 'template_thdefsp', {
      name: name,
      adderess: adderess,
      phone: phone,
      email: email,
      gname: gname,
      message: message
  })
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('contactForm').reset();
      popupForm.style.display = 'none';
      alert('Form submitted successfully!');
  }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to submit the form. Please try again.');
  });
}
