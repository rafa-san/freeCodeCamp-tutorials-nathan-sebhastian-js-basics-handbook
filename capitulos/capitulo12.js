/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}


for (let x = 10; x >= 1; x--) {
  console.log(x);
}


for (let x = 0; x <= 12; x += 2) {
  console.log(x);
}
console.log('The for loop has ended');
console.log('Continue code execution');




let aleatorio = Math.random();
console.log(aleatorio);

*/


/*
let heads = 0;
let tails = 0;

for (x = 1; x <= 10; x++) {
  if (Math.random() < 0.5) {
    tails++;
  } else {
    heads++;
  }
}

console.log("Tossed the coin ten times");
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`);
*/


/*
let i = 0;
while (i < 6) {
  console.log(`The value of i is: ${i}`);
  i++;
}
*/


/*
let flips = 0;
let isHeads = false;

while (!isHeads) {
  flips++;
  isHeads = Math.random() < 0.5;
}

console.log(`It took ${flips} flips to land on heads`);
*/


/*
let flips = 0;
let isHeads = false;
const minhaArray = [];
const minhaArrayNumeros = []

while (!isHeads) {
  console.log('No início da iteração isHeads é: ' + isHeads);
  flips++;
  let numeroAleatorio = Math.random();
  minhaArrayNumeros.push(numeroAleatorio);
  isHeads = numeroAleatorio < 0.5;
  minhaArray.push(isHeads);
}

console.log(minhaArray);
console.log(minhaArrayNumeros);
console.log(`It took ${flips} flips to land on heads.`);
*/


/*
Exercise #6
Write a program that prints a half pyramid using asterisks * as shown below:
*
**
***
****
*****

Next, print a reverse half pyramid as follows:

*****
****
***
**
*

*/


let piramide;
for (let i = 1; i <= 5; i++) {
  // console.log('primeiro console.log: ' + piramide);
  piramide = '';
  for (let j = 1; j <= i; j++) {
    piramide += '*';
  }
  console.log(piramide);
}

for (let i = 4; i >= 0; i--) {
  piramide = '';
  for (let j = 0; j <= i; j++) {
    piramide += '*';
  }
  console.log(piramide);
}