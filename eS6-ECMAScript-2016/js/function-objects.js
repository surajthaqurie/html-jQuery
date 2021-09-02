/**********************************Functions***********************************/

// Arrow Function -----------------------------------

// Exercise 1----------------------------------------------------------

// ES5------------------------------------
// var value = function (name, age) {
//     return `My name is ${name}, my age is ${age}`
// }
// console.log(value("Francis", 35));


// ES6-------------------------------------
// const value = (name, age) => {
//     return `My name is ${name}, my age is ${age}`

// }
// console.log(value("Francis", 35));


// Exercise 2----------------------------------------------------------
// const value = (x, y) => {
//     const sum = x + y;
//     return sum;
// }


// console.log(value(5,5));

// Exercise 3----------------------------------------------------------
// const value = (x, y) => x + y;
// console.log(value(5,5));


// Exercise 4----------------------------------------------------------
// const value = x => x + 10;
// console.log(value(5));


// Exercise 5---------------------------------------------------------
// ES5------------------------------------

// var cars = {
//     brands: ['Ford', 'Audi', 'BMW'],
//     category: 'Sport car',
//     message: function () {
//         var $this = this;

//         return this.brands.map(function (brand) {
//             console.log(`${brand} is a ${$this.category}`);
//         });
//     }
// };

// cars.message();


// ES6------------------------------------
// const cars = {
//     brands: ['Ford', 'Audi', 'BMW'],
//     category: 'Sport car',
//     message: function () {
//         // const $this = this;
//         return this.brands.map(brand => {
//             console.log(`${brand} is a ${this.category}`);     // This : actual object not whatever is inside
//         });
//     }
// };

// cars.message();


/**********************************Objects***********************************/
// Object Literals-------------------------

// Exercise 1----------------------------------------------------------

// const request = (url, data) => {
//     $.ajax({
//         method: 'POST',
//         utl: url,
//         data: data
//     });
// }
// request('http://whatever.com', { car: 'Ford' });


// const request = (url, data) => {
//     $.ajax({
//         method: 'POST',
//         utl,                 // ***
//         data                 // ***
//     });
// }
// request('http://whatever.com', { car: 'Ford' });


// Exercise 2----------------------------------------------------------
// ES5------------------------------------

// var createCharacter = function (name, power, friend) {
//     return {
//         name: name,
//         power: power,
//         getFriend: function () {
//             return friend;
//         }
//     }
// }
// var character = createCharacter('Superman','Fly','Lois lane');
// console.log(character);
// console.log(character.getFriend());


// ES6--------------------------------------

// const createCharacter = (name, power, friend) => {
//     return {
//         name,                         // ****
//         power,                       // ****
//         getFriend() {               // ****
//             return friend;
//         }
//     }
// }
// const character = createCharacter('Superman', 'Fly', 'Lois lane');
// console.log(character);
// // console.log(character.getFriend());



// Default Arguments-------------------------

// Exercise 1----------------------------------------------------------
// ES5------------------------------------
// function cars(brand) {
//     console.log('My car is a ' + brand + ' ');
// }
// cars('Chevy');           // Chevy

// function cars(brand) {
//     if (!brand) {
//         brand = 'Ford';
//     }
//     console.log('My car is a ' + brand + ' ');
// }
// cars();                  // Ford

// ES6------------------------------------
// const cars = (brand = "Ford") => {

//     console.log(`My car is a ${brand}`);
// }
// // cars();                  // Ford
// cars('Chevy');              // Chevy


// Exercise 2----------------------------------------------------------
// function randomBrands() {
//     const brands = ["Ford", "Audi", "BMW"];
//     return brands[Math.floor(Math.random() * brands.length)];
// }

// function cars(brand = randomBrands()) {
//     console.log(`My car is a ${brand}`);
// }
// cars();


// const randomBrands = () => {
//     const brands = ["Ford", "Audi", "BMW"];
//     return brands[Math.floor(Math.random() * brands.length)];
// }

// const cars = (brand = randomBrands()) => {
//     console.log(`My car is a ${brand}`);
// }
// cars();


// Rest Operator-------------------------

// Exercise 1----------------------------------------------------------
// ES5------------------------------------
// function args(arg1, arg2, arg3) {
//     const arguments = [arg1, arg2, arg3];
//     console.log(arguments);
// }

// args('val 1', 'val 2', 'val 3');


// ES6------------------------------------
// function args(...arguments) {
//     // const arguments = [arg1, arg2, arg3];   // ERROR: arg1,arg2,arg3 undefine 
//     console.log(arguments);
//     console.log(arguments[0]);          // val 1
// }
// args('val 1', 'val 2', 'val 3');


// Exercise 2----------------------------------------------------------

// function hello() {
//     console.log('Hello');
// }

// function args(...arguments) {

//     console.log(`My name is ${arguments[0]}, i am ${arguments[1]}, my eyes are ${arguments[2]} `);
// }
// // args('Francis', '20', 'green');
// args('Francis', '20', 'green', hello(), world());   // it calls functions first here but it cannot pass functions as arguments


// function world() {
//     console.log('world');
// }


// Spread Operator----------------------------------
// Exercise 1----------------------------------------------------------

// ES5------------------------------------
// var brands = ["Ford", "Nissan"];
// var otherBrands = ["Audi", "BMW"];

// var newArray = brands.concat(otherBrands);
// newArray.push("Other brand");

// console.log(newArray);


// ES6-------------------------------------
// const brands = ["Ford", "Nissan"];
// const otherBrands = ["Audi", "BMW"];

// const newArray = [...brands, "Other brands", ...otherBrands]

// console.log(newArray);
