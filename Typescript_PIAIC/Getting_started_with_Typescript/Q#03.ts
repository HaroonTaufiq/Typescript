// Store your favorite number in a variable
let Name3: string = "haroon taufiq";

// Print name in uppercase
console.log(`My favorite number is ` + Name3.toUpperCase());

// Print name in lowercase
console.log(`My favorite number is ` + Name3.toLowerCase());

// Converting name to titlecase
let result3 = Name3
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
    .join(' ');

// Print name in titlecase
console.log(`My favorite number is ` + result3);

