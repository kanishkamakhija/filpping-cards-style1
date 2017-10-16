$(function() {

  $('.flip-tab').hover(function() {

    // Flip li under on hover
    $(this).nextAll().eq(1).toggleClass('rot-5 t-shadow');
    $(this).nextAll().eq(2).toggleClass('rot-10 t-shadow');
    $(this).nextAll().eq(3).toggleClass('rot-15 t-shadow');
    $(this).nextAll().eq(4).toggleClass('rot-20 t-shadow');

    // Flip li over on hover
    $(this).prevAll().eq(1).toggleClass('rot-5 b-shadow');
    $(this).prevAll().eq(2).toggleClass('rot-10 b-shadow');
    $(this).prevAll().eq(3).toggleClass('rot-15 b-shadow');
    $(this).prevAll().eq(4).toggleClass('rot-20 b-shadow');

  });

});
