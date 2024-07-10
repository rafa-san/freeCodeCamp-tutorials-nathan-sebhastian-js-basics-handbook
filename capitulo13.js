/*
function greet() {
  console.log('Hello!');
}
greet();
*/


/* 
function greet(name) { // o que está entre parênteses é o parâmetro
  console.log(`Hello, ${name}!`);
  console.log('Nice weather today, right?');
}

//greet(); // undefined
greet('Rafa'); // o que está entre parênteses é o argumento
*/



/*
function greet(name, weather) {
  console.log(`Hello, ${name}!`);
  console.log(`It's ${weather} today, right?`);
}

//greet('Rafa', 'sunny');
//greet('Rafa');


// exemplo
function greet(name = 'Rafa') {
  console.log(`Hello, ${name}!`);
  console.log("Nice weather today, right?");
}

//greet();
greet('John');




// exemplo
function greet(weather, name='Rafa') {
  console.log(`Hello ${name}!`);
  console.log(`It's ${weather} today, right?`);
}

greet('sunny');




// exemplo
function greet(name = "Nathan", weather) {
  console.log(`Hello, ${name}!`);
  console.log(`It's ${weather} today, right?`);
}

greet(undefined, "sunny");





// The return statement
function sum(a, b) {
  return a + b;
}

let result = sum(3, 2);
console.log(result);


// exemplo
function checkAge(age) {
  if (age > 18) {
    return 'You may get a car license';
  } else {
    return 'You may not get a car license yet';
  }
}

console.log(checkAge(20));
console.log(checkAge(15));
*/


/*
// The rest parameter

function printArguments(...args) {
  console.log(args);
}

printArguments('a', 'b', 'c');
*/



/*
// Arrow function

function greetings(name) {
  console.log(`Hello, ${name}!`);
}
greetings('Rafa');

***

const greetings = (name) => {
  console.log(`Hello, ${name}!`);
};
greetings('John');



// exemplo:
function plusTwo(num) {
  return num + 2;
}
console.log(plusTwo(3));

// ou

function plusTwo(num) {
  console.log(num + 2);
}
plusTwo(10);


// ou

const somar = (num) => {
  return num + 2;
}
console.log(somar(20));

// ou
const somar = (num) => num + 2;
console.log(somar(30));


// exemplo
const greeting = () => console.log('Hello world!');
greeting();

const greetings = () => {
  console.log('Olá');
  console.log('Mundo!');
}
greetings();


// exemplo
function nomes(para1, para2) {
  return 'Olá, ' + para1 + ' e ' + para2;
}
console.log(nomes('Rafael', 'Aline'));

*/



/*
Exercise #7
Write a function named calculateSquare() that's used to calculate the area and perimeter of a square shape.

The function accepts one parameter: the side of the square.

The formula to calculate the area is side * side, and the formula to calculate the perimeter is 4 * side.

The output shows the size of the size, the area, and the perimeter as follows:

The square side is 8
The area of the square is 64
The perimeter of the square is 32

// minha resolução
function calculateSquare(side) {
  console.log(`The square side is ${side}`);
  console.log(`The area of the square is ${side * side}`);
  console.log(`The perimeter of the square is ${4 * side}`);
}
calculateSquare(8);
*/

const calculateSquare = (side) => {
  console.log(`The square side is ${side}`);
  console.log(`The area of the square is ${side * side}`);
  console.log(`The perimeter of the square is ${4 * side}`);
}

calculateSquare(8);