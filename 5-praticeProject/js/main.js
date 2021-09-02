/* http://lorempixel.com/150/150/people/ : For Dummy Images */


$(document).ready(function () {


    var itemLength = $('.cards_container .item').length;
    var current = 1;



    $('.current_slide').text(current);
    $('.total_slide').text(itemLength);


    $('.cardSlider .btn_prev').on("click", function () {

        if (current > 1) {
            current = current - 1;
            showSlide(current);

        } else {
            current = itemLength;
            showSlide(current);

        }
    });

    $('.cardSlider .btn_next').on("click", function () {
        if (current !== itemLength) {
            current = current + 1;
            showSlide(current);
        } else {
            current = 1;
            showSlide(current);
        }

    });




    function showSlide(slideNumber) {

        $('.cards_container .item').removeClass('active');
        $('div[data-id="' + slideNumber + '"]').addClass("active");

        $('.current_slide').text(slideNumber);

    }


});