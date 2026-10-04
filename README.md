# JavaScript Online Shop

## Project Description

This project is a simple online shop created with HTML, CSS, and JavaScript.

The project allows users to view products, filter products by category, and add products to a shopping cart.

For Week 4, the JavaScript code was organized into separate ES6 modules. The product information is stored in `products.js`, the cart logic is stored in `cart.js`, and `app.js` is the main entry point that handles the webpage and user interactions.

The project also includes error handling for products that are not found or are out of stock.

## Project Files

* `index.html` - Contains the structure of the webpage.
* `style.css` - Contains the styling for the online shop.
* `app.js` - Handles DOM interactions, product rendering, category filtering, and button events.
* `products.js` - Contains and exports the products array.
* `cart.js` - Contains and exports the cart data and cart functions.
* `README.md` - Provides information about the project.

## Features

* Displays products dynamically.
* Filters products by category.
* Adds products to the shopping cart.
* Updates the cart counter.
* Checks whether a product exists.
* Checks whether a product is in stock.
* Displays a user-friendly error message when a product cannot be added.
* Uses ES6 JavaScript modules.

## Error Handling

The `addToCart()` function uses `throw` to handle products that are not found or are out of stock.

The `app.js` file uses `try...catch...finally` to handle these errors and display a helpful message directly on the webpage.

## GitHub Pages

GitHub Pages URL:

[Add your GitHub Pages URL here]

## GitHub Repository

GitHub Repository URL:

[Add your GitHub repository URL here]
