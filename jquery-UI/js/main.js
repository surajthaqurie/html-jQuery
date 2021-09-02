/* https://jqueryui.com/ */

$(document).ready(function () {

    // Draggable--------------------------------------------------------------------

    // $('.draggable').draggable();

    $('.draggable').draggable({
        // Options----------
        // axis: "x",            // "x"|"y": Where the components should move on Y and X axis
        cancel: ".not_this",     // not draggable 
        containment: ".parent",  // draggable only inside its parent
        grid: [50, 20],          // x|y in pixel how we can move it towards th x and y axis
        handle: '.handle',       // Only draggable with that .handle class

        opacity: '0.35',         // when on draggable state it change opacity

        // we can use these on script also
        // disabled: true,       // disabled
        // revert: true          // go back to original position


        // Events----------
        // drag: function (event, ui) {      // grab the events when the user is dragging the element
        //     console.log(ui.position);
        // },

        // we can use these on script also (METHODS)---------
        // $('.draggable').draggable( "destory");               // it kills instance of draggle
        // $('.draggable').draggable( "disable");               // it pause instance of draggle
        // $('.draggable').draggable( "enable");                // it re-enable instance of draggle

    });


    // Droppable--------------------------------------------------------------------
    $('.draggable--2').draggable();
    $('.droppable').droppable({
        accept: '.draggable--2',                    // What we want to accept whenever user drops something
        drop: function (event, ui) {                // Get events to know when the user is dropping something
            $(this).addClass("accepted")
            // console.log(ui.draggable.attr("class"));

        },
        out: function (event, ui) {                  // Get events to know when the user just removing that elements outside
            $(this).removeClass('accepted');
        }
    });


    // Resizable--------------------------------------------------------------------
    $('.resizable').resizable({
        // animate: true,
        // animateDuration: 100,
        aspectRatio: true,        // keeping the square
        containment: ".block",    // resizable only inside its parent
        // ghost: true,           // make shadow of how much it resize than resized
        grid: [50, 20],           // x|y in pixel how it can resizable it towards th x and y axis
        maxHeight: 250,           // how much it can resizes its maximum height
        minHeight: 50,            // how much it can resizes its minimum height
        maxWidth: 250,            // how much it can resizes its maximum Width
        minWidth: 50,             // how much it can resizes its minimum Width
    });


    // Selectable--------------------------------------------------------------------

    $('#selectable').selectable({
        filter: '.available',           // listen for all the elments inside that has the class available
        selected: function (event, ui) {
            // console.log(ui.selected.innerText)
        }
    });


    // Sortable--------------------------------------------------------------------
    $('#sortable').sortable();

    $('.trigger').click(function () {
        var list = $('#sortable').sortable("toArray");
        // console.log(list);
    });


    // Accordion--------------------------------------------------------------------
    $('#accordion').accordion({
        active: 2,              // which should be active (default :0)
        animate: 200,
        collapsible: true,      // collapse all node(block) (default:false one node be always open)
        // event:"mouseover"       // default: click
    });


    // Datepicker--------------------------------------------------------------------
    $('#datepicker').datepicker({
        minDate: 0,
        maxDate: 10,
        dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"]   // chnage the language
    });


    // Autocomplete--------------------------------------------------------------------
    // Autocompete needs something a database or maybe an array or some information to actually get the data to complete

    var list = [
        "ford",
        "chevy",
        "honda"
    ];

    $('#tags').autocomplete({
        source: list,
        minLength: 3
    });


    // Slider--------------------------------------------------------------------
    $('#slider').slider({
        min: 10,
        max: 1000,
        step: 100,
        range: true,
        change: function (event, ui) {
            // console.log(ui.value);
            console.log(ui.values[0]);          // range value [min]
            console.log(ui.values[1]);          // range value [max]

        }
    });

    // addClass and removeClass--------------------------------------------------------------------
    $('.addRemove-class').click(function () {
        $('.button').addClass("otherClass", 1000, function () {  // class name, transition time, callback function
            $(this).removeClass('otherClass', 1000);
        });
    });

    // Effect and Toggle --------------------------------------------------------------------
    $('.effect-div').click(function () {

        /* effect */
        //    $('.effect-btn').effect("shake",1000,function(){         // Type of effect, transition time, callback function
        //    console.log("done");
        //    });  

        /* toggle */
        $('.effect-btn').toggle("drop", 1000, function () {         // Type of effect, transition time, callback function
            console.log("done");
        });
    });


    // Effect and Toggle --------------------------------------------------------------------
    $('.toggle-switch-class').click(function () {

        /* toggleClass */
        // $('.toggle-switch-btn').toggleClass("toggle-switch-otherClass", 1000);


        /* switchClass */
        $('.toggle-switch-btn').switchClass("toggle-switch-btn", "toggle-switch-otherClass", 1000);    // first is the class that we want to change | second switched class

    });



});

