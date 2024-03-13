// Set the age of the person
const age: number = 25;

// String of users
const users: string[] = ["hh"];

// no users
if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  // Determine the stage of life based on the age
  if (age < 2) {
      console.log("The person is a baby.");
  } else if (age >= 2 && age < 4) {
      console.log("The person is a toddler.");
  } else if (age >= 4 && age < 13) {
      console.log("The person is a kid.");
  } else if (age >= 13 && age < 20) {
      console.log("The person is a teenager.");
  } else if (age >= 20 && age < 65) {
      console.log("The person is an adult.");
  } else {
      console.log("The person is an elder.");
  }

  // Remove all of the usernames from your array
  users.splice(0, users.length);
  console.log("All usernames have been removed.");
}
