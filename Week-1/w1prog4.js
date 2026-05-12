//minimum of an array

let marks=[90,78,65,98];
let min=marks[0];
console.log("marks :",marks)
for(let i=0;i<marks.length;i++){
   if(marks[i]<min){
    min=marks[i];
   }
}
console.log("smallest :",min);