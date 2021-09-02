
// OBJECT
console.log('*********OBJECT************');

var user = {
    name: 'Francis',
    lastname: 'Jones',
    age: 20,
    cars: ['Honda', 'Ford'],
    misc: {
        hobbbies: ['Skating', 'Driving'],
        lang: 'Eng'
    },
    salute: function () {
        console.log('Im function insides object user.salute(): Hi there');
    }
};

console.log('Given object: ', user);
console.log('user["name"]:  ', user["name"]);
console.log('user.name: ', user.name);

console.log('user.cars: ', user.cars);
console.log('user.misc.hobbbies: ', user.misc.hobbbies);

user.salute();

user.name = "James";
console.log('user.name= "James": ', user.name);

var user = new Object();
console.log('user = new Object() type of user: ', typeof user);

var user = {};
console.log('user = {} type of user: ', typeof user);

var user = new Object();
console.log('user = new Object() type of user: ', typeof user);

var user = {};
console.log('user = {} type of user: ', typeof user);
console.log('Given object: ', user);

user.name = "Framcis";
user.age = 20;

console.log('user.name:"Framcis"', user);

/**********THIS KEYWORD************/
console.log('*********THIS KEYWORD************');
var lastname = "Kelvin";
console.log('outside vairble: ', lastname);

var user = {
    name: 'Francis',
    lastname: 'Jones',
    age: 20,
    cars: ['Honda', 'Ford'],
    misc: {
        hobbbies: ['Skating', 'Driving'],
        lang: 'Eng'
    },
    salute: function () {
        console.log('Im using varibale outside the this object with "lastname": Hi there, i am ' + lastname);
        console.log('Im using varible inside the this object with "this.lastname": Hi there, i am ' + this.lastname);
        console.log('Im using varible inside the this object with "this.cars[0]": Hi there, i am ' + this.cars[0]);


    }
};

console.log('Given object: ', user);

user.salute();


// PROTOTYPES: Like a window object but for objects
console.log('*********PROTOTYPES************');

// storing the object's function on a global spot where any object have access
console.log('---------------STORING AND ACCESSING OBJECT GLOBALLY-----------------');


var user = {
    name: 'Frances',
    lastname: 'Jones'
};

console.log('Given object: ', user);

console.log('By default we cant access tha prototypes (user.protoType): ', user.protoType);
console.log('We can access its prototyp by (user.__proto__): ', user.__proto__);

// Storing the object's funtion globally
Object.prototype.screamFirst = function () {
    console.log('Storing the object funtion globally (Object.prototype.screamFirst()): Ahhhhh ');
}

// calling that global object's function with other object (user)
console.log('Accessing or calling that global object function with other object (user)')
user.screamFirst();


console.log('Now checking that accessed gobal function in "user" object (user.__proto__)', user.__proto__);


console.log('*********CONSTRUCTOR FUNCTION************');

// Direct reference to this object
console.log('---------------CONSTRUCTOR FUNCTION: STORING AND ACCESSING NOT GLOBALLY(DIRECT REFERENCE TO THE OBJECT)-----------------');

console.log('----------Example 1------------');

var global = {};
console.log('Given object(global = {}): ', global);

// Constructor function 
function User() {

    // Local protoType container

}

// Making a varibale an object of function prototype
var user = new User();

// Assigning value on  function prototype object variable
user.name = "Max";


User.prototype.screamSecond = function () {
    console.log('Storing the object funtion Locally (User.prototype.screamSecond()): Ahhhhhhhhh screamSecond');

}

// Inserting new data to that function prototype
User.prototype.lastname = "Jones";

console.log('Carrying an object protoType inside of function: ', user);

console.log('protoType of the global object(global.__proto__) : ', global.__proto__);
console.log('protoType of the local object(user.__proto__) :', user.__proto__);


// calling that local object's function with other object (user)
console.log('Accessing or calling that local object function with other object (user)')

user.screamSecond();


console.log('----------Example 2------------');


function FastCar() {
    this.seats = 2;
    this.available = function () {
        console.log('Not Available');
        console.log(this.name + ' (this.name) is not Available');

    }
}
// trigger this function for send this funtion in to  window object
// FastCar();

// console.log(window); 

// creating object with function protoype
var ford = new FastCar();
var chevy = new FastCar();

console.log(ford);
console.log(chevy);

// assining the value on object
ford.name = 'Mustang';
chevy.name = 'Nova'

console.log(ford);
console.log(chevy);

// use of assigned value of object on function prototype 
ford.available();
chevy.available();

console.log(ford);
console.log(chevy);


var ford = {
    seats: 2,
    name: 'mustang',
    available: function () {
        console.log('hello');
    }
}

var chevy = {
    seats: 2,
    name: 'Nova',
    available: function () {
        console.log('hello');
    }
}

var nissan = {
    seats: 2,
    name: 'Tida',
    available: function () {
        console.log('hello');
    }
}

console.log('----------Example 3------------');


function Car(brand, color) {
    this.brand = brand;
    this.color = color;
    this.seats = 2;
    this.available = function () {
        console.log('Not Available');
        console.log(this.name + ' (this.name) is not Available');

    }
}

var ford = new Car('Ford', 'Black');
console.log(ford);

// delete ford.seats;
console.log('delete ford.seats;', ford);


if ('color' in ford) {
    console.log("[if ('color' in ford)]: has a color");
}

for (var field in ford) {
    console.log('for(var field in ford) ford: ', ford);
    console.log('for(var field in ford) field: ', field);

    console.log('for(var field in ford) ford[field]: ', ford[field]);
}


for (var field in ford) {
    if (field === 'brand') {
        console.log(ford[field]);
    }
}


// MAKING REQUEST: Get information from server or post information to the server
console.log('*********MAKING REQUEST************');

// GET REQUEST: Getting information from server
console.log('---------------GET REQUEST-----------------');

var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';
var method = 'GET';

http.open(method, url);
// when the state of our request changes it's going to let us know if it changed because we are ready to get that information we back from the server because the state changed.
http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log('Information we get form the server: ', JSON.parse(http.response));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log('Something  went worng');
    }
}

http.send();


// Post REQUEST: Posting information to server
console.log('---------------Post REQUEST-----------------');

var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';
var method = 'POST';

var db = JSON.stringify({
    name: "jules",
    username: 'jules251'
});

http.open(method, url);

http.setRequestHeader('Content-type','application/json');

http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log('Information we post form the server: ', JSON.parse(http.response));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
        console.log('Something  went worng');
    }
}

http.send(db);