🚀 Basic Practice Problems
1. Using map()
🔹 Problem: Given an array of numbers, return a new array where each number is squared.
let numbers = [2, 4, 6, 8];
  ✅ Expected Output: [4, 16, 36, 64]
------------------------------------------------
2. Using filter()
🔹 Problem: Given an array of ages, return only the ones greater than 18.
let ages = [12, 18, 20, 25, 15, 30];
  ✅ Expected Output: [20, 25, 30]
---------------------------------------------------
3. Using reduce()
🔹 Problem: Find the total price of all items in a shopping cart.
let cart = [
  { item: "Book", price: 15 },
  { item: "Pen", price: 5 },
  { item: "Laptop", price: 800 }
];
  ✅ Expected Output: 820
----------------------------------------------------------
4. Using forEach()
🔹 Problem: Print all names in uppercase.
let names = ["alice", "bob", "charlie"];
  ✅ Expected Output:
  ALICE  
  BOB  
  CHARLIE  
-------------------------------------------------------------
5. Using sort()
🔹 Problem: Sort an array of students by scores in descending order.
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 }
];
  ✅ Expected Output:
  [
    { name: "Bob", score: 92 },
    { name: "Alice", score: 85 },
    { name: "Charlie", score: 78 }
  ]
--------------------------------------------------------------
6. Using flat()
🔹 Problem: Flatten the given nested array.
let arr = [1, [2, 3], [[4, 5]]];
  ✅ Expected Output: [1, 2, 3, 4, 5]
----------------------------------------------------------------
7. Using flatMap()
🔹 Problem: Given an array of sentences, split each sentence into words and return a single array.
let sentences = ["Hello world", "Good night"];
  ✅ Expected Output: ["Hello", "world", "Good", "night"]
--------------------------------------------------------------
8. Using find()
🔹 Problem: Find the first person who is older than 25.
let people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 30 }
];
  ✅ Expected Output: { name: "Bob", age: 28 }
---------------------------------------------------------------
9. Using some()
🔹 Problem: Check if the array contains at least one negative number.
let nums = [10, -5, 3, 8];
  ✅ Expected Output: true
----------------------------------------------------------------
10. Using every()
🔹 Problem: Check if all numbers in an array are even.
let numbers = [2, 4, 6, 8];
  ✅ Expected Output: true
