console.log(``);

// 8 - Type conversion and coercion
    // let x = `1`;
    // let y = 4;
    // x = Number(x);
    // console.log(x + y);
    // console.log("");

    // let price = "50";
    // let tax = 5;
    // let totalPrice = Number(price) + tax;
    // console.log(totalPrice);
    // console.log('');




    // 9 - Operators in JavaScript

    // console.log(2 > 1 || 1 > 5);
    // console.log(false || false);
    // console.log(false || false);
    // console.log(typeof false);


    // Exercise #3
    // console.log(19 % 3);
    // console.log(10 == 3);
    // console.log(10 !== "10");
    // console.log(2 < "10");
    // console.log("5" > 2);
    // console.log((false && true) || false);








    // 10 - JavaScript Arrays

    // const coisas = ['casa', 'muro', 'jardim'];
    // console.log(coisas);
    // console.log(coisas[2]);
    // coisas[1] = 'cimento';
    // console.log(coisas);

    // const nomes = [];
    // nomes.push('Rafael', 'Aline', 'Daniel');
    // console.log(nomes);
    // // console.log(nomes.pop());
    // // console.log(nomes);

    // nomes.unshift('Diego');
    // console.log(nomes);
    // // nomes.shift();
    // // console.log(nomes);

    // console.log(nomes.indexOf('Aline'));
    // console.log(nomes.length);



    // // Exercise #4
    // const colors = ['red', 'green', 'blue'];
    // console.log(colors);

    // colors.push('black');
    // console.log(colors);
    
    // colors.shift();
    // colors[0] = 'blue';
    // colors[1] = 'green';
    // console.log(colors);

    // colors.unshift('yellow');
    // console.log(colors);



    // 11 - Control Flows (Conditionals) in JavaScript

    // const poupanca = 3000;
    // if (poupanca > 5000) {
    //   console.log('Uh-Hu! Você tem dinheiro para fazer a viagem!');
    // } else if (poupanca > 3000) {
    //   console.log('Junte só mais um pouquinho de dinheiro!')
    // } else {
    //   console.log('Você não acumulou dinheiro suficiente :(');
    // }
    // console.log('Fim.');





    // const age = 20;
    // switch (age) {
    //   case 10:
    //     console.log('Age is 10');
    //     break;
    //   case 20:
    //     console.log('Age is 20');
    //     break;
    //   default:
    //     console.log('Age is neither 10 or 20');
    // }






    // switch (3) {
    //   case 1:
    //     console.log("Value is one");
    //     break;
    //   case 0:
    //     console.log("Value is zero");
    //     break;
    //   default:
    //     console.log("No matching case");
    // }





    // switch ('volei') {
    //   case 'futebol':
    //     console.log('esporte futebol');
    //     break;
    //   case 'tenis':
    //     console.log('esporte tênis');
    //     break;
    //   default:
    //     console.log('esporte outros');
    // }


//     let weekdayNumber = 1;

// if (weekdayNumber === 0) {
//   console.log("Sunday");
// } else if (weekdayNumber === 1) {
//   console.log("Monday");
// } else if (weekdayNumber === 2) {
//   console.log("Tuesday");
// } else if (weekdayNumber === 3) {
//   console.log("Wednesday");
// } else if (weekdayNumber === 4) {
//   console.log("Thursday");
// } else if (weekdayNumber === 5) {
//   console.log("Friday");
// } else if (weekdayNumber === 6) {
//   console.log("Saturday");
// } else {
//   console.log("The weekday number is invalid");
// }

// let weekdayNumber = 1;

// switch (weekdayNumber) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("The weekday number is invalid");
// }


// let myFood = "Chocolate Cake";

// if (myFood === "Banana" || myFood === "Apple") {
//   console.log("Eat fruits everyday to keep you healthy.");
// }

// if (myFood === "Chocolate Cake") {
//   console.log("Enjoy the sweet treat.");
// }


// let myFood = "Banana";

// switch (myFood) {
//   case "Banana":
//   case "Apple":
//     console.log("Eat fruits everyday to keep you healthy.");
//     break;
//   case "Chocolate Cake":
//     console.log("Enjoy the sweet treat.");
//     break;
// }


    // // Exercise #5
    // fazer das duas formas ensinadas

    // // A primary school is giving different rewards based on the student's grade:
    // const grade = 'A';

    // switch (grade) {
    //   case 'A':
    //     console.log(`You got an A, so here's a Chocolate for you!`);
    //     break;
    //   case 'B':
    //     console.log(`You got a B, here's a Cookie for you!`);
    //     break;
    //   case 'C':
    //     console.log(`You got a C, there's room for improvement and here's your Candy!`);
    //     break;
    //   default:
    //     console.log(`No reward to give`);
    // }
    // console.log('This is the end!');





    // 12 - Control Flows (Loops) in JavaScript
    // The for statement

    // for (let x = 1; x <= 10; x++) {
    //   console.log(x);
    // }



    // // for statement with shorthand arithmetic expression
    // for (let x = 1; x < 20; x += 3) {
    //   console.log(x);
    // }



    // let x = 1;
    // for (x; x < 5; x++) {
    //   console.log(x);
    //   console.log('*');
    // }
    // console.log('Fim');



    // let heads = 0;
    // let tails = 0;
    // for (x = 1; x <= 10; x++) {
    //   if (Math.random() < 0.5) {
    //     tails++;
    //   } else {
    //     heads++;
    //   }
    // }
    // console.log("Tossed the coin ten times");
    // console.log(`Number of heads: ${heads}`);
    // console.log(`Number of tails: ${tails}`);




    // // The while statement
    // let i = 0;
    // while (i < 6) {
    //   console.log(`The value of i = ${i}`);
    //   i++;
    // }



    // let flips = 0;
    // let isHeads = false;
    // while (!isHeads) {
    //   // while (isHeads == false) { minha versão | não parece boa :(
    //   flips++;
    //   isHeads = Math.random() < 0.5;
    // }
    // console.log(`It took ${flips} flips to land on heads.`);
    

    // // Exercise #6
    // // Write a program that prints a half pyramid using asterisks *
    // let asterisco;

    // for (let i = 1; i <= 5; i++) {
    //   asterisco = '';
    //   for (let j = 1; j <= i; j++) {
    //     asterisco += '*';
    //   }
    //   console.log(asterisco);
    // }

    // for (let i = 4; i >= 0; i--) {
    //   asterisco = '';
    //   for (let j = 0; j <= i; j++) {
    //     asterisco += '*';
    //   }
    //   console.log(asterisco);
    // }
    




    // Functions
    // How to create your own function

    // function greet() {
    //   console.log('Hello');
    //   // document.write('Oi!');
    // }
    // greet();



    // // Function parameters and arguments
    // function greet1(name) {
    //   console.log(`Hello, ${name}!`);
    //   console.log(`Nice weather today, right?`);
    // }
    // greet1('Rafael');


    // function greet2(name, weather) {
    //   console.log(`Hello, ${name}!`);
    //   console.log(`It's ${weather} today, right?`);
    // }
    // greet2('Rafael', 'rainy');




    // // Default parameters
    // function greet(name = 'Visitante') {
    //   console.log(`Hello, ${name}!`);
    //   console.log("Nice weather today, right?");
    // }
    // greet();
    // // greet('Rafa');


    // function greet(weather, name = 'Rafa') {
    //   console.log(`Hello, ${name}!`);
    //   console.log(`It's ${weather} today, right?`);
    // }
    // // greet();
    // // greet ('sunny');
    // // greet(undefined, 'sunny');


    // function greet(name = 'Rafa', weather) {
    //   console.log(`Hello, ${name}!`);
    //   console.log(`It's ${weather} today, right?`);
    // }
    // // greet();
    // // greet ('sunny');
    // // greet(undefined, 'sunny');




    // // Default parameters and null
    // function greet(name = 'John') {
    //   console.log(name);
    // }
    // greet(undefined);
    // greet(null);
    




    // // The return statement
    // function sum(a, b) {
    //   return a + b;
    // }
    // let result = sum(3, 2);
    // console.log(result);


    // function checkAge (age) {
    //   if (age > 18) {
    //     return 'You may get a car license';
    //   }
    //   return 'You may not get a car license yet';
    // }
    // console.log(checkAge(20));
    // // console.log(checkAge(15));



    // function greet() {
    //   console.log('Hello!');
    //   return;
    //   console.log('Good bye!');
    // }
    // greet();




    // // Variable scope
    // function greet() {
    //   let myString = 'Hello World!';
    //   //console.log('Hello, World!');
    // }
    // greet();
    // // console.log(myString);



    // let myString = 'Hello, World!';
    // function greet() {
    //   console.log(myString);
    // }
    // greet();


    // let myString = 'Hello, World!';

    // function greet() {
    //   let myString = 'Morning!';
    //   console.log(myString);
    // }
    
    // greet();
    // console.log('myString');



    // // The rest parameter
    // function printArguments(...args) {
    //   console.log(args);
    // }

    // printArguments('a', 'b', 'c');
    // console.log(typeof printArguments);



    // Arrow function
    // const greetings = (name) => {
    //   console.log(`Hello ${name}!`);
    // }
    // greetings('John');


    // // o código acima é igual a esse aqui
    // const greetings = function(name) {
    //   console.log(`Hello ${name}!`);
    // }
    // greetings('Rafa');




    // // Single and multiline arrow functions
    // function plusTwo(num) {
    //   return num + 2;
    // }
    // console.log(plusTwo(3));


    // const plusTwo = (num) => num + 2;
    // console.log(plusTwo(3));




    // const greetings = () => console.log(`Hello World!`);
    // console.log(greetings());


    // const greetings = () => {
    //     console.log(`Hello, World!`);
    //     console.log(`How are you?`);
    // }
    // greetings();



    // // Arrow function without round brackets

    // // o uso da palavra arguments não é obrigatório
    // const printArgs = (...casa) => console.log(casa);

    // printArgs(1, 2, 3);



    // How to convert a normal function to an arrow function easily
    // function plusTwo(num) {
    //     return num + 2;
    //   }
      
    //   // step 1: replace function with let / const
    //   const plusTwo(num) {
    //     return num + 2;
    //   }
      
    //   // step 2: add = after the function name
    //   const plusTwo = (num) {
    //     return num + 2;
    //   }
      
    //   // step 3: add => after the round brackets
    //   const plusTwo = (num) => {
    //     return num + 2;
    //   }






    // let myBook = {
    //   title: "JavaScript Introduction",
    //   author: "Nathan Sebhastian",
    // //   describe: function () {
    // //     console.log(`Book title: ${this.title}`);
    // //     console.log(`Book author: ${this.author}`);
    // //   },
    // };
    // // myBook.describe();
    // // console.log(myBook.title);
    // myBook.year = 2023;
    // myBook.author = `Rafa Santana`;
    // delete myBook.year;
    // console.log(myBook);




    // let myBook = {
    //   title: "JavaScript Introduction",
    //   author: "Nathan Sebhastian",
    // };

    // // add release year property
    // myBook.year = 2023;

    // // add publisher property
    // myBook["publisher"] = "CodeWithNathan";

    // console.log(myBook);



    // const person = {
    //     firstName: `Rafa`,
    //     lastName: `Santana`
    // }

    // // // check if firstName exists
    // // console.log(`firstName` in person);

    // // if (`firstName` in person === true) {
    // //     console.log(`Tem sim!!`);
    // // }

    // // check if age exists
    // console.log(`lastName` in person);


    // Exercise #8
    const person = {
        name: `Rafa`,
        age: 41,
        greet: function() {
            console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`)
        }
    }
    person.greet();




    // Final Exercise: Build a Cash Register Machine
    const cashRegister = {
        itemsForSale: [
            {name: 'Phone', price: 300},
        ]
    }




    console.log(``);