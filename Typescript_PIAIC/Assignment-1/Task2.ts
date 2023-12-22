import inquirer from 'inquirer';

// Scenario 1: Sum numbers
async function add() {
  const { num1, num2 } = await inquirer.prompt([
    {
      type: 'input',
      name: 'num1',
      message: 'Enter first number for addition:',
      validate: value => !isNaN(parseFloat(value)) || 'Please enter a number',
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter second number for addition:',
      validate: value => !isNaN(parseFloat(value)) || 'Please enter a number',
    },
  ]);

  console.log("Sum: ", Number(num1) + Number(num2));
}

// Scenario 2: Check Even or Odd
async function checkEvenOrOdd() {
  const { num } = await inquirer.prompt([
    {
      type: 'input',
      name: 'num',
      message: 'Enter a number to check Even or Odd:',
      validate: value => !isNaN(parseFloat(value)) || 'Please enter a number',
    },
  ]);

  console.log("The number is: ", Number(num) % 2 === 0 ? 'Even' : 'Odd');
}

// Scenario 3: Calculate Area
async function calculateArea() {
  const { width, height } = await inquirer.prompt([
    {
      type: 'input',
      name: 'width',
      message: 'Enter width of the rectangle:',
      validate: value => !isNaN(parseFloat(value)) || 'Please enter a number',
    },
    {
      type: 'input',
      name: 'height',
      message: 'Enter height of the rectangle:',
      validate: value => !isNaN(parseFloat(value)) || 'Please enter a number',
    },
  ]);

  console.log("Area of rectangle: ", Number(width) * Number(height));
}

// Scenario 4: String Reversal
async function reverseString() {
  const { str } = await inquirer.prompt([
    {
      type: 'input',
      name: 'str',
      message: 'Enter a string to reverse:',
    },
  ]);

  console.log("Reverse of string: ", str.split('').reverse().join(''));
}

// Scenario 5: Temperature Conversion
async function convertCelsiusToFahrenheit() {
  const { celsius } = await inquirer.prompt([
    {
      type: 'input',
      name: 'celsius',
      message: 'Enter temperature in Celsius to convert to Fahrenheit:',
      validate: value => !isNaN(parseFloat(value)) || 'Please enter a number',
    },
  ]);

  console.log("Temperature in Fahrenheit: ", (Number(celsius) * 9/5) + 32);
}

// Main menu
async function mainMenu() {
  const { operation } = await inquirer.prompt([
    {
      type: 'list',
      name: 'operation',
      message: 'What operation do you want to perform?',
      choices: [
        { name: 'Add numbers', value: 'add' },
        { name: 'Check if a number is even or odd', value: 'checkEvenOrOdd' },
        { name: 'Calculate area of a rectangle', value: 'calculateArea' },
        { name: 'Reverse a string', value: 'reverseString' },
        { name: 'Convert Celsius to Fahrenheit', value: 'convertCelsiusToFahrenheit' },
        { name: 'Quit', value: 'quit' },
      ],
    },
  ]);

  switch (operation) {
    case 'add':
      await add();
      break;
    case 'checkEvenOrOdd':
      await checkEvenOrOdd();
      break;
    case 'calculateArea':
      await calculateArea();
      break;
    case 'reverseString':
      await reverseString();
      break;
    case 'convertCelsiusToFahrenheit':
      await convertCelsiusToFahrenheit();
      break;
    case 'quit':
      return;
  }

  // Go back to the main menu after the operation
  await mainMenu();
}

// Start the program
mainMenu();