/*
const myBook = {
  title: 'JavaScript Introduction',
  author: 'Nathan Sebhastian',
  describe: function() {
    console.log(`Book title: ${this.title}`);
    console.log(`Book author: ${this.author}`);
  }
};
*/

const myBook = {
  title: 'JavaScript Introduction',
  author: 'Nathan Sebhastian',
};

/*
console.log(myBook.title); // JavaScript Introduction
myBook.describe();  // Book title: JavaScript Introduction
                    // Book author: Nathan Sebhastian
*/

// add release year property
myBook.year = 2023;

// add publisher property
myBook.publisher = 'CodeWithNathan';

/*
resultado:
{
  title: 'JavaScript Introduction',
  author: 'Nathan Sebhastian',
  year: 2023,
  publisher: 'CodeWithNathan'
}
*/

// change the author property
myBook.author = 'John Doe';

// delete author property
delete myBook.author;

// console.log(myBook);


/*
const person = {
  firstName: 'Rafael',
  lastName: 'Santana'
}
*/

// check if firstName exists
//console.log('firstName' in person); // true
//console.log('age' in person); // false



/*
Exercise #8
Create a person object with the following properties:

name - the person's name
age - the person's age
greet() - a function to greet another person
Inside the greet() function, introduce the person, specifying the name and the age.

Here's an example output:

person.greet();

Hello! My name is Alex and I'm 22 years old.
*/

const person = {
  name: 'Rafael',
  age: 42,
  greet: function() {
    console.log(`Hello, My name is ${this.name} and I'm ${this.age} years old.`);
  }
}

person.greet();