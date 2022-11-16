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
            $('.flyer-wrap, body').addClass('active');
            $('#preloader').addClass('hide');
        })


        var toggleState = false;

        $('.flip').click(function () {
            $('.flyer').toggleClass('flip');
            console.log('fire');
            $('.front, .back').toggleClass('folded');
        });




    });

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////