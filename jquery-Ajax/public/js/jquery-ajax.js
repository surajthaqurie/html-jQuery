
$(document).ready(function () {


    //LOAD(): copy the contents of the file and putting it wherever we want
    // $('.template').load('/template/template.html');


    // CALLBACK FUNCTION--------------------------------------------------------
    // $('.template').load('/template/template.html', function () {
    //     console.log('DONE and Done');

    // });

    // Append with id or class-------------------------------------------

    $('.template').load('/template/template.html #codeToAppemd', function () {
        console.log('DONE and Done');

    });

    // AJAX----------------------------------------------------------------------------------
    // GET REQUEST---------------https://jsonplaceholder.typicode.com/posts------------
    $.ajax('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        error: function () {
            console.log("Something went wrong");
        },
        success: function (data) {
            console.log('GET REQUEST----------------------')

            console.log(data);
        }
    });


    // POST REQUEST----------------https://jsonplaceholder.typicode.com/users------------------------
    var method = "POST";
    var url = 'https://jsonplaceholder.typicode.com/users';
    var jsonData = JSON.stringify({
        name: "francis",
        lastname: "Jonses"
    });


    $.ajax(url, {
        method: method,
        data: jsonData,
        dataType: 'json',
        contentType: 'application/json',
        error: function () {
            console.log("Something went wrong");
        },
        success: function (data) {
            console.log('POST REQUEST----------------------')

            console.log(data);
        }
    });












});
