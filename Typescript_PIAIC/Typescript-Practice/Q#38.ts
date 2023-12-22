// Function
function describe_city(city: string, country: string = 'Pakistan') {
  console.log(`${city} is in ${country}.`);
}

// Function call
describe_city('Karachi');
describe_city('Lahore');
describe_city('New York', 'USA');
