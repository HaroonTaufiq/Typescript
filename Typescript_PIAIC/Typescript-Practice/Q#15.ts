//  Creating arrays
let names: string[] = ["Talha", "Hamza", "Waiz","Salman"];

// invitation messages
names.forEach((guest) => {
    console.log(` ${guest}, Dinner pe aaja.`);
});

// guest who can't make it
let cannotcome: string = "Salman";
console.log(`Unfortunately, ${cannotcome} ni aa raha.`);

// Replace the unavailable guest with a new guest
let newGuest: string = "Ali";
names = names.map((guest) => guest === cannotcome ? newGuest : guest);

// Print a second set of invitation messages
names.forEach((guest) => {
    console.log(`${guest}, Dinner pe aaja.`);
});