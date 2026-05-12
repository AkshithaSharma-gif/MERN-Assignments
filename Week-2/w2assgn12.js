//Given Data:
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

//Create a shallow copy of user

let copy={...user};

//Change:
//i. name in the copied object
//ii. preferences.theme in the copied object
//iii .Log both original and copied objects
// iv. Observe what changes and what doesn’t

copy.name="xyz"
copy.preferences.theme="light";

console.log("Original Object :",user)
console.log("copied Object after changes :",copy)
