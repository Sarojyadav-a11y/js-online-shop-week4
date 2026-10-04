// cart.js
// This file contains the shopping cart data and cart functions.

import { products } from "./products.js";

// Empty shopping cart
const cart = [];

// Add a product to the cart
function addToCart(productName) {

    // Find the product
    const product = products.find(
        item => item.productName === productName
    );

    // Check if the product exists
    if (!product) {
        throw new Error("Product not found.");
    }

    // Check if the product is in stock
    if (!product.inStock) {
        throw new Error("This product is currently out of stock.");
    }

    // Add the product to the cart
    cart.push(product);

    return product;
}

// Get the current cart
function getCart() {
    return cart;
}

// Calculate the total price
function getCartTotal() {

    return cart.reduce(
        (total, product) => total + product.price,
        0
    );
}

// Export cart data and functions
export {
    cart,
    addToCart,
    getCart,
    getCartTotal
};