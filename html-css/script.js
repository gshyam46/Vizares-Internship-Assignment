// Quantity Buttons Logic
const quantityInput = document.getElementById("quantity");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");

// Decrease quantity
decreaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

// Increase quantity
increaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});

// Buy Now Button Logic
const buyNowBtn = document.getElementById("buyNow");
buyNowBtn.addEventListener("click", () => {
  alert("Order placed successfully! Thank you for shopping with us.");
});

// Thumbnail Interaction
const thumbnails = document.querySelectorAll(".thumbnails img");
const productImage = document.querySelector(".product-image img");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    productImage.src = thumbnail.src;
  });
});

// Contact Form Submission Logic
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Display alert message
  alert("Thank you! Our team will contact you shortly.");

  // Log form data to console
  console.log("Contact Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Optionally, reset the form fields
  contactForm.reset();
});
