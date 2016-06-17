//The .fadeIn() method shows the selected HTML element by fading it in.
//When you click in the page's body, the next image fades in over 600 milliseconds.

$('body').click(function() {
  $('.slide').fadeIn(600).addClass('active-slide');
});

var main = function() {
  $(".btn").click(function(event) {
    $(".container").hide();
      $(".container").fadeIn(700);
  });
};

$(document).ready(main);
