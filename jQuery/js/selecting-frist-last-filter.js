$(document).ready(function () {

    // $("div:first").css("background", "red");

    // $("div").first().css("background", "red");
    // $("div").last().css("background", "red");

    $("div").not(".diffrent").css("background", "red");

    // $("div").not(".diffrent,.something").css("background", "red");


    $("div").filter(".something").css("background", "skyBlue");









});