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


jQuery(function($) { 'use strict';


    $(window).on('load', function() {



    });


    $(document).ready(function() {

        var toggleState = false;

        $('.flip').click(function() {
            $('.flyer').toggleClass('flip');
            $('.front, .back').toggleClass('folded');
        });
       
        var $folded = $('.folded').oriDomi({
            ripple: 1,
            shading: 'soft',
            shadingIntensity: 0,
            perspective: 1000
        });
        $folded.oriDomi('accordion', 50);
       
        $('.fold').click(function() {
            if (toggleState) {
                $(this).html("Fold");
                $folded.oriDomi('accordion', 0);
                $('.container').animate({
                    marginLeft: -200
                }, 900, function() {});
            } else {
                $(this).html("Unfold");
                $folded.oriDomi('accordion', 50);
                $('.container').animate({
                    marginLeft: 0
                }, 900, function() {});
            }
            toggleState = !toggleState;
        });
       
       
        $('span#hotspot-one').hover(function() {
            $('.tooltip.tip-one').fadeToggle();
        });
       
        $('span#hotspot-two').hover(function() {
            $('.tooltip.tip-two').fadeToggle();
        });
       
        
    });

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////