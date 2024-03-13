// Object of arrays
let list: {[key: string]: string[]} = {
    "Mountains": ["Everest", "K2"],  
    "Rivers": ["Ravi",  "Chanab"], 
    "Countries": ["China", "India", "US"], 
    "Cities":  ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
    "Languages": ["Urdu", "English", "Punjabi"] 
};

// Print items
for (let category in list) {
    console.log(`Category: ${category}`);
    console.log(`Items: ${list[category].join(", ")}`);
}
