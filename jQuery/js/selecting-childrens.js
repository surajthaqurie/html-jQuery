$(document).ready(function () {

    // Exmaple 1

    // $('li:first').css('background','red');
    // $('.list:first li:first').css('background','red');


    // $('.list li:first-child').css('background','red');
    $('.list li:first-of-type').css('background', 'red');

    $('.list li:last-child').css('background', 'yellow');
    // $('.list li:last-of-type').css('background','yellow');

    // It start from top to buttom
    $('.list li:nth-child(2)').css('background', 'pink');

    // It start from buttom to top
    $('.list li:nth-last-child(2)').css('background', 'skyBlue');



    // Exmaple 2

    // $('.parent div').css("background", "red");

    var element = 'div';
    $('.parent').find(element).css("background", "red");
    // $('.parent').find("div").css("background", "red");

    $('.parent').find(".title").css("background", "yellow");
    $('.parent').find('#other').css("background", "pink");


    $('.parent').children('#other').css("background", "skyBlue");


    // Exmaple 3

    // .parent() : only parent of that child(element);

    // $('.user').css("background", "red");
    $('.user').parent().css("background", "yellow");
    $('.hobbies').parent().css("background", "skyBlue");

    // .parents() : all parenrs above that child (elemnts)
    $('.hobbies').parents().css("background", "skyBlue");

    var parent = $('.hobbies').parent();
    console.log(" $('.hobbies').parent(): ", parent);

    parent.css("background", "yellow");

    var parents = $('.hobbies').parents();
    console.log(" $('.hobbies').parents(): ", parents);


    // Exmaple 4

    $('.second').prev().css("background", "green");
    $('.second').next().css("background", "pink");


    // Example 5
    // $('.ul_list li:eq(0)').css("background", "aqua");

    $('.ul_list').parents().eq(1).css("background", "green");





});