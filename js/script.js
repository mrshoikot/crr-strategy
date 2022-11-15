/**
*
* ---------------------------------------------------------------------------
*
* Template :    Theme Full Name
* Author :      Mr. Shoikot
* Author URI :  
* Version :     1.0
*
* --------------------------------------------------------------------------- 
*
*/


/* Custom Js (Jquery) */


jQuery(function ($) {
    'use strict';


    $(window).on('load', function () {



    });


    $(document).ready(function () {

        $('#preloader-switch').click(function(){
            $('.flyer-wrap').addClass('active');
            $('#preloader').addClass('hide');
        })

        var movementStrength = 23;
        var height = movementStrength / $(document).height();
        var width = movementStrength / $(document).width();
        $("body").on("mousemove", function (e) {
            var pageX = e.pageX - $(document).width() / 2,
                pageY = e.pageY - $(document).height() / 2,
                newvalueX = width * pageX * -1,
                newvalueY = height * pageY * -1,
                elements = $(".lm-animated-bg");
            elements.addClass("transition");
            elements.css({
                "background-position":
                    "calc( 0% + " + newvalueX + "px ) calc( 0% + " + newvalueY + "px )",
            });
            setTimeout(function () {
                elements.removeClass("transition");
            }, 300);
        });

        var toggleState = false;

        $('.flip').click(function () {
            $('.flyer').toggleClass('flip');
            console.log('fire');
            $('.front, .back').toggleClass('folded');
        });




    });

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////