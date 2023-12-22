// Create an array of places I'd like to visit
let places: string[] = ["USA", "Tokyo", "Netherland", "Turkey", "Dubai"];

// Print array in its original order
console.log("Original order:", places);

// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...places].sort());

// Showing that my array is still in its original order by printing it
console.log("Original order:", places);

// Printing my array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// Showing that my array is still in its original order by printing it again
console.log("Original order:", places);

// Reverse the order of my list
places.reverse();

// Print the array to show that its order has changed
console.log("Reversed order:", places);

// Reverse the order of the list again
places.reverse();

// Print the list to show it’s back to its original order
console.log("Original order:", places);

// Sorting array so it’s stored in alphabetical order
places.sort();

// Print the array to show that its order has been changed
console.log("Alphabetical order:", places);

// Sorting to change the array so it’s stored in reverse alphabetical order
places.reverse();

// Print the list to show that its order has changed
console.log("Reverse alphabetical order:", places);
