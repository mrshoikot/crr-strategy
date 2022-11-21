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

        var browserZoomLevel = Math.round(window.devicePixelRatio * 100);

        if (browserZoomLevel > 100) {
            alert('You are zoomed in ' + browserZoomLevel + '%. For the best experience, please use 100% zoom level');
        }


        $('#preloader-switch').click(function(){
            $('.flyer-wrap, body').addClass('active');
            $('#preloader').addClass('hide');
        })


        $('.flip').click(function () {
            $('.flyer').toggleClass('flip');
        });


        $("#megatrends .mt-list-item-text .readmore").readmore({
            collapsedHeight: 33,
            speed: 1000
        });




    });

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////