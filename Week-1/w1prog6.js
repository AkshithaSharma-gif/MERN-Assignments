//function that recieves the array and returns sum of elements

function sumOfArrayElements(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    }
return sum
}

let a=[5,10,15,20]
console.log("Array : ",a);
let sum=sumOfArrayElements(a)
console.log("Sum of elements :",sum);