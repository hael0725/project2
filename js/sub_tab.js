// // 포토서비스
// $(function () {
//   $('.menu button:nth-of-type(1)').click(function () {
//     $('.ba').fadeIn().css("display","flex");
//     $('.sig').hide();
//     $('.vin').hide();

//     $('.m1').addClass('active');
//     $('.m2').removeClass('active');
//     $('.m3').css('text-decoration', 'none');
//   });
//   $('.menu button:nth-of-type(2)').click(function () {
//     $('.sig').fadeIn().css("display","flex");
//     $('.ba').hide();
//     $('.vin').hide();

//     $('.m2').css('text-decoration', 'underline');
//     $('.m1').css('text-decoration', 'none');
//     $('.m3').css('text-decoration', 'none');
//   });
//   $('.menu button:nth-of-type(3)').click(function () {
//     $('.vin').fadeIn().css("display","flex");
//     $('.ba').hide();
//     $('.sig').hide();

//     $('.m3').css('text-decoration', 'underline');
//     $('.m1').css('text-decoration', 'none');
//     $('.m2').css('text-decoration', 'none');
//   });
// });

$(document).ready(function(){
  $('.menu button').click(function(){
    let index = $(this).index();
    console.log(index)
    $('#photo >div').eq(index).fadeIn().css("display","flex").siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
  });
});
