// Function
function make_shirt(size: string = "L", message: string = "I hate TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is "${message}".`);
  }
  
  // Function calls
  make_shirt();                         // L:  "I love TypeScript"
  make_shirt("M");                         // M:  "I love TypeScript"
  make_shirt("S", "Hello, World!");             // S: "Hello, World!"
  