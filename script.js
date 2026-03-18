// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Shop button
function shopNow() {
  alert("Welcome to Glow Beauty!");
}

// Add to cart
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

// Form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("formMsg");

  if (name === "" || email === "") {
    msg.innerText = "Please fill all fields";
    msg.style.color = "red";
    return false;
  }

  msg.innerText = "Form submitted successfully!";
  msg.style.color = "green";
  return false;
}
function calculatePrice() {
  let price = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let msg = document.getElementById("calcMsg");

  if (quantity === "" || quantity <= 0) {
    msg.innerText = "Enter valid quantity";
    msg.style.color = "red";
    return false;
  }

  let total = price * quantity;

  msg.innerText = "Total Price: ₹" + total;
  msg.style.color = "green";

  return false;
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}   
function updateCartCount() {
  document.getElementById("cartCount").innerText = cart.length;
}
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  alert(product + " added to cart!");
}
window.onload = function () {
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateCartCount(); 
};