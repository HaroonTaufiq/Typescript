// Define an array of magician names
const magicians: string[] = ["David Copperfield", "Penn & Teller", "Criss Angel"];

// Function to display magician names
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
  const great_magicians = [];
  for (const magician of magicians) {
    great_magicians.push(`${magician} the Great`);
  }
  return great_magicians;
}

// Function to create an unchanged copy
function unchanged_magicians(magicians: string[]): string[] {
  const unchanged_magicians = [...magicians]; // Create a shallow copy
  return unchanged_magicians;
}

// Create a copy of the magicians array and modify it using make_great()
const great_magicians = make_great(unchanged_magicians(magicians));

// Display the original and modified arrays
show_magicians(magicians);
show_magicians(great_magicians);
