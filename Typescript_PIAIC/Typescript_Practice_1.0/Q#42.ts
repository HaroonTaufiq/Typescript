// This part is from the first program:
const magicians: string[] = ["David Copperfield", "Penn & Teller", "Criss Angel"];

// This function prints the name of each magician in the array:
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// This function to add the phrase "the Great" to each magician's name:
function make_great(magicians: string[]): string[] {
  const great_magicians = [];                   // Create a new array to store the great magicians:
  for (const magician of magicians) {
    great_magicians.push(`${magician} the Great`);
  }
  return great_magicians;
}

// display the original and modified arrays
const great_magicians = make_great(magicians);
show_magicians(great_magicians);
