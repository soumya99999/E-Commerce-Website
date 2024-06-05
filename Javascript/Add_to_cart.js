// JavaScript to handle displaying items in the cart
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.querySelector('.container2_cart');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let cartHTML = '<table>';
    cartHTML += '<tr><th>Remove</th><th>Product</th><th>Quantity</th><th>Price</th></tr>';

    cartItems.forEach((item, index) => {
        cartHTML += `
            <tr data-index="${index}">
                <td><i class="fas fa-trash remove-item" onclick="removeItem(${index})"></i></td>
                <td><img src="${item.image}" alt="${item.name}" width="50"><br>${item.name}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
                <td>${item.price}</td>
            </tr>
        `;
    });

    cartHTML += '</table>';
    cartContainer.innerHTML = cartHTML;
});

function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    location.reload();
}

function updateQuantity(index, quantity) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems[index].quantity = quantity;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const aboutSection = document.querySelector('.About');
    const contactSection = document.querySelector('.contact_information');

    function scrollToSection(section) {
        section.scrollIntoView({ behavior: 'smooth' });
        section.classList.add('highlight');
        setTimeout(() => {
            section.classList.remove('highlight');
        }, 2000); 
    }

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(aboutSection);
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(contactSection);
    });
});

