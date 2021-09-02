// Exercise 1----------------------------------------
const paintings = [
    { painting: 'The Mona lisa', width: 200, height: 200 },
    { painting: 'The scream', width: 400, height: 600 },
    { painting: 'The last supper', width: 600, height: 700 }
];

const messages = paintings.map(function (painting) {
    return `${painting.painting} is <strong>${painting.width}</strong> x <strong>${painting.height}</strong>`;
});
// console.log(messages) 
let template = '';
messages.forEach(function (item) {
    template += `<p>${item}</p>`;
});
document.querySelector('.example1').insertAdjacentHTML("afterend", template);

// Exercise 2----------------------------------------

const cars = [
    { name: 'Ford', price: 200 },
    { name: 'Nissan', price: 400 },
    { name: 'Chevy', price: 600 }
];


const price = cars.map(function (car) {

    const convert = car.price * 16.8;

    return `The ${car.name} is ${convert} Ars`
});

template = '';
price.forEach(function (item) {
    template += `<p><strong>"${item}"</strong></p>`;
});
document.querySelector('.example2').insertAdjacentHTML("afterend", template);