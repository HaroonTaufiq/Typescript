
// Set the age of the person
const age: number = 25;

// Determine the stage of life based on the age
if (age < 2) {
    // If the person is less than 2 years old: baby.
    console.log("The person is a baby.");

} else if (age >= 2 && age < 4) {
    // If the person is at least 2 years old but less than 4: toddler.
    console.log("The person is a toddler.");

} else if (age >= 4 && age < 13) {
    // If the person is at least 4 years old but less than 13: kid.
    console.log("The person is a kid.");

} else if (age >= 13 && age < 20) {
    // If the person is at least 13 years old but less than 20: teenager.
    console.log("The person is a teenager.");

} else if (age >= 20 && age < 65) {
    // If the person is at least 20 years old but less than 65: adult
    console.log("The person is an adult.");
    
} else {
    // If the person is age 65 or older: elder
    console.log("The person is an elder.");
}
