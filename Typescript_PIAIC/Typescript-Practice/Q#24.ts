// Declare a variable named 'car' and assign it the value 'subaru'
let car = 'subaru';

// Declare a variable named 'length' and assign it the length of 'car'
let length = car.length;

// Predict that 'length' is equal to 6 and then check if it's true
console.log("Is length == 6? I predict True.");
console.log(length == 6 ? true : false);

// Predict that 'length' is not equal to 7 and then check if it's true
console.log("Is length != 7? I predict True.");
console.log(length != 7 ? true : false);

// Predict that 'length' is greater than 5 and then check if it's true
console.log("Is length > 5? I predict True.");
console.log(length > 5 ? true : false);

// Predict that 'length' is less than 7 and then check if it's true
console.log("Is length < 7? I predict True.");
console.log(length < 7 ? true : false);

// Predict that 'length' is greater than or equal to 6 and then check if it's true
console.log("Is length >= 6? I predict True.");
console.log(length >= 6 ? true : false);

// Predict that 'length' is less than or equal to 6 and then check if it's true
console.log("Is length <= 6? I predict True.");
console.log(length <= 6 ? true : false);

// Declare an array named 'cars' and assign it some car names
let cars = ['subaru', 'audi', 'bmw'];

// Predict that 'car' is in 'cars' and then check if it's true
console.log("Is car in cars? I predict True.");
console.log(cars.includes(car) ? true : false);

// Predict that 'car' is not in ['honda', 'toyota'] and then check if it's true
console.log("Is car not in ['honda', 'toyota']? I predict True.");
console.log(!['honda', 'toyota'].includes(car) ? true : false);

// Predict that 'length' is equal to 6 and 'car' is in 'cars' and then check if it's true
console.log("Is length == 6 and car in cars? I predict True.");
console.log(length == 6 && cars.includes(car) ? true : false);

// Predict that 'length' is equal to 7 or 'car' is in 'cars' and then check if it's true
console.log("Is length == 7 or car in cars? I predict True.");
console.log(length == 7 || cars.includes(car) ? true : false);

