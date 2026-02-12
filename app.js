// app.js

// Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.updateCartDisplay();
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.updateCartDisplay();
    }

    updateCartDisplay() {
        // Implement the logic to update the cart UI
        console.log('Cart updated:', this.items);
    }
}

// Product Filtering
function filterProducts(products, criteria) {
    return products.filter(product => {
        return product.category === criteria.category && product.price <= criteria.maxPrice;
    });
}

// Form Validation
function validateForm(formData) {
    const isValid = formData.name && formData.email && formData.quantity;
    if (!isValid) {
        throw new Error('Validation Failed: All fields are required.');
    }
    return true;
}

// Example Usage
const cart = new ShoppingCart();

const products = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100 },
    { id: 2, name: 'Product 2', category: 'Category 1', price: 150 }
];

const filteredProducts = filterProducts(products, { category: 'Category 1', maxPrice: 120 });
console.log('Filtered Products:', filteredProducts);

const formData = { name: 'John Doe', email: 'john@example.com', quantity: 2 };
try {
    if (validateForm(formData)) {
        console.log('Form is valid. Proceeding...');
    }
} catch (error) {
    console.error(error.message);
}