$(document).ready(function () {

    // Topic 1-----------------


    /* Vanilla JS
     var parent = document.querySelector('.parent');
     var newElement = document.createElement('div');
 
     newElement.className = 'newDiv';
     newElement.innerText = 'My new div';
 
     parent.appendChild(newElement);
    */

    // jQuery

    // append(): forward process adding this at the end inside the parent
    // $('.parent').append('<div class="newDiv">My new Div</div>');

    // appendTo(): backward proces adding this at the end inside the parent
    // $('<div class="newDiv">My new Div</div>').appendTo($('.parent'))

    // prepend(): Adding this at the begining inside the parent
    // $('.parent').prepend('<div class="newDiv">My new Div</div>');


    // before: before the parent
    $('.parent').before('<div> before div </div>');

    // after: after the parent
    $('.parent').after('<div> after div </div>');


    // Topic 2-------------------

    // $('.replaceMe').replaceWith('<div>Replaced</div>');

    $("<div>Not available </div>").replaceAll(".replaceMe,.replaceMeAgain");

    // Removing the content with replaceAll()
    // $("").replaceAll(".replaceMe,.replaceMeAgain");

    // Removing the content with remove()
    $('.remvoeMe').remove();

    $('ul li:eq(2)').remove();

    $('ul').empty();

    $('ul').html('');


    // Topic 3-------------------

    // console.log($('a').text()); // get the text
    console.log($('a').text('Some other click')); // changing the text

    // console.log($('a').attr('href')); // get the attribute
    console.log($('a').attr('style', 'color:blue')); // changing the attribute


    // console.log($('input').attr('value'));  // getting input element value bye attr()
    console.log($('input').val());              // getting input element value bye val()


    console.log($('input').prop("checked"));  // getting value of checkbox (radio)
    console.log($('input').prop("checked", true));   // changing value of checkbox (radio) (true/false)



    // Topic 4-----------------------------------

    var classes = $('.element').attr("class");
    console.log(classes);

    console.log($('.element').hasClass("active"));

    if ($('.element').hasClass("active")) {
        $('.element').append("<div> Move forward </div>");

    }
    else {

        $('.element').append("<div> Go back </div>");
    }


    // $('.element').addClass('bottom');
    // $('.element').removeClass('active');

    // $('.element').removeClass('active').addClass('notActive');

    $('.element').toggleClass('active notActive');



    // Topic 5-----------------------------------

    var element = $('.main');
    console.log(element.css("fontSize"));
    console.log(element.css("width"));

    // element.css('background', 'red');
    // element.css('color', 'blue');


    element.css({
        "background": "red",
        "color": 'white'

    });

    console.log(element.width());
    console.log(element.height());

    element.css("width", "+=50px");


    // Topic 6-----------------------------------

    // Getting value from data-attribute

    // In html we have to named the attribute as "data-name" (data-) for using this data()
    console.log($('.mainElement').data("name"));
    console.log($('.mainElement').data("hobbies").split(','));

    // getting all data attribute(such as: data-name)
    // console.log($('.mainElement').data());

    var data = $('.mainElement').data();
    console.log(data.hobbies);


    // Post value to data-attribute

    var cars = ["Ford", "Chevy", "Honda"];

    $('.mainElement').data("cars", cars);
   console.log( $('.mainElement').data());



});