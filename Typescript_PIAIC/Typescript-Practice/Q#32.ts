// list of current and new users
const current_users: string[] = ['Talha', 'Hamza', 'Waiz', 'Salman', 'Farhat'];
const new_users: string[] = ['Salman', 'Saim', 'Farhat', 'Rizwan', 'Ali'];

// loop to check
for (const user of new_users) {
  const usernameTaken = current_users.some((current_user) => current_user.toLowerCase() === user.toLowerCase());

  if (usernameTaken) {
    console.log(`Sorry, the username "${user}" is already taken. Please enter a new username.`);
    
  } else {
    console.log(`Congratulations! The username "${user}" is available.`);
  }
}
