$(document).ready(function () {

    // HIDE()-------------------------------------------------


    // $('.hide').click(function () {
    //     $('.element').hide();
    // });



    // $('.hide').click(function () {
    //     $('.element').hide(2000);   // 2sec
    // });


    // 
    // $('.hide').click(function () {
    //     $('.element').hide(2000, function () {
    //         alert('done');
    //     });
    // });


    // SHOW()--------------------------------------------------

    // $('.show').click(function () {
    //     $('.element').show();
    // });


    // $('.show').click(function () {
    //     $('.element').show(2000);
    // });


    // $('.show').click(function () {
    //     $('.element').show(2000, function () {
    // alert('done');
    //     });
    // });


    // TOGGLE()----------------------------------------------------

    // $('.hide, .show').click(function () {
    //     $('.element').toggle("fast", function () {  // fast | slow
    //         alert('done');
    //         // console.log('done');
    //     });
    // });


    $('.hide, .show').click(function () {
        $('.element').toggle(2000, function () {
            alert('done');
            // console.log('done');
        });
    });


    // FADEIN()-----------------------------------------------------

    // $('.fadeIn').click(function () {
    //     $('.element').fadeIn();
    // });


    // $('.fadeIn').click(function () {
    //     $('.element').fadeIn(2000);   // 2sec
    // });


    // $('.fadeIn').click(function () {
    //     $('.element').fadeIn(2000, function () {
    //         alert('done');
    //     });   // 2sec
    // });




    // FADEOUT()---------------------------------------------------------

    // $('.fadeOut').click(function () {
    //     $('.element').fadeOut();
    // });

    // $('.fadeOut').click(function () {
    //     $('.element').fadeOut(2000);   // 2sec
    // });


    // $('.fadeOut').click(function () {
    //     $('.element').fadeOut(2000, function () {
    //         alert('done');
    //     });   // 2sec
    // });


    // FADETOGGLE()--------------------------------------------------------------

    // $('.fadeOut, .fadeIn').click(function () {
    //     $('.element').fadeToggle(2000, function () {
    //         alert('done');
    //         // console.log('done');
    //     });
    // });

    // $('.fadeOut, .fadeIn').click(function () {
    //     $('.element').fadeToggle("slow", function () {  // slow | fast
    //         alert('done');
    //         // console.log('done');
    //     });
    // });


    // FADETO() -------------------------------------

    // fateTo(time,opacity,function)


    $('.fadeIn').click(function () {
        $('.element').fadeTo(2000, 1, function () {

            alert('done');
        });
    });


    $('.fadeOut').click(function () {
        $('.element').fadeTo("slow", 0.33, function () {

            alert('done');
        });
    });

    // SLIDEUP()--------------------------------------------------------

    // $('.slideUp').click(function () {
    //     $('.element').slideUp();
    // });

    // $('.slideUp').click(function () {
    //     $('.element').slideUp(2000);
    // });


    // $('.slideUp').click(function () {
    //     $('.element').slideUp(2000, function () {
    //         alert('done');
    //     });
    // });

    // SLIDEDOWN()--------------------------------------------------------

    // $('.sideDown').click(function () {
    //     $('.element').slideDown();
    // });

    // $('.sideDown').click(function () {
    //     $('.element').slideDown(2000);
    // });


    // $('.sideDown').click(function () {
    //     $('.element').slideDown(2000, function () {
    //         alert('done');
    //     });
    // });


    
    // SLIDETOGGLE-------------------------------------------------------------------

    // $('.slideUp, .sideDown').click(function () {
    //     $('.element').slideToggle("fast", function () {  // fast | slow
    //         alert('done');
    //         // console.log('done');
    //     });
    // });



    $('.slideUp, .sideDown').click(function () {
        $('.element').slideToggle(2000, function () {
            alert('done');
            // console.log('done');
        });
    });



});