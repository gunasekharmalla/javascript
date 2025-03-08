1. squaring numbers 
let numbers = [2, 4, 6, 8];
console.log(numbers.map( (n) => n*n) )
--------------------------------------------
2. age > 18
let ages = [12, 18, 20, 25, 15, 30];
console.log(ages.filter((ages) => ages > 18))
-------------------------------------------------
3. sum of prices in cart use reduce 
let cart = [
  { item: "Book", price: 15 },
  { item: "Pen", price: 5 },
  { item: "Laptop", price: 800 }
];
console.log( cart.reduce( (a, b) => a + b.price,0 ))
-------------------------------------------------------
  4. names in uppercase use forEach 
let names = ["alice", "bob", "charlie"];
console.log(names.forEach(names => console.log(names.toUpperCase())))
//using map
console.log(names.map(names => names.toUpperCase()))
--------------------------------------------------------
  5. ordering based on scores using sort() 
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 }
];
// Your code here for decending order
console.log(students.sort( (a,b) => b.score - a.score ))
//for ascending oder
console.log(students.sort((a,b) => a.score - b.score))
-----------------------------------------------------------
  6. convert it to single array use flat() 
let arr = [1, [2, 3], [[4, 5]]];
// Your code here
console.log(arr.flat(2))
-------------------------------------------
  7. split sentences into words use flatmap() 
//flatMap
let sentences = ["Hello world", "Good night"];
// Your code here
console.log(sentences.flatMap(sentences => sentences.split(" ")))
//using map
val = sentences.map(sent => sent.split(" "))
console.log(val.flat(val.length))
---------------------------------------------------------------------
  8. find 1st age person > 25 
//find
let people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 30 }
];
// for 1st person 
console.log(people.find((a)=> a.age > 25))
//usinf filter for 1st person 
console.log(people.filter( (a) => a.age > 25 )[0])
//filtering all persons age > 25  
console.log(people.filter( (age) => age.age > 25 ))
------------------------------------------------------
  9. finding neg values use some() 
//some
let nums = [10, -5, 3, 8];
// Your code here
console.log(nums.some(nums => nums < 0))
//filtering neg vals
console.log(nums.filter(nums => nums < 0 ))
-------------------------------------------------------
  10.check all no are even or not use every()
//all
let numbers = [2, 4, 6, 8];
// Your code here
console.log(numbers.every(nums => nums%2==0))
