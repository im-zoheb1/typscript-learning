// try to avoid any type as much as possible

const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const car = carMakers[0];
const myCar = carMakers.pop();

// PREVENT US FROM ADDING INCOMPATIBLE VALUES TO THE ARRAY
carMakers.push(100);

// HELP WITH 'MAP'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
