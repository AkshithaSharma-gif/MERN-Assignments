//basic operations on arrays

//original array  gets affected or changed





//reading and iterating can be done using loops

//operations done during the execution of a program are called dynamic operations


//insertions


let arr=[10,20,30]
console.log(arr)

//dynamic insertion at the end using the predefined method push()
//(method) Array<number>.push(...items: number[]): number
//Appends new elements to the end of an array, and returns the new length of the array.

arr.push(50); // we can pass any no. of args (push(40,84,87))
console.log(arr);



//dynamic insertion at the start of the array using unshift()
//(method) Array<number>.unshift(...items: number[]): number
//Inserts new elements at the start of an array, and returns the new length of the array.

arr.unshift(0);
console.log(arr);

//dynamic insertion in between (index based insertion) using splice()

arr.splice(4,0,40)
console.log(arr);




//deletions

//deletion from the start using shift().........atmost one element can be removed
//(method) Array<number>.shift(): number | undefined
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified

arr.shift();    //can store the elemnt in other variable.. just in case.. a=arr.shift()
console.log(arr);


//deletion from end of an array using pop()..........atmost 1 element can be removed
//(method) Array<number>.pop(): number | undefined
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified

arr.pop()
console.log(arr)



//deletions from between (index based) using splice().......more than 1 element can be removed

arr.splice(2,1);
console.log(arr)




//updation 

//can be done through splice()

arr.splice(2,1,30);
console.log(arr);





//basic operations on objects

//original object  gets affected or changed




console.log("opeartions on objects")
//as objects are unordered collection there is no insertions or deletions specifically in the begginning , end or specific index 

//person is the reference and {.... } is the object

let person={
    name:"akshitha",
    age:18
}

console.log(person)

//dynamically updating the objects

//adding a new property

person.city='Hyd'
console.log(person)


//update a property

person.age=19
console.log(person)


//delete a property

delete person.city;
console.log(person)


