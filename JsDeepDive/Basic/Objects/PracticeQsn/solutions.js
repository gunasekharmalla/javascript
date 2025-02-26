1.
let car = { 
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

// 2️⃣ Print brand using dot notation
console.log(car.brand);  // ✅ Toyota

// 3️⃣ Change the year to 2023
car.year = 2023;

// 4️⃣ Add a new property color
car.color = "Red";

// 5️⃣ Remove the model property
delete car.model;

// 6️⃣ Loop through all properties
for (let key in car) {
    console.log(key + ": " + car[key]);
}

✅ Output:
  Toyota
  brand: Toyota
  year: 2023
  color: Red
___________________________________________________________________-
1.
let car = {
    brand: "Tesla",
    model: "Model X",
    year: 2023
};

// Print car object
console.log(car);

// Define info method (Use a regular function instead of an arrow function)
car.info = function() {
    return "This is a " + this.brand + " " + this.model + " from " + this.year;
};

// Call info method and log result
console.log(car.info());  // ✅ Corrected

// Define updateYear method
car.updateYear = function(newYear) {
    this.year = newYear;
};

// Call updateYear method
car.updateYear(2024);

// Print updated car object
console.log(car);

✅ Output:
  { brand: 'Tesla', model: 'Model X', year: 2023 }
  This is a Tesla Model X from 2023
  { brand: 'Tesla', model: 'Model X', year: 2024, info: [Function], updateYear: [Function] }
_________________________________________________________________
1.
let phone = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 80000
};

// Discount method
phone.discount = function(percent) {
    let amt = this.price * (percent / 100);  // ✅ Uses the actual percentage
    this.price -= amt;
    return this.price;
};

// Get phone info
phone.getInfo = function() {
    return this.brand + " " + this.model + " costs ₹" + this.price;
};

// Applying discount and printing updated details
console.log("Updated Price:", phone.discount(10));  // ✅ Should show 72000
console.log(phone.getInfo());  // ✅ Should show "Samsung Galaxy S24 costs ₹72000"

✅ Output:
    Updated Price: 72000
    Samsung Galaxy S24 costs ₹72000
_____________________________________________________________________
