// Creating arrays
const names: string[] = ["Talha", "Hamza", "Waiz"];
const messages: string[] = ["Aaaja treat deta hu.","Aaaja treat deta hu.","Aaaja treat deta hu."];

// Printing array of my friend's names with their messages
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + " : " + messages[i]);
}

console.log("I just found a bigger dinner table, so now more space is available.");

// Add one new guest to the beginning of your array
names.unshift("Ali");

// Add one new guest to the middle of your array
names.splice(names.length / 2, 0, "Ahmed");

// Use push() to add one new guest to the end of your list
names.push("Usman");

// Add messages for the new guests
messages.unshift("Aaaja treat deta hu.");
messages.splice(messages.length / 2, 0, "Aaaja treat deta hu.");
messages.push("Aaaja treat deta hu.");

// Print a new set of invitation messages, one for each person in your list
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + " : " + messages[i]);
}
