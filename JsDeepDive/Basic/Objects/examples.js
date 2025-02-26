1️⃣ Creating an Object

let person = {
    name: "Guna",
    age: 20,
    isStudent: true
};
console.log(person);
Output:
{ name: 'Guna', age: 20, isStudent: true }
_________________________________________________
2️⃣ Accessing Object Properties

You can access properties using dot notation or bracket notation.
console.log(person.name);    // Dot notation → "Guna"
console.log(person["age"]);  // Bracket notation → 20
__________________________________________________
3️⃣ Modifying Object Properties

person.age = 21; // Updating age
console.log(person.age);  // 21
__________________________________________________
4️⃣ Adding New Properties

person.country = "India"; 
console.log(person);
Output:
{ name: 'Guna', age: 21, isStudent: true, country: 'India' }
_________________________________________________
5️⃣ Removing Properties

delete person.isStudent;
console.log(person);
Output:
{ name: 'Guna', age: 21, country: 'India' }
___________________________________________________
6️⃣ Looping Through an Object (Using for...in)

for (let key in person) {
    console.log(key + ": " + person[key]);
}
Output:
name: Guna
age: 21
country: India
___________________________________________________
___________________________________________________
1️⃣ CREATING AN OBJECTs WITH METHOD 

let person = {
    name: "Guna",
    age: 20,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Calling the method
person.greet();
Output:
Hello, my name is Guna
✔️ The this keyword refers to the current object (person).
__________________________________________________
2️⃣ Adding Methods to an Existing Object

person.sayAge = function() {
    console.log("I am " + this.age + " years old.");
};

// Calling the new method
person.sayAge();
Output:
I am 20 years old.
___________________________________________________
3️⃣ Using Arrow Functions in Methods
Arrow functions don’t bind this to the object, so avoid using them when you need this.

let user = {
    name: "John",
    greet: () => {
        console.log("Hello, " + this.name);  // ❌ Undefined because `this` doesn't refer to `user`
    }
};

user.greet();
Output:
Hello, undefined
✔️ Use regular functions instead of arrow functions when accessing this.
________________________________________________________
4️⃣ Using this in Nested Objects

let student = {
    name: "Alex",
    details: {
        age: 22,
        getInfo: function() {
            console.log(this.age);  // ✅ Correctly refers to `details.age`
        }
    }
};

student.details.getInfo();
Output:
22
_________________________________________________________
