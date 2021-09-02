// Create an array.
var array = [1, 2, 3];
console.log('Declared array: ', array);

// How mnay values inside tha array.
console.log('length of array: ', array.length);

// Console log the third one.
console.log('Console log the third one: ', array[2]);

// Change the third one.
array[2] = 78;
console.log('Add a fourth value: ', array);

// Add a fourth value.
array[3] = 60;
console.log('Add a fourth value: ', array);

// Add a sixth value.
array[5] = 96;
console.log('Add a sixth value: ', array);


/**********ARRAY FUNCTIONS************/
console.log('*********ARRAY FUNCTIONS************');

var array = [1, 2, 3, 4, 5];
console.log('Declared array: ', array);

// Add a value at the end of the array
array.push(48);
console.log('Add a value at the end of the array push: ', array);

// Remove tha last value of the array
array.pop();
console.log('Remove the last value of the array with pop: ', array)

// Substract the last value in a variable
var single = array.pop();
console.log('last value: ', single);
console.log('assing the value and removing that with pop: ', array);


// Remove the first value of the array
array.shift();
console.log('Remove the first value of the array with shift: ', array)

// Substract the first into a variable

var single = array.shift();
console.log('First value: ', single);
console.log('assing the value and removing that with Shift: ', array);

// Add a value at the beginning of the array
array.unshift(99);
console.log('Add a value at the beginning of the array with unshift: ', array)


// indexOf()
console.log('*********ARRAY indexOf()************');

var array = ['John', 'Helen', 'Frances'];
console.log('Declared array: ', array);

console.log('array indexOf (1 for true -1 for false): ', array.indexOf('Helen'));

if (array.indexOf('Rob') !== -1) {
    console.log('Exits');
} else {
    console.log('Does not Exits');

}

// splice()
console.log('*********ARRAY splice()************');

var array = ['NODE', 'REACT', 'MONGODB', 'EXPRESS'];
console.log('Declared array: ', array);

array.splice(2);
console.log('Remove multiple elements after given number(starting point) with splice(): ', array);

var array = ['NODE', 'REACT', 'MONGODB', 'EXPRESS'];

var newArray = array.splice(1, 2);
console.log('Getting Removed elements with splice(): ', newArray);
console.log('Removing elements with splice(starting,howmuch)', array);

// slice()
console.log('*********ARRAY slice()************');

var array = ['NODE', 'REACT', 'MONGODB', 'EXPRESS'];
console.log('Declared array: ', array);

var newArray = array.slice(1, 3);
console.log('Getting Removed elements with slice(starting, upto): ', newArray);
console.log('Full array after slice: ', array);

// CONCAT
console.log('*********CONCAT************');
var array = ['Java', 'PHP', 'Python', 'Javascript'];
var otherArray = ['NODE', 'REACT', 'MONGODB', 'EXPRESS'];

console.log('Declared First array: ', array);
console.log('Declared Second array: ', otherArray);

var finalArray = array.concat(otherArray);
console.log('The Final Array After Concat: ', finalArray);


// JOIN
console.log('*********JOIN************');
var array = ['Java', 'PHP', 'Python', 'Javascript'];
console.log('Declared First array: ', array);

var finalArray = array.join();
console.log('The Final Array After join(): ', finalArray);

var finalArray = array.join("/");
console.log('The Final Array After join("/"): ', finalArray);



// ARRAY LOOPS
console.log('*********ARRAY LOOPS************');

// FILTER: Returns new array
console.log('---------------FILTER-----------------');
var numbers = [1, 5, 10, 20, 30];
var names = ['John', 'Helen', 'Frances', 'Mark', 'Warren'];

console.log('Declared First array: ', numbers);
console.log('Declared Second array: ', names);


// return is neceassary
var filters = numbers.filter(function (item) {
    return item > 9;
});

console.log('Filter first array where item > 9: ', filters);

// return is neceassary
var filterNames = names.filter(function (name) {
    return name !== 'Helen';
});

console.log('Filter Second array where name !== "Helen": ', filterNames);

// MAP: Returns new array
console.log('---------------MAP-----------------');

var numbers = [1, 5, 10, 20, 30];

console.log('Declared array: ', numbers);

// return is neceassary
var maped = numbers.map(function (number) {
    return number + 5;
});

console.log('Maped first array and number + 5: ', maped);


// forEach: Will not returns new array
console.log('---------------forEach-----------------');

var names = ['John', 'Helen', 'Frances', 'Mark', 'Warren'];
console.log('Declared array: ', names);

names.forEach(function (name) {
    if (name === 'Helen') {
        console.log('forEach() Hi my name is', name);

    }
});


// FUNCTIONS
console.log('*********FUNCTIONS************');

// IIF: Immediately invoked function
console.log('---------------IFF-----------------');

function normalFunction() {
    console.log('normal function: Francis');
}
normalFunction();

(function IIF() {
    console.log('Immediately invoked function: Francis');
})();


var number = 5;
(function showName(value) {
    number = 5 + value;
    console.log('IIF value: ', number);
})(number);

console.log('Global value: ', number);


// BUILD IN FUNCTION
console.log('---------------BUILD IN FUNCTION-----------------');

var name = 'Darth Vader';
console.log('Given: ', name);

// Converted to Uppercase
console.log('Converted to Uppercase: ', name.toUpperCase());

// Convert to lowercase
console.log('Convert to lowercase: ', name.toLowerCase());

// Trim white spaces
var lastname = ' Darth Vader ';
console.log('Given lastname: ', lastname);
console.log('Trim white spaces: ', lastname.trim());

// Get the amount of characters
console.log('Get the amount of characters: ', name.length);

// Get a spcific value
console.log('Get a spcific value charAt(1): ', name.charAt(1));
console.log('Get a spcific value name[1]: ', name[1]);

// Merge it with a different string
console.log(' Merge it with a different string concat: ', name.concat(', thats my name'));

// Split every word of it
console.log(' Split every word of it, split(" ")', name.split(" "));



// setTimeout(): time in miliSec (run ones after the defined time)

setTimeout(function () {
    console.log('setTimeout(): howdy partner');
}, 2000)


// setInterval(): time in miliSec (run again and again after defined interval)

var hello = setInterval(() => {
    console.log('setInterval(): howdy partner');
}, 2000);

setTimeout(function () {
    clearInterval(hello);
}, 4000);


// MATH INBUILT FUNCTIONS FOR STRING
console.log('---------------BUILD IN FUNCTION FOR STRING-----------------');

var number1 = '20';
console.log('given number1: ', number1);
console.log('typeof number1 ', typeof number1);
console.log('typeof parseInt(number1): ', typeof parseInt(number1));

var number2 = 20;
console.log('given number2: ', number2);
console.log('typeof number2.toString(): ', typeof number2.toString());

var number3 = 2.46;
console.log('given number3: ', number3);
console.log('Math.random(number3): ', Math.round(number3));
console.log('Math.ceil(number3): ', Math.ceil(number3));
console.log('Math.floor(number3): ', Math.floor(number3));

console.log('Math.max(2, 78, 200, 400): ', Math.max(2, 78, 200, 400));
console.log('Math.min(2, 78, 200, 400): ', Math.min(2, 78, 200, 400));


console.log('Math.random(): ', Math.random());

console.log('Math.floor(Math.random() * 6) + 1: ', Math.floor(Math.random() * 6) + 1);
