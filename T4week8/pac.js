const buttons = document.querySelectorAll('.between button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const parent = button.parentElement;
        const productContainer = parent.parentElement;
        const cartPlaceholder = document.querySelector('.hello');
        const cartContainer = document.querySelector('.two_col');
        const cartCount = document.querySelector('.head_two h1 span');

        // Create quantity controls
        const quantityControls = document.createElement('p');
        quantityControls.innerHTML = `
            <button class="increase">+</button>
            <span>1</span>
            <button class="decrease">-</button>
        `;
        quantityControls.setAttribute('class', 'can');

        // Create cart item display
        const productName = productContainer.querySelector('.item').textContent;
        const productPrice = parseFloat(productContainer.querySelector('.item_one span').textContent);

        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${productName}</p>
            <p>$<span class="product-price">${productPrice.toFixed(2)}</span></p>
            <p>n: <span class="chuyen">1</span></p>
        `;
        cartItem.setAttribute('class', 'dri');

        // Remove "Add to Cart" button and placeholder
        button.remove();
        if (cartPlaceholder) cartPlaceholder.remove();

        // Append new elements
        parent.appendChild(quantityControls);
        cartContainer.appendChild(cartItem);

        // Update cart count and total price
        updateCartCount(1);
        updateTotalPrice();

        // Add dynamic events for quantity controls
        addCanEvents(quantityControls, cartItem);
    });
});

// Function to add events to quantity controls
function addCanEvents(quantityElement, cartItemElement) {
    const increaseButton = quantityElement.querySelector('.increase');
    const decreaseButton = quantityElement.querySelector('.decrease');
    const quantitySpan = quantityElement.querySelector('span');
    const cartQuantitySpan = cartItemElement.querySelector('.chuyen');
    const cartPriceElement = cartItemElement.querySelector('.product-price');
    const cartContainer = document.querySelector('.two_col');
    const cartCount = document.querySelector('.head_two h1 span');
    const parent = quantityElement.parentElement;

    increaseButton.addEventListener('click', () => {
        const newQuantity = parseInt(quantitySpan.textContent) + 1;
        quantitySpan.textContent = newQuantity;
        cartQuantitySpan.textContent = newQuantity;

        // Update cart count and total price
        updateCartCount(1);
        updateTotalPrice();
    });

    decreaseButton.addEventListener('click', () => {
        const newQuantity = parseInt(quantitySpan.textContent) - 1;
        quantitySpan.textContent = newQuantity;
        cartQuantitySpan.textContent = newQuantity;

        // Update cart count and total price
        updateCartCount(-1);
        updateTotalPrice();

        // Remove item if quantity is 0
        if (newQuantity === 0) {
            quantityElement.remove();
            cartItemElement.remove();

            // Restore "Add to Cart" button
            const addButton = document.createElement('button');
            addButton.innerHTML = "☕ Add to Cart";
            parent.appendChild(addButton);

            addButton.addEventListener('click', () => {
                const newQuantityControls = document.createElement('p');
                newQuantityControls.innerHTML = `
                    <button class="increase">+</button>
                    <span>1</span>
                    <button class="decrease">-</button>
                `;
                newQuantityControls.setAttribute('class', 'can');
                addButton.remove();
                parent.appendChild(newQuantityControls);

                const productName = parent.parentElement.querySelector('.item').textContent;
                const productPrice = parseFloat(parent.parentElement.querySelector('.item_one span').textContent);

                const newCartItem = document.createElement('div');
                newCartItem.innerHTML = `
                    <p>${productName}</p>
                    <p>$<span class="product-price">${productPrice.toFixed(2)}</span></p>
                    <p>n: <span class="chuyen">1</span></p>
                `;
                newCartItem.setAttribute('class', 'dri');
                cartContainer.appendChild(newCartItem);

                updateCartCount(1);
                updateTotalPrice();
                addCanEvents(newQuantityControls, newCartItem);
            });
        }
    });
}

// Function to update cart count and toggle placeholder
function updateCartCount(change) {
    const cartCount = document.querySelector('.head_two h1 span');
    const cartPlaceholder = document.querySelector('.hello');
    const cartContainer = document.querySelector('.two_col');

    const currentCount = parseInt(cartCount.textContent) + change;
    cartCount.textContent = currentCount;

    if (currentCount === 0) {
        // Show placeholder if cart is empty
        if (!cartPlaceholder) {
            const placeholder = document.createElement('div');
            placeholder.setAttribute('class', 'hello');
            placeholder.innerHTML = `<img src="assets/imgs/icons-cart.png" alt="">`;
            cartContainer.appendChild(placeholder);
        }
    } else {
        // Remove placeholder if cart is not empty
        if (cartPlaceholder) {
            cartPlaceholder.remove();
        }
    }
}

// Function to calculate and update the total price
function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.dri');
    let totalPrice = 0;

    cartItems.forEach((item) => {
        const price = parseFloat(item.querySelector('.product-price').textContent);
        const quantity = parseInt(item.querySelector('.chuyen').textContent);
        totalPrice += price * quantity;
    });

    // Ensure total price is always added to the end of the cart container
    let totalPriceElement = document.querySelector('.total-price');
    if (!totalPriceElement) {
        totalPriceElement = document.createElement('div');
        totalPriceElement.setAttribute('class', 'total-price');
        totalPriceElement.innerHTML = `<h2>Tổng: $<span>0.00</span></h2>`;
        document.querySelector('.two_col').appendChild(totalPriceElement);
    }

    // Update the total price
    totalPriceElement.querySelector('span').textContent = totalPrice.toFixed(2);
}
