//given object 

const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name : "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

console.log(employees);


//inserting new emp in 2nd position
employees.splice(2,0,{eno: 106,name: 'akshitha',marks: [98,95,89]});

//removing an emp with name kiran
employees.splice(4,1);

//updating the last mark 95 of sneha to 75

employees.splice(3,1,{ eno: 103,name : "Sneha",marks: [88, 92, 75],});
console.log(employees);