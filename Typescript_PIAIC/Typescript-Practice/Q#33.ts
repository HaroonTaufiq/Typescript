// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let ordinal = '';

  // 1st
  if (numbers[i] === 1) {
    ordinal = 'st';

    // 2nd
  } else if (numbers[i] === 2) {
    ordinal = 'nd';

    // 3rd
  } else if (numbers[i] === 3) {
    ordinal = 'rd';

    // else th
  } else {
    ordinal = 'th';
  }
  
  console.log(`${numbers[i]}${ordinal}`);
}
