/*
// The if...else statement

let balance = 4000;

if (balance > 5000) {
  console.log('You have the money for this trip. Let\'s go!');
  console.log('The end');
} else if (balance > 3000) {
  console.log('You only have enough money for a staycation');
} else {
  console.log('Sorry, not enough money. Save more!');
}

console.log('The end');
*/



/* 
// The switch...case statement 

// exemplo 01
let age = 10;

switch(age) {
  case 10:
    console.log('Age is 10');
    break;
  case 20:
    console.log('Age is 20');
    break;
  default:
    console.log('Age is neither 10 or 20');
}

// exemplo 02
let palavra = 'porta';

switch (palavra) {
  case 'bola':
    console.log('A palavra é bola');
    break;
  case 'casa':
    console.log('A palavra é casa');
    break;
  default:
    console.log('A palavra não consta no banco de dados');
}


// exemplo 03
switch (20) {
  case 10 + 10:
    console.log("value is twenty");
    break;
}

// exemplo 04

//if else
let weekdayNumber = 1;
    
if (weekdayNumber === 0) {
  console.log("Sunday");
} else if (weekdayNumber === 1) {
  console.log("Monday");
} else if (weekdayNumber === 2) {
  console.log("Tuesday");
} else if (weekdayNumber === 3) {
  console.log("Wednesday");
} else if (weekdayNumber === 4) {
  console.log("Thursday");
} else if (weekdayNumber === 5) {
  console.log("Friday");
} else if (weekdayNumber === 6) {
  console.log("Saturday");
} else {
  console.log("The weekday number is invalid");
}

// switch
let weekdayNumber = 5;
    
switch (weekdayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("The weekday number is invalid");
}


let myFood = "Banana";
    
    if (myFood === "Banana" || myFood === "Apple") {
      console.log("Eat fruits everyday to keep you healthy.");
    }
    
    if (myFood === "Chocolate Cake") {
      console.log("Enjoy the sweet treat.");
    }


let myFood = "Banana";
    
    switch (myFood) {
      case "Banana":
      case "Apple":
        console.log("Eat fruits everyday to keep you healthy.");
        break;
      case "Chocolate Cake":
        console.log("Enjoy the sweet treat.");
        break;
    }




Exercise #5
A primary school is giving different rewards based on the student's grade:

Students that got an A will get a Chocolate
Students that got a B will get a Cookie
Students that got a C will get a Candy
For any other value, print "No reward to give."
Create a variable named grade that will store the student's grade.

Example output:
You got an A, so here's a Chocolate for you!
You got a B, here's a Cookie for you!
You got a C, there's room for improvement and here's your Candy!

You can use either the if...else or the switch...case statement.

*/

const grade = "D";

/*
if (grade === "A") {
  console.log('You got an A, so here\'s a Chocolate for you!');
} else if (grade === "B") {
  console.log('You got a B, here\'s a Cookie for you!');
} else if (grade === "C") {
  console.log('You got a C, there\'s room for improvement and here\'s your Candy!');
} else {
  console.log('No reward to give.');
}
*/

switch (grade) {
  case "A":
    console.log('You got an A, so here\'s a Chocolate for you!');
    break;
  case "B":
    console.log('You got a B, here\'s a Cookie for you!');
    break;
  case "C":
    console.log('You got a C, there\'s room for improvement and here\'s your Candy!');
    break;
  default:
    console.log('No reward to give.');
}