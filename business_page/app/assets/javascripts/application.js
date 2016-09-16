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
$(document).ready(function(){
    $('.slider').slider({full_width: true});
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
var options = [
  {selector: '#top', offset: 2500, callback: function(el) {
    Materialize.showStaggeredList($(el));
  } }
];
Materialize.scrollFire(options);
// end scroll
