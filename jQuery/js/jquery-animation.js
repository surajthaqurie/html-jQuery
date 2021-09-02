$(document).ready(function () {

    // MAKE/PLAY ANIMATION------------------------------------------------------------

    /* https://jqueryui.com/ ---> Download*/
    /* https://code.jquery.com/ui/ ---> CND  minified in  html after (main jquery)*/

    $('.element').click(function () {

        // WITHOUT EASING---------------------------------------------------------
        // $(this).animate({
        //     left: "200px",
        //     top: "200px",
        //     width: "100px",
        //     height: "100px",
        //     fontSize: "30px",
        //     opacity: "0.2"
        // }, 2000);

        // DEFAULT: Linear EASING----------------------------------------------------------
        //  $(this).animate({
        //     left: "200px",
        //     top: "200px",
        //     width: "100px",
        //     height: "100px",
        //     fontSize: "30px",
        //     opacity: "0.2"
        // }, 2000, "linear");   // linear | swing | easing


        // DEFAULT: SWING EASING-------------------------------------------------------------
        // $(this).animate({
        //     left: "200px",
        //     top: "200px",
        //     width: "100px",
        //     height: "100px",
        //     fontSize: "30px",
        //     opacity: "0.2"
        // }, 2000, "swing");   // linear | swing | easing




        // OTHER EASING-----------  /* https://api.jqueryui.com/easings/ */---------------------
        // $(this).animate({
        //     left: "200px",
        //     top: "200px",
        //     width: "100px",
        //     height: "100px",
        //     fontSize: "30px",
        //     opacity: "0.2"
        // }, 2000, "easeOutBounce");  /* https://api.jqueryui.com/easings/ */


        // Function Based-----------------------------------------

        // $(this).animate({
        //     left: "200px",
        //     top: "200px",
        //     width: "100px",
        //     height: "100px",
        //     fontSize: "30px",
        //     opacity: "0.2"
        // }, 2000, "easeOutBounce", function () {
        //     alert('animation done !!!!');

        // });

    });



    // STOP ANIMATION--------------------------------------------------------------


    // HOVER : [hoverin/hoverout] : two function

    // $('.element').hover(function () {
    //     $(this).animate({ left: "100px" }, "slow")
    // }, function () {
    //     $(this).animate({ left: '0px' }, "slow")
    // });


    $('.element').hover(function () {
        $(this).stop().animate({ left: "100px" }, "slow")
    }, function () {
        $(this).stop().animate({ left: '0px' }, "slow")
    });



    // TIMING ANIMATION--------------------------------------------------------------

    // $('.square.one').animate({
    //     marginLeft: "+=400"
    // }, 1000, function () {
    //     $('.square.two').animate({
    //         marginLeft: "+=400"
    //     }, 1000, function () {
    //         $('.square.three').animate({
    //             marginLeft: "+=400"
    //         },1000);
    //     });
    // });


    // DELAY()-------------------------------------

    $('.square.one').animate({ marginLeft: "+=400" }, 1000);
    $('.square.two').delay(200).animate({ marginLeft: "+=400" }, 1000);
    $('.square.three').delay(500).animate({ marginLeft: "+=400" }, 1000);




});