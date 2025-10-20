const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");
const messageField = document.getElementById("message");
const errorMessage = document.querySelector(".errorMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  const fields = form.querySelectorAll("input[required], textarea[required]");
  const message = messageField.value.trim();

  // Reset errors
  form.querySelectorAll(".error").forEach((err) => (err.textContent = ""));

  // Validate fields
  fields.forEach((field) => {
    if (!field.value.trim()) {
      const error = field.parentElement.querySelector(".error");
      error.textContent = "This field is required.";
      isValid = false;
    } else if (field.type === "email" && !/\S+@\S+\.\S+/.test(field.value)) {
      const error = field.parentElement.querySelector(".error");
      error.textContent = "Please enter a valid email.";
      isValid = false;
    } else if (message.length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters long.";
      isValid = false;
    }
  });

  // Show success message only if all fields valid
  if (isValid) {
    successMsg.hidden = false;
    form.reset();
  } else {
    successMsg.hidden = true;
  }
});
