/**
 * forEach()
 * map()
 * filter()
 * find()
 * every()
 * some()
 * reduce()
 *
 */
// **IMP with these helper we have to return something form them aspect forEach()

/************************forEach()**************************************/

// Example 1-------------------------------------------

// ES5------------------------------------------
// var artists = ["Clapton", "U2", "Lamar"];
// for (var i = 0; i < artists.length; i++) {
//     console.log(artists[i]);
// }


// ES6------------------------------------------
// const artists = ["Clapton", "U2", "Lamar"];
// artists.forEach(function (artist) {
//     console.log(artist);
// });



// Example 2-----------------------------------------------
// const names = ['Francis', 'Lisa', 'Ron'];
// names.forEach(function (name) {
//     document.body.insertAdjacentHTML("afterbegin", `<div>Hello my name is ${name} <strong> click me </stron></div>`)
// });


// Example 3-----------------------------------------------
// const names = ['Francis', 'Lisa', 'Ron'];
// let template = '';
// names.forEach(function (name) {
//     template += `<div>Hello my name is ${name} <strong> click me </strong></div>`

// });
// document.body.insertAdjacentHTML("afterbegin", template);



// Example 4-----------------------------------------------

// ES5--------------------------------------
// var purchases = [
//     { product: "Phones", number: 2, amount: 100 },
//     { product: "TV", number: 5, amount: 100 },
//     { product: "MAC", number: 10, amount: 100 }
// ];

// var total = 0;

// for (var i = 0; i < purchases.length; i++) {
//     total += purchases[i].number * purchases[i].amount;
// }
// console.log(total);

// ES6--------------------------------------
// const purchases = [
//     { product: "Phones", number: 2, amount: 100 },
//     { product: "TV", number: 5, amount: 100 },
//     { product: "MAC", number: 10, amount: 100 }
// ];

// let total = 0;

// purchases.forEach(function (purchase) {
//     total += purchase.number * purchase.amount;
// });

// console.log(total);

/************************map()**************************************/
// Example 1-------------------------------------------

// ES5------------------------------------------
// var numbers = [1, 2, 3, 4, 5];
// var otherArray = [];

// for (var i = 0; i < numbers.length; i++) {
//     otherArray.push(numbers[i] * 10);
// }

// console.log(otherArray);


// ES6------------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map(function (item) {  // item : all the elements
//     return item * 10;              // always return some thing(array) **IMP
// });
// console.log(newArray);


// Example 2-------------------------------------------

const users = [
    { user: 'Martin Jones', age: 32, eyes: 'brown' },
    { user: 'Jane Doe', age: 20, eyes: 'blue' },
    { user: 'Brian Wrecker', age: 40, eyes: 'brown' }
];


const listUsers = users.map(function (item) {
    return item.user;
});

listUsers.forEach(function (item) {
    let select = document.querySelector('select');

    select.insertAdjacentHTML("afterbegin", `
    <option>${item}</option>
    `);
});



/************************filter()**************************************/

// Example 1-------------------------------------------
// const products = [
//     { name: 'ipad', category: 'devices' },
//     { name: 'Sony 3d', category: 'TV' },
//     { name: 'E256', category: 'Blender' },
//     { name: 'Super vision', category: 'TV' },
//     { name: 'IphoneX', category: 'phones' }
// ];


// const tv = products.filter(function (item) {
//     return item.category === 'TV';
// });

// console.log(tv);



// Example 2-------------------------------------------
// const products = [
//     { name: 'ipad', category: 'devices', number: 10, price: 200 },
//     { name: 'Sony 3d', category: 'TV', number: 0, price: 400 },
//     { name: 'E256', category: 'Blender', number: 3, price: 50 },
//     { name: 'Super vision', category: 'TV', number: 7, price: 500 },
//     { name: 'IphoneX', category: 'phones', number: 40, price: 2 }
// ];


// const results = products.filter(function (product) {
//     return product.category === 'TV'
//         && product.number > 0
//         && product.price > 200;                    // always return some thing **IMP
// });

// console.log(results);


/************************find()**************************************/
// If it finding something and just returing that value and then stop that not goes for others

// Example 1-------------------------------------------

// const brands = ["Apple", "Sony", "Samsung", "Samsung"];

// const results = brands.find(function (brand) {
//     return brand === "Samsung"
// });

// console.log(results);   // Samsung



// Example 2-------------------------------------------
// const brands = [
//     { name: "Apple", id: 1 },
//     { name: "HP", id: 2 },
//     { name: "Samsung", id: 3 },
//     { name: "Samsung", id: 4 }
// ];



// const results = brands.find(function (brand) {
//     return brand.name === "Samsung"
// });

// console.log(results);   // {name: "Samsung", id: 3}


// Example 3-------------------------------------------
const cars = [
    { brand: 'Ford', price: 500, available: 2, type: 'Sport car' },
    { brand: 'Nissan', price: 200, available: 5, type: 'Wagon' },
    { brand: 'Chevy', price: 300, available: 4, type: 'Sport car' },
    { brand: 'Porsche', price: 100, available: 1, type: 'Urban' },
];

function getResults(price, type) {
    return cars.find(function (car) {
        return car.price < price
            && car.available > 0
            && car.type === type;
    });
}


document.querySelector('.search').addEventListener("click", function () {
    var price = parseInt(document.querySelector('#price').value)
    var type = document.querySelector('#type').value;

    let results = getResults(price, type);

    if (results) {
        console.log(`Found ${results.brand} for ${results.price}`)
    } else {
        console.log(`Sorry no Found`);
    }
});


/************************every()/some()**************************************/

// every()---------------------------------------------------
const students = [
    { name: 'Francis', grade: 4 },
    { name: 'Martin', grade: 5 },
    { name: 'Martha', grade: 7 },
];


const every = students.every(function (student) {
    return student.grade > 6;
});

// console.log(every);  // false  every element should matches the condition ( returns Boolean value)

// some()-------------------------------------------------------

const some = students.some(function (student) {
    return student.grade > 6;
})

// console.log(some);   // true any of one element matche the condition ( returns Boolean value)


/************************reduce()**************************************/
// Example 1-------------------------------------------

const previous = 200;

const current = [
    { expense: 'Guitar', amount: 200 },
    { expense: 'Mic', amount: 100 },
    { expense: 'Strap', amount: 100 }
];

// // sum: starting point
// const results = current.reduce(function (sum, expense) {
//     return sum + expense.amount;        // sum: store all values (eg: counter+=)
// }, 0);  // --> starting point

// console.log(results);   // 400

// sum: starting point
const results = current.reduce(function (sum, expense) {
    return sum + expense.amount;
}, previous);

// console.log(results);  // 600


// Example 2----------------------------------------------

const users2 = [
    { name: 'Francis', lastname: 'Norton', age: '25' },
    { name: 'Martha', lastname: 'Suchard', age: 19 },
    { name: 'Rob', lastname: 'Maker', age: 21 }

];

const names = users2.reduce(function (start, user) {
    start.push(user.name);
    return start;
}, []);


console.log(names);

