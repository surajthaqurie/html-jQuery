

/**********HOW TO USE JQUERY************/
console.log('*********HOW TO USE JQUERY************');

// $ its where jQuery start so when ever you use it you mean you are saying that you want to use jQuery
console.log('from jquery ($): ', $);

var element = document.querySelector('.hello');
console.log('This from standard JS document.querySelector(".hello"): ', element);

$('hello');
var hello = $('.hello');
console.log("This from jQuery  $('.hello'): ", hello);


// Without putting <script> tag on the buttom in HTML file i.e. after loading of all process of html or other <script>
$(document).ready(function () {
    var hello = $('.hello');
    console.log("This from jQuery $(document).ready(function(){}): ", hello);
});

// Short hand of $(document).ready(function () { ... }
$(function () {
    var hello = $('.hello');
    console.log("This from jQuery shorter of $(document).ready(function(){ })-> $(function(){ }): ", hello);
});


/**********SELECTING ELEMENTS/CLASSESS/ID************/

$(document).ready(function () {

    console.log('*********SELECTING ELEMENTS/CLASSESS/ID************');


    console.log("This from Vanilla (standard) JS-> document.querySelectorAll('p'): ", document.querySelectorAll('p'));
    console.log("This from jQuery -> $('p'): ", $('p'));

    console.log($('ul'));
    console.log($('form'));
    console.log($('hello'));


    // Selecting different elements
    // $('ul,p,form').css('fontSize', '30px');

    // Selecting id and class
    // $('#list').css('fontSize', '30px');
    // $('.text').css('fontSize', '30px');

    $('#list,.text').css("fontSize", "30px");


    // SELECTING ELEMENTS BY ATTRIBUTE: it doesnot works in email type (attribute)

    // $('input[type="text"]').css("background", "skyBlue");
    // Short hand 
    $('input:text').css("background", "skyBlue");
    $('input:radio').css("margin", "30px");
    $('input:checked').css("margin", "50px");


    // Selecting element by apprence (first | last | even | odd)
    $("li:first").css("background", "skyBlue");
    $("li:last").css("background", "red");
    $("li:even").css("background", "yellow");
    $("li:odd").css("background", "pink");

    $("tr:odd").css("background", "blue");


});
