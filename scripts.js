document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll(".product-card");
    const productModal = document.getElementById("product-modal");
    const orderModal = document.getElementById("order-modal");
    const modalProductTitle = document.getElementById("modal-product-title");
    const modalProductImage = document.getElementById("modal-product-image");
    const modalProductDescription = document.getElementById("modal-product-description");
    const productIdInput = document.getElementById("product-id");
    const productQuantityInput = document.getElementById("product-quantity");
    const closeButtons = document.querySelectorAll(".close");
    const buyNowButton = document.getElementById("buy-now");
    const quantityInput = document.getElementById("quantity");
    const increaseButton = document.getElementById("increase-quantity");
    const decreaseButton = document.getElementById("decrease-quantity");
    const price = document.getElementById("modal-price");
    const newPrice = document.getElementById("modal-price-new");

    // Show product details modal
    productCards.forEach(card => {
        const viewDetailsButton = card.querySelector(".view-details");
        if (viewDetailsButton) {
            viewDetailsButton.addEventListener("click", function() {
                const productId = card.getAttribute("data-product-id");
                const productName = card.querySelector("h3").textContent;
                const productImage = card.querySelector("img").src;
                const productDescription = card.querySelector("p").textContent;
                const productPrice = card.querySelector("h5").textContent;
                const newProductPrice = card.querySelector("h4").textContent;
                modalProductTitle.textContent = productName;
                modalProductImage.src = productImage;
                modalProductDescription.textContent = productDescription;
                productIdInput.value = productId;
                price.textContent= productPrice;
                newPrice.textContent = newProductPrice;

                productModal.style.display = "block";
            });
        }
    });

    // Update quantity function
    function updateQuantity(increment) {
        let currentQuantity = parseInt(quantityInput.value, 10);
        if (increment) {
            currentQuantity += 1;
        } else {
            currentQuantity = Math.max(1, currentQuantity - 1);
        }
        quantityInput.value = currentQuantity;
    }

    // Attach event listeners for quantity buttons
    if (increaseButton && decreaseButton) {
        increaseButton.addEventListener("click", function() {
            updateQuantity(true);
        });

        decreaseButton.addEventListener("click", function() {
            updateQuantity(false);
        });
    }

    // Show order form modal
    if (buyNowButton) {
        buyNowButton.addEventListener("click", function() {
            const quantity = quantityInput.value;
            if (quantity && quantity > 0) {
                productQuantityInput.value = quantity;
                orderModal.style.display = "block";
            } else {
                alert("Please select a valid quantity.");
            }
        });
    }

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            productModal.style.display = "none";
            orderModal.style.display = "none";
        });
    });

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target === productModal || event.target === orderModal) {
            productModal.style.display = "none";
            orderModal.style.display = "none";
        }
    };
});