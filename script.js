// script.js

// Functionality for filtering products
function filterProducts() {
    // Implementation goes here
}

// Functionality for shopping cart
let cart = [];

function addToCart(product) {
    cart.push(product);
}

function removeFromCart(product) {
    cart = cart.filter(item => item !== product);
}

// Interactive features
function initialize() {
    // Implementation goes here
}

// Execute initialization on page load
window.onload = initialize;
