// Add to Cart function
function addToCart(pizzaId, size) {
    var quantity = parseInt(document.getElementById(pizzaId + '-' + size).value);
    
    // Check if the quantity is valid
    if (isNaN(quantity) || quantity < 1 || quantity > 5) {
      alert('Please enter a valid quantity (1-5).');
      return;
    }
    
    // Add the pizza to the cart
    var pizza = {
      id: quantity,
      size: size,
      quantity: quantity
    };
    
    // You can store the pizza object in your cart or perform further operations here
    // For example, you can add it to an array or send it to the server.
    
    // Confirmation message
    alert(quantity + ' ' + size + ' ' + 'pizza(s) added to the cart.');
  }
  
  // Example usage
  var addToCartButtons = document.querySelectorAll('button a[href="#order"]');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Get the pizza details from the DOM
      var cardTitleElement = button.parentNode.querySelector('.card-title');
      var pizzaId = cardTitleElement.innerText.split(' ')[0];
      var sizeElement = cardTitleElement.querySelector('select[name="size"]');
      var size = sizeElement.value;
      
      // Call the addToCart function with the pizza details
      addToCart(pizzaId, size);
    });
  });
  