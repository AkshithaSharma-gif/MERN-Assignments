//Advanced Operations on Arrays

//original array will not be changed....it creates a new copy of that array and make changes in that new array


//callback function is a function that is passed as an argument to another function
/*
result=arr.method(callback function)
callback function is called by method
method is called by some instruction in the code

No. of times method calls the callback function.=size of Array
*/






//(1)filter(callback function)
//only selection can be done but not modification(adding 10 to each element)

//accepts both elements and index
//if we write 2 , first is element next is index

let a=[54,85,96,41,25];
console.log(a);

let r=a.filter(function(element){
    return element>50
})
console.log(r);



//using arrow function
let res=a.filter((element)=>element>30);
console.log(res)



//between 40 and 30

let result=a.filter(function(element){
    return element>40&&element<80
})
console.log(result)







//(2)map(callback function)
//same as filter method but can be used for modications

let r1=a.map(function(element){
    return element+10
})
console.log(r1);

let r2=a.map(element=>element+15)
console.log(r2)




//add 10 if <50 and substract 20 if >50

let r3=a.map(function(element){
    if(element<50){
        return element+10
    }
    else
    if(element>50){
        return element-20
    }
})
console.log(r3)






//(3)reduce((accumulator,element))

//used to reduce the array to a single value
//always takes 2 parameters 
//accumulator stores the result of previous operation



//finding sum of elements

let sum=a.reduce((accumulator,element)=>accumulator+element)
console.log




//finding smallest element

let small=a.reduce(function(acc,ele){
  if(acc<ele){
        return acc
    }
    else return ele
})

console.log(small)


//finding greatest element

let large=a.reduce((acc,ele)=>{
   if(acc>ele){
        return acc
    }
    else return ele
})

console.log(large)




//(4)find(callback function)
//searching purpose

let elem=a.find(ele=>ele===25)
console.log(elem) 

let elem1=a.find(ele=>ele===90)
console.log(elem1) 




//(5)findIndex(callback function)

let e1=a.findIndex(ele=>ele===25)
console.log(e1)

let e2=a.findIndex(ele=>ele===90)
console.log(e2)


//(6)sort()

//modifies the original array
//not much believable because the sort() method works on lexical order i.e. it considers each number to be a string 
//it conders 10 as 1 and 0 and compares with other elements with it
//hence the results may or may not be right

let sort_a=a.sort();
console.log(sort_a)



//for getting the correct output
//toSorted()
//modifies the original array

let data=[3,89,5,67]
let ne=data.toSorted((a,b)=>b+a)             //b-a for descending order
console.log(ne)















//advanced operations on array of objects

const students=[
    {id:1,marks:96},
    {id:2,marks:66},
    {id:3,marks:80},
    {id:4,marks:92},
]

//all methods are similar to array methods
//Map method is also used to pick specific elements from each object (marks of all students in one array)





//reduce method

let sumOfMarks=students.reduce((acc,student)=>acc+student.marks,0)  //0 is the iniotial value given to acc bcoz it must have numbers not objects
console.log(sumOfMarks);

