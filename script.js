
const addButtons = document.querySelectorAll(".add-btn");
const cartCount = document.getElementById("cartCount");

let cart = 0;

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        cart++;

        cartCount.textContent = cart;

        alert(
            button.dataset.name + " added to your cart!"
        );
    });
});
