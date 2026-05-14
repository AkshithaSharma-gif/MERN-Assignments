const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

console.log(students)

//students who passed (marks>=40)

task1=students.filter(stud=>stud.marks>=40);
console.log("Passed Students : ",task1);


//map() to add a grade field

task2=students.map(stud=>{
    if(stud.marks>=90){
        stud.grade='A';
    }
    else if(stud.marks>=75){
        stud.grade='B';
    }
    else if(stud.marks>=60){
        stud.grade='C'
    }
    else {
        stud.grade='D'
    }
})
console.log("Added grade field : ",students);



//reduce to calculate avg marks

let sum=students.reduce((acc,stud)=>acc+stud.marks,0)
let task3=sum/students.length;
console.log("Avg marks :",task3);


//finding student who scored 92

let task4=students.find(stud=>stud.marks===92)
console.log("Student with 92 marks : ",task4)


//finding index of student kiran

let task5=students.findIndex(stud=>stud.name==="Kiran")
console.log("Index of Student with name KIRAN : ",task5)