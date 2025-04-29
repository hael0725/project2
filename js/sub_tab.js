// 포토서비스
$(document).ready(function(){
  $('.menu button').click(function(){
    let index = $(this).index();
    console.log(index)
    $('#photo >div').eq(index).fadeIn().css("display","flex").siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// 오더서비스
$(document).ready(function(){
  $('.menu2 button').click(function(){
    let index = $(this).index();
    console.log(index)
    $('#OTHER >div').eq(index).fadeIn().css("display","flex").siblings().hide();
    $(this).addClass("active2").siblings().removeClass("active2");
  });
});
