D09
🧩 JS: Object Methods

🧩 JS: Object Methods
Completion requirements

Object Methods
Overview
Objects can contain functions as properties. These are called methods.

Methods are useful for adding behaviour to objects. For example, a person object might have a method called sayHello that logs a greeting to the console.

Class Plan
Demo: Demonstration of methods and how they work
Workshop: Write some methods to the console
Topics
What is a method?
How to create a method
How to call a method
How to pass arguments to a method
How to return a value from a method
Resources
MDN: Objects
MDN: Object basics
Workshop
Creating methods
⛳️ In a new index.html file, add a script tag containing a console.log. Open the file in your browser and check the console to see the output.

console.log("Hello world!");
 
⛳️ Create an object called person with a name, age, and favourite colour. Add a method called sayHello that logs a greeting to the console. Log the object to the console.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello(); // Output: Hello!
 
Passing arguments
Methods can accept arguments, just like functions. They're useful for adding behaviour to objects. For example, a person object might have a method called sayHello that logs a greeting to the console.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
};

person.sayHello("Alice"); // Output: Hello Alice!
 
Returning values
Methods can return values, just like functions. They're useful for adding behaviour to objects. For example, a person object might have a method called getAge that returns the person's age.

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  getAge: function () {
    return person.age;
  },
};

const age = person.getAge();

console.log(age); // Output: 30
 
🎯 Create an object called car with a make, model, and colour. Add a method called advert that returns a string detailing the car's make, model, and colour. Log the result of calling the method to the console.

🎯 Create an object called book with a title, author, and number of pages. Add a method called advert that returns a string explaining the book's details for a website advert. Log the result of calling the method to the console.

Your answer















