
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cartContainer');
  container.innerHTML = '';

  if(cart.length === 0){
    container.innerHTML = '<p>Your cart is empty!</p>';
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item}</span>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    container.appendChild(div);
  });
}

function removeItem(index){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index,1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function payNow(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }
  alert(`Payment successful! You bought ${cart.length} item(s).`);
  localStorage.removeItem('cart');
  displayCart();
}

// Show cart on page load
displayCart();
