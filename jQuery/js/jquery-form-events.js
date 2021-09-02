$(document).ready(function () {



    // INPUT ELEMENT

    // $('input').focusin(function (e) {
    //     console.log('Focus in');
    // });


    // $('input').focusout(function (e) {
    //     console.log('Focus out');
    // });


    $('input').blur(function (e) {

        // var value = e.target.value; // In vanillaJS

        var value = $(this).val();

        if (value.length < 5) {
            // $('input').addClass('error');

            $(this).addClass('error');

        } else {
            $(this).removeClass('error');

        }

    });

    // FORM ELEMENT

    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     console.log('Not reloading');
    // });


    // $('input').change(function () {
    //     console.log('change from input element');
    // });



    $('select').change(function () {

        console.log($(this).val());

        // console.log('change select');
    });


    $('input[type="checkbox"]').change(function (e) {

        // var element = $(this).val();
        // console.log(element);


        var checked = $(this).is(":checked");
        if (checked) {
            console.log($(this).val() + " is checked");
        }else{
            console.log($(this).val() + " is not checked");

        }

    });




});