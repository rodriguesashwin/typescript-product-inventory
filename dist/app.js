"use strict";
const products = [
    { id: 1, name: "Laptop", price: 50000, quantity: 5 },
    { id: 2, name: "Mouse", price: 500, quantity: 20 },
    { id: 3, name: "Keyboard", price: 1200, quantity: 10 }
];
let nextId = 4;
const form = document.getElementById("productForm");
const nameInput = document.getElementById("productName");
const priceInput = document.getElementById("productPrice");
const quantityInput = document.getElementById("productQuantity");
const searchInput = document.getElementById("search");
const productList = document.getElementById("productList");
const summary = document.getElementById("summary");
function renderProducts(searchTerm = "") {
    productList.replaceChildren();
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    filteredProducts.forEach((product) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        const priceCell = document.createElement("td");
        priceCell.textContent = "₹" + product.price.toFixed(2);
        const quantityCell = document.createElement("td");
        quantityCell.textContent = String(product.quantity);
        const valueCell = document.createElement("td");
        valueCell.textContent =
            "₹" + (product.price * product.quantity).toFixed(2);
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", () => {
            const index = products.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                products.splice(index, 1);
                renderProducts(searchInput.value);
            }
        });
        actionCell.appendChild(deleteButton);
        row.append(nameCell, priceCell, quantityCell, valueCell, actionCell);
        productList.appendChild(row);
    });
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
    summary.textContent =
        `${products.length} products | ${totalQuantity} items in stock`;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);
    if (!name || !Number.isFinite(price) || price <= 0 ||
        !Number.isInteger(quantity) || quantity < 0) {
        alert("Enter a valid name, price and whole-number quantity.");
        return;
    }
    products.push({
        id: nextId++,
        name: name,
        price: price,
        quantity: quantity
    });
    form.reset();
    renderProducts(searchInput.value);
});
searchInput.addEventListener("input", () => {
    renderProducts(searchInput.value);
});
renderProducts();
