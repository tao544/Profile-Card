document.addEventListener('DOMContentLoaded', () =>{
    const timeElement = document.getElementById('current-time');
    function updateTime(){
        timeElement.textContent = Date.now();
    }
    updateTime();
    setInterval(updateTime, 1000)
})


// ------------contact form validation----------------

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMessage = document.getElementById("success-message");

    // Error placeholders
    const errors = {
      name: document.getElementById("error-name"),
      email: document.getElementById("error-email"),
      subject: document.getElementById("error-subject"),
      message: document.getElementById("error-message"),
    };

    // Clear old errors
    Object.values(errors).forEach(el => el.textContent = "");

    let valid = true;

    // Validate name
    if (name.value.trim() === "") {
      errors.name.textContent = "Full name is required.";
      valid = false;
    }

       // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
      errors.email.textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      errors.email.textContent = "Enter a valid email address.";
      valid = false;
    }

     // Validate subject
    if (subject.value.trim() === "") {
      errors.subject.textContent = "Subject is required.";
      valid = false;
    }

    // Validate message
    if (message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters long.";
      valid = false;
    }
     // Show success message if valid
    if (valid) {
      successMessage.textContent = " Message sent successfully!";
      contactForm.reset();
    } else {
      successMessage.textContent = "";
    }
  });
}
