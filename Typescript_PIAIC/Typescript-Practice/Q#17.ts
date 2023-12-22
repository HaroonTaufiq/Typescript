// Creating arrays
let names: string[] = ["Talha", "Hamza", "Waiz", "Ali", "Ahmed", "Usman"];
let messages: string[] = ["Aaaja treat deta hu.","Aaaja treat deta hu.","Aaaja treat deta hu.","Aaaja treat deta hu.","Aaaja treat deta hu.","Aaaja treat deta hu."];

// Printing array of my friend's names with their messages
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + " : " + messages[i]);
}

console.log("I just found out that my new dinner table won’t arrive in time for the dinner, and I have space for only two guests.");

// Remove guests from your list one at a time until only two names remain in your list
while (names.length > 2) {
  let removedName = names.pop();
  console.log(`Sorry ${removedName}, I can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list
for (let i = 0; i < names.length; i++) {
  console.log(`Hi ${names[i]}, you're still invited to the dinner.`);
}

// Remove the last two names from your list
names.length = 0;

// Print your list to make sure you actually have an empty list at the end of your program
console.log(names);
