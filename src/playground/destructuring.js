console.log('Destructuring.js');

// Object Destructuring
const person =  {
  name: 'Anthony',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

// const { name, age } = person;
// console.log(`${name} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

// Array Destructuring
const address =['126 Bonham Street', 'Dublin', 'Leinster', 'D8'];
const [ street, city, county, postcode ] = address;
console.log(`Location is ${street} - ${city}`);
