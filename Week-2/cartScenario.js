const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//get only instock products

let task1=cart.filter(c=>c.inStock);
console.log("In Stock Products :",task1);



//map to create new array with name,totalPrice

/* let task2=cart.map(c=>c.name,c.price)
console.log("new array with name,totalPrice : ",task2) 
*/


//reduce to calculate grand total

let task3=cart.reduce((acc,cartpr)=>acc+cartpr.price,0)
console.log("Grand Total :",task3)



//find to dtails of mpouse

let task4=cart.find(pr=>pr.name==="Mouse")
console.log("Details of the product named 'Mouse' : ",task4)



//findindex for keyword

let task5=cart.findIndex(pr=>pr.name==="Keyboard")
console.log("index of Keyboard item : ",task5)