import inquirer from 'inquirer';

// Scenario 1 - Modify Array with Methods
async function modifyArray() {
  const { arr } = await inquirer.prompt([
    {
      type: 'input',
      name: 'arr',
      message: 'Please enter array elements separated by space:',
    },
  ]);

  let array = arr.split(' ').map(Number);

  console.log("\nArray: ", array);

  // push: Add new elements to the end of the array
  array.push(6, 7);
  console.log("\nAfter push: ", array);

  // pop: Remove the last element from the array
  let lastElement = array.pop();
  console.log("\nAfter pop: ", array); 
  console.log("\nPopped element: ", lastElement); 

  // shift: Remove the first element from the array
  let firstElement = array.shift();
  console.log("\nAfter shift: ", array); 
  console.log("\nShifted element: ", firstElement); 

  // unshift: Add new elements to the beginning of the array
  array.unshift(0, 1);
  console.log("\nAfter unshift: ", array); 
}

// Scenario 2 - Subarray Creation
async function createSubarray() {
  const { arr2 } = await inquirer.prompt([
    {
      type: 'input',
      name: 'arr2',
      message: 'Please enter array elements separated by space for subarray creation:',
    },
  ]);

  let array2 = arr2.split(' ').map(Number);

  // splice: Create a subarray by removing elements from the original array
  let removedElements = array2.splice(2, 2);
  console.log("\nOriginal array: ", array2); 
  console.log("\nRemoved elements: ", removedElements); 

  // slice: Create a subarray without modifying the original array
  let subArray = array2.slice(1, 3);
  console.log("\nSubarray: ", array2); 
  console.log("\nSubarray: ", subArray); 
}

// Main menu
async function mainMenu() {
    const { operation } = await inquirer.prompt([
      {
        type: 'list',
        name: 'operation',
        message: 'What operation do you want to perform?',
        choices: [
          { name: 'Do you want to modify array', value: 'modifyArray' },
          { name: 'Do you want to create subarray', value: 'createSubarray' },
          { name: 'Quit', value: 'quit' },
        ],
      },
    ]);
  
    switch (operation) {
      case 'modifyArray':
        await modifyArray();
        break;
      case 'createSubarray':
        await createSubarray();
        break;
      case 'quit':
        return;
    }

    await mainMenu();
  }
  mainMenu();