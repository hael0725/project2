$(function () {
    let currentIndex = 0; // 현재 페이지 번호
    const totalPages = 3;
  
    $('#next2').click(function () {
      if (currentIndex < totalPages - 1) {
        currentIndex++;
        $('.slider').css('margin-left', `-${100 * currentIndex}%`);
      }
    });
  
    $('#prev2').click(function () {
      if (currentIndex > 0) {
        currentIndex--;
        $('.slider').css('margin-left', `-${100 * currentIndex}%`);
      }
    });
  });