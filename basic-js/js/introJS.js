// CHECKING EXTERNAL JS IMPORT
console.log('***************CHECKING EXTERNAL JS IMPORT***************');

console.log('Run as import');


// VARIABLE TYPES
console.log('***************-VARIABLE TYPES***************');

var myFirstName = 'Ron';
var number = 10;
var boolean = false;
var movies = 'Die hard, Avatar, Forrest gump';
var movieArray = ['Die Hard', 'Avatar', 'Forrest Gump'];
var object = {
    name: 'James',
    lastname: 'Jones'
}

console.log('myFirstName', myFirstName);
console.log(movies);
console.log(movieArray);
console.log(object, 'Fetching data of object:', object.name)


// IF STATEMNTS
console.log('***************IF STATEMNTS***************');

var logo;
var username = 'James';
var lastname = 'Jones';

if (logo) {
    console.log('Logo has a value');
} else {
    console.log('There is no value in logo')
}

if (!logo) {
    console.log('There is no value in logo')
} else {
    console.log('Logo has a value');
}

if (username === 'James') {
    console.log('Yeah it is James');
} else {
    console.log('Its not James')
}

if (lastname !== 'Jones') {
    console.log('Its not James Jones')
} else {
    console.log('Yeah it is James Jones');
}

// SWITCH STATEMNTS
console.log('***************SWITCH STATEMNTS***************');

var slot = 5;

switch (slot) {
    case 1:
        console.log('Won a Tv');
        break;
    case 2:
        console.log('Won a Ps');
        break;
    case 3:
        console.log('Won a PC');
        break;
    case 4:
        console.log('Won a guitar');
        break;
    case 5:
        console.log('Won a Bike');
        break;

    default:
        console.log('Spin again');
}


// OPERATOR
console.log('***************OPERATOR***************');

//== ADITION ==//
var pervious = 200;
var current = 100;

console.log('---------ADITION OPERTAOR------------');
var total = 'The total is : ' + (pervious + current);
current += pervious;

var username = 'James';
var message = 'Welcom back ' + username;

console.log(total);
console.log(current);
console.log(message);

var total = 'The total is : ' + 100 + 200;
console.log(total); // The total is : 100200

//== SUBS ==//
console.log('---------SUBS OPERTAOR------------');

var total = 'total amount is: ' + (pervious - current);
console.log(total);

var message = 'Welcome back' - username;
console.log(message); //NaN ( Not a Number)

//== MULTIPLY ==//
console.log('---------MULTIPLY OPERTAOR------------');

var total = 'total amount is ' + (pervious * current);
console.log(total);
var message = 'Welcome back' * username;
console.log(message); //NaN ( Not a Number)

//== DIVIDED ==//
console.log('---------DIVIDED OPERTAOR------------');

var total = 'total amount is ' + (pervious / current);
console.log(total);
var message = 'Welcome back' / username;
console.log(message); //NaN ( Not a Number)

//== COMPARE ==//
console.log('---------COMPARE OPERTAOR------------');

console.log(2 == 2);  // TRUE
console.log(2 == '2'); // TRUE
console.log(2 === '2'); // FALSE
console.log(2 === 2);   // TRUE
console.log(2 != 2);    // FALSE
console.log(2 != '2');  // FALSE
console.log(2 !== '2');  // TRUE


console.log('James' == 'James') // TRUE

console.log(2 < 2); // FALSE
console.log(2 > 2); // FALSE
console.log(2 > 5); // FALSE
console.log(2 < 5); // TRUE
console.log(2 <= 2); // TRUE
console.log(2 >= 2); // TRUE


//== && AND || OPERTAOR ==//
console.log('---------&& AND || OPERTAOR------------');

if (1 == 1 && 1 > 5) { console.log('true'); } else { console.log('false'); } // False
if (1 == 1 && 7 > 5) { console.log('true'); } else { console.log('false'); } // TRUE
if (1 == 1 || 1 > 5) { console.log('true'); } else { console.log('false'); } // TRUE
if (1 == 2 && 1 > 5) { console.log('true'); } else { console.log('false'); } // False


var x = 10;
var y = 10;

if (x == y) { console.log('Equal'); } else { console.log('Not Equal'); }

//  if(x == y){ 'equal'} else {'Not Equal'}
var result = x == y ? 'Equal' : 'Not Equal'
console.log(result);


//== LOOPS ==//
console.log('***************LOOPS***************');

console.log('---------FOR LOOPS------------');

for (var x = 0; x <= 5; x++) {
    console.log('The Iteration number is ' + x);
}

for (var x = 5; x >= 0; x--) {
    console.log('The Iteration number is ' + x);

}

console.log('---------NESTED FOR LOOPS------------');

for (var x = 0; x <= 5; x++) {
    for (var y = 0; y <= 5; y++) {
        // console.log('The First Iteration number is ' + x + '-IL:' + y);
    }
}

for (var i = 1; i <= 5; i++) {
    // console.log(i);

    if (i == 3) {
        break;  // 1 2 
        // continue;  // 1 2 4 5 
    }

    console.log(i);

}


var user = ['James', 'Brian', 'Lucas'];

/*
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
*/

for (var i = 0; i < user.length; i++) {
    console.log(user[i]);
}

// WHILE LOOP
console.log('---------WHILE LOOP------------');

var x = 2;
while (x <= 5) {
    console.log(x);

    x++;
}

var logged = true;
var i = 0;

console.log('--------- IF AND WHILE LOOP------------');


while (logged) {
    if (i == 3) {
        logged = false;
    }
    console.log(i);

    i++;
}

//== FUNCTION ==//
console.log('***************FUNCTION***************');

function firstFunction() {
    console.log('My First Function');
}

firstFunction();


var logged = false;
console.log(logged);

function logIn() {
    logged = true;
    console.log(logged)
    console.log('Welcome back');
}
logIn();

function signIn(nameOfuser) {
    // alert(' Welcome Back' + nameOfuser);
}

signIn('James');


function arguments(arg1, arg2) {
    console.log(arg1)
    console.log(arg2);
}

arguments(2, 1);

function calc(a, b) {
    var sum = a + b;
    return sum;

}

var result = calc(5, 5);
var other = calc('James', ' Jones');
console.log(result);
console.log(other);


// EXECRCISE
console.log('***************EXECRCISE***************');

console.log('---------EXECRCISE-1------------');


var servers = [true, true, false, true];

function serverMessage(number) {
    console.log('Server ' + number + '.Running');

}
function restart(number) {
    servers[number] = true;
    serverMessage(number);
}

for (var i = 0; i < servers.length; i++) {

    if (servers[i]) {
        serverMessage(i);
    } else {
        console.log('Server ' + i + ', down.Restarting...');
        restart(i);

    }
}



console.log('---------EXECRCISE-2------------');

var user = ['Raymond', 'George'];
var price = [20, 12, 5];
var product = ['Potatoes', 'Apples', 'Lemmons'];


for (var i = 0; i < user.length; i++) {

    if (user[i] == 'Raymond') {
        console.log(user[i] + ' bought:');
        for (var j = 0; j < product.length; j++) {
            console.log('.' + product[j] + ' = ' + '$' + (price[j] - 3));
        }
    }
    else {
        console.log(user[i] + ' bought:');
        for (var j = 0; j < product.length; j++) {
            console.log('.' + product[j] + ' = ' + '$' + price[j]);
        }
    }

}