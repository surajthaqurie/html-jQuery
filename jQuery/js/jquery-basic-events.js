$(document).ready(function () {

    /* https://api.jquery.com/category/events/ */


    /* Vanilla JS
    var element = document.querySelector('.element');
    element.addEventListener("click", function (e) {
        console.log('im clicked');
    });
    */

    // $('.element').click(function (e) {
    //     console.log('im clicked');
    // });


    /* this methods is more dynamic than above one */
    // $('.element').on('click mouseover mouseleave', function (e) {
    //     console.log('im clicked');
    // });


    // $(document).on('click mouseover mouseleave', ".element", function (e) {
    //     console.log('im clicked');

    // });


    // MOUSE EVENT---------------------------------------------

    // $('.element').mouseenter(function () {
    //     console.log('Mouse enter');

    // });

    // $('.element').mouseleave(function () {
    //     console.log('Mouse leave');

    // });


    // $('.element').hover(function () {
    //     console.log('Mouse enter');

    // }, function () {
    //     console.log('Mouse leave');

    // });

    // $('.element').mousedown(function () {
    //     console.log('Mouse down');

    // });

    // $('.element').mouseup(function () {
    //     console.log('Mouse up');

    // });

    // $('.element').mousemove(function () {
    //     console.log('Mouse move');

    // });



    $('.element').click(function (event) {
        var pageCoords = "(" + event.pageX + "," + event.pageY + ")";
        console.log("coords:" + pageCoords);
    });



    // KEYBOARD EVENT---------------------------------------------

    // $(document).keydown(function(){
    //     console.log('press key');
    // });

    // Finding the id if key that was cliked (event.which)
    // $(document).keydown(function(event){
    //     console.log(event.which);
    // });

    $(document).keydown(function (event) {

        var DOWN = 40;
        var RIGHT = 39;
        var TOP = 38;
        var LEFT = 37;


        if (event.which === DOWN) {
            $('.element').css({ top: "+=10px" });
        }

        if (event.which == RIGHT) {
            $('.element').css({ left: "+=10px" });
        }
        if (event.which === TOP) {
            $('.element').css({ top: "-=10px" });
        }

        if (event.which == LEFT) {
            $('.element').css({ left: "-=10px" });
        }

    });

    // $(document).keyup(function (event) {
    //     console.log(event.which);

    // });


    // OTHER EVENT---------------------------------------------

    $(document).scroll(function (event) {
        console.log('scrolling');

    });

    $(window).resize(function () {
        console.log('resizing.....');
    })


    // $('.element').append('<div class="block">My append div</div>');

    // $('.block').click(function () {
    // console.log("append div clicked!!!")
    // });



    // to first listen for document than ii event
    $(document).on("click", ".block", function () {
        console.log("append div clicked!!!")

    })


    // User Do
    $('.element').append('<div class="block">My append div</div>');




});