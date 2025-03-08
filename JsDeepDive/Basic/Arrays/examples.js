                              EXAMPLES
    ------------------------------------------------------------------------
  1.1 Adding & Removing Elements
let arr = [1, 2, 3];
arr.push(4);  // [1, 2, 3, 4]
arr.pop();     // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]
arr.shift();    // [1, 2, 3]
-------------------------------------------------------------
  1.2 Checking & Finding Elements
let numbers = [10, 20, 30, 40];
console.log(numbers.includes(20));  // true
console.log(numbers.indexOf(30));   // 2
console.log(numbers.find(num => num > 25));  // 30
console.log(numbers.findIndex(num => num > 25)); // 2
console.log(numbers.some(num => num > 50));  // false
console.log(numbers.every(num => num > 5));  // true
-------------------------------------------------------
  1.3 Extracting & Modifying Arrays
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(1, 3));   // [2, 3] (Extracts elements from index 1 to 2)
arr1.splice(2, 1, 100);          // [1, 2, 100, 4, 5] (Replaces 3 with 100)
console.log(arr1.concat([6, 7])); // [1, 2, 100, 4, 5, 6, 7]
---------------------------------------------------------
  1.4 Transforming & Sorting
let nums = [5, 2, 8, 1, 3];
nums.reverse();  // [3, 1, 8, 2, 5]
nums.sort();     // [1, 2, 3, 5, 8] (Sorted alphabetically)
nums.sort((a, b) => a - b);  // [1, 2, 3, 5, 8] (Numeric sort)
----------------------------------------------------

2. Advanced Array Methods (Deep Dive)
These methods are powerful and commonly used in real-world applications.
  
2.1 map(callback)
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log(squared);  // [1, 4, 9, 16]
-------------------------------
let users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
let names = users.map(user => user.name);
console.log(names);  // ["Alice", "Bob"]
---------------------------------------------
2.2 filter(callback)
let nums = [10, 25, 30, 45];
let filtered = nums.filter(num => num > 20);
console.log(filtered);  // [25, 30, 45]
-------------------------------------------
2.3 reduce(callback, initialValue)
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15
-------------------------------------------
2.4 forEach(callback)
let arr = [1, 2, 3];
arr.forEach(num => console.log(num * 2));
// Output: 2 4 6
-------------------------------------
2.5 flat(depth)
let nestedArr = [1, [2, 3], [[4, 5]]];
console.log(nestedArr.flat());       // [1, 2, 3, [4, 5]]
console.log(nestedArr.flat(2));      // [1, 2, 3, 4, 5]
--------------------------------------------
2.6 flatMap(callback)
let words = ["hello world", "good night"];
let splitWords = words.flatMap(word => word.split(" "));
console.log(splitWords);  // ["hello", "world", "good", "night"]
-------------------------------------------------
2.7 sort(callback) (Advanced) 
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 }
];
students.sort((a, b) => b.score - a.score); // Sort descending by score
console.log(students);
-----------------------------------------------------
2.8 reduceRight(callback, initialValue)
let numbers = [1, 2, 3, 4];
let result = numbers.reduceRight((acc, num) => acc - num);
console.log(result);  // -2 (4 - 3 - 2 - 1)
-------------------------------------------------
Conclusion
•	✅ map(), filter(), reduce() are must-learn methods.
•	✅ flat(), flatMap() handle complex structures.
•	✅ sort() is useful for ranking and ordering data.
