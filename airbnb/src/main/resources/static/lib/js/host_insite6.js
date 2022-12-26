$(document).ready(function () {
    $('#section2').hide();
    $('#section3').hide();
    $('#section4').hide();
    $('.a1').click(function () {
        $('#section1').show();
        $('#section2, #section3, #section4').hide()
    });
    $('.a2').click(function () {
        $('#section2').show();
        $('#section1, #section3, #section4').hide()
    });
    $('.a3').click(function () {
        $('#section3').show();
        $('#section1, #section2, #section4').hide()
    });
    $('.a4').click(function () {
        $('#section4').show();
        $('#section1, #section2, #section3').hide()
    });
});