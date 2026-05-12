 import { getProductById, checkStock, reduceStock } from './product.js';
                          
let cartItems = [];
                          
// TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
    // 1. Get product details
    // 2. Check stock availability
    // 3. Check if product already in cart
    //    - If yes, update quantity
    //    - If no, add new item
    // 4. Return success/error message
    
    const product = getProductById(productId);
    if (!product) {
        return "Product not found.";
    }

    if (!checkStock(productId, quantity)) {
    return "Not enough stock available.";
    }

    const existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
    if (!checkStock(productId, existingItem.quantity + quantity)) {
      return "Not enough stock to update quantity.";
    }
    existingItem.quantity += quantity;
    } else {
    cartItems.push({ productId, quantity });
    }

    return "Item added to cart successfully.";

}
                          
export function removeFromCart(productId) {
    // Remove product from cart
    const index = cartItems.findIndex(item => item.productId === productId);
    if (index === -1) {
        return "Item not found in cart.";
    }
    cartItems.splice(index, 1);
    return "Item removed from cart.";
}
                          
export function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    // Check stock before updating
    const item = cartItems.find(item => item.productId === productId);
    if (!item){
         return "Item not found in cart.";
    }
    if (!checkStock(productId, newQuantity)) {
        return "Not enough stock available.";
    }

    item.quantity = newQuantity;
    return "Quantity updated successfully.";
}
                          
export function getCartItems() {
    // Return all cart items with product details
    return cartItems
}
                          
export function getCartTotal() {
    // Calculate total price of all items in cart
    // Return total
    return getCartItems().reduce((sum, item) => sum + item.total, 0);
}
                          
export function clearCart() {
    // Empty the cart
    cartItems.splice(0,cartItems.length);
    return "Cart Empty"
}