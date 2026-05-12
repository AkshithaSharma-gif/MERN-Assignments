//function that accepts an array and a number and searches the number in the array and returns the index if found and returns "Not found" if not 

function search(arr,num){
    let index=0;
    flag=0;
    let msg="Not Found"
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            index=i;
            flag=1;
            break;
        }
    }
    if(flag==0){
        return msg;
    }
    else{
        return index;
    }
}

let a=[2,4,6,8,10]
let n=9;
console.log("Array is :",a);
console.log("searching for :",n)
let res=search(a,n);
console.log(res);