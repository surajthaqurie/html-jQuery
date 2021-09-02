
/* 
https://developer.mozilla.org/en-US/docs/Web/API/Window
// For print whatever it's related on the you know on the actual browser.

console.log(window);

// Whole Width Of Screen Include Location
console.log(window.outerWidth);

console.log(window.innerWidth);
console.log(window.location);
window.open('https://www.google.com')
console.log(window.document);

*/

/**********SELECTING DOCUMENT************/
console.log('*********SELECTING DOCUMENT************');
/* https://developer.mozilla.org/en-US/docs/Web/API/Document */

console.log(document.title);
console.log(document.body);

console.log(document.body.children[0]);
console.log(document.body.children[0].textContent);
// document.body.children[0].textContent = 'This was changes accesing the text content and changing this dynamically'
document.body.children[0].style.color = 'blue';


/**********SELECTING DOM ELEMENTS************/
console.log('*********SELECTING DOM ELEMENTS************');

// console.log(document.getElementsByTagName('div')[1]);
// console.log(document.getElementsByClassName('different')[1]);
// console.log(document.getElementById('different'));


/* Query Selector: Best Method */
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));

console.log(document.querySelector('.different'));
console.log(document.querySelectorAll('.different'));

console.log(document.querySelector('#different'));


/**********CREATE AND INSERT ELEMENT************/
console.log('*********CREATE AND INSERT ELEMENT************');

var parent = document.querySelector('.parent');
var ul = parent.querySelector('ul');
var div = document.createElement('div');

div.textContent = 'My New div';
div.style.color = 'red';
div.style.fontSize = '20px';

console.log(div);


// parent.appendChild(div);
// parent.insertBefore(div, ul);

/* Insert Adjecent Element : Best One */
/**
 * beforebegin
 * afterbegin
 * beforeend
 * afterend
**/
parent.insertAdjacentElement('beforeend', div);
parent.insertAdjacentHTML('beforebegin', '<div>hello<div>');



/**********REMOVE ELEMENT************/

// parent.removeChild(ul);
ul.remove();



/**********EVENTS************/
// https://developer.mozilla.org/en-US/docs/Web/Events


console.log('*********EVENTS************');


var button = document.querySelector('.myButton');

function click1() {
    console.log('clicked me !!!');
}

function click2() {
    console.log('clicked me AGAIN !!!');
    button.removeEventListener('click', click1);

}

// one or more events are run at a same time
button.addEventListener('click', click1);
button.addEventListener('click', click2);

// Always remove eventlistenr after its job done (because dom always stores it in memory)

function showPopup() {
    alert('buy me');
}

// document.addEventListener('click', showPopup);

// Only one events run (second events replace first one)
button.onclick = function () {
    console.log('someone click me');
}

button.onclick = function () {
    console.log('Other Function !!');
}

button.onmouseover = function () {
    console.log('Mouse over !!');
}

button.ondblclick = function () {
    console.log('Double click !');
}



/**********PROPAGATION************/
console.log('*********PROPAGATION************');

var child = document.querySelector('.child');
var container = document.querySelector('.container');


function showChild(event) {
    // console.log(event);

    // prevents the bubbling effect
    event.stopPropagation();

    // target : pointer that points that child( component/elements)
    event.target.style.background = 'blue';

    console.log('i am green !!');
}


function showContainer(event) {
    console.log('i am red !!')
}

// Bubbling Effects: When we click on child than parent's events also occurs (because child is inside parents)

child.addEventListener('click', showChild);
container.addEventListener('click', showContainer);




/*
NOTE: Script should be after these elements,
if it is above than javascript <script> does not knows about them (like undefined)
*/