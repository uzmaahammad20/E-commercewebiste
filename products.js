let cart = [];
let cartCount = document.getElementById("cart-count");
let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");

// Function to add items to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Function to update the cart
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += Number(item.price);
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total;
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        let name = button.getAttribute("data-name");
        let price = button.getAttribute("data-price");
        addToCart(name, price);
    });
});
