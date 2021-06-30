const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// BUILT IN OBJECTS
let now: Date = new Date();

// ARRAY
let colors: string[] = ['red', 'green', 'blue'];
let myNumer: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// CLASSES
class Car {}
let car: Car = new Car();

// OBJECT LITERAL
let point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

// FUNCTION
// using void so that the function returns nothing
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// WHEN TO USE ANNOTATIONS
// 1) Function that returns 'any' type
const json = '{"x": "10", "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a value on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
// TYPE INFERENCE : WHEN TYPESCRIPT GUSSES THE TYPE
// let numberAboveZero = false; // will give error because will automatically set the type to be a boolean
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[0] > 0) {
    numberAboveZero = numbers[i];
  }
}
