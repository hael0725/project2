$(function () {
    $('#btn1').click(function () {
        $('#review_1').fadeIn();
        $('#review_2').hide();
        $('#review_3').hide();

        $('#btn1').css('background-color', 'rgb(137, 14, 14)');
        $('#btn3').css('background-color', 'white');
        $('#btn2').css('background-color', 'white');

    });

    $('#btn2').click(function () {
        $('#review_2').fadeIn();
        $('#review_1').hide();
        $('#review_3').hide();

        $('#btn2').css('background-color', 'rgb(137, 14, 14)');
        $('#btn1').css('background-color', 'white');
        $('#btn3').css('background-color', 'white');
    });

    $('#btn3').click(function () {
        $('#review_3').fadeIn();
        $('#review_1').hide();
        $('#review_2').hide();

        $('#btn3').css('background-color', 'rgb(137, 14, 14)');
        $('#btn1').css('background-color', 'white');
        $('#btn2').css('background-color', 'white');
    });
});