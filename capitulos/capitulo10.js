/*
Exemplo 01

let birds = ['Owl', 'Eagle', 'Parrot', 'Falcon'];
// console.log(birds[0]);
// birds[2] = 'Vulture';
// console.log(birds);
*/


/*
Exemplo 02

let pais = [];
// console.log(pais); // []
pais.push('Brasil');
pais.push('Argentina');
// console.log(pais); // [ 'Brasil', 'Argentina' ]

// const popped = pais.pop();
// console.log(`O item excluído foi: ${popped}`);
// console.log(pais); // [ 'Brasil' ]

pais.unshift('Chile');
// console.log(pais); // [ 'Chile', 'Brasil', 'Argentina' ]
const shifted = pais.shift();
console.log(`O item excluído foi: ${shifted}`); // O item excluído foi: Chile
console.log(pais); // [ 'Brasil', 'Argentina' ]
*/


// Exemplo 03
let fishes = ['Salmon', 'Goldfish', 'Tuna'];

// let pos = fishes.indexOf('bola');
// console.log(pos); // -1 (a string 'bola' não foi encontrada na array

let pos = fishes.indexOf('Tuna');
// console.log(pos); // 2 (a string 'Tuna' foi encontrada na posição index 2)

console.log('Total de itens na array: ' + fishes.length); // Total de itens na array: 3


/*
Exercise #4
Create an array named colors that include the 'red', 'green, and 'blue' colors.

First, add a 'black' color after the last index of the array. Then print the array.

Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.

Finally, add the color 'yellow' on the first index of the array, then print the array.

The result output is as follows:

[ 'red', 'green', 'blue', 'black' ]
[ 'blue', 'green', 'black' ]
[ 'yellow', 'blue', 'green', 'black' ]
*/

const colors = ['red', 'green', 'blue'];
colors.push('black');
console.log(colors); // [ 'red', 'green', 'blue', 'black' ]

colors.shift();
colors[0] = 'blue';
colors[1] = 'green';
console.log(colors); // [ 'blue', 'green', 'black' ]

colors.unshift('yellow');
console.log(colors); // [ 'yellow', 'blue', 'green', 'black' ]