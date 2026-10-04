// app.js
// Main entry point for the online shop.
// This file handles DOM interactions and event wiring.

import { products } from "./products.js";

import {
    cart,
    addToCart,
    getCartTotal
} from "./cart.js";


// Get HTML elements
const productGrid = document.getElementById("product-grid");

const errorMessage = document.getElementById("error-message");

const cartCount = document.getElementById("cart-count");

const categoryButtons =
    document.querySelectorAll("#category-buttons button");


// Update the cart counter
function updateCartCount() {

    cartCount.textContent = cart.length;

}


// Display products
function renderProducts(productsToDisplay) {

    // Clear the existing product cards
    productGrid.innerHTML = "";

    // Create a card for each product
    productsToDisplay.forEach(product => {

        // Create product card
        const card = document.createElement("div");

        card.className = "product-card";


        // Product name
        const name = document.createElement("h3");

        name.textContent = product.productName;


        // Product price
        const price = document.createElement("p");

        price.textContent =
            `Price: $${product.price.toFixed(2)}`;


        // Product category
        const category = document.createElement("p");

        category.textContent =
            `Category: ${product.category}`;


        // Stock status
        const stock = document.createElement("p");

        if (product.inStock) {

            stock.textContent = "Status: In Stock";

        } else {

            stock.textContent = "Status: Out of Stock";

        }


        // Add to Cart button
        const button = document.createElement("button");

        button.textContent = "Add to Cart";

        button.className = "add-to-cart";

        button.type = "button";


        // Add click event
        button.addEventListener("click", () => {

            try {

                // Try to add product to cart
                addToCart(product.productName);

                // Clear old error message
                errorMessage.textContent = "";

            }

            catch (error) {

                // Display a user-friendly message
                if (
                    error.message ===
                    "This product is currently out of stock."
                ) {

                    errorMessage.textContent =
                        "Sorry, this product is currently out of stock.";

                } else {

                    errorMessage.textContent =
                        "Sorry, this product could not be added to the cart.";

                }

            }

            finally {

                // Always update the cart counter
                updateCartCount();

            }

        });


        // Add everything to the product card
        card.appendChild(name);

        card.appendChild(price);

        card.appendChild(category);

        card.appendChild(stock);

        card.appendChild(button);


        // Add card to the product grid
        productGrid.appendChild(card);

    });

}


// Category filter buttons
categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory =
            button.dataset.category;


        let filteredProducts;


        // Show all products
        if (selectedCategory === "All") {

            filteredProducts = products;

        }

        // Show selected category
        else {

            filteredProducts = products.filter(
                product =>
                    product.category === selectedCategory
            );

        }


        // Display filtered products
        renderProducts(filteredProducts);


        // Clear old error message
        errorMessage.textContent = "";

    });

});


// Display all products when the page loads
renderProducts(products);


// Set the starting cart count
updateCartCount();