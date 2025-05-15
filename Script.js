window.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    let message = '';


  if (hour < 12) {
      message = "Good morning!";
  } else if (hour < 18) {
      message = "Good afternoon!";
  } else {
      message = "Good evening!";
  }

  greeting.textContent= message;
});


function validateForm(event) {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let name = document.getElementById("name").value.trim();
  let message = document.getElementById("message").value.trim();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^\d{10}$/;
  let hasErrors = false;

  // Reset error messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("phone-error").textContent = "";
  document.getElementById("message-error").textContent = "";

  if (name === "") {
      document.getElementById("name-error").textContent = "Please enter your name";
      hasErrors = true;
  }

  if (!emailRegex.test(email)) {
      document.getElementById("email-error").textContent = "Invalid email format";
      hasErrors = true;
  }

  if (phone && !phoneRegex.test(phone)) {
      document.getElementById("phone-error").textContent = "Invalid phone format";
      hasErrors = true;
  }

  if (message === "") {
      document.getElementById("message-error").textContent = "Please enter a message";
      hasErrors = true;
  }

  if (!hasErrors) {
      alert("Form submitted successfully!"); 
      document.querySelector("form").reset();
  }
}



function toggleDetails(id) {
  let details = document.getElementById(id);
  if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
  } else {
      details.style.display = "none";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', validateForm);
  }

});
