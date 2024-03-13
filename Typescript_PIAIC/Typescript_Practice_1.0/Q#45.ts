// Object
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

// Function
function createCar(manufacturer: string, model: string, ...options: any[]): Car {
  const car: Car = { manufacturer, model };
  options.forEach((option) => {
    const [key, value] = option.split("=");
    car[key] = value;
  });
  return car;
}

// Function call
const myCar = createCar("Toyota", "Camry", "color=blue", "sunroof=true");
console.log(myCar);
