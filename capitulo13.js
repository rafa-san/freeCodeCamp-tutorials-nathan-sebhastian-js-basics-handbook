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
*/



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



// continuar a partir de: The rest parameter