//Create a function that receives any number of parameters as arguments and return their sum using REST parameter

function sumOf(...arr){
    let sum=0
    for(a of arr){
        sum=sum+a
    }
    //reduce method
    let r=arr.reduce((acc,a)=>acc+a)
    return r
}

let res=sumOf(10,20,30)
console.log(res)









