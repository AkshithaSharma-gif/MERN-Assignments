const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

console.log(movies)


//filter() only "Sci-Fi" movies

let task1=movies.filter(m=>m.genre==="Sci-Fi")
console.log("Only SCI-FI movies : ",task1);


//map() to return:"Inception (8.8)"

let task2=movies.map(function(movie){
    if(movie.title==="Inception"){
        return;
    }
})
console.log("Returning INCEPTION Movie rating :",task2.title,task2.rating);


//reduce() to find average movie rating
let sum=movies.reduce((acc,movie)=>acc+movie.rating,0)
let task3=sum/movies.length
console.log("Avg rating :",task3)


//find() movie "Joker"

let task4=movies.find(m=>m.title==="Joker")
console.log("Finding details of movie named JOKER :",task4)


//findIndex() of "Avengers"

let task5=movies.findIndex(m=>m.title==="Avengers")
console.log("Index of movie named AVENGERS :",task5)
