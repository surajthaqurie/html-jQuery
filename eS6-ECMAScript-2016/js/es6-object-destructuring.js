
// EXERCISE 1---------------------(Objects)------------------------------------------

// ES5---------------------------------------------------
// var user = {
//     name: "Francis",
//     lastname: "Jones",
//     age: 25
// }

// var name = user.name;
// var lastname = user.lastname;
// var age = user.age;

// console.log(name);
// console.log(lastname);
// console.log(age);

// ES6---------------------------------------------------

// const user = {
//     name: "Francis",
//     lastname: "Jones",
//     age: 25
// }

// const { name } = user;              // const name = user.name
// const { lastname } = user;
// const { age } = user;

// const { name, lastname, age } = user;

// console.log(name);
// console.log(lastname);
// console.log(age);


// EXERCISE 2---------------------------------------------------------------
// const user = {
//     name: "Francis",
//     lastname: "Jones",
//     age: 25
// }

// // With out destructuring
// // const message = (user) => {
// //     console.log(`My name is ${user.name} ${user.lastname}, age ${user.age}`)
// // }


// // With destructuring
// // const message = ({ name, lastname, age }) => {
// //     console.log(`My name is ${name} ${lastname}, age ${age}`)
// // }
// // message(user);


// // With destructuring and with second argument instead of the object 
// const message = ({ name, lastname, age }, salute) => {
//     console.log(`My name is ${name} ${lastname}, age ${age}: ${salute}`)
// }
// message(user, 'Hello');


// EXERCISE  3----------------(Arrays)-----------------------------------------------
// const cars = [
//     'camaro',
//     'nova',
//     'A4'
// ];

// // const camaro = cars[0];          // ES5     
// // console.log(camaro);


// // const [camaro, nova, a4] = cars;   // ES6
// // console.log(a4);

// const [camaro, ...rest] = cars;   // ES6
// console.log(rest);          // ["nova","A4"]


// EXERCISE 4----------------(Array's of objects)-----------------------------------------------

// const users = [
//     { name: "Francis", lastname: "Jones", age: 25 },
//     { name: "Martha", lastname: "Smith", age: 20 },
//     { name: "Helen", lastname: "Neron", age: 16 },
// ];


// // In Vanilla js
// // const lastname = users[0].lastname;
// // console.log(lastname);


// const [{ lastname }] = users;
// console.log(lastname);


// EXERCISE 5---------------------------------------------------------------

// const users = {
//     names: ['Francis', 'Martha', 'ray']
// }

// // const { names } = users;
// // console.log(names);              // ["Francis", "Martha", "ray"]


// const { names: [name1, name2] } = users;

// console.log(name1);                 // Francis
// console.log(name2);                 // Martha




// EXERCISE 5----------------(Functions)-----------------------------------------------

// ES5-----------------------------------------
// function createCar(brand, model, color,year,type) {  // mainting argument order
// Argument are in order if not application is going to break. -> Es5
// }
// createCar("Ford", "Focus");
// Adding new arguments
// createCar("Ford", "Focus", "red", "2015", "fast");


// ES6-----------------------------------------
function createCar({ brand, model, color, type, year }) {        // type is comes before year, so it dosen't matter whatever you the order beacause we make a refrance by name name not by oder.

}

const car = {
    brand: "Ford",
    model: "Focus",
    color: "red",
    year: "2015",
    type: "fast"
}


// createCar("Ford", "Focus", "red", "2015", "fast");
createCar(car);