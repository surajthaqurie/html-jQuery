
var myDatabase = [
    { name: 'James Burton', email: 'James@gmail.com', age: 25 },
    { name: 'Mark Robinson', email: 'mark@gmail.com', age: 30 },
    { name: 'Lara Barbosa', email: 'lara@gmail.com', age: 28 },
];


(function Avatars(db) {

    var init = function () {
        generateList();
        enterUser();
    }

    // FOR USER CARD
    var generateList = function () {

        var parent = document.querySelector('#parent_avatars');

        var template = '';

        for (var i = 0; i < db.length; i++) {

            // template += '<div>';
            // template += 'hello there'
            // template += '</div>';

            // console.log(template);

            template += '<div class="col-sm-4">';
            template += '<div class="card">';
            template += '<div class="card-delete" data-card="' + i + '">X</div>';
            template += '<div class="card-block">';
            template += '<h3 class="card-title">' + db[i].name + '</h3>';
            template += '<p class="card-text">';
            template += '<strong>Email</strong>:<span>' + db[i].email + '</span>';
            template += '</p>';
            template += '<p class="card-text">';
            template += '<strong>Age</strong>:<span>' + db[i].age + '</span>';
            template += '</p>';
            template += '</div>';
            template += '</div>';
            template += '</div>';

        }

        // Clearing the html
        parent.innerHTML = '';
        parent.insertAdjacentHTML("afterbegin", template);
        deletCard();

        // console.log('Generate List');

    }

    // FOR FORM
    var enterUser = function () {

        function grabUser() {

            var name = document.querySelector('#user_name').value;
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;

            var elements = [name, email, age];
            // console.log(elements);

            if (validateUser(elements)) {
                document.querySelector('#myForm').reset();

                db.push({ name: name, email: email, age: age });
                // console.log(db);
                generateList();
            } else {

                document.querySelector('#error').style.display = 'block';
                setTimeout(function () {
                    document.querySelector('#error').style.display = 'none';

                }, 2000);
            }


        }

        // Form after clicks on Submit
        document.querySelector('#myForm').addEventListener("submit", function (event) {
            // prevent the form form reloading after clicking the button
            event.preventDefault();
            grabUser();
        });
        // console.log('form');

    }

    var validateUser = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] == "") {
                return false;
            }

        }
        return true;
    }

    // Delete User Card
    var deletCard = function () {
        var buttons = document.querySelectorAll('.card-delete');
        // console.log(buttons);

        function deleteThis(element) {
            var obj = parseInt(element.getAttribute('data-card'));

            db.splice(obj, 1);
            generateList();
        }

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (e) {
                deleteThis(this);
            });
        }
    }

    init();
})(myDatabase);