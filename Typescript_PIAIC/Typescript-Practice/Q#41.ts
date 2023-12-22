// Array
const magicians: string[] = ["David Copperfield", "Penn & Teller", "Criss Angel"];

// Function defination
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);
