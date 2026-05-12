//a function that recieves 3 numbers and returns the greatest

function greatest(a,b,c)
{
    if(a>b&&a>c)
{
    return a
}
if(b>a&&b>c){
    return b;
}
else{
    return c
}
}

let x=10,y=20,z=30;
console.log("x=",x,"y=",y,"z=",z);
let g=greatest(x,y,z)
console.log("Greatest :",g);