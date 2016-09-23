//= require jquery
//= require jquery_ujs
//= require_tree .
//= require materialize-sprockets
//= require materialize/extras/nouislider
//= require jquery-smooth-scroll



//Parallax
$(document).ready(function(){
    $('.parallax').parallax();
});
// end parallax


//Slider
var height = window.innerHeight
var navOffset = 50

$(document).ready(function(){
    $('.slider').slider({
        full_width: false,
        indicators: false,
        height: height - 55
    });
});


// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');

// end slider


//scroll


// end scroll


//Smooth scroll
//Not a gem

$(document).ready(function() {

    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 700,
            easing: "swing"
        });
        return false;
    });
});
//End smooth scroll
