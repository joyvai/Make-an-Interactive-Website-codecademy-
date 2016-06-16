var main = function () {
  $(".btn").click(function () {
    $(".read").hide();
  });
};

  $('li').click(function() {
  $(this).addClass('read');
})


$(document).ready(main);
