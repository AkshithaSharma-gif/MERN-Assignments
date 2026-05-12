 //Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
                          
// TODO: Implement these functions
                          
export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  // 2. Apply discount if coupon provided
  // 3. Validate payment method (card/upi/cod)
  // 4. Process payment (simulate)
  // 5. Reduce stock for all items
  // 6. Clear cart
  // 7. Generate order summary
                            
  // Return order summary:
  // {
  //   orderId: ...,
  //   items: [...],
  //   subtotal: ...,
  //   discount: ...,
  //   total: ...,
  //   paymentMethod: ...,
  //   status: 'success/failed',
  //   message: '...'
  // }
  const items = getCartItems();
  if (items.length === 0) {
    return { status: "failed", message: "Cart is empty." };
  }

  const subtotal = getCartTotal();

  let discountData = {
    originalTotal: subtotal,
    discount: 0,
    finalTotal: subtotal,
    message: "No coupon applied."
  };

  if (couponCode) {
    discountData = applyDiscount(subtotal, couponCode, items);
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method." };
  }

  // Simulate payment success
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  const orderSummary = {
    orderId: generateOrderId(),
    items,
    subtotal: discountData.originalTotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod,
    status: "success",
    message: "Payment processed successfully."
  };

  clearCart();
  return orderSummary;
}
                          
export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
   const validMethods = ['card', 'upi', 'cod'];
  return validMethods;
}
                          
function generateOrderId() {
  // Generate random order ID
  return 'ORD' + Date.now();
}
