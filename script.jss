console.log("Hello World");

const person = {
  name: "Rita",
  age: 21,
  favouriteColour: "pink",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello(); // Output: Hello!

// Passing arguments
const person2 = {
  name: "Amina",
  age: 14,
  favouriteColour: "blue",
  sayHello: function (name) {
    console.log(`Hello ${name}!`);
  },
};

person2.sayHello("Amina"); 

// Returning values

const person3 = {
  name: "Amina",
  age: 14,
  favouriteColour: "blue",
  getAge: function () {
    return person3.age;
  },
};

const age = person3.getAge();

console.log(age);

// Advert

const car = {
  make: "Toyota",
  model: "Prius",
  colour: "blue",
  advert: function () {
    return `Buy my ${car.make} ${car.model}! It is ${car.colour} and it works.`;
  },
};

//Advert 2

const myCar = {
    make: "Toyota",
    model: "Prius",
    colour: "blue",
    forSale: function (make) {
    console.log("My 2024" + make + " is for Sale!");
    },
};

myCar.forSale("Toyota");





