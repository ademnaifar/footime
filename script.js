const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
const cartItems = document.querySelector('.cart-items');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const checkoutButton = document.querySelector('.checkout');

let count = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    const product = button.parentElement;
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('p').textContent;
    const cartItem = createCartItem(productName, productPrice);
    cartItems.appendChild(cartItem);

    // Add event listener to remove button
    const removeButton = cartItem.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      cartItems.removeChild(cartItem);
      count--;
      cartCount.textContent = count;
    });
  });
});

cartCount.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

checkoutButton.addEventListener('click', () => {
  alert('Thank you for your purchase!');
});

function createCartItem(name, price) {
  const cartItem = document.createElement('li');
  const itemName = document.createElement('span');
  itemName.textContent = name;
  const itemPrice = document.createElement('span');
  itemPrice.textContent = price;
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove';

  cartItem.appendChild(itemName);
  cartItem.appendChild(itemPrice);
  cartItem.appendChild(removeButton);

  return cartItem;
}
