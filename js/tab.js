// 채크버튼
$(function () {
  $('#Check button:nth-of-type(1)').click(function () {
    $('.color').fadeIn();
    $('.si').hide();
    $('.vin').hide();

    $('#b1').css('text-decoration', 'underline');
    $('#b2').css('text-decoration', 'none');
    $('#b3').css('text-decoration', 'none');
  });
  $('#Check button:nth-of-type(2)').click(function () {
    $('.si').fadeIn();
    $('.color').hide();
    $('.vin').hide();

    $('#b2').css('text-decoration', 'underline');
    $('#b1').css('text-decoration', 'none');
    $('#b3').css('text-decoration', 'none');
  });
  $('#Check button:nth-of-type(3)').click(function () {
    $('.vin').fadeIn();
    $('.color').hide();
    $('.si').hide();

    $('#b3').css('text-decoration', 'underline');
    $('#b1').css('text-decoration', 'none');
    $('#b2').css('text-decoration', 'none');
  });
});