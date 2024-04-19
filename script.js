Script.js
// Sample product data (in reality, this would come from a backend database)
var products = [
    { title: "Product 1", description: "Description of Product 1", price: "$10", rating: "4.5" },
    { title: "Product 2", description: "Description of Product 2", price: "$20", rating: "4.0" },
    { title: "Product 3", description: "Description of Product 3", price: "$15", rating: "3.8" }
];

function searchProducts() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var filteredProducts = products.filter(function(product) {
        return product.title.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    var container = document.getElementById("productContainer");
    container.innerHTML = ""; // Clear previous content
    products.forEach(function(product) {
        var productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <button onclick="showProductDetails('${product.title}')">View Details</button>
        `;
        container.appendChild(productElement);
    });
}

function showProductDetails(title) {
    var product = products.find(function(prod) {
        return prod.title === title;
    });
    if (product) {
        document.getElementById("productName").innerText = product.title;
        document.getElementById("productDescription").innerText = product.description;
        document.getElementById("productPrice").innerText = "Price: " + product.price;
        document.getElementById("productRating").innerText = "Rating: " + product.rating;
        document.getElementById("productDetails").style.display = "block";
    } else {
        alert("Product not found!");
    }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Here you would typically perform validation and authentication
    // For simplicity, let's assume the username is "admin" and password is "password"
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to the main page (main.html)
        window.location.href = "main.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
