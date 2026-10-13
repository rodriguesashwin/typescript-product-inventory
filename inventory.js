"use strict";
let productName = "Laptop";
let price = 50000;
let inStock = true;
let tags = ["Electronics", "Computer"];
let productId = "P101";
function printProductInfo() {
    console.log("Product: " + productName);
    console.log("Price: ₹" + price);
    console.log("In stock: " + inStock);
    console.log("Tags: " + tags.join(", "));
    console.log("Product ID: " + productId);
}
printProductInfo();
