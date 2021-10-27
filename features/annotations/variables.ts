let apples: number = 5;

apples = 10;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];

let myNumbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions

const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that returns the "any" type
const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json) as { x: number; y: number };

// 2) When we declare a variable on one line
// and initializate it later

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type can not be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: false | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) [(numberAboveZero = numbers[i])];
}
