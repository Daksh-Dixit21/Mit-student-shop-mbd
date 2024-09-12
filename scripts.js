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
    productCards.forEach(card => {
        card.querySelector(".view-details").addEventListener("click", function() {
            const productId = this.parentElement.getAttribute("data-product-id");
            const productName = this.parentElement.querySelector("h3").textContent;
            const productImage = this.parentElement.querySelector("img").src;
            const productDescription = this.parentElement.querySelector("p").textContent;

            modalProductTitle.textContent = productName;
            modalProductImage.src = productImage;
            modalProductDescription.textContent = productDescription;
            productIdInput.value = productId;

            productModal.style.display = "block";
        });
    });
    buyNowButton.addEventListener("click", function() {
        const quantity = document.getElementById("quantity").value;
        productQuantityInput.value = quantity;
        orderModal.style.display = "block";
    });
    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            productModal.style.display = "none";
            orderModal.style.display = "none";
        });
    });
    window.onclick = function(event) {
        if (event.target === productModal || event.target === orderModal) {
            productModal.style.display = "none";
            orderModal.style.display = "none";
        }
    };
});