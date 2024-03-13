// Function
function sandwichOrder(items: string[]) {
  console.log(`You ordered a sandwich with ${items.join(', ')}.`);
}

// Call
sandwichOrder(['turkey', 'lettuce', 'mayo']);       // You ordered a sandwich with turkey, lettuce, mayo.
sandwichOrder(['ham', 'cheese']);                   // You ordered a sandwich with ham, cheese.
sandwichOrder(['peanut butter', 'jelly']);          // You ordered a sandwich with peanut butter, jelly.
