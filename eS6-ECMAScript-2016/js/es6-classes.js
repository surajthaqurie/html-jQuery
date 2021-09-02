/* classes are came for replacing the prototype */



// EXERCISE 1---------------------------------------------------------------

// ES5---------------------------------------------------

// Constructor Function 
// function Car() { }

// var car = new Car();

// Car.prototype.status = 'New';
// Car.prototype.wheels = 4;
// Car.prototype.avail = function () {
//     console.log('available');
// }

// var ford = new Car();

// console.log(car.__proto__);
// console.log(ford.__proto__);


// ES6---------------------------------------------------

// class Car {
//     constructor() {
//         this.status = 'New';
//         this.wheels = '4';
//         this.avail = () => {
//             console.log('Availbale')
//         }
//     }
// }

// const car = new Car();
// const ford = new Car();

// console.log(car);
// console.log(ford);

// ford.color = 'red';
// console.log(ford);
// console.log(car);



// EXERCISE 2---------------------------------------------------------------

// class Car {
//     // constructor(options) {
//     //     this.status = options.status;
//     //     this.wheel = options.wheel;
//     //     this.avail = options.avail;

//     // }

//     // Object Destructuring
//     constructor({ status, wheel, avail }) {
//         this.status = status;
//         this.wheel = wheel;
//         this.avail = avail;

//     }
// }

// const car = new Car({
//     status: 'New',
//     wheel: '4',
//     avail: () => { console.log('available') }
// });


// console.log(car);

// // EXERCISE 3---------------------------------------------------------------

// class Car {
//     constructor() {
//         this.status = 'New';
//         this.wheels = '4';
//         this.avail = () => {
//             console.log('Availbale')
//         }
//     }
// }

// // Extends : we're just kind of linking this Child class(Ford) to a parent class(Car)
// class Ford extends Car {
//     constructor() {
//         // super(): This is going to go to the parent class which is Car and bring everything that it's inside so we can just grab this and put it inside the constructor.
//         /**
//          * super(); === grabing parent class constructor (constructor only) to here inside the child class constructor
//             this.status = 'New';
//             this.wheels = '4';
//             this.avail = () => {
//                 console.log('Availbale')
//             }
//         */

//         super();

//     }
// }

// const car = new Car();
// const ford = new Ford();

// ford.color = 'red';

// console.log(car);
// console.log(ford);



// EXERCISE 4---------------------------------------------------------------

// class Car {
//     constructor() {
//         this.status = 'New';
//         this.wheels = '4';
//         this.avail = () => {
//             console.log('Availbale')
//         }
//     }

//     otherFunction() {              //  This function is not sharebale, this other function exclusively for Car class
//         console.log('hey');
//     }
// }

// // Extends : we're just kind of linking this Child class(Ford) to a parent class(Car)
// class Ford extends Car {
//     constructor() {
//         // super(): This is going to go to the parent class which is Car and bring everything that it's inside so we can just grab this and put it inside the constructor.
//         /**
//          * super(); === grabing parent class constructor
//             this.status = 'New';
//             this.wheels = '4';
//             this.avail = () => {
//                 console.log('Availbale')
//             }
//         */

//         super();

//     }
// }

// const car = new Car();
// const ford = new Ford();

// ford.color = 'red';

// console.log(car);
// console.log(ford);



// EXERCISE 5---------------------------------------------------------------

// class Car {
//     constructor() {
//         this.status = 'New';
//         this.wheels = '4';
//         this.avail = () => {
//             console.log('Availbale')
//         }
//     }
//     otherFunctions() {
//         return 'hey im exclusively for Car';
//     }

// }


// class Ford extends Car {
//     constructor() {

//         super();

//     }
// }



// const car = new Car();
// const ford = new Ford();

// ford.color = 'red';

// console.log(ford.otherFunctions());
