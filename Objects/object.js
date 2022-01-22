// Searching - O(N)
// Accessing - O(N)
// Insertion - O(N)
// Removal - O(N)


let person = {
    "name": "Sathish",
    "age":21
}
// In-built methods
console.log(Object.keys(person));
// O(N)
console.log(Object.entries(person));
// O(N)
console.log(person.hasOwnProperty("age"));
// O(1);
console.log(Object.values(person));
// O(N)