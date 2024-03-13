
// Array of arrays
let list: string[][] = [
    ["Everest", "K2"],  // Mountains
    ["Ravi",  "Chanab"],  // Rivers
    ["China", "India", "US"],  // Countries
    ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],  // Cities
    ["Urdu", "English", "Punjabi"]  // Languages
];

// Print items
list.forEach((category, index) => {
    console.log(`Category ${index + 1}: ${category.join(", ")}`);
});
