                      BASIC ARRAYS
      ----------------------------------------------------------
1. Basic Array Methods
    These are the fundamental methods used for modifying and accessing arrays.
1.1 Adding & Removing Elements
•	push(value) → Adds an element at the end.
•	pop() → Removes the last element.
•	unshift(value) → Adds an element at the beginning.
•	shift() → Removes the first element

1.2 Checking & Finding Elements
•	includes(value) → Checks if an array contains an element (returns true/false).
•	indexOf(value) → Finds the first index of a value (-1 if not found).
•	lastIndexOf(value) → Finds the last occurrence of a value.
•	find(callback) → Returns the first element that matches a condition.
•	findIndex(callback) → Returns the index of the first matching element.
•	some(callback) → Returns true if at least one element satisfies the condition.
•	every(callback) → Returns true if all elements satisfy the condition.

1.3 Extracting & Modifying Arrays
•	slice(start, end) → Extracts part of an array (doesn’t modify original).
•	splice(start, deleteCount, items...) → Modifies an array by adding/removing elements.
•	concat(arr2, arr3, ...) → Joins multiple arrays together.

1.4 Transforming & Sorting
•	reverse() → Reverses the array in place.
•	sort(compareFunction) → Sorts elements in ascending order (by default, sorts alphabetically).
---------------------------------------------------------------------------------
2. Advanced Array Methods (Deep Dive)
      These methods are powerful and commonly used in real-world applications.
   
•	2.1 map(callback)
•	Creates a new array by applying a function to each element.

•	2.2 filter(callback)
•	Creates a new array with elements that pass the condition.
•	Use cases:
✔️ Get only active users from a list
✔️ Remove invalid data

•	2.3 reduce(callback, initialValue)
•	Reduces an array to a single value (sum, product, etc.).
Use cases:
✔️ Find total cost in a shopping cart
✔️ Flatten an array

2.4 forEach(callback)
Loops through an array (similar to map, but doesn’t return a new array).
Use cases:
✔️ Logging elements
✔️ Updating values in place

2.5 flat(depth)
Flattens nested arrays.
Use cases:
✔️ Remove nesting from arrays

2.6 flatMap(callback)
Combines map() and flat(). Flattens one level deep.
Use cases:
✔️ Splitting text into words
2.7 sort(callback) (Advanced)
Sorting objects in an array.
Use cases:
✔️ Sorting products by price
✔️ Sorting users by age

2.8 reduceRight(callback, initialValue)
Works like reduce(), but from right to left.
