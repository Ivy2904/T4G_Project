// Add to cart functionality
function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
}
// Sample product data (normally you would get this data from a database or API)
const products = [
    { id: 1, name: "Tile A", price: 20.00 },
    { id: 2, name: "Tile B", price: 30.00 },
    { id: 3, name: "Tile C", price: 25.00 },
];

// Cart items will be stored in an array
let cart = [];

// Function to render the cart items dynamically
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");

    // Clear the current cart display
    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeItem(${item.id})">Remove</button></td>
        `;

        cartItems.appendChild(row);
    });

    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    subtotalElement.textContent = subtotal.toFixed(2);
    taxElement.textContent = tax.toFixed(2);
    totalElement.textContent = total.toFixed(2);
}

// Function to add an item to the cart
function addItemToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
}

// Function to update the quantity of an item
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    item.quantity = parseInt(quantity);
    renderCart();
}

// Function to remove an item from the cart
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

// Checkout button click handler
document.getElementById("checkout-button").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout...");
    }
});

// Add some initial items to the cart (for testing purposes)
addItemToCart(1);
addItemToCart(2);
addItemToCart(3);

// Function to validate the login form
// function validateLogin() {
    // Get the values of username and password fields
    // const username = document.getElementById('username').value;
    // const password = document.getElementById('password').value;

    // Check if both fields are filled out
    // if (username === '' || password === '') {
    //     alert('Please fill in both username and password.');
    //     return false; // Prevent form submission
    }

    // Example of simple username and password validation (for demonstration purposes)
    // if (username === 'admin' && password === 'password123') {
    //     alert('Login successful!');
        // You can redirect the user to a different page after successful login
        // window.location.href = 'dashboard.html'; // Uncomment this line for redirection
    //     return true; // Allow form submission (login successful)
    // } else {
    //     alert('Invalid username or password. Please try again.');
    //     return false; // Prevent form submission
    }
}
