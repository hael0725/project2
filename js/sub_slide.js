// $(function () {
//     let currentIndex = 0; // 현재 페이지 번호
//     const totalPages = 3;
  
//     $('#next2').click(function () {
//       if (currentIndex < totalPages - 1) {
//         currentIndex++;
//         $('.slider').css('margin-left', `-${100 * currentIndex}%`);
//       }
//     });
  
//     $('#prev2').click(function () {
//       if (currentIndex > 0) {
//         currentIndex--;
//         $('.slider').css('margin-left', `-${100 * currentIndex}%`);
//       }
//     });
//   });

  $(function () {
    let currentIndex = 0;
    const totalPages = 3;
  
    $('#next').click(function () {
      currentIndex = (currentIndex + 1) % totalPages; // 0 → 1 → 2 → 0
      $('.slider').css('margin-left', `-${100 * currentIndex}%`);
    });
  
    $('#prev').click(function () {
      currentIndex = (currentIndex - 1 + totalPages) % totalPages; // 0 → 2 → 1 → 0
      $('.slider').css('margin-left', `-${100 * currentIndex}%`);
    });
  });
  