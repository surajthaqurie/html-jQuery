// var--------------------------------------------------------

// Example 1--------------------------------------

// var winner = true;           // Global scope
// function user() {
//     var winner = false;      // local scope inside the function
//     console.log(winner);     // false
// }
// user();
// console.log(winner);         // true


// Example 2--------------------------------------------------

// var value = 10;
// var winner = true;              // Global scope


// if (value == 10) {
//     var winner = false;         // Changing Global scope
// }

// console.log(winner);            // false

// Example 3--------------------------------------------------

// const value = 10;
// 
// var winner = true;                   // Global scope
// var winner = true;                   // Changing the variable inside the Global scope



// Let-----------------------------------------------------

// Example 1--------------------------------------

// const value = 10;
// let winner = true;                 // Global scope


// if (value == 10) {
//     let winner = false;
//     console.log(winner);          // false: beacause let has its own scope (inside the any block)
// }

// console.log(winner);              // true


// Example 2--------------------------------------------------

// const value = 10;
// let winner = true;                   // Global scope


// if (value == 10) {
//     winner = false;
//     console.log(winner);            // false: changing the value (without using let: not creating new instance)
// }

// console.log(winner);               // false: changed



// Example 3--------------------------------------------------

// const value = 10;
// 
// let winner = true;                   // Global scope
// let winner = true;                   // ERROR: Uncaught SyntaxError: Identifier 'winner' has already been declared


// Example 4--------------------------------------------------

// const value = 10;
// 
// let winner = true;                 // Global scope
//  winner = true;                    
// console.log(winner);               // true: changing the value  


// const--------------------------------------------------------
// Example 1--------------------------------------------------

// const winner = true;

// function user() {
//     const winner = false;             // false
//     console.log(winner);
// }
// user();

// console.log(winner);                // true

// // Example 2--------------------------------------------------

// const value = 10;
// const winner = true;                   // Global scope


// if (value == 10) {
//     const winner = false;
//     console.log(winner);            // false
// }

// console.log(winner);               // true: changed


// Example 3----------------------------------------------------

// const value = 10;
// const winner = true;                   // Global scope
// winner = false                         // ERROR: Uncaught TypeError: Assignment to constant variable.

// Can not change tha value of const varibale in its own scope

// Template String---------------------------------------------------------------------------------------

// ES5-------------------------------------------------------
// function empolyeee() {
//     var name = "Francis";
//     var age = 25;
//     var positon = "manager";


//     console.log("His name is " + name + ", and he is " + age + " years old, he works as" + positon);
// }

// empolyeee();


// ES6-----------------------------------------------------------------
// function empolyeee() {
//     let name = "Francis";
//     let age = 25;
//     let positon = "manager";


//     console.log(`His name is ${name}, and he us ${age} year old, he works as ${positon}`);
// }

// empolyeee();