
let productName: string = "Laptop";
let price: number = 50000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computer"];
let productId: number | string = "P101";

function printProductInfo(): void {
    console.log("Product: " + productName);
    console.log("Price: ₹" + price);
    console.log("In stock: " + inStock);
    console.log("Tags: " + tags.join(", "));
    console.log("Product ID: " + productId);
}

printProductInfo();
