import inquirer from "inquirer";

// Scenario 1 - Buying Groceries
async function buyGroceries(choice: string) {
  let items: string[];
  let prices: number[];

  if (choice === "fruits") {
    items = ["apple", "banana", "orange"];
    prices = [1, 2, 1.5];
  } else if (choice === "vegetables") {
    items = ["carrot", "broccoli", "spinach"];
    prices = [0.5, 1.5, 1];
  } else {
    console.log("Invalid choice!");
    return;
  }

  console.log("Available items:");
  for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]} - $${prices[i]}`);
  }

  let totalBill = 0;
  let continueShopping = true;
  while (continueShopping) {
    const { item } = await inquirer.prompt([
      {
        type: 'list',
        name: 'item',
        message: 'Choose an item to add to your cart:',
        choices: items,
      },
    ]);

    totalBill += prices[items.indexOf(item)];

    const { shouldContinue } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'shouldContinue',
        message: 'Do you want to continue shopping?',
      },
    ]);

    continueShopping = shouldContinue;
  }

  console.log(`Total bill: $${totalBill}`);
  return totalBill;
}

// Scenario 2 - Checking Discounts
function applyDiscount(totalBill: number) {
  let discountedTotal: number;

  if (totalBill > 100) {
    discountedTotal = totalBill * 0.9; // 10% discount
  } else if (totalBill > 50) {
    discountedTotal = totalBill * 0.95; // 5% discount
  } else {
    discountedTotal = totalBill;
  }

  console.log(`Discounted total: $${discountedTotal}`);
  return discountedTotal;
}

// Scenario 3 - Checkout Process
async function checkoutProcess() {
  const paymentOptions = ["cash", "credit card", "mobile payment"];

  const { paymentMethod } = await inquirer.prompt([
    {
      type: 'list',
      name: 'paymentMethod',
      message: 'Choose a payment method:',
      choices: paymentOptions,
    },
  ]);

  console.log(`You have chosen ${paymentMethod} as your payment method.`);
}

// Test the scenarios
async function main() {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Enter your choice:',
      choices: ['fruits', 'vegetables'],
    },
  ]);

  let totalBill = await buyGroceries(choice);
  let discountedTotal = totalBill ? applyDiscount(totalBill) : 0;
  await checkoutProcess();
}

main();