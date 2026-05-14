//Given Data:
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

// Task:
/*    1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/

const copyOrder=structuredClone(order);
copyOrder.customer.address.city="Mumbai";
copyOrder.items[0].price=75000;

console.log("Original : ",order);
console.log("Copy after making changes :",copyOrder)