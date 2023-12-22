
// Define an array of usernames
const usernames: string[] = ['admin', 'Haroon', 'Talha', 'Hamza', 'Salman'];

// for Loop
for (const username of usernames) {

  if (username === 'admin') {
    //  admin user
    console.log(`Hello ${username}, would you like to see a status report?`);

  } else {
    //  other users
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
